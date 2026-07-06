import React, { useEffect, useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { tools } from '../data';

interface FavoritesProps {
  onNavigateToTool?: (id: string) => void;
}

export function Favorites({ onNavigateToTool }: FavoritesProps) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    const localFavs = localStorage.getItem('local_favorites');
    if (localFavs) {
      try {
        setFavoriteIds(JSON.parse(localFavs));
      } catch (e) {}
    }
  }, []);

  const favoriteTools = tools.filter(tool => favoriteIds.includes(tool.id));

  return (
    <div className="flex-1 p-8 md:p-12 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center gap-4">
          <Star className="w-10 h-10 text-yellow-400 fill-yellow-400 stroke-[2] border-black" />
          <h2 className="text-4xl font-black uppercase tracking-tighter text-black">Your Favorites</h2>
        </div>

        {favoriteTools.length === 0 ? (
          <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col items-center justify-center text-center py-12">
              <Star className="w-16 h-16 text-yellow-400 mb-6 stroke-[3]" />
              <h3 className="text-2xl font-black uppercase tracking-tighter text-black mb-4">No Favorites Yet</h3>
              <p className="text-gray-600 font-medium">
                Click the star icon on any tool to add it to your favorites.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favoriteTools.map((tool) => (
              <a 
                key={tool.id}
                href={`/tool/${tool.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigateToTool) onNavigateToTool(tool.id);
                  else window.location.href = `/tool/${tool.id}`;
                }}
                className="group flex items-start gap-4 p-6 border-4 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
              >
                <div className={`flex items-center justify-center w-14 h-14 ${tool.bg} rounded-xl border-2 border-black shrink-0`}>
                  <tool.icon className={`w-7 h-7 ${tool.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-black uppercase tracking-tight text-lg mb-1 group-hover:text-blue-600 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {tool.description}
                  </p>
                </div>
                <div className="shrink-0 pt-2">
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
