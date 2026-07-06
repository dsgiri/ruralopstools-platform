const fs = require('fs');
let data = fs.readFileSync('src/components/ToolDetails.tsx', 'utf8');

const importReplacement = "import React, { useEffect, useState } from 'react';\nimport { tools } from '../data';\nimport { ArrowLeft, ExternalLink, Bookmark, Star, Check } from 'lucide-react';";

data = data.replace(/import React.*?lucide-react';/s, importReplacement);

const componentTop = `export function ToolDetails({ toolId, onBack }: ToolDetailsProps) {
  const tool = tools.find((t) => t.id === toolId);
  const [showBookmarkToast, setShowBookmarkToast] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const localFavs = localStorage.getItem('local_favorites');
    if (localFavs) {
      try {
        const parsed = JSON.parse(localFavs);
        setIsFavorited(parsed.includes(toolId));
      } catch (e) {}
    }
  }, [toolId]);

  const toggleFavorite = () => {
    const localFavs = localStorage.getItem('local_favorites');
    let parsed = [];
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
  };`;

data = data.replace(/export function ToolDetails.*?const handleBookmarkClick/s, componentTop + '\n\n  const handleBookmarkClick');

const starButtonReplacement = `<button 
                onClick={toggleFavorite}
                className={\`flex items-center justify-center w-12 h-12 border-2 border-black transition-colors \${isFavorited ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-white text-black hover:bg-gray-100'}\`}
                title="Add to Favorites"
              >
                <Star className={\`w-5 h-5 stroke-[3] \${isFavorited ? 'fill-black' : ''}\`} />
              </button>`;

data = data.replace(/<button\s*className="flex items-center justify-center w-12 h-12 border-2 border-black bg-white text-black hover:bg-yellow-400 transition-colors"\s*title="Add to Favorites"\s*>\s*<Star className="w-5 h-5 stroke-\[3\]" \/>\s*<\/button>/, starButtonReplacement);

fs.writeFileSync('src/components/ToolDetails.tsx', data);
