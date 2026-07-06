import React, { useState, useEffect } from 'react';
import { Star, Pin } from 'lucide-react';
import { useMasterPins } from '../hooks/useMasterPins';

interface SubdomainHeaderProps {
  toolId: string;
  toolName: string;
}

export function SubdomainHeader({ toolId, toolName }: SubdomainHeaderProps) {
  const { isPinned, togglePin, isReady } = useMasterPins(toolId);
  const [isFavorited, setIsFavorited] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Local storage logic for subdomain-level favorites
  useEffect(() => {
    const localFavs = localStorage.getItem('local_favorites');
    if (localFavs) {
      try {
        const parsed = JSON.parse(localFavs);
        setIsFavorited(parsed.includes(toolId));
      } catch (e) {
        // Fallback for JSON parse errors
      }
    }
  }, [toolId]);

  const toggleFavorite = () => {
    const localFavs = localStorage.getItem('local_favorites');
    let parsed: string[] = [];
    if (localFavs) {
      try {
        parsed = JSON.parse(localFavs);
      } catch (e) {}
    }
    
    if (isFavorited) {
      parsed = parsed.filter(id => id !== toolId);
    } else {
      if (!parsed.includes(toolId)) parsed.push(toolId);
    }
    
    localStorage.setItem('local_favorites', JSON.stringify(parsed));
    setIsFavorited(!isFavorited);
  };

  const handlePinClick = () => {
    togglePin();
    const action = isPinned ? 'Unpinned from' : 'Pinned to';
    setToastMessage(`${action} Dashboard`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <header className="w-full border-b-4 border-black bg-white px-6 py-4 flex items-center justify-between shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] z-40 relative">
        {/* Left Side: Branding and Subdomain Path */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-black text-xl leading-none">
            R
          </div>
          <div className="font-black uppercase tracking-tighter text-black text-xl hidden sm:block">
            {toolName} <span className="text-gray-400 font-medium tracking-widest text-sm ml-2">[{toolId}.ruralopstools.com]</span>
          </div>
          <div className="font-black uppercase tracking-tighter text-black text-xl sm:hidden">
            {toolName}
          </div>
        </div>

        {/* Right Side: Interactive Utility Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleFavorite}
            className={`flex items-center justify-center w-12 h-12 border-2 border-black transition-colors ${
              isFavorited 
                ? 'bg-yellow-400 text-black hover:bg-yellow-500' 
                : 'bg-white text-black hover:bg-gray-100'
            }`}
            title="Save to Favorites (Local Storage)"
            aria-label="Toggle Local Favorite"
          >
            <Star className={`w-5 h-5 stroke-[3] ${isFavorited ? 'fill-black' : ''}`} />
          </button>
          
          <button
            onClick={handlePinClick}
            disabled={!isReady}
            className={`flex items-center gap-2 px-4 py-3 border-2 border-black font-bold uppercase text-sm tracking-wider transition-colors ${
              isPinned 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'bg-white text-black hover:bg-gray-100'
            } ${!isReady ? 'opacity-50 cursor-not-allowed' : ''}`}
            title="Pin to Master Dashboard (Cross-Origin)"
          >
            <Pin className={`w-4 h-4 stroke-[3] ${isPinned ? 'fill-white' : ''}`} />
            <span className="hidden sm:inline">{isPinned ? 'Pinned' : 'Pin to Dashboard'}</span>
          </button>
        </div>
      </header>

      {/* Brutalist Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-50 bg-black text-white px-6 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <p className="font-bold uppercase tracking-widest text-sm flex items-center gap-3">
            <Pin className={`w-5 h-5 ${isPinned ? 'fill-white' : ''}`} />
            {toastMessage}
          </p>
        </div>
      )}
    </>
  );
}
