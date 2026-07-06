const fs = require('fs');

const toolsIndexRaw = fs.readFileSync('TOOLS-INDEX.md', 'utf8');
const docsIndexRaw = fs.readFileSync('docs/TOOL_INDEX.md', 'utf8');

// Parse TOOLS-INDEX.md table
const tableRegex = /\|(.+)\|(.+)\|(.+)\|(.+)\|/g;
let match;
const toolData = {};

while ((match = tableRegex.exec(toolsIndexRaw)) !== null) {
    const name = match[1].trim();
    if (name === 'Tool Name' || name === '---') continue;
    
    const url = match[2].trim();
    const github = match[3].trim();
    const shortDesc = match[4].trim();
    
    toolData[name.toLowerCase()] = {
        name,
        url,
        github,
        shortDesc
    };
}

// Parse docs/TOOL_INDEX.md details
const sections = docsIndexRaw.split(/##\s+/).slice(1);
const longDescriptions = {};

sections.forEach(sec => {
    const lines = sec.trim().split('\n');
    const header = lines[0].trim(); // e.g. "Forecast (forecast.ruralopstools.com)"
    const nameMatch = header.match(/^([^\(]+)/);
    if (nameMatch) {
        const name = nameMatch[1].trim().toLowerCase();
        const desc = lines.slice(1).join('\n').trim();
        longDescriptions[name] = desc;
    }
});

// Combine everything into a new Markdown
let merged = `# RuralOpsTools Ecosystem Index\n\n`;

// 1. The Summary Table
merged += `## Quick Reference\n\n`;
merged += `| Tool Name | URL | GitHub | Description |\n`;
merged += `|---|---|---|---|\n`;

for (const key of Object.keys(toolData)) {
    const t = toolData[key];
    // try matching the domain for better consistency
    const linkName = t.url.replace('https://', '');
    merged += `| **${t.name}** | [${linkName}](${t.url}) | [Repo](${t.github}) | ${t.shortDesc} |\n`;
}

merged += `\n---\n\n## Detailed Tool Profiles\n\n`;

// 2. The Detailed Sections
for (const key of Object.keys(toolData)) {
    const t = toolData[key];
    merged += `### ${t.name}\n\n`;
    merged += `- **Website:** [${t.url}](${t.url})\n`;
    merged += `- **Source:** [${t.github}](${t.github})\n\n`;
    
    if (longDescriptions[key]) {
        merged += `${longDescriptions[key]}\n\n`;
    } else {
        merged += `${t.shortDesc}\n\n`;
    }
}

fs.writeFileSync('docs/TOOL_INDEX.md', merged);
fs.unlinkSync('TOOLS-INDEX.md'); // Remove duplicate root file
console.log('Successfully merged into docs/TOOL_INDEX.md and removed TOOLS-INDEX.md');

