import React from 'react';
import { ShieldCheck } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="flex-1 flex flex-col p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto w-full bg-white border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] p-8">
        <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-gray-100">
          <ShieldCheck className="w-10 h-10 text-green-700" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Privacy Policy</h1>
            <p className="text-gray-500 font-medium">How we protect your data and privacy.</p>
          </div>
        </div>
        
        <div className="prose prose-green max-w-none text-gray-700">
          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-6">1. Information We Collect</h2>
          <p className="mb-4">
            RuralOpsTools is designed with privacy as a core principle. As an open-source platform, we only collect the minimum amount of information necessary to operate the service. This may include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Information you provide directly (e.g., when contacting us or using specific interactive features).</li>
            <li>Basic analytics data (anonymized) to help us understand how the platform is used and to improve performance.</li>
            <li>Payment information (processed securely through Stripe) if you choose to support the project. We do not store your credit card details on our servers.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">2. How We Use Your Information</h2>
          <p className="mb-4">
            The information we collect is used solely for the purpose of providing and improving the RuralOpsTools platform. We do not sell, rent, or trade your personal information to third parties. Your data is your data.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">3. Data Security</h2>
          <p className="mb-4">
            We implement industry-standard security measures to protect your information. Since the codebase is open-source, the security of our application can be independently verified by the community.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">4. Third-Party Services</h2>
          <p className="mb-4">
            We may use third-party services (such as Vercel for hosting, and Stripe for payments) that have their own privacy policies. We encourage you to review them as well.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-4 mt-8">5. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify users of any material changes by posting the new policy on this page.
          </p>

          <p className="text-sm text-gray-500 mt-12 pt-4 border-t border-gray-200">
            Last updated: July 4, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
