import React from 'react';
import { Star } from 'lucide-react';

export function Favorites() {
  return (
    <div className="flex-1 p-8 md:p-12">
      <div className="max-w-4xl mx-auto border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col items-center justify-center text-center py-12">
          <Star className="w-16 h-16 text-yellow-400 mb-6 stroke-[3]" />
          <h2 className="text-3xl font-black uppercase tracking-tighter text-black mb-4">Your Favorites</h2>
          <p className="text-gray-600 font-medium">
            You haven't added any tools to your favorites yet.
          </p>
        </div>
      </div>
    </div>
  );
}
