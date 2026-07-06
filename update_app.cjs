const fs = require('fs');

let appRaw = fs.readFileSync('src/App.tsx', 'utf8');

appRaw = appRaw.replace(
  "import { TermsOfUse } from './components/TermsOfUse';",
  "import { TermsOfUse } from './components/TermsOfUse';\nimport { Partners } from './components/Partners';"
);

appRaw = appRaw.replace(
  "if (path === '/terms' || path === '/terms-of-use') return 'TermsOfUse';",
  "if (path === '/terms' || path === '/terms-of-use') return 'TermsOfUse';\n    if (path === '/partners') return 'Partners';"
);

appRaw = appRaw.replace(
  "else if (activeItem === 'TermsOfUse') path = '/terms-of-use';",
  "else if (activeItem === 'TermsOfUse') path = '/terms-of-use';\n    else if (activeItem === 'Partners') path = '/partners';"
);

appRaw = appRaw.replace(
  ") : activeItem === 'TermsOfUse' ? (\n               <TermsOfUse />",
  ") : activeItem === 'TermsOfUse' ? (\n               <TermsOfUse />\n             ) : activeItem === 'Partners' ? (\n               <Partners />"
);

fs.writeFileSync('src/App.tsx', appRaw);
console.log('Updated src/App.tsx');
