const fs = require('fs');
let data = fs.readFileSync('src/App.tsx', 'utf8');

if (!data.includes("import { ErrorBoundary } from './components/ErrorBoundary';")) {
  data = data.replace(
    "import { ToolDetails } from './components/ToolDetails';",
    "import { ToolDetails } from './components/ToolDetails';\nimport { ErrorBoundary } from './components/ErrorBoundary';"
  );
}

// Sidebar
data = data.replace(
  /<Sidebar[\s\S]*?\/>/,
  `<ErrorBoundary fallback={<div className="w-64 border-r border-gray-200 bg-white p-4 text-red-500">Sidebar Error</div>}>\n      $& \n      </ErrorBoundary>`
);

// Header
data = data.replace(
  /<Header[\s\S]*?\/>/,
  `<ErrorBoundary fallback={<div className="h-16 border-b border-gray-200 bg-white flex items-center px-4 text-red-500">Header Error</div>}>\n          $&\n        </ErrorBoundary>`
);

// Footer
data = data.replace(
  /<Footer \/>/,
  `<ErrorBoundary>\n             <Footer />\n           </ErrorBoundary>`
);

// Main switch block
data = data.replace(
  /<div className="flex flex-1">([\s\S]*?)<\/div>\s*<ErrorBoundary>\n             <Footer \/>/,
  `<div className="flex flex-1">\n             <ErrorBoundary>\n$1\n             </ErrorBoundary>\n           </div>\n           <ErrorBoundary>\n             <Footer />`
);

fs.writeFileSync('src/App.tsx', data);
