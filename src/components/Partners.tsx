import React from 'react';

export function Partners() {
  return (
    <div className="flex-1 flex flex-col p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto w-full bg-white border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] p-8">
      <div className="prose prose-green max-w-none text-gray-700 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Partners</h1>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            RuralOpsTools.com welcomes partnerships that help rural users make better decisions. We are especially interested in collaborations that improve education, accuracy, and practical value.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What we look for</h2>
          <p className="text-gray-600 mb-3">We are interested in working with:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li>Extension programs.</li>
            <li>Universities.</li>
            <li>Farm and livestock organizations.</li>
            <li>Rural service providers.</li>
            <li>Educational content collaborators.</li>
            <li>Tool and data partners with relevant expertise.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Partnership goals</h2>
          <p className="text-gray-600 mb-3">Good partnerships should help us:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li>Improve calculator accuracy.</li>
            <li>Expand useful tools.</li>
            <li>Provide better educational resources.</li>
            <li>Support rural users with clear, reliable information.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Partnership types</h2>
          <p className="text-gray-600 mb-3">Partnerships may include:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li>Content collaboration</li>
            <li>Calculator review</li>
            <li>Resource sharing</li>
            <li>Educational cross-linking</li>
            <li>Joint outreach</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">How to contact us</h2>
          <p className="text-gray-600 mb-3">
            If your organization serves rural communities and wants to collaborate, contact us through the site's contact page with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
            <li>Your organization name.</li>
            <li>Your area of expertise.</li>
            <li>How you think we could work together.</li>
          </ul>
          
          <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 transition-colors shadow-sm mb-6">
            Go to Contact Page
          </a>

          <div className="bg-amber-50 border border-amber-200 rounded-md p-4 text-sm text-amber-800 font-medium">
            Any partnership we list must be real, relevant, and clearly explained.
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
