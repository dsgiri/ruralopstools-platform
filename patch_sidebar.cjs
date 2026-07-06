const fs = require('fs');
let data = fs.readFileSync('src/components/Sidebar.tsx', 'utf8');

data = data.replace(/lg:block/, 'lg:flex');

fs.writeFileSync('src/components/Sidebar.tsx', data);
