"use client";

import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

import { tools as TOOLS_DATA } from '../data';

export default function PinnedToolsDashboard() {
  const [pinnedIds, setPinnedIds] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const getPinnedCookie = () => {
      const match = document.cookie.match(/(?:^|; )pinned_tools=([^;]*)/);
      return match ? match[1] : '';
    };

    const cookieVal = getPinnedCookie();
    if (cookieVal) {
      setPinnedIds(cookieVal.split(',').map(id => id.trim()).filter(Boolean));
    }
  }, []);

  const unpinTool = (idToRemove: string) => {
    const newPinned = pinnedIds.filter(id => id !== idToRemove);
    setPinnedIds(newPinned);
    
    // Update cookie (expires in 365 days, path=/)
    const date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = `pinned_tools=${newPinned.join(',')};expires=${date.toUTCString()};path=/`;
  };

  // Avoid hydration mismatch by not rendering anything initially
  if (!isMounted) return null;
  if (pinnedIds.length === 0) return null;

  const pinnedTools = pinnedIds
    .map(id => TOOLS_DATA.find(tool => tool.id === id))
    .filter((tool): tool is typeof TOOLS_DATA[0] => tool !== undefined);

  if (pinnedTools.length === 0) return null;

  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black mb-8 border-b-4 border-black pb-4">
          📌 Your Active Toolbelt
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pinnedTools.map((tool) => (
            <div 
              key={tool.id} 
              className="group flex flex-col border-2 border-black bg-white hover:bg-black hover:text-white transition-colors duration-200"
            >
              <div className="p-5 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl uppercase tracking-tight">{tool.name}</h3>
                  <button
                    onClick={() => unpinTool(tool.id)}
                    className="text-black group-hover:text-white hover:text-red-500 transition-colors focus:outline-none"
                    aria-label={`Unpin ${tool.name}`}
                    title="Unpin tool"
                  >
                    <X className="w-6 h-6 stroke-[3]" />
                  </button>
                </div>
                <p className="font-medium text-sm leading-snug text-gray-700 group-hover:text-gray-300">
                  {tool.description}
                </p>
              </div>
              
              <a 
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border-t-2 border-black group-hover:border-white font-bold uppercase text-sm tracking-wider hover:bg-gray-900 group-hover:hover:bg-gray-800 transition-colors"
              >
                <span>Launch Tool</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
