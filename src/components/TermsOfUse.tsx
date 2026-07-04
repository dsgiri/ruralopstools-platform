import React from 'react';
import { BookOpen } from 'lucide-react';

export function TermsOfUse() {
  return (
    <div className="flex-1 flex flex-col p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto w-full bg-white border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] p-8">
        <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-gray-100">
          <BookOpen className="w-10 h-10 text-green-700" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Terms of Service</h1>
            <p className="text-gray-500 font-medium">The rules of the road for using our platform.</p>
          </div>
        </div>
        
        <div className="prose prose-green max-w-none text-gray-700">
          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-6">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using RuralOpsTools ("the Platform"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use the Platform.
          </p>
          
          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">2. Use of the Platform</h2>
          <p className="mb-4">
            The Platform is provided "as is" and "as available". You agree to use the Platform only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Platform.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">3. Open Source License</h2>
          <p className="mb-4">
            RuralOpsTools is an open-source project. The source code is available under the MIT License, which means you are free to use, modify, and distribute the software in accordance with the terms of that license.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">4. Disclaimer of Warranties</h2>
          <p className="mb-4">
            We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the Platform or the information, products, services, or related graphics contained on the Platform for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">5. Limitation of Liability</h2>
          <p className="mb-4">
            In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of the Platform.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">6. Governing Law</h2>
          <p className="mb-4">
            These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <p className="text-sm text-gray-500 mt-12 pt-4 border-t border-gray-200">
            Last updated: July 4, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
