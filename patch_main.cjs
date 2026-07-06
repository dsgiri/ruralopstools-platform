const fs = require('fs');
let data = fs.readFileSync('src/components/MainContent.tsx', 'utf8');

if (!data.includes('announcements')) {
  data = data.replace(/import \{ summaryStats, tools, chartData, recentActivity \} from '\.\.\/data';/, "import { summaryStats, tools, chartData, recentActivity, announcements } from '../data';");
}
if (!data.includes('Plus,')) {
  data = data.replace(/import \{ ArrowRight, Tags, Code, Smile, Leaf \} from 'lucide-react';/, "import { ArrowRight, Tags, Code, Smile, Leaf, Plus, Upload, BarChart2 } from 'lucide-react';");
}

const quickActionsStr = `        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <a href="https://github.com/dsgiri/ruralopstools-platform/issues/new" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors group">
              <Plus className="w-5 h-5 group-hover:text-white text-gray-700" />
              <span className="font-bold uppercase text-sm tracking-wider">New Project</span>
            </a>
            <a href="https://github.com/dsgiri/ruralopstools-platform/issues/new" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors group">
              <Upload className="w-5 h-5 group-hover:text-white text-gray-700" />
              <span className="font-bold uppercase text-sm tracking-wider">Upload Data</span>
            </a>
            <a href="https://github.com/dsgiri/ruralopstools-platform/issues/new" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors group">
              <BarChart2 className="w-5 h-5 group-hover:text-white text-gray-700" />
              <span className="font-bold uppercase text-sm tracking-wider">Analysis</span>
            </a>
            <a href="https://github.com/dsgiri/ruralopstools-platform/discussions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors group">
              <Smile className="w-5 h-5 group-hover:text-white text-gray-700" />
              <span className="font-bold uppercase text-sm tracking-wider">Get Help</span>
            </a>
          </div>
        </div>\n`;

data = data.replace(/\{\/\* Explore Tools \*\/\}/, quickActionsStr + "\n        {/* Explore Tools */}");

const announcementsStr = `          {/* Announcements */}
          <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
             <div className="flex items-center justify-between mb-4">
               <h2 className="font-bold text-gray-900">Latest Announcements</h2>
               <a href="https://github.com/dsgiri/ruralopstools-platform/discussions/categories/announcements" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-green-700 hover:text-green-800">View all</a>
             </div>
             <div className="space-y-4 mt-6">
                {announcements.map((item) => (
                  <a href="https://github.com/dsgiri/ruralopstools-platform/discussions/categories/announcements" target="_blank" rel="noopener noreferrer" key={item.id} className="group cursor-pointer block">
                    <div className="flex gap-3">
                      <div className="mt-0.5">
                        <item.icon className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-700 transition-colors">{item.title}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                        <p className="text-[10px] text-gray-400 mt-1">{item.date}</p>
                      </div>
                    </div>
                  </a>
                ))}
             </div>
          </div>\n`;

data = data.replace(/<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">/, '<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">\n' + announcementsStr);

// The chart should take less col-span if we added announcements. Wait, let's change lg:col-span-2 to lg:col-span-1 so we have 3 equal columns!
data = data.replace(/<div className="lg:col-span-2 border border-gray-200 rounded-xl p-5 bg-white shadow-sm">/, '<div className="lg:col-span-1 border border-gray-200 rounded-xl p-5 bg-white shadow-sm">');

fs.writeFileSync('src/components/MainContent.tsx', data);
