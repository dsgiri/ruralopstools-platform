const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');

// Add new icons to import statement
data = data.replace(
  /import \{([\s\S]*?)\} from 'lucide-react';/,
  (match, p1) => {
    const newIcons = " Trees, Bird, Sun, Fence, ClipboardCheck, ScrollText, Key, Stethoscope, Briefcase, MessageCircle,";
    return "import {" + p1 + "," + newIcons + "} from 'lucide-react';";
  }
);

const newTools = `
  { id: 'wood', name: 'Wood', description: 'Timber and forestry logs', icon: Trees, color: 'text-amber-800', bg: 'bg-amber-100', url: 'https://wood.ruralopstools.com' },
  { id: 'poultry', name: 'Poultry', description: 'Egg production logs', icon: Bird, color: 'text-orange-400', bg: 'bg-orange-100', url: 'https://poultry.ruralopstools.com' },
  { id: 'solar', name: 'Solar', description: 'Off-grid solar array efficiency', icon: Sun, color: 'text-yellow-500', bg: 'bg-yellow-100', url: 'https://solar.ruralopstools.com' },
  { id: 'fence', name: 'Fence', description: 'Linear acreage calculator', icon: Fence, color: 'text-stone-600', bg: 'bg-stone-100', url: 'https://fence.ruralopstools.com' },
  { id: 'tractor', name: 'Tractor', description: 'Fleet maintenance logger', icon: Tractor, color: 'text-red-500', bg: 'bg-red-100', url: 'https://tractor.ruralopstools.com' },
  { id: 'comply', name: 'Comply', description: 'Regulatory compliance logs', icon: ClipboardCheck, color: 'text-blue-600', bg: 'bg-blue-100', url: 'https://comply.ruralopstools.com' },
  { id: 'grant', name: 'Grant', description: 'Agricultural funding options', icon: ScrollText, color: 'text-emerald-700', bg: 'bg-emerald-100', url: 'https://grant.ruralopstools.com' },
  { id: 'stock', name: 'Stock', description: 'Livestock and market stock', icon: TrendingUp, color: 'text-indigo-500', bg: 'bg-indigo-100', url: 'https://stock.ruralopstools.com' },
  { id: 'rental', name: 'Rental', description: 'Equipment rental tracking', icon: Key, color: 'text-teal-600', bg: 'bg-teal-100', url: 'https://rental.ruralopstools.com' },
  { id: 'vet', name: 'Vet', description: 'Veterinary health records', icon: Stethoscope, color: 'text-rose-500', bg: 'bg-rose-100', url: 'https://vet.ruralopstools.com' },
  { id: 'jobs', name: 'Jobs', description: 'Rural labor and job tracking', icon: Briefcase, color: 'text-slate-600', bg: 'bg-slate-100', url: 'https://jobs.ruralopstools.com' },
  { id: 'answer', name: 'Answer', description: 'Q&A and knowledge base', icon: MessageCircle, color: 'text-cyan-500', bg: 'bg-cyan-100', url: 'https://answer.ruralopstools.com' },
`;

// Insert new tools into the tools array
data = data.replace(
  /export const tools = \[([\s\S]*?)\];/,
  (match, p1) => {
    // Check if one of the new tools is already there to prevent duplication
    if (p1.includes("id: 'wood'")) return match;
    
    // Find the end of the array items before the non-tool objects (like recent activity mixed in previously)
    return "export const tools = [" + p1 + newTools + "];";
  }
);

fs.writeFileSync('src/data.ts', data);
console.log('Patched src/data.ts with missing tools');
