const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

// Add Star, Pin to lucide-react imports if they aren't there
if (!data.includes('Star,')) {
  data = data.replace(/import \{([\s\S]*?)Home,([\s\S]*?)from 'lucide-react';/, "import {$1Home,$2 Star, Pin,from 'lucide-react';");
}

const newNav = `export const navigation = [
  { name: 'Dashboard', icon: Home, current: true },
  { name: 'Favorites', icon: Star, current: false },
  { name: 'My Pins', icon: Pin, current: false },
  { name: 'Intelligence', icon: BrainCircuit, current: false },
  { name: 'Planning', icon: Calendar, current: false },
  { name: 'Agriculture', icon: Tractor, current: false },
  { name: 'Operations', icon: Settings, current: false },
  { name: 'Economics', icon: DollarSign, current: false },
  { name: 'Compliance', icon: ShieldCheck, current: false, badge: 'Soon' },
  { name: 'Tools & Data', icon: Database, current: false },
  { name: 'Community', icon: Users, current: false },
  { name: 'Docs', icon: BookOpen, current: false },
];`;

data = data.replace(/export const navigation = \[[\s\S]*?\];/, newNav);

fs.writeFileSync('src/data.ts', data);
