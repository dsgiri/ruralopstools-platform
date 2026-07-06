import React, { useEffect, useRef, useState } from 'react';
import { Search, Star, Pin, Sun, Moon, Globe, Menu, Check } from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
  onNavigate?: (item: string) => void;
}

const LANGUAGES = [
  { code: 'EN', name: 'English' },
  { code: 'ES', name: 'Español' },
  { code: 'FR', name: 'Français' },
];

export function Header({ onMenuClick, onNavigate }: HeaderProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isDark, setIsDark] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="h-16 border-b border-gray-200 bg-white sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6">
      <div className="flex-1 flex items-center max-w-2xl gap-2 sm:gap-4">
        <button onClick={onMenuClick} className="lg:hidden p-2 -ml-2 text-gray-500 hover:text-gray-900 rounded-md">
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            ref={searchInputRef}
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 bg-gray-50"
            placeholder="Search tools, docs..."
          />
          <div className="absolute inset-y-0 right-0 pr-3 hidden sm:flex items-center pointer-events-none">
            <span className="text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 bg-white font-mono">⌘ K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-6 text-sm text-gray-600 font-medium ml-4 sm:ml-6">
        <button onClick={() => onNavigate?.('Favorites')} className="hidden md:flex items-center gap-2 hover:text-gray-900 transition-colors">
          <Star className="w-4 h-4" />
          Favorites
        </button>
        <button onClick={() => onNavigate?.('MyPins')} className="hidden md:flex items-center gap-2 hover:text-gray-900 transition-colors">
          <Pin className="w-4 h-4" />
          My Pins
        </button>
        
        <div className="hidden md:block h-4 w-px bg-gray-200"></div>

        <button onClick={toggleTheme} title="Toggle theme" className="hover:text-gray-900 transition-colors text-gray-500">
          {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>

        <div className="relative">
          <button 
            onClick={() => setShowLangMenu(!showLangMenu)} 
            className="hidden sm:flex items-center gap-1 hover:text-gray-900 transition-colors"
          >
            {currentLang}
            <svg className={`w-3 h-3 text-gray-400 transition-transform ${showLangMenu ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showLangMenu && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setShowLangMenu(false)}></div>
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-20">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setShowLangMenu(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className={currentLang === lang.code ? 'text-green-700 font-medium' : 'text-gray-700'}>
                      {lang.name}
                    </span>
                    {currentLang === lang.code && <Check className="w-4 h-4 text-green-600" />}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
