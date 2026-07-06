/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { Favorites } from './components/Favorites';
import { MyPins } from './components/MyPins';
import { ToolDetails } from './components/ToolDetails';
import { ErrorBoundary } from './components/ErrorBoundary';

export default function App() {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(() => {
    const path = window.location.pathname;
    if (path === '/contact') return 'Contact';
    if (path === '/about') return 'About';
    if (path === '/privacy' || path === '/privacy-policy') return 'PrivacyPolicy';
    if (path === '/terms' || path === '/terms-of-use') return 'TermsOfUse';
    if (path === '/favorites') return 'Favorites';
    if (path === '/my-pins') return 'My Pins';
    if (path.startsWith('/tool/')) return 'ToolDetails';
    return 'Dashboard';
  });

  const [activeToolId, setActiveToolId] = useState(() => {
    const path = window.location.pathname;
    if (path.startsWith('/tool/')) return path.split('/')[2];
    return null;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('session') === 'success') {
      setShowSuccessToast(true);
      
      // Clean up the URL to prevent showing toast on refresh
      window.history.replaceState({}, document.title, window.location.pathname);
      
      const timer = setTimeout(() => {
        setShowSuccessToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    let path = '/';
    if (activeItem === 'Contact') path = '/contact';
    else if (activeItem === 'About') path = '/about';
    else if (activeItem === 'PrivacyPolicy') path = '/privacy-policy';
    else if (activeItem === 'TermsOfUse') path = '/terms-of-use';
    else if (activeItem === 'Favorites') path = '/favorites';
    else if (activeItem === 'My Pins') path = '/my-pins';
    else if (activeItem === 'ToolDetails' && activeToolId) path = `/tool/${activeToolId}`;
    window.history.replaceState({}, '', path);
  }, [activeItem, activeToolId]);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {showSuccessToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-800 text-white px-6 py-3 border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] font-bold animate-in fade-in slide-in-from-top-4 duration-300">
          ✓ Core Support Received. Thank you for keeping the infrastructure alive.
        </div>
      )}

      <ErrorBoundary fallback={<div className="w-64 border-r border-gray-200 bg-white p-4 text-red-500">Sidebar Error</div>}>
      <Sidebar 
        activeItem={activeItem} 
        setActiveItem={(item) => {
          setActiveItem(item);
          setIsMobileMenuOpen(false);
        }}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      /> 
      </ErrorBoundary>

      <div className="flex-1 flex flex-col h-full relative min-w-0">
        <ErrorBoundary fallback={<div className="h-16 border-b border-gray-200 bg-white flex items-center px-4 text-red-500">Header Error</div>}>
          <Header onMenuClick={() => setIsMobileMenuOpen(true)} onNavigate={setActiveItem} />
        </ErrorBoundary>
        
        <div className="flex-1 overflow-y-auto flex flex-col relative">
           <div className="flex flex-1">
             <ErrorBoundary>

             {activeItem === 'Dashboard' ? (
               <>
                 <MainContent onNavigateToTool={(id) => {
                   setActiveToolId(id);
                   setActiveItem('ToolDetails');
                 }} />
                 
               </>
             ) : activeItem === 'ToolDetails' && activeToolId ? (
               <ToolDetails toolId={activeToolId} onBack={() => setActiveItem('Dashboard')} />
             ) : activeItem === 'Contact' ? (
               <Contact />
             ) : activeItem === 'About' ? (
               <About />
             ) : activeItem === 'PrivacyPolicy' ? (
               <PrivacyPolicy />
             ) : activeItem === 'TermsOfUse' ? (
               <TermsOfUse />
             ) : activeItem === 'Favorites' ? (
               <Favorites onNavigateToTool={(id) => {
                   setActiveToolId(id);
                   setActiveItem('ToolDetails');
                 }} />
             ) : activeItem === 'My Pins' ? (
               <MyPins />
             ) : (
               <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                 <div className="w-16 h-16 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center mb-6">
                   <span className="text-2xl">🚧</span>
                 </div>
                 <h2 className="text-2xl font-bold text-gray-900 mb-3">{activeItem}</h2>
                 <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
                   This module is currently under development. Check back soon for updates.
                 </p>
               </div>
             )}
           
             </ErrorBoundary>
           </div>
           <ErrorBoundary>
             <Footer />
           </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}
