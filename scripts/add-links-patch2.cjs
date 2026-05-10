// Patch 2: add remaining external links and fix location links
const fs = require('fs');
const posts = JSON.parse(fs.readFileSync('./src/data/posts.json', 'utf8'));

// ─── POST 9: add location links around already-linked duct cleaning ─────────
let p9 = posts.find(p => p.id === '9');
// The first link already rendered as: </a> in Stony Plain or Spruce Grove,
p9.content = p9.content.replace(
  '</a> in Stony Plain or Spruce Grove, you have probably noticed',
  '</a> in <a href="/duct-cleaning-stony-plain">Stony Plain</a> or <a href="/duct-cleaning-spruce-grove">Spruce Grove</a>, you have probably noticed'
);

// ─── POST 10: NADCA + NRCan ──────────────────────────────────────────────────
let p10 = posts.find(p => p.id === '10');
// Add NADCA after "is late summer or early fall"
p10.content = p10.content.replace(
  '</a> is late summer or early fall. Here is why:',
  '</a> is late summer or early fall — a timing recommendation supported by <a href="https://nadca.com" target="_blank" rel="noopener noreferrer">NADCA</a>. Here is why:'
);
// NRCan - add near "No wasted energy" efficiency mention
p10.content = p10.content.replace(
  'No wasted energy pushing air through dirty ducts during the first cold snap.',
  'No wasted energy pushing air through dirty ducts during the first cold snap. (<a href="https://natural-resources.canada.ca/energy-efficiency/homes" target="_blank" rel="noopener noreferrer">Natural Resources Canada</a> offers additional home energy-saving guidance.)'
);

// ─── POST 12: Health Canada CO + NADCA ──────────────────────────────────────
let p12 = posts.find(p => p.id === '12');
// Health Canada - near the first CO mention
p12.content = p12.content.replace(
  'most common sources of carbon monoxide in Canadian homes is the furnace.',
  'most common sources of carbon monoxide in Canadian homes is the furnace — <a href="https://www.canada.ca/en/health-canada/services/air-quality/carbon-monoxide.html" target="_blank" rel="noopener noreferrer">Health Canada</a> identifies CO as a leading cause of accidental poisoning deaths in Canada.'
);
// NADCA - the furnace cleaning link is already there; add NADCA near the "annually" recommendation
p12.content = p12.content.replace(
  '</a> is one of the most effective ways to reduce',
  '</a> — recommended annually by <a href="https://nadca.com" target="_blank" rel="noopener noreferrer">NADCA</a> — is one of the most effective ways to reduce'
);

// ─── POST 14: Health Canada after "reduction in dust" ───────────────────────
let p14 = posts.find(p => p.id === '14');
p14.content = p14.content.replace(
  'The reduction in dust, the improvement in air',
  'The reduction in dust — important for indoor air quality per <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">Health Canada</a> — the improvement in air'
);

// ─── POST 15: Health Canada after the linked "duct cleaning" ────────────────
let p15 = posts.find(p => p.id === '15');
p15.content = p15.content.replace(
  '</a> is important even if you religiously change your',
  '</a> — per <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">Health Canada indoor air quality guidelines</a> — is important even if you religiously change your'
);

// ─── POST 16: NFPA + Health Canada ──────────────────────────────────────────
let p16 = posts.find(p => p.id === '16');
// NFPA - insert after the dryer vent cleaning link, before "The Numbers Are Alarming"
p16.content = p16.content.replace(
  'dryer vent cleaning</a>.</p><h3>The Numbers Are Alarming</h3>',
  'dryer vent cleaning</a>.</p><p>The <a href="https://www.nfpa.org/education-and-research/research/nfpa-research/fire-statistical-reports/home-fires" target="_blank" rel="noopener noreferrer">National Fire Protection Association</a> identifies clogged vents as the leading cause of dryer fires.</p><h3>The Numbers Are Alarming</h3>'
);
// Health Canada - after "duct cleaning for the best value"
p16.content = p16.content.replace(
  '</a> for the best value. Call (780) 932-7337 for your',
  '</a> for the best value. <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">Health Canada</a> recommends regular appliance maintenance to protect indoor air quality. Call (780) 932-7337 for your'
);

// ─── POST 17: add Stony Plain / Spruce Grove location links ─────────────────
let p17 = posts.find(p => p.id === '17');
// The linked phrase is: </a> in Stony Plain, Spruce Grove, or the Edmonton area
p17.content = p17.content.replace(
  '</a> in Stony Plain, Spruce Grove, or the Edmonton area, you have seen two very different',
  '</a> in <a href="/duct-cleaning-stony-plain">Stony Plain</a>, <a href="/duct-cleaning-spruce-grove">Spruce Grove</a>, or the Edmonton area, you have seen two very different'
);

// Write updated file
fs.writeFileSync('./src/data/posts.json', JSON.stringify(posts, null, 2), 'utf8');
console.log('Patch 2 applied successfully.');
