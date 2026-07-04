const fs = require('fs');
let code = fs.readFileSync('src/components/Footer.tsx', 'utf8');

code = code.replace(
  '<a href="/terms" className="hover:text-gray-900">Terms</a>\n             <a href="/privacy" className="hover:text-gray-900">Privacy</a>',
  '<a href="/terms-of-use" className="hover:text-gray-900">Terms</a>\n             <a href="/privacy-policy" className="hover:text-gray-900">Privacy</a>\n             <a href="/disclaimer" className="hover:text-gray-900">Disclaimer</a>'
);

fs.writeFileSync('src/components/Footer.tsx', code);
