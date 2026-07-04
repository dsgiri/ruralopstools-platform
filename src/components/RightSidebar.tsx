import React from 'react';
import { announcements } from '../data';
import { Github, Bug, MessageSquare, Plus, Upload, BarChart2, BookOpen, HelpCircle } from 'lucide-react';

export function RightSidebar() {
  return (
    <div className="w-80 border-l border-gray-200 bg-white hidden xl:block">
      <div className="p-6 space-y-8">
        
        {/* Latest Announcements */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Latest Announcements</h3>
            <a href="https://github.com/dsgiri/ruralopstools-platform/discussions/categories/announcements" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-green-700 hover:text-green-800">View all</a>
          </div>
          <div className="space-y-4">
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
        </div>

        {/* Join the Community */}
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-2">Join the Community</h3>
          <p className="text-xs text-gray-600 mb-4 leading-relaxed">
            RuralOpsTools is built by people like you. Contribute, improve, and grow together.
          </p>
          <div className="space-y-3">
            <a href="https://github.com/dsgiri/ruralopstools-platform" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 transition-colors">
              <Github className="w-4 h-4 text-green-600" />
              Star on GitHub
            </a>
            <a href="https://github.com/dsgiri/ruralopstools-platform/issues/new" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 transition-colors">
              <Bug className="w-4 h-4 text-green-600" />
              Report an Issue
            </a>
            <a href="https://github.com/dsgiri/ruralopstools-platform/issues/new" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 transition-colors">
              <MessageSquare className="w-4 h-4 text-green-600" />
              Request a Feature
            </a>
            <a href="https://github.com/dsgiri/ruralopstools-platform/discussions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 transition-colors">
              <MessageSquare className="w-4 h-4 text-green-600" />
              Join Discussions
            </a>
          </div>
        </div>

        {/* Open by Design */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Open by Design</h3>
          <p className="text-xs text-gray-600 mb-4 leading-relaxed">
            Transparent. Extensible. Community-driven. That's the RuralOpsTools way.
          </p>
          <a href="https://github.com/dsgiri/ruralopstools-platform" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm font-medium py-2 rounded-md transition-colors shadow-sm">
            <Github className="w-4 h-4" />
            View on GitHub
          </a>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            {[
              { name: 'New Project', icon: Plus, url: 'https://github.com/dsgiri/ruralopstools-platform/issues/new' },
              { name: 'Upload Data', icon: Upload, url: 'https://github.com/dsgiri/ruralopstools-platform/issues/new' },
              { name: 'Create Analysis', icon: BarChart2, url: 'https://github.com/dsgiri/ruralopstools-platform/issues/new' },
              { name: 'View Documentation', icon: BookOpen, url: 'https://github.com/dsgiri/ruralopstools-platform#readme' },
              { name: 'Get Help', icon: HelpCircle, url: 'https://github.com/dsgiri/ruralopstools-platform/discussions' },
            ].map((action) => (
              <a href={action.url} target="_blank" rel="noopener noreferrer" key={action.name} className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 border border-gray-200 rounded-lg transition-colors group">
                <action.icon className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                {action.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
