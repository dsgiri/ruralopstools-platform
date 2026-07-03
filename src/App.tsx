/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { RightSidebar } from './components/RightSidebar';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
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
