import React from 'react';
import { Leaf, Github, Twitter, Youtube, MessageSquare, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8 px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-6">
        
        {/* Brand & Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
           <div className="flex items-center gap-2">
             <Leaf className="w-6 h-6 text-green-700" />
             <div>
               <h1 className="font-bold text-lg leading-tight text-gray-900 tracking-tight">RuralOpsTools</h1>
               <p className="text-[10px] text-gray-500 font-medium tracking-wide">Open Source. Built for Rural.</p>
             </div>
           </div>
           
           <div className="hidden md:flex items-center gap-6 text-sm text-gray-600 font-medium">
             <a href="https://github.com/dsgiri/ruralopstools-platform#readme" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">About</a>
             <a href="https://github.com/dsgiri/ruralopstools-platform/wiki" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Blog</a>
             <a href="https://github.com/dsgiri/ruralopstools-platform/projects" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Roadmap</a>
             <a href="https://github.com/dsgiri/ruralopstools-platform/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">Contribute</a>
           </div>
        </div>

        {/* Center Text */}
        <div className="text-left">
           <p className="text-xs text-gray-500 font-medium">RuralOpsTools is open source software.</p>
           <p className="text-xs text-gray-500 mt-0.5">Licensed under the MIT License.</p>
           
           <div className="flex items-center justify-start gap-4 mt-3">
             <a href="https://github.com/dsgiri/ruralopstools-platform" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600"><Github className="w-4 h-4" /></a>
             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600"><Twitter className="w-4 h-4" /></a>
             <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600"><Youtube className="w-4 h-4" /></a>
             <a href="https://github.com/dsgiri/ruralopstools-platform/discussions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600"><MessageSquare className="w-4 h-4" /></a>
           </div>
        </div>

        {/* Right Info */}
        <div className="text-left md:text-right">
           <p className="text-xs text-gray-500 flex flex-wrap items-center justify-start md:justify-end gap-1">
             Made with <Heart className="w-3.5 h-3.5 text-green-600 fill-green-600" /> for rural communities
           </p>
           <p className="text-xs text-gray-500 mt-0.5">around the world.</p>
           <p className="text-xs text-gray-400 mt-2">© 2026 RuralOpsTools</p>
        </div>

      </div>
    </footer>
  );
}
