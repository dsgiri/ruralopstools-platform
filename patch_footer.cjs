const fs = require('fs');
let data = fs.readFileSync('src/components/Footer.tsx', 'utf8');

const newConnect = `          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect & Community</h3>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/dsgiri/ruralopstools-platform/issues/new" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-green-700 transition-colors flex items-center gap-2">
                <Bug className="w-4 h-4" /> Report an Issue
              </a>
              <a href="https://github.com/dsgiri/ruralopstools-platform/issues/new" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-green-700 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" /> Request a Feature
              </a>
              <a href="https://github.com/dsgiri/ruralopstools-platform/discussions" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-green-700 transition-colors flex items-center gap-2">
                <MessageSquare className="w-4 h-4" /> Join Discussions
              </a>
            </div>
            
            <div className="flex items-center gap-4 mt-6">
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
            </div>
          </div>`;

data = data.replace(/\{\/\* Social \*\/\}[\s\S]*?<\/div>(\s*<\/div>\s*<div className="pt-8 border-t)/, newConnect + "$1");

fs.writeFileSync('src/components/Footer.tsx', data);
