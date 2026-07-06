const fs = require('fs');
let data = fs.readFileSync('src/components/Favorites.tsx', 'utf8');

data = data.replace(/href=\{\\\`\/tool\/\\\$\\{tool\.id\\}\\\`\}/, 'href={`/tool/${tool.id}`}');

fs.writeFileSync('src/components/Favorites.tsx', data);
