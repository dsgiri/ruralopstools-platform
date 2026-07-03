import React, { useState } from 'react';
import { navigation } from '../data';
import { Leaf, Check, Github, User, Coffee } from 'lucide-react';
import { SupportModal } from './SupportModal';

export function Sidebar() {
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  return (
    <div className="w-64 border-r border-gray-200 bg-white h-screen sticky top-0 flex flex-col hidden lg:flex">
      <div className="p-6 flex items-center gap-2 border-b border-gray-100">
        <Leaf className="w-8 h-8 text-green-700" />
        <div>
          <h1 className="font-bold text-xl leading-tight text-gray-900 tracking-tight">RuralOpsHQ</h1>
          <p className="text-[10px] text-gray-500 font-medium tracking-wide">Open Source. Built for Rural.</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navigation.map((item) => (
          <a
            key={item.name}
            href="#"
            className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
              item.current
                ? 'bg-green-700 text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon className={`w-5 h-5 ${item.current ? 'text-green-100' : 'text-gray-400'}`} />
              {item.name}
            </div>
            {item.badge && (
              <span className="text-[10px] font-semibold bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
                {item.badge}
              </span>
            )}
          </a>
        ))}
      </div>

      <div className="p-4 border-t border-gray-100 bg-gray-50/50">
        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
          <h3 className="text-sm font-semibold text-green-900 mb-3">100% Free & Open Source</h3>
          <ul className="space-y-2 mb-4">
            {['No paywalls', 'No vendor lock-in', 'You own your data', 'Built by the community'].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-xs text-green-800">
                <Check className="w-3.5 h-3.5 text-green-600" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm font-medium py-2 rounded-md transition-colors shadow-sm mb-3">
            <Github className="w-4 h-4" />
            Star on GitHub
          </button>
          
          <button 
            onClick={() => setIsSupportOpen(true)}
            className="w-full flex items-center justify-center gap-2 bg-white border border-green-200 hover:bg-green-100 hover:border-green-300 text-green-800 text-sm font-medium py-2 rounded-md transition-colors shadow-sm"
          >
            <Coffee className="w-4 h-4" />
            Support This Project
          </button>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 hover:bg-gray-50 p-2 -mx-2 rounded-md cursor-pointer transition-colors">
          <div className="w-9 h-9 rounded-full bg-green-800 flex items-center justify-center text-white font-semibold text-sm">
            DS
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">DS Giri</p>
            <p className="text-xs text-gray-500 truncate">Contributor</p>
          </div>
          <a href="#" className="text-xs text-green-700 font-medium hover:text-green-800">View Profile →</a>
        </div>
      </div>

      <SupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </div>
  );
}
