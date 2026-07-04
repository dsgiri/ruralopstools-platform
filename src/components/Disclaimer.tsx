import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function Disclaimer() {
  return (
    <div className="flex-1 flex flex-col p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto w-full bg-white border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] p-8">
        <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-gray-100">
          <ShieldCheck className="w-10 h-10 text-green-700" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Disclaimer</h1>
            <p className="text-gray-500 font-medium">Important limitations of liability and usage.</p>
          </div>
        </div>
        
        <div className="prose prose-green max-w-none text-gray-700">
          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-6">1. General Information</h2>
          <p className="mb-4">
            The information provided by RuralOpsTools ("we," "us," or "our") on our platform is for general informational purposes only. All information on the platform is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the platform.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">2. Professional Advice</h2>
          <p className="mb-4">
            The platform cannot and does not contain professional agricultural, financial, or legal advice. The agricultural and financial information is provided for general informational and educational purposes only and is not a substitute for professional advice.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">3. External Links</h2>
          <p className="mb-4">
            The platform may contain (or you may be sent through the platform) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">4. Use At Your Own Risk</h2>
          <p className="mb-4">
            Your use of the platform and your reliance on any information on the platform is solely at your own risk. This includes decisions made based on forecast models, financial projections, or operational planning tools provided within the RuralOpsTools ecosystem.
          </p>

          <p className="text-sm text-gray-500 mt-12 pt-4 border-t border-gray-200">
            Last updated: July 4, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
