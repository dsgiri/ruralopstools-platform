const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  "import { Privacy } from './components/Privacy';\nimport { Terms } from './components/Terms';",
  "import { PrivacyPolicy } from './components/PrivacyPolicy';\nimport { TermsOfUse } from './components/TermsOfUse';"
);

code = code.replace(
  "    if (path === '/privacy' || path === '/privacy-policy') return 'Privacy';\n    if (path === '/terms' || path === '/terms-of-use') return 'Terms';",
  "    if (path === '/privacy' || path === '/privacy-policy') return 'PrivacyPolicy';\n    if (path === '/terms' || path === '/terms-of-use') return 'TermsOfUse';"
);

code = code.replace(
  "    else if (activeItem === 'Privacy') path = '/privacy-policy';\n    else if (activeItem === 'Terms') path = '/terms-of-use';",
  "    else if (activeItem === 'PrivacyPolicy') path = '/privacy-policy';\n    else if (activeItem === 'TermsOfUse') path = '/terms-of-use';"
);

code = code.replace(
  "             ) : activeItem === 'Privacy' ? (\n               <Privacy />\n             ) : activeItem === 'Terms' ? (\n               <Terms />",
  "             ) : activeItem === 'PrivacyPolicy' ? (\n               <PrivacyPolicy />\n             ) : activeItem === 'TermsOfUse' ? (\n               <TermsOfUse />"
);

fs.writeFileSync('src/App.tsx', code);
