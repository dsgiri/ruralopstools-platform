"use client";

import React, { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

const TOOLS_DATA = [
  { id: 'soil', name: 'Soil Health', description: 'Monitor pH, moisture, and nutrient levels.', url: 'https://soil.ruralopstools.com' },
  { id: 'feed', name: 'Feed Calculator', description: 'Optimize ration balancing and cost.', url: 'https://feed.ruralopstools.com' },
  { id: 'weather', name: 'Agri-Weather', description: 'Micro-climate forecasts and alerts.', url: 'https://weather.ruralopstools.com' },
  { id: 'beef', name: 'Beef Tracking', description: 'Weight gain and health logs for cattle.', url: 'https://beef.ruralopstools.com' },
  { id: 'dairy', name: 'Dairy Yields', description: 'Milk production and quality metrics.', url: 'https://dairy.ruralopstools.com' },
  { id: 'tractor', name: 'Tractor Logs', description: 'Maintenance scheduling and parts.', url: 'https://tractor.ruralopstools.com' },
  { id: 'water', name: 'Irrigation', description: 'Water usage and schedule planning.', url: 'https://water.ruralopstools.com' },
  { id: 'crop', name: 'Crop Rotation', description: 'Multi-year field rotation planning.', url: 'https://crop.ruralopstools.com' },
  { id: 'seeds', name: 'Seed Inventory', description: 'Track seed stock and germination rates.', url: 'https://seeds.ruralopstools.com' },
  { id: 'pest', name: 'Pest Control', description: 'Log sightings and application records.', url: 'https://pest.ruralopstools.com' },
  { id: 'market', name: 'Market Prices', description: 'Live commodities and local bids.', url: 'https://market.ruralopstools.com' },
  { id: 'labor', name: 'Labor Tracking', description: 'Crew hours and task assignments.', url: 'https://labor.ruralopstools.com' },
  { id: 'fence', name: 'Fence Calc', description: 'Material estimation for new fence lines.', url: 'https://fence.ruralopstools.com' },
  { id: 'fuel', name: 'Fuel Log', description: 'Diesel and gas consumption tracking.', url: 'https://fuel.ruralopstools.com' },
  { id: 'yield', name: 'Yield Estimator', description: 'Pre-harvest yield calculations.', url: 'https://yield.ruralopstools.com' },
  { id: 'barn', name: 'Barn Climate', description: 'Temperature and ventilation monitoring.', url: 'https://barn.ruralopstools.com' },
  { id: 'vet', name: 'Vet Records', description: 'Vaccinations and treatment history.', url: 'https://vet.ruralopstools.com' },
  { id: 'pasture', name: 'Pasture Moves', description: 'Rotational grazing schedules.', url: 'https://pasture.ruralopstools.com' },
  { id: 'poultry', name: 'Poultry Flock', description: 'Egg counts and mortality tracking.', url: 'https://poultry.ruralopstools.com' },
  { id: 'sheep', name: 'Sheep Shearing', description: 'Fleece weights and lambing records.', url: 'https://sheep.ruralopstools.com' },
  { id: 'swine', name: 'Swine Weight', description: 'Farrowing and market weight logs.', url: 'https://swine.ruralopstools.com' },
  { id: 'orchard', name: 'Orchard Pruning', description: 'Tree health and harvest tracking.', url: 'https://orchard.ruralopstools.com' },
  { id: 'timber', name: 'Timber Harvest', description: 'Board footage and cruising logs.', url: 'https://timber.ruralopstools.com' },
  { id: 'greenhouse', name: 'Greenhouse', description: 'Humidity and propagation tracking.', url: 'https://greenhouse.ruralopstools.com' },
  { id: 'compost', name: 'Compost Ratio', description: 'Carbon/nitrogen balancing.', url: 'https://compost.ruralopstools.com' },
  { id: 'honey', name: 'Apiary Logs', description: 'Hive inspections and honey yields.', url: 'https://honey.ruralopstools.com' },
  { id: 'mapping', name: 'Field Mapping', description: 'Acreage and boundary management.', url: 'https://mapping.ruralopstools.com' }
];

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
