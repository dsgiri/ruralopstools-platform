const fs = require('fs');
let data = fs.readFileSync('src/components/Sidebar.tsx', 'utf8');

data = data.replace(/className="flex-1 overflow-y-auto py-4 px-3 space-y-1"/, 'className="flex-1 min-h-0 overflow-y-auto py-4 px-3 space-y-1"');

fs.writeFileSync('src/components/Sidebar.tsx', data);
