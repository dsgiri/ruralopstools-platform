const fs = require('fs');
let data = fs.readFileSync('src/App.tsx', 'utf8');

data = data.replace(/import \{ RightSidebar \} from '\.\/components\/RightSidebar';\n/, '');
data = data.replace(/<RightSidebar \/>/, '');

fs.writeFileSync('src/App.tsx', data);
