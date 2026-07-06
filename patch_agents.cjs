const fs = require('fs');
let data = fs.readFileSync('AGENTS.md', 'utf8');

// remove the older Claude Code version block
const claudeVersion = /## The Ultimate Operating System\nA battle tested system to make Claude Code[\s\S]*?6\. Capture lessons: Update `tasks\/lessons\.md` after corrections\./;
data = data.replace(claudeVersion, '');

fs.writeFileSync('AGENTS.md', data);
