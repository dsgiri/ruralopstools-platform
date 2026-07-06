'use client';

import React, { useEffect, useState } from 'react';
import { PinOff, ExternalLink } from 'lucide-react';
import { MASTER_REGISTRY } from '../config/registry';

export function PinnedToolsDashboard() {
  const [pinnedItems, setPinnedItems] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadPins = () => {
      try {
        const stored = localStorage.getItem('pinned_items');
        if (stored) {
          setPinnedItems(JSON.parse(stored));
        }
      } catch (e) {
        console.error('Failed to parse pinned items', e);
      }
      setIsLoaded(true);
    };

    // Load initial pins
    loadPins();

    // Listen for storage events (e.g., if unpinned from another tab on the master site)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'pinned_items') {
        loadPins();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleUnpin = (itemPath: string) => {
    // Optimistic UI update
    const newPins = pinnedItems.filter((p) => p !== itemPath);
    setPinnedItems(newPins);
    
    // Update master site native storage
    try {
      localStorage.setItem('pinned_items', JSON.stringify(newPins));
    } catch (e) {
      console.error('Failed to save pinned items', e);
    }
  };

  // Gracefully hide if loading or no items are pinned
  if (!isLoaded || pinnedItems.length === 0) {
    return null;
  }

  return (
    <section className="w-full max-w-7xl mx-auto mb-12" aria-label="Pinned Tools Dashboard">
      <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8">
        <header className="border-b-4 border-black pb-4 mb-6">
          <h2 className="text-2xl font-black uppercase tracking-widest text-black flex items-center gap-3">
            <span className="text-3xl" aria-hidden="true">📌</span> YOUR ACTIVE TOOLBELT
          </h2>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pinnedItems.map((itemPath) => {
            const [subdomainId, calculatorId] = itemPath.split(':');
            const subdomain = MASTER_REGISTRY[subdomainId];
            const calculator = subdomain?.calculators?.[calculatorId];

            // Filter out any stale or invalid pins gracefully
            if (!subdomain || !calculator) return null;

            const targetUrl = `${subdomain.baseUrl}${calculator.path}`;

            return (
              <article 
                key={itemPath} 
                className="group relative border-2 border-black p-5 flex flex-col bg-gray-50 hover:bg-white transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-2 py-1 mb-2">
                      {subdomain.name}
                    </span>
                    <h3 className="text-xl font-black uppercase tracking-tight text-black line-clamp-1">
                      {calculator.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleUnpin(itemPath)}
                    className="text-gray-400 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    title="Unpin tool"
                    aria-label={`Unpin ${calculator.name}`}
                  >
                    <PinOff className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>
                
                <p className="text-sm font-medium text-gray-600 mb-6 flex-grow line-clamp-2">
                  {calculator.description}
                </p>

                <a 
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full border-2 border-black bg-white text-black font-bold uppercase text-sm tracking-wider px-4 py-2 hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  OPEN TOOL
                  <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
