const fs = require('fs');
let data = fs.readFileSync('src/components/MainContent.tsx', 'utf8');

data = data.replace(/import \{ Code, ArrowRight, Tags, Smile, Leaf \} from 'lucide-react';/, "import { Code, ArrowRight, Tags, Smile, Leaf, Plus, Upload, BarChart2 } from 'lucide-react';");

fs.writeFileSync('src/components/MainContent.tsx', data);
