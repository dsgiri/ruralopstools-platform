import React from 'react';
import { Scale } from 'lucide-react';

export function TermsOfUse() {
  return (
    <div className="flex-1 flex flex-col p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto w-full bg-white border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] p-8">
        <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-gray-100">
          <Scale className="w-10 h-10 text-green-700" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Terms of Use</h1>
            <p className="text-gray-500 font-medium">Last updated: July 2026</p>
          </div>
        </div>
        
        <div className="prose prose-green max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-6">Informational purposes only</h2>
          <p className="mb-6 leading-relaxed">
            RuralOpsTools and every tool in this network (Pest, Poultry, Soil, and others) are provided for general informational and planning purposes only. Nothing on this site constitutes agricultural, veterinary, financial, legal, or other professional advice. Always verify guidance — spray timing, coop temperature flags, financial estimates, or anything else — against your own conditions, local regulations, product labels, and, where appropriate, a qualified professional (a veterinarian, agronomist, extension office, accountant, or attorney).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">No warranty</h2>
          <p className="mb-6 leading-relaxed">
            These tools are provided "as is," without warranty of any kind, express or implied, including but not limited to accuracy, fitness for a particular purpose, or reliability of any calculation or recommendation produced.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Limitation of liability</h2>
          <p className="mb-6 leading-relaxed">
            To the fullest extent permitted by law, Microtree LLC is not liable for any loss, damage, or decision made in reliance on information provided by RuralOpsTools or any of its tools, including agricultural losses, animal health outcomes, or financial losses.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Acceptable use</h2>
          <p className="mb-6 leading-relaxed">
            You may use these tools for personal or commercial rural operations planning. You may not scrape, resell, or republish the tools or their underlying code as your own product, or use automated means to abuse the site's availability for other users.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Advertising</h2>
          <p className="mb-6 leading-relaxed">
            This site is supported by advertising, including Google AdSense. Ads are served by third parties under their own terms. See the <a href="/privacy-policy" className="text-green-700 hover:underline font-medium">Privacy Policy</a> for details.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Changes to these terms</h2>
          <p className="mb-6 leading-relaxed">
            These terms may be updated from time to time. The "last updated" date above reflects the most recent revision. Continued use of the site after a change constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Governing law</h2>
          <p className="mb-6 leading-relaxed">
            These terms are governed by the laws of the State of Texas, without regard to conflict-of-law principles.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact</h2>
          <p className="mb-6 leading-relaxed">
            Questions about these terms: <a href="mailto:support@ruralopstools.com" className="text-green-700 hover:underline font-medium">support@ruralopstools.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
