const fs = require('fs');

let sidebarCode = fs.readFileSync('src/components/Sidebar.tsx', 'utf8');
sidebarCode = sidebarCode.replace(
  '<div className="p-6 flex items-center gap-2 border-b border-gray-100">\n        <Leaf className="w-8 h-8 text-green-700" />\n        <div>\n          <h1 className="font-bold text-xl leading-tight text-gray-900 tracking-tight">RuralOpsTools</h1>\n          <p className="text-[10px] text-gray-500 font-medium tracking-wide">Open Source. Built for Rural.</p>\n        </div>\n      </div>',
  '<a href="/" className="p-6 flex items-center gap-2 border-b border-gray-100 hover:bg-gray-50 transition-colors">\n        <Leaf className="w-8 h-8 text-green-700" />\n        <div>\n          <h1 className="font-bold text-xl leading-tight text-gray-900 tracking-tight">RuralOpsTools</h1>\n          <p className="text-[10px] text-gray-500 font-medium tracking-wide">Open Source. Built for Rural.</p>\n        </div>\n      </a>'
);
fs.writeFileSync('src/components/Sidebar.tsx', sidebarCode);

let footerCode = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footerCode = footerCode.replace(
  '<div className="flex items-center gap-2">\n             <Leaf className="w-6 h-6 text-green-700" />\n             <div>\n               <h1 className="font-bold text-lg leading-tight text-gray-900 tracking-tight">RuralOpsTools</h1>\n               <p className="text-[10px] text-gray-500 font-medium tracking-wide">Open Source. Built for Rural.</p>\n             </div>\n           </div>',
  '<a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">\n             <Leaf className="w-6 h-6 text-green-700" />\n             <div>\n               <h1 className="font-bold text-lg leading-tight text-gray-900 tracking-tight">RuralOpsTools</h1>\n               <p className="text-[10px] text-gray-500 font-medium tracking-wide">Open Source. Built for Rural.</p>\n             </div>\n           </a>'
);
fs.writeFileSync('src/components/Footer.tsx', footerCode);
