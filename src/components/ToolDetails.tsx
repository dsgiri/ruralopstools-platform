import React, { useEffect, useState } from 'react';
import { tools } from '../data';
import { ArrowLeft, ExternalLink, Bookmark, Star, Check } from 'lucide-react';

interface ToolDetailsProps {
  toolId: string;
  onBack: () => void;
}

export function ToolDetails({ toolId, onBack }: ToolDetailsProps) {
  const tool = tools.find((t) => t.id === toolId);
  const [isPinned, setIsPinned] = useState(false);
  const [showBookmarkToast, setShowBookmarkToast] = useState(false);

  useEffect(() => {
    const getPinnedCookie = () => {
      const match = document.cookie.match(/(?:^|; )pinned_tools=([^;]*)/);
      return match ? match[1] : '';
    };
    const cookieVal = getPinnedCookie();
    if (cookieVal) {
      const pinnedIds = cookieVal.split(',').map((id) => id.trim()).filter(Boolean);
      setIsPinned(pinnedIds.includes(toolId));
    }
  }, [toolId]);

  const togglePin = () => {
    const getPinnedCookie = () => {
      const match = document.cookie.match(/(?:^|; )pinned_tools=([^;]*)/);
      return match ? match[1] : '';
    };
    const cookieVal = getPinnedCookie();
    let pinnedIds = cookieVal ? cookieVal.split(',').map((id) => id.trim()).filter(Boolean) : [];

    if (isPinned) {
      pinnedIds = pinnedIds.filter((id) => id !== toolId);
    } else {
      if (!pinnedIds.includes(toolId)) {
        pinnedIds.push(toolId);
      }
      setShowBookmarkToast(true);
      setTimeout(() => setShowBookmarkToast(false), 5000);
    }

    const date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = `pinned_tools=${pinnedIds.join(',')};expires=${date.toUTCString()};path=/`;
    setIsPinned(!isPinned);
  };

  if (!tool) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Tool Not Found</h2>
        <button onClick={onBack} className="text-green-700 hover:text-green-800 font-medium">
          ← Back to Dashboard
        </button>
      </div>
    );
  }

  const cleanUrl = tool.url.replace(/^https?:\/\//, '');

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 p-6 md:p-12 relative">
      {showBookmarkToast && (
        <div className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50 bg-white text-black px-6 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-in fade-in slide-in-from-bottom-8 duration-300 flex flex-col items-center text-center">
          <p className="font-black uppercase tracking-wider mb-2 text-lg">Steps to add "{tool.name}" to Browser</p>
          <p className="font-bold text-sm text-gray-700 mb-2">
            Press <span className="bg-gray-100 border-2 border-black px-1.5 py-0.5 rounded mx-1">Ctrl+D</span> (Windows) or <span className="bg-gray-100 border-2 border-black px-1.5 py-0.5 rounded mx-1">Cmd+D</span> (Mac) to bookmark this tool in your browser!
          </p>
          <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-blue-600 hover:text-blue-800 underline underline-offset-2">
            {cleanUrl}
          </a>
        </div>
      )}
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-black font-semibold uppercase tracking-wider text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>

        <div className="border-4 border-black bg-white p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div className="flex items-start gap-4">
              <div className={`flex items-center justify-center w-16 h-16 ${tool.bg} rounded-xl border-2 border-black shrink-0`}>
                <tool.icon className={`w-8 h-8 ${tool.color}`} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4">
                  {tool.name}
                </h1>
                <p className="text-xl text-gray-700 font-medium leading-relaxed max-w-2xl">
                  {tool.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button 
                onClick={togglePin}
                className={`flex items-center gap-2 px-4 py-3 border-2 border-black font-bold uppercase text-sm tracking-wider transition-colors ${
                  isPinned 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {isPinned ? <Check className="w-4 h-4 stroke-[3]" /> : <Bookmark className="w-4 h-4 stroke-[3]" />}
                {isPinned ? 'Pinned' : 'Bookmark'}
              </button>
              <button 
                className="flex items-center justify-center w-12 h-12 border-2 border-black bg-white text-black hover:bg-yellow-400 transition-colors"
                title="Add to Favorites"
              >
                <Star className="w-5 h-5 stroke-[3]" />
              </button>
            </div>
          </div>

          <div className="border-t-4 border-black pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm font-bold uppercase tracking-wider text-gray-500">
              Available Now • Free & Open Source
            </div>
            <a 
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-green-600 text-white font-black uppercase tracking-widest hover:bg-green-700 hover:translate-y-[-2px] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black w-full md:w-auto justify-center"
            >
              Launch Tool <ExternalLink className="w-5 h-5 stroke-[3]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
