import React from 'react';
import { Leaf } from 'lucide-react';

export function About() {
  return (
    <div className="flex-1 flex flex-col p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto w-full bg-white border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] p-8">
        <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-gray-100">
          <Leaf className="w-10 h-10 text-green-700" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">About</h1>
            <p className="text-gray-500 font-medium">Every tool a working rural operation actually reaches for.</p>
          </div>
        </div>
        
        <div className="prose prose-green max-w-none text-gray-700">
          <p className="mb-6 text-lg leading-relaxed text-gray-800">
            RuralOpsTools started as one calculator built to answer one real question, and grew into a shelf of them.
          </p>

          <p className="mb-8">
            It's operated by Microtree LLC, based in Texas, and built by one person trying to solve a specific, recurring problem: most decision-support tools for farms and rural operations are either locked behind a login, priced for an operation far bigger than a small farm, or don't exist at all for the specific question being asked.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="text-4xl font-bold text-green-700 mb-2">26</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">free tools</div>
            </div>
            <div className="text-center p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="text-4xl font-bold text-green-700 mb-2">$0</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">to use, ever</div>
            </div>
            <div className="text-center p-6 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="text-4xl font-bold text-green-700 mb-2">0</div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">accounts required</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How it stays free</h2>
          <p className="mb-6 leading-relaxed">
            RuralOpsTools is funded by advertising, not subscriptions. There's no paid tier hiding the real calculator, no "upgrade to see your result" wall. The tradeoff is ads on the page — the same tradeoff most free tools online make, made explicit here rather than buried.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How it handles your data</h2>
          <p className="mb-6 leading-relaxed">
            There are no accounts anywhere in this network. Each tool — Pest, Poultry, Soil, and the rest — stores anything you enter (logs, checklists, calculator inputs) in your own browser's local storage. Nothing is sent to Microtree LLC, and nothing is shared between tools. Clearing your browser data removes it. See the <a href="/privacy-policy" className="text-green-700 hover:underline font-medium">Privacy Policy</a> for the full detail.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Who it's for</h2>
          <p className="mb-6 leading-relaxed">
            Farmers, ranchers, and anyone managing rural land or livestock who wants a fast, specific answer — a spray timing window, a lay rate, a lease comparison — without a sales call or a signup form in the way.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What's next</h2>
          <p className="mb-6 leading-relaxed">
            New tools get added as real gaps come up. If there's a calculator or tracker you wish existed, get in touch.
          </p>

        </div>
      </div>
    </div>
  );
}
