/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { RightSidebar } from './components/RightSidebar';
import { Footer } from './components/Footer';

export default function App() {
  const [showSuccessToast, setShowSuccessToast] = useState(false);

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

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      {showSuccessToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-800 text-white px-6 py-3 border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] font-bold animate-in fade-in slide-in-from-top-4 duration-300">
          ✓ Core Support Received. Thank you for keeping the infrastructure alive.
        </div>
      )}
      <Sidebar />
      <div className="flex-1 flex flex-col h-full relative">
        <Header />
        <div className="flex-1 overflow-y-auto flex flex-col relative">
           <div className="flex flex-1">
             <MainContent />
             <RightSidebar />
           </div>
           <Footer />
        </div>
      </div>
    </div>
  );
}
