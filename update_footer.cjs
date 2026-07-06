const fs = require('fs');

let footerRaw = fs.readFileSync('src/components/Footer.tsx', 'utf8');

footerRaw = footerRaw.replace(
  '<li><a href="/contact" className="hover:text-green-700 transition-colors">Contact</a></li>',
  '<li><a href="/contact" className="hover:text-green-700 transition-colors">Contact</a></li>\n              <li><a href="/partners" className="hover:text-green-700 transition-colors">Partners</a></li>'
);

fs.writeFileSync('src/components/Footer.tsx', footerRaw);
console.log('Updated src/components/Footer.tsx');
