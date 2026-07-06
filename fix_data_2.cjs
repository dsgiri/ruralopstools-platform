const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

data = data.replace(/MessageCircle,, Star, Pin \} from 'lucide-react';/, "MessageCircle, Star, Pin } from 'lucide-react';");

fs.writeFileSync('src/data.ts', data);
