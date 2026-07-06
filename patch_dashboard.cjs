const fs = require('fs');
let data = fs.readFileSync('src/components/pinned-tools-dashboard.tsx', 'utf8');

data = data.replace(
  /const TOOLS_DATA = \[\s*\{[\s\S]*?\];/m,
  "import { tools as TOOLS_DATA } from '../data';"
);

fs.writeFileSync('src/components/pinned-tools-dashboard.tsx', data);
console.log('Patched pinned-tools-dashboard.tsx');
