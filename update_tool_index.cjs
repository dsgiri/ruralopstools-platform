const fs = require('fs');

const inputRaw = `
Platform (ruralopstools.com): The main home base. It’s the master dashboard where you can see all your apps, navigate between them, and customize your layout.
Habitat (habitat.ruralopstools.com): The instruction manual. A public website that hosts guides and explains exactly how the math in each tool works.
Plan (plan.ruralopstools.com): Your seasonal planner. Use it to sketch out budgets, assign chores to workers, and see where your cash is going before the season starts.
WhatIf (whatif.ruralopstools.com): The "what-or-else" calculator. It lets you change numbers—like a sudden spike in diesel or fertilizer prices—to see how it hurts your wallet before it happens.
Forecast (forecast.ruralopstools.com): A market tracker. It looks at market trends to help you guess where crop and livestock prices are heading so you can sell at the right time.
Predictor (predictor.predictor.ruralopstools.com): Your crystal ball. It uses your past farm data to predict harvest dates, yield amounts, and first-frost dates using standard math probabilities.
Grid (grid.ruralopstools.com): Emergency triage. A fast, simple checklist that helps you instantly rank your chores when everything breaks at once and you need to prioritize.
BreakTime (breaktime.ruralopstools.com): A crew timer. A simple stopwatch to track worker breaks during hot days so everyone stays safe and you stay legal.

Weather (weather.ruralopstools.com): Field weather, stripped down. It loads instantly on weak cell signals to give you clean wind, rain, and temperature data so you know if you can spray or plant right now.
Soil (soil.ruralopstools.com): Dirt math. You plug in your lab soil test results, and it tells you exactly how much fertilizer you need to buy without overpaying for retail filler.
Pest (pest.ruralopstools.com): Bug control. You track how many bugs you find in your traps, and it tells you the exact day it makes financial sense to spray before they ruin your crop.
Carbon (carbon.ruralopstools.com): Emission tracker. It looks at your fuel usage and tractor work to give you a clean estimate of your farm's carbon footprint.
USDA (usda.ruralopstools.com): Government paperwork helper. It helps you calculate your government program payments (like ARC/PLC) and keep track of strict federal deadlines.

Livestock (livestock.ruralopstools.com): The master herd book. Track breeding calendars, pregnancy timelines, and growth charts for cattle, pigs, sheep, or goats in one place.
Beef (beef.ruralopstools.com): Cattle economics. Track weight gains and current market prices so you know the exact week to send your calves to auction for peak profit.
Dairy (dairy.ruralopstools.com): Milk margins. Track daily milk volumes, fat levels, and feed costs to calculate your "Income Over Feed Cost" and protect your margins.
Poultry (poultry.ruralopstools.com): The coop logger. Count your daily eggs, track incubator hatch dates, and monitor bird losses to keep your flock profitable.
Honeybee (honeybee.ruralopstools.com): Hive tracker. Log your honey yields, track queen health, and record mite treatments across all your bee yards.
Aqua (aqua.ruralopstools.com): Fish and shrimp math. Tracks water oxygen levels, pump electricity costs, and fish weight to make water-farming predictable.

Tractor (tractor.ruralopstools.com): Maintenance manual. A digital logbook to track oil changes, diesel consumption, and repairs across your trucks and tractors to prevent breakdowns.
Fence (fence.ruralopstools.com): Fence line estimator. You measure your field, pick your wire type, and it tells you exactly how many posts, clips, and spools of wire to buy.
Solar (solar.ruralopstools.com): Solar panel sizer. Figures out exactly how many solar panels and batteries you need to power remote well pumps, cameras, or electric gates.
Wood (wood.ruralopstools.com): Timber calculator. Measure standing trees on your property, and it tells you how many usable boards you can get and what they are worth.
Land (land.ruralopstools.com): Property evaluator. Helps you compare land prices, calculate fair cash rent, or decide if it's smarter to buy or lease a new parcel.
Storage (storage.ruralopstools.com): Bin capacity. Enter the dimensions of your grain bins, hay barns, or feed bunks, and it calculates exactly how many tons or bushels will fit inside.
Greenhouse (greenhouse.ruralopstools.com): Greenhouse costs. Calculates your startup building costs and your winter heating bill to make sure indoor growing makes financial sense.
Hydroponic (hydroponic.ruralopstools.com): Indoor water-growing. Tracks pH levels, nutrient balances, and indoor electricity costs for running vertical grow lights.

Feed (feed.ruralopstools.com): Feed recipe optimizer. A balancing tool that lets you mix different cheap grains to hit your animals' protein needs at the lowest possible cost.
Transport (transport.ruralopstools.com): Trucking costs. Calculates your fuel costs, driver hours, and empty mileage to tell you if it's cheaper to haul your own grain or hire a semi.
Price (price.ruralopstools.com): The quote builder. Use it to build customer quotes, check your profit margins, and find your absolute financial break-even line.
Solve (solve.ruralopstools.com): Automation estimator. Figures out the total cost of installing remote field sensors, cellular gates, and automatic water valves before you buy them.
Stock (stock.ruralopstools.com): Tool & part inventory. A simple ledger to track spare parts, tools, and farm supplies so you don't run out of a belt or bolt during a busy harvest day.
Rental (rental.ruralopstools.com): Renting vs. Loaning. Calculates if it makes financial sense to rent your equipment out to neighbors or rent land out to bring in extra cash.
Quality (quality.ruralopstools.com): Quality control log. A compliance notebook to log product batches, safety tests, and processing steps to protect you from legal liability.
Vet (vet.ruralopstools.com): Medicine dosage checker. Enter an animal's weight, and it calculates the exact medical dose to give them, plus the date it's safe to sell the meat or milk.
Grant (grant.ruralopstools.com): Grant tracker. A compiled list of federal, state, and private conservation grants to help you apply for free farm improvement funding.
Jobs (jobs.ruralopstools.com): Local labor exchange. A simple job board built strictly to connect rural operations with seasonal harvest crews, tractor drivers, and farm hands.
Answer (answer.ruralopstools.com): The calculation solver. A search box where you can type any weird farming formula or structural math problem and get an immediate answer without ads.
`;

const lines = inputRaw.split('\n').map(l => l.trim()).filter(l => l.length > 0);
const toolData = {};

lines.forEach(line => {
    const match = line.match(/^([A-Za-z]+)\s*\(([^)]+)\):\s*(.*)$/);
    if (match) {
        const toolName = match[1];
        let toolUrl = match[2];
        if (toolUrl.includes('predictor.predictor')) {
            toolUrl = 'predictor.ruralopstools.com';
        }
        const toolDesc = match[3];
        toolData[toolName.toLowerCase()] = {
            name: toolName,
            url: toolUrl,
            desc: toolDesc
        };
    }
});

let docsIndexRaw = fs.readFileSync('docs/TOOL_INDEX.md', 'utf8');

// Update table descriptions
docsIndexRaw = docsIndexRaw.replace(/\|\s*\*\*([^*]+)\*\*\s*\|\s*\[([^\]]+)\]\([^)]+\)\s*\|\s*\[Repo\]\([^)]+\)\s*\|\s*([^|]+)\s*\|/g, (match, name, linkName, oldDesc) => {
    const key = name.toLowerCase();
    if (toolData[key]) {
        // Find existing repo from match
        const parts = match.split('|').map(s => s.trim());
        const repoUrlMatch = match.match(/\[Repo\]\(([^)]+)\)/);
        const repoUrl = repoUrlMatch ? repoUrlMatch[1] : '';
        return `| **${name}** | [${toolData[key].url}](https://${toolData[key].url}) | [Repo](${repoUrl}) | ${toolData[key].desc} |`;
    }
    return match;
});

// Update detailed tool profiles
const sections = docsIndexRaw.split(/(?=###\s+)/);
let newDocsIndex = sections[0];

for (let i = 1; i < sections.length; i++) {
    const sec = sections[i];
    const lines = sec.trim().split('\n');
    const nameMatch = lines[0].match(/###\s+(.+)/);
    if (nameMatch) {
        const name = nameMatch[1].trim().toLowerCase();
        if (toolData[name]) {
            // Find links
            const repoLine = lines.find(l => l.startsWith('- **Source:**') || l.startsWith('- **GitHub:**'));
            let repoUrl = '';
            if (repoLine) {
                const urlMatch = repoLine.match(/\[(.*?)\]\((.*?)\)/);
                if (urlMatch) {
                    repoUrl = urlMatch[2];
                }
            }
            let updatedSection = `### ${toolData[name].name}\n\n`;
            updatedSection += `- **Website:** [https://${toolData[name].url}](https://${toolData[name].url})\n`;
            if (repoUrl) {
                updatedSection += `- **Source:** [${repoUrl}](${repoUrl})\n\n`;
            } else {
                updatedSection += `\n`;
            }
            updatedSection += `${toolData[name].desc}\n\n`;
            newDocsIndex += updatedSection;
            continue;
        }
    }
    newDocsIndex += sec + (sec.endsWith('\n\n') ? '' : '\n\n');
}

fs.writeFileSync('docs/TOOL_INDEX.md', newDocsIndex);
console.log('Updated docs/TOOL_INDEX.md');
