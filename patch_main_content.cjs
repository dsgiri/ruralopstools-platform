const fs = require('fs');
let data = fs.readFileSync('src/components/MainContent.tsx', 'utf8');

// Update function signature
data = data.replace(
  /export function MainContent\(\) \{/,
  'export function MainContent({ onNavigateToTool }: { onNavigateToTool?: (id: string) => void }) {'
);

// Replace the tools map a tag with a div that calls onNavigateToTool
data = data.replace(
  /<a href=\{tool\.url\} key=\{tool\.name\} target="_blank" rel="noopener noreferrer" className="border border-gray-200 rounded-xl p-4 sm:p-5 hover:border-green-300 hover:shadow-md transition-all cursor-pointer group bg-white text-center flex flex-col items-center">([\s\S]*?)<\/a>/g,
  `<div key={tool.name} onClick={() => onNavigateToTool && onNavigateToTool(tool.id)} className="border border-gray-200 rounded-xl p-4 sm:p-5 hover:border-green-300 hover:shadow-md transition-all cursor-pointer group bg-white text-center flex flex-col items-center">$1</div>`
);

fs.writeFileSync('src/components/MainContent.tsx', data);
console.log('Patched MainContent');
