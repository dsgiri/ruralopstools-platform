import React from 'react';
import { Search, BookOpen, Github, Sun, Globe } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 border-b border-gray-200 bg-white sticky top-0 z-10 flex items-center justify-between px-6">
      <div className="flex-1 flex items-center max-w-2xl">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 bg-gray-50"
            placeholder="Search tools, docs..."
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 bg-white font-mono">⌘ K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm text-gray-600 font-medium ml-6">
        <a href="#" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
          <BookOpen className="w-4 h-4" />
          Docs
        </a>
        <a href="https://github.com/dsgiri/ruralopstools-platform" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <div className="h-4 w-px bg-gray-200"></div>
        <button className="hover:text-gray-900 transition-colors">
          <Sun className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-1 hover:text-gray-900 transition-colors">
          EN
          <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
