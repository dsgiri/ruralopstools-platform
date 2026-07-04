const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  "import { Terms } from './components/Terms';",
  "import { Terms } from './components/Terms';\nimport { Disclaimer } from './components/Disclaimer';"
);

code = code.replace(
  "    if (path === '/privacy') return 'Privacy';\n    if (path === '/terms') return 'Terms';",
  "    if (path === '/privacy' || path === '/privacy-policy') return 'Privacy';\n    if (path === '/terms' || path === '/terms-of-use') return 'Terms';\n    if (path === '/disclaimer') return 'Disclaimer';"
);

code = code.replace(
  "    else if (activeItem === 'Privacy') path = '/privacy';\n    else if (activeItem === 'Terms') path = '/terms';",
  "    else if (activeItem === 'Privacy') path = '/privacy-policy';\n    else if (activeItem === 'Terms') path = '/terms-of-use';\n    else if (activeItem === 'Disclaimer') path = '/disclaimer';"
);

code = code.replace(
  "             ) : activeItem === 'Terms' ? (\n               <Terms />\n             ) : (",
  "             ) : activeItem === 'Terms' ? (\n               <Terms />\n             ) : activeItem === 'Disclaimer' ? (\n               <Disclaimer />\n             ) : ("
);

fs.writeFileSync('src/App.tsx', code);
