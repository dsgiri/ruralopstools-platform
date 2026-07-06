const fs = require('fs');

let partnersRaw = fs.readFileSync('src/components/Partners.tsx', 'utf8');

partnersRaw = partnersRaw.replace(
  '<div className="flex-1 overflow-y-auto bg-white p-6 md:p-12">',
  '<div className="flex-1 flex flex-col p-8 overflow-y-auto">'
);

partnersRaw = partnersRaw.replace(
  '<div className="max-w-3xl mx-auto space-y-8">',
  '<div className="max-w-3xl mx-auto w-full bg-white border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] p-8">\n      <div className="prose prose-green max-w-none text-gray-700 space-y-8">'
);

partnersRaw = partnersRaw.replace(
  '        </div>\n      </div>\n    </div>',
  '          </div>\n        </div>\n      </div>\n    </div>'
);

// We need to add one more closing div since we wrapped the inner content with `<div className="prose...">`

partnersRaw = partnersRaw.replace(
  'Any partnership we list must be real, relevant, and clearly explained.\n          </div>\n        </div>\n      </div>\n    </div>',
  'Any partnership we list must be real, relevant, and clearly explained.\n          </div>\n        </div>\n        </div>\n      </div>\n    </div>'
);

fs.writeFileSync('src/components/Partners.tsx', partnersRaw);
console.log('Updated src/components/Partners.tsx style');
