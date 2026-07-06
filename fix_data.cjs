const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

data = data.replace(/\}  Star, Pin,from 'lucide-react';/, ", Star, Pin } from 'lucide-react';");
data = data.replace(/\} Star, Pin,from 'lucide-react';/, ", Star, Pin } from 'lucide-react';");

fs.writeFileSync('src/data.ts', data);
