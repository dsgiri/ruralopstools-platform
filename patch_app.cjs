const fs = require('fs');
let data = fs.readFileSync('src/App.tsx', 'utf8');

data = data.replace(/<Favorites \/>/, `<Favorites onNavigateToTool={(id) => {\n                   setActiveToolId(id);\n                   setActiveItem('ToolDetails');\n                 }} />`);

fs.writeFileSync('src/App.tsx', data);
