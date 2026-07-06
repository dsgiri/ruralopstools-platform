import React from 'react';
import { Leaf, Github, Twitter, Youtube, MessageSquare, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-4">
              <Leaf className="w-6 h-6 text-green-700" />
              <div>
                <h1 className="font-bold text-lg leading-tight text-gray-900 tracking-tight">RuralOpsTools</h1>
                <p className="text-[10px] text-gray-500 font-medium tracking-wide">Open Source. Built for Rural.</p>
              </div>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Every tool a working rural operation actually reaches for. 100% free and open source.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="https://github.com/dsgiri/ruralopstools-platform/tree/main/docs" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 transition-colors">Docs</a></li>
              <li><a href="https://github.com/dsgiri/ruralopstools-platform" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 transition-colors">GitHub Repository</a></li>
              <li><a href="https://github.com/dsgiri/ruralopstools-platform/wiki" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 transition-colors">Blog</a></li>
              <li><a href="https://github.com/dsgiri/ruralopstools-platform/projects" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 transition-colors">Roadmap</a></li>
              <li><a href="https://github.com/dsgiri/ruralopstools-platform/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 transition-colors">Contribute</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="/about" className="hover:text-green-700 transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-green-700 transition-colors">Contact</a></li>
              <li><a href="/terms-of-use" className="hover:text-green-700 transition-colors">Terms of Use</a></li>
              <li><a href="/privacy-policy" className="hover:text-green-700 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <div className="flex items-center gap-4">
              <a href="https://github.com/dsgiri/ruralopstools-platform" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.youtube.com/@RuralOpsTools" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://github.com/dsgiri/ruralopstools-platform/discussions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span className="sr-only">Discussions</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} RuralOpsTools. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1.5">
            Made with <Heart className="w-4 h-4 text-green-600 fill-green-600" /> for rural communities
          </p>
        </div>
      </div>
    </footer>
  );
}
