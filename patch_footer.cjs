const fs = require('fs');
let code = fs.readFileSync('src/components/Footer.tsx', 'utf8');

code = code.replace(
  '<a href="https://github.com/dsgiri/ruralopstools-platform#readme" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">About</a>',
  '<a href="/about" className="hover:text-gray-900">About</a>\n             <a href="/terms" className="hover:text-gray-900">Terms</a>\n             <a href="/privacy" className="hover:text-gray-900">Privacy</a>'
);

fs.writeFileSync('src/components/Footer.tsx', code);
