// Patch: add missing external links and some internal links that didn't apply
// because linkNthOccurrence already changed the phrases before .replace() ran.
const fs = require('fs');
const posts = JSON.parse(fs.readFileSync('./src/data/posts.json', 'utf8'));

// POST 9: add Stony Plain / Spruce Grove location links
let p9 = posts.find(p => p.id === '9');
p9.content = p9.content.replace(
  '</a> in Stony Plain or Spruce Grove, you have probably noticed',
  '</a> in <a href="/duct-cleaning-stony-plain">Stony Plain</a> or <a href="/duct-cleaning-spruce-grove">Spruce Grove</a>, you have probably noticed'
);

// POST 10: add NADCA and NRCan links - find the already-linked phrase
let p10 = posts.find(p => p.id === '10');
p10.content = p10.content.replace(
  'is late summer or early fall. Here is why:',
  'is late summer or early fall — a timing recommendation supported by <a href="https://nadca.com" target="_blank" rel="noopener noreferrer">NADCA</a>. Here is why:'
);
// NRCan - find energy savings context
p10.content = p10.content.replace(
  'your heating bills',
  'your heating bills (see <a href="https://natural-resources.canada.ca/energy-efficiency/homes" target="_blank" rel="noopener noreferrer">Natural Resources Canada</a> for home energy-saving tips)'
);

// POST 12: add Health Canada CO and NADCA links
let p12 = posts.find(p => p.id === '12');
// CO is already mentioned - find CO in the text
p12.content = p12.content.replace(
  'CO is an invisible, odorless',
  'CO is an invisible, odorless'
);
// Find actual CO description text
const co12idx = p12.content.indexOf('odorless');
console.log('Post 12 odorless context:', p12.content.substring(Math.max(0, co12idx-80), co12idx+120));

// NADCA - already inserted "recommended annually by NADCA" via the replace - let me check
console.log('Post 12 NADCA check:', p12.content.includes('nadca.com'));
console.log('Post 12 health-canada check:', p12.content.includes('health-canada'));

// POST 14: Health Canada link after "The reduction in dust"
let p14 = posts.find(p => p.id === '14');
p14.content = p14.content.replace(
  '. The reduction in dust, the improvement in air',
  '. The reduction in dust — important for indoor air quality per <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">Health Canada</a> — the improvement in air'
);

// POST 15: Health Canada link
let p15 = posts.find(p => p.id === '15');
p15.content = p15.content.replace(
  '</a> is important even if you religiously change your',
  '</a> — see <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">Health Canada indoor air quality guidelines</a> — is important even if you religiously change your'
);

// POST 16: NFPA and Health Canada
let p16 = posts.find(p => p.id === '16');
p16.content = p16.content.replace(
  '</a>.</p><h3>The Numbers Are Alarming</h3>',
  '.</p><p>The <a href="https://www.nfpa.org/education-and-research/research/nfpa-research/fire-statistical-reports/home-fires" target="_blank" rel="noopener noreferrer">National Fire Protection Association</a> reports clogged dryer vents are the leading cause of dryer fires.</p><h3>The Numbers Are Alarming</h3>'
);
p16.content = p16.content.replace(
  '</a> for the best value. Call (780)',
  '</a> for the best value. <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">Health Canada</a> recommends regular appliance maintenance to protect indoor air quality. Call (780)'
);

// POST 17: Stony Plain + Spruce Grove location pages
let p17 = posts.find(p => p.id === '17');
p17.content = p17.content.replace(
  '</a> in Stony Plain, Spruce Grov',
  '</a> in <a href="/duct-cleaning-stony-plain">Stony Plain</a>, <a href="/duct-cleaning-spruce-grove">Spruce Grov'
);
// Fix the unclosed tag issue - the replace cuts mid-word "Spruce Grove"
// Let me find actual text
const idx17 = p17.content.indexOf('</a> in Stony Plain, Spruce Grov');
console.log('Post 17 context:', p17.content.substring(Math.max(0, idx17-10), idx17+120));

fs.writeFileSync('./src/data/posts.json', JSON.stringify(posts, null, 2), 'utf8');
console.log('Patch applied.');
