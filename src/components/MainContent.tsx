import React from 'react';
import { summaryStats, apps, chartData, recentActivity } from '../data';
import { Code, ArrowRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function MainContent() {
  return (
    <div className="flex-1 overflow-y-auto bg-white p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              Welcome to RuralOpsHQ <span className="text-2xl">🌱</span>
            </h1>
            <p className="text-gray-600 mt-2 font-medium">Free • Open Source • Built for Rural Communities</p>
            <p className="text-gray-500 mt-1 text-sm">Powerful tools for planning, analytics, and operations.</p>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex items-center gap-4 hidden md:flex">
            <div>
              <h3 className="font-semibold text-green-900">Open Source</h3>
              <p className="text-xs text-green-800 mt-0.5">Everyone can use, improve, and share.</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-green-200/50 flex items-center justify-center">
              <Code className="w-5 h-5 text-green-700" />
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {summaryStats.map((stat) => (
            <div key={stat.name} className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors bg-white shadow-sm">
              <h3 className="text-sm font-medium text-gray-500 mb-1">{stat.name}</h3>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                {stat.change && (
                  <span className={`text-xs font-semibold ${stat.changeType === 'positive' ? 'text-green-600' : 'text-gray-500'}`}>
                    {stat.changeType === 'positive' ? '▲' : ''} {stat.change}
                  </span>
                )}
                <span className="text-xs text-gray-400">this month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Apps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Explore Apps</h2>
              <p className="text-sm text-gray-500">Pick a tool to get started. All free. All open source.</p>
            </div>
            <a href="#" className="text-sm font-medium text-green-700 hover:text-green-800 flex items-center gap-1">
              View all apps <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {apps.map((app) => (
              <div key={app.name} className="border border-gray-200 rounded-xl p-5 hover:border-green-300 hover:shadow-md transition-all cursor-pointer group bg-white text-center flex flex-col items-center">
                <div className="flex-1 flex flex-col items-center justify-center">
                   <app.icon className={`w-8 h-8 mb-3 ${app.color}`} />
                   <h3 className="font-semibold text-gray-900 mb-1">{app.name}</h3>
                   <p className="text-[11px] text-gray-500 mb-4">{app.description}</p>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-green-700 group-hover:text-green-800 mt-auto">
                  Open <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
             <p className="text-xs text-gray-400">30+ open source tools • No sign-up required to explore • Your data stays yours</p>
          </div>
        </div>

        {/* Bottom Section: Chart & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart */}
          <div className="lg:col-span-2 border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-bold text-gray-900">Overview <span className="text-sm font-normal text-gray-500">(Last 30 Days)</span></h2>
              <select className="text-xs border border-gray-200 rounded-md px-2 py-1 text-gray-600 bg-white focus:outline-none focus:border-green-500">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>Year to Date</option>
              </select>
            </div>
            
            <div className="flex items-center gap-6 mb-6">
               <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-green-500"></div><span className="text-xs font-medium text-gray-600">Projects</span></div>
               <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div><span className="text-xs font-medium text-gray-600">Analyses</span></div>
               <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div><span className="text-xs font-medium text-gray-600">Alerts</span></div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9ca3af' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ fontSize: '12px' }}
                    labelStyle={{ fontSize: '12px', fontWeight: 'bold', color: '#374151', marginBottom: '4px' }}
                  />
                  <Line type="monotone" dataKey="projects" stroke="#22c55e" strokeWidth={2} dot={{ r: 3, fill: '#22c55e' }} activeDot={{ r: 5 }} />
                  <Line type="monotone" dataKey="analyses" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3, fill: '#3b82f6' }} activeDot={{ r: 5 }} />
                  <Line type="monotone" dataKey="alerts" stroke="#f97316" strokeWidth={2} dot={{ r: 3, fill: '#f97316' }} activeDot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
             <div className="flex items-center justify-between mb-4">
               <h2 className="font-bold text-gray-900">Recent Activity</h2>
               <a href="#" className="text-xs font-medium text-green-700 hover:text-green-800">View all</a>
             </div>
             <div className="space-y-4 mt-6">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 ${activity.bg}`}>
                      <activity.icon className={`w-4 h-4 ${activity.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{activity.title}</p>
                      <p className="text-xs text-gray-500 truncate mt-0.5">{activity.desc}</p>
                    </div>
                    <span className="text-[10px] text-gray-400 shrink-0 whitespace-nowrap pt-0.5">{activity.time}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Features Footer */}
        <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
           <h3 className="text-center font-bold text-gray-900 mb-6">Why RuralOpsHQ?</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-green-600"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tags"><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"/><path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414l8.204 8.204a2.426 2.426 0 0 0 3.42 0l3.584-3.584a2.426 2.426 0 0 0 0-3.42z"/><circle cx="6.5" cy="9.5" r=".5" fill="currentColor"/></svg></div>
                  <h4 className="font-semibold text-sm text-gray-900">Free Forever</h4>
                </div>
                <p className="text-xs text-gray-500">All tools are free to use.<br/>No hidden costs.</p>
             </div>
             <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-green-600"><Code className="w-5 h-5" /></div>
                  <h4 className="font-semibold text-sm text-gray-900">Open Source</h4>
                </div>
                <p className="text-xs text-gray-500">Transparent code.<br/>Community improved.</p>
             </div>
             <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-green-600"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg></div>
                  <h4 className="font-semibold text-sm text-gray-900">Easy to Use</h4>
                </div>
                <p className="text-xs text-gray-500">Simple design.<br/>Powerful features.</p>
             </div>
             <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-green-600"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg></div>
                  <h4 className="font-semibold text-sm text-gray-900">Built for Rural</h4>
                </div>
                <p className="text-xs text-gray-500">Designed for real-world<br/>rural challenges.</p>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
