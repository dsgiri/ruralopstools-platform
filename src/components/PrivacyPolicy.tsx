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
            <p className="text-gray-500 font-medium">Last updated: July 2026</p>
          </div>
        </div>
        
        <div className="prose prose-green max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-6">Overview</h2>
          <p className="mb-6 leading-relaxed">
            RuralOpsTools is a network of free tools (Pest, Poultry, Soil, and others) for rural operations, operated by Microtree LLC ("we," "us"). This policy covers ruralopstools.com and every tool subdomain in the network (e.g. pest.ruralopstools.com, poultry.ruralopstools.com).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">No accounts, anywhere in this network</h2>
          <p className="mb-6 leading-relaxed">
            None of our tools require sign-up, login, or a password. There is no central database of users.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Data stored on your device</h2>
          <p className="mb-6 leading-relaxed">
            Anything you enter into a tool — calculator inputs, egg logs, scouting notes, favorites — is saved using your browser's local storage, on your own device. This data is never transmitted to us and is not accessible to us. It is also not shared between tools: what you save in Poultry stays in Poultry's local storage, separate from Pest, Soil, or any other subdomain. Clearing your browser data, switching browsers, or switching devices will remove it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cookies & advertising</h2>
          <p className="mb-4 leading-relaxed">
            We use cookies to operate the site and, where enabled, to serve advertising through Google AdSense. Google and its advertising partners may use cookies to serve ads based on your prior visits to this or other websites.
          </p>
          <p className="mb-6 leading-relaxed">
            You can opt out of personalized advertising at <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline font-medium">Google Ads Settings</a> or <a href="https://aboutads.info" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline font-medium">aboutads.info</a>. You can also manage cookies through your browser settings or the cookie banner shown on your first visit to any tool.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Analytics</h2>
          <p className="mb-6 leading-relaxed">
            We use aggregated analytics (such as Google Analytics) to understand which tools are used and how. This is aggregate usage data and is not linked to your identity by us.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Third parties</h2>
          <p className="mb-6 leading-relaxed">
            This site and its tools may use third-party services, including Google Analytics and Google AdSense, which operate under their own privacy policies. See Google's Privacy & Terms at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline font-medium">policies.google.com/privacy</a>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Children's privacy</h2>
          <p className="mb-6 leading-relaxed">
            This site is not directed at children under 13, and we do not knowingly collect personal information from children.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Changes to this policy</h2>
          <p className="mb-6 leading-relaxed">
            If this policy changes materially, the "last updated" date above will reflect it. Continued use of the site after a change constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact</h2>
          <p className="mb-6 leading-relaxed">
            Questions about this policy: <a href="mailto:support@ruralopstools.com" className="text-green-700 hover:underline font-medium">support@ruralopstools.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
