const fs = require('fs');
let data = fs.readFileSync('src/components/MainContent.tsx', 'utf8');

data = data.replace(/New Project/, 'New Issue');

fs.writeFileSync('src/components/MainContent.tsx', data);
