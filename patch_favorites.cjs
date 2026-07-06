const fs = require('fs');
let data = fs.readFileSync('src/components/Favorites.tsx', 'utf8');

data = data.replace(/export function Favorites\(\) \{/, 'interface FavoritesProps { onNavigateToTool?: (id: string) => void; }\n\nexport function Favorites({ onNavigateToTool }: FavoritesProps) {');

data = data.replace(/onClick=\{\(e\) => \{[\s\S]*?\}\}/, `onClick={(e) => {
                  e.preventDefault();
                  if (onNavigateToTool) onNavigateToTool(tool.id);
                  else window.location.href = \`/tool/\${tool.id}\`;
                }}`);

fs.writeFileSync('src/components/Favorites.tsx', data);
