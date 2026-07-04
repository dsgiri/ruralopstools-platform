const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  "import { Contact } from './components/Contact';",
  "import { Contact } from './components/Contact';\nimport { About } from './components/About';\nimport { Privacy } from './components/Privacy';\nimport { Terms } from './components/Terms';"
);

code = code.replace(
  "    return window.location.pathname === '/contact' ? 'Contact' : 'Dashboard';",
  "    const path = window.location.pathname;\n    if (path === '/contact') return 'Contact';\n    if (path === '/about') return 'About';\n    if (path === '/privacy') return 'Privacy';\n    if (path === '/terms') return 'Terms';\n    return 'Dashboard';"
);

code = code.replace(
  "  useEffect(() => {\n    if (activeItem === 'Contact') {\n      window.history.replaceState({}, '', '/contact');\n    } else if (activeItem === 'Dashboard') {\n      window.history.replaceState({}, '', '/');\n    }\n  }, [activeItem]);",
  "  useEffect(() => {\n    let path = '/';\n    if (activeItem === 'Contact') path = '/contact';\n    else if (activeItem === 'About') path = '/about';\n    else if (activeItem === 'Privacy') path = '/privacy';\n    else if (activeItem === 'Terms') path = '/terms';\n    window.history.replaceState({}, '', path);\n  }, [activeItem]);"
);

code = code.replace(
  "            ) : activeItem === 'Contact' ? (\n               <Contact />\n             ) : (",
  "            ) : activeItem === 'Contact' ? (\n               <Contact />\n             ) : activeItem === 'About' ? (\n               <About />\n             ) : activeItem === 'Privacy' ? (\n               <Privacy />\n             ) : activeItem === 'Terms' ? (\n               <Terms />\n             ) : ("
);

fs.writeFileSync('src/App.tsx', code);
