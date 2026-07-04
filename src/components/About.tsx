import React from 'react';
import { Leaf } from 'lucide-react';

export function About() {
  return (
    <div className="flex-1 flex flex-col p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto w-full bg-white border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] p-8">
        <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-gray-100">
          <Leaf className="w-10 h-10 text-green-700" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">About RuralOpsTools</h1>
            <p className="text-gray-500 font-medium">Empowering rural operations through open-source software.</p>
          </div>
        </div>
        
        <div className="prose prose-green max-w-none text-gray-700">
          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-6">Our Mission</h2>
          <p className="mb-4">
            RuralOpsTools is dedicated to providing high-quality, open-source tools tailored for agricultural and rural operations. Our mission is to break down the barriers of costly proprietary software by building a transparent, community-driven ecosystem where users own their data and operate without vendor lock-in.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">The Philosophy</h2>
          <p className="mb-4">
            We believe that technology should serve the farmer, the rancher, and the rural entrepreneur directly. This means:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>100% Free & Open Source:</strong> No paywalls, no subscriptions.</li>
            <li><strong>Data Ownership:</strong> You control your data. We don't sell it.</li>
            <li><strong>Community Driven:</strong> Built by the people who use it, for the people who need it.</li>
            <li><strong>Privacy First:</strong> Transparent operations with no hidden tracking.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">Who We Are</h2>
          <p className="mb-4">
            Founded by DS Giri and supported by an incredible community of developers and agricultural experts, RuralOpsTools is more than just software. It is a movement towards accessible, reliable, and sustainable rural infrastructure.
          </p>

          <p className="text-sm text-gray-500 mt-12 pt-4 border-t border-gray-200">
            Last updated: July 4, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
