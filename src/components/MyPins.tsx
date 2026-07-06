import React from 'react';
import PinnedToolsDashboard from './pinned-tools-dashboard';

export function MyPins() {
  return (
    <div className="flex-1 overflow-y-auto">
      <PinnedToolsDashboard />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <p className="text-gray-500 text-sm">
          Pin tools from their respective pages to see them here in your active toolbelt.
        </p>
      </div>
    </div>
  );
}
