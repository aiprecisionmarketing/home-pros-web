const fs = require('fs');
const posts = JSON.parse(fs.readFileSync('./src/data/posts.json', 'utf8'));

// Helper: replace the Nth occurrence of a plain text phrase (not already inside an <a> tag)
// with a linked version. Returns new string.
function linkNthOccurrence(html, phrase, href, anchorText, n, newTab) {
  const text = anchorText || phrase;
  const tag = newTab
    ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`
    : `<a href="${href}">${text}</a>`;

  let count = 0;
  let pos = 0;
  while (true) {
    const idx = html.indexOf(phrase, pos);
    if (idx === -1) break;

    // Check if this occurrence is already inside an <a> tag
    const before = html.lastIndexOf('<a', idx);
    const closeA = html.lastIndexOf('</a>', idx);

    // Also check if phrase appears in an href attribute
    const contextBefore = html.substring(Math.max(0, idx - 150), idx);
    const inHref = /href=["'][^"']*$/.test(contextBefore);
    const inLink = before > closeA;

    if (!inHref && !inLink) {
      count++;
      if (count === n) {
        html = html.substring(0, idx) + tag + html.substring(idx + phrase.length);
        break;
      }
    }
    pos = idx + phrase.length;
  }
  return html;
}

// ─── POST 1: furnace-cleaning-stony-plain-spruce-grove-guide ───────────────
let p1 = posts.find(p => p.id === '1');

// Internal: duct cleaning → /services/duct-cleaning (1st body occurrence)
p1.content = linkNthOccurrence(p1.content, 'duct cleaning', '/services/duct-cleaning', 'duct cleaning', 1);

// Internal: furnace cleaning → /services/furnace-cleaning (2nd body occurrence)
p1.content = linkNthOccurrence(p1.content, 'furnace cleaning', '/services/furnace-cleaning', 'furnace cleaning', 2);

// External: NADCA near ductwork section
p1.content = p1.content.replace(
  "Even the cleanest furnace can't perform well with clogged ducts.",
  'Even the cleanest furnace can\'t perform well with clogged ducts. According to <a href="https://nadca.com" target="_blank" rel="noopener noreferrer">NADCA (National Air Duct Cleaners Association)</a>, professional cleaning improves system efficiency and indoor air quality.'
);

// External: Health Canada CO warning
p1.content = p1.content.replace(
  'Carbon monoxide from dirty burners is odorless, invisible, and deadly.',
  'Carbon monoxide from dirty burners is odorless, invisible, and deadly — <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">Health Canada</a> identifies CO from fuel-burning appliances as a leading indoor air hazard.'
);

// ─── POST 2: dryer-vent-fire-prevention-stony-plain-spruce-grove ───────────
let p2 = posts.find(p => p.id === '2');

// Internal: dryer vents → /services/dryer-vents (1st body occurrence)
p2.content = linkNthOccurrence(p2.content, 'dryer vents', '/services/dryer-vents', 'dryer vents', 1);

// Internal: duct cleaning → /services/duct-cleaning (1st occurrence in FAQ)
p2.content = linkNthOccurrence(p2.content, 'duct cleaning', '/services/duct-cleaning', 'duct cleaning', 1);

// External: NFPA fire stats
p2.content = p2.content.replace(
  '15,000+ dryer fires occur annually in North America',
  '15,000+ dryer fires occur annually in North America — the <a href="https://www.nfpa.org/education-and-research/research/nfpa-research/fire-statistical-reports/home-fires" target="_blank" rel="noopener noreferrer">National Fire Protection Association</a> identifies clogged dryer vents as the leading cause'
);

// External: Health Canada
p2.content = p2.content.replace(
  'Lint is incredibly flammable.',
  'Lint is incredibly flammable. <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">Health Canada</a> recommends regular appliance maintenance to prevent household fire hazards.'
);

// ─── POST 3: indoor-air-quality-stony-plain-spruce-grove-parkland-county ───
let p3 = posts.find(p => p.id === '3');

// Internal: furnace cleaning → /services/furnace-cleaning (1st occurrence)
p3.content = linkNthOccurrence(p3.content, 'furnace cleaning', '/services/furnace-cleaning', 'furnace cleaning', 1);

// Internal: duct cleaning → /services/duct-cleaning (2nd occurrence = body recommendation)
p3.content = linkNthOccurrence(p3.content, 'duct cleaning', '/services/duct-cleaning', 'duct cleaning', 2);

// Internal: dryer vent cleaning → /services/dryer-vents
p3.content = linkNthOccurrence(p3.content, 'dryer vent cleaning', '/services/dryer-vents', 'dryer vent cleaning', 1);

// External: Health Canada indoor air
p3.content = p3.content.replace(
  'Indoor air in Parkland County homes can be 2-5 times more polluted than outdoor air',
  'Indoor air in Parkland County homes can be 2-5 times more polluted than outdoor air — consistent with <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">Health Canada\'s indoor air quality guidelines</a>'
);

// External: NADCA standards near duct cleaning recommendation
p3.content = p3.content.replace(
  '<strong>Duct Cleaning Every 3-5 Years:</strong>',
  '<strong>Duct Cleaning Every 3-5 Years</strong> (per <a href="https://nadca.com" target="_blank" rel="noopener noreferrer">NADCA standards</a>)<strong>:</strong>'
);

// ─── POST 8: how-often-clean-furnace-alberta ───────────────────────────────
let p8 = posts.find(p => p.id === '8');

// Internal: furnace cleaning → /services/furnace-cleaning (1st)
p8.content = linkNthOccurrence(p8.content, 'furnace cleaning', '/services/furnace-cleaning', 'furnace cleaning', 1);

// Internal: duct cleaning → /services/duct-cleaning (1st)
p8.content = linkNthOccurrence(p8.content, 'duct cleaning', '/services/duct-cleaning', 'duct cleaning', 1);

// Internal: Spruce Grove → /furnace-cleaning-spruce-grove
p8.content = p8.content.replace(
  'Stony Plain, Spruce Grove, Parkland County, and the Greater Edmonton area',
  'Stony Plain, <a href="/furnace-cleaning-spruce-grove">Spruce Grove</a>, Parkland County, and the Greater Edmonton area'
);

// External: NADCA guideline reference
p8.content = p8.content.replace(
  'This is consistent with what most HVAC man',
  'This is consistent with <a href="https://nadca.com" target="_blank" rel="noopener noreferrer">NADCA guidelines</a> and what most HVAC man'
);

// External: NRCan energy efficiency
p8.content = p8.content.replace(
  'lower heating bills',
  'lower heating bills (see <a href="https://natural-resources.canada.ca/energy-efficiency/homes" target="_blank" rel="noopener noreferrer">Natural Resources Canada</a> for home energy efficiency tips)'
);

// ─── POST 9: duct-cleaning-cost-stony-plain-spruce-grove-2026 ─────────────
let p9 = posts.find(p => p.id === '9');

// Internal: duct cleaning → /services/duct-cleaning (1st)
p9.content = linkNthOccurrence(p9.content, 'duct cleaning', '/services/duct-cleaning', 'duct cleaning', 1);

// Internal: Stony Plain + Spruce Grove location pages
p9.content = p9.content.replace(
  'shopping for duct cleaning in Stony Plain or Spruce Grove',
  'shopping for duct cleaning in <a href="/duct-cleaning-stony-plain">Stony Plain</a> or <a href="/duct-cleaning-spruce-grove">Spruce Grove</a>'
);

// External: NADCA
p9.content = p9.content.replace(
  'a local duct cleaning company that has been serving Parkland County',
  'a local duct cleaning company that has been serving Parkland County (and follows <a href="https://nadca.com" target="_blank" rel="noopener noreferrer">NADCA cleaning standards</a>)'
);

// External: Health Canada
p9.content = p9.content.replace(
  'furnace cleaning (some companies exclude this)',
  'furnace cleaning (some companies exclude this) — professional cleaning also directly improves <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">indoor air quality per Health Canada</a>'
);

// ─── POST 10: best-time-furnace-cleaning-alberta ──────────────────────────
let p10 = posts.find(p => p.id === '10');

// Internal: furnace cleaning → /services/furnace-cleaning (1st)
p10.content = linkNthOccurrence(p10.content, 'furnace cleaning', '/services/furnace-cleaning', 'furnace cleaning', 1);

// Internal: Stony Plain + Spruce Grove location pages
p10.content = p10.content.replace(
  'homeowners in Stony Plain, Spruce Grove, and Parkland County is:',
  'homeowners in <a href="/furnace-cleaning-stony-plain">Stony Plain</a>, <a href="/furnace-cleaning-spruce-grove">Spruce Grove</a>, and Parkland County is:'
);

// Internal: duct cleaning → /services/duct-cleaning (1st)
p10.content = linkNthOccurrence(p10.content, 'duct cleaning', '/services/duct-cleaning', 'duct cleaning', 1);

// External: NADCA
p10.content = p10.content.replace(
  'the ideal time for furnace cleaning is late summer or early fall',
  'the ideal time for furnace cleaning is late summer or early fall — a timing recommendation supported by <a href="https://nadca.com" target="_blank" rel="noopener noreferrer">NADCA</a>'
);

// External: NRCan energy savings
p10.content = p10.content.replace(
  'lower your energy bills',
  'lower your energy bills (visit <a href="https://natural-resources.canada.ca/energy-efficiency/homes" target="_blank" rel="noopener noreferrer">Natural Resources Canada</a> for home energy-saving tips)'
);

// ─── POST 11: do-i-need-duct-cleaning-honest-advice ───────────────────────
let p11 = posts.find(p => p.id === '11');

// Internal: duct cleaning → /services/duct-cleaning (1st)
p11.content = linkNthOccurrence(p11.content, 'duct cleaning', '/services/duct-cleaning', 'duct cleaning', 1);

// Internal: Stony Plain + Spruce Grove
p11.content = p11.content.replace(
  'especially those of us in Stony Plain, Spruce Grove, and Parkland County',
  'especially those of us in <a href="/duct-cleaning-stony-plain">Stony Plain</a>, <a href="/duct-cleaning-spruce-grove">Spruce Grove</a>, and Parkland County'
);

// External: Health Canada IAQ
p11.content = p11.content.replace(
  'Here is the truth about when you need duct cleaning',
  'Here is the truth about when you need duct cleaning — backed by <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">Health Canada indoor air quality research</a>'
);

// External: NADCA
p11.content = p11.content.replace(
  'how to make the right decision.',
  'how to make the right decision — using guidance from <a href="https://nadca.com" target="_blank" rel="noopener noreferrer">NADCA, the industry standard-setter</a>.'
);

// ─── POST 12: carbon-monoxide-furnace-safety-stony-plain ──────────────────
let p12 = posts.find(p => p.id === '12');

// Internal: furnace cleaning → /services/furnace-cleaning (1st)
p12.content = linkNthOccurrence(p12.content, 'furnace cleaning', '/services/furnace-cleaning', 'furnace cleaning', 1);

// Internal: Stony Plain + Spruce Grove location pages
p12.content = p12.content.replace(
  'especially in Stony Plain, Spruce Grove, and Parkland County where we rely on our furna',
  'especially in <a href="/furnace-cleaning-stony-plain">Stony Plain</a>, <a href="/furnace-cleaning-spruce-grove">Spruce Grove</a>, and Parkland County where we rely on our furna'
);

// External: Health Canada CO
p12.content = p12.content.replace(
  'CO is odorless, colorless, and deadly',
  'CO is odorless, colorless, and deadly — <a href="https://www.canada.ca/en/health-canada/services/air-quality/carbon-monoxide.html" target="_blank" rel="noopener noreferrer">Health Canada</a> identifies it as a leading cause of accidental poisoning deaths in Canada'
);

// External: NADCA annual recommendation
p12.content = p12.content.replace(
  'Regular professional furnace cleaning is one of the most effective ways to reduce',
  'Regular professional furnace cleaning — recommended annually by <a href="https://nadca.com" target="_blank" rel="noopener noreferrer">NADCA</a> — is one of the most effective ways to reduce'
);

// ─── POST 13: new-home-duct-cleaning-before-moving-in ─────────────────────
let p13 = posts.find(p => p.id === '13');

// Internal: duct cleaning → /services/duct-cleaning (1st)
p13.content = linkNthOccurrence(p13.content, 'duct cleaning', '/services/duct-cleaning', 'duct cleaning', 1);

// Internal: Spruce Grove → /duct-cleaning-spruce-grove
p13.content = p13.content.replace(
  "one of Spruce Grove's growing communities like Greenbury or Harvest",
  'one of <a href="/duct-cleaning-spruce-grove">Spruce Grove</a>\'s growing communities like Greenbury or Harvest'
);

// External: Health Canada IAQ
p13.content = p13.content.replace(
  'Here is why.</p><h3>New Construction Homes</h3>',
  'Here is why — supported by <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">Health Canada\'s indoor air quality guidelines</a>.</p><h3>New Construction Homes</h3>'
);

// External: NADCA change-of-occupancy recommendation
p13.content = p13.content.replace(
  'For previously-owned homes, duct cleaning before move-in is even more important:',
  'For previously-owned homes, duct cleaning before move-in is even more important — <a href="https://nadca.com" target="_blank" rel="noopener noreferrer">NADCA</a> specifically recommends cleaning after any change of occupancy:'
);

// ─── POST 14: pet-owners-duct-cleaning-dogs-cats ──────────────────────────
let p14 = posts.find(p => p.id === '14');

// Internal: duct cleaning → /services/duct-cleaning (1st)
p14.content = linkNthOccurrence(p14.content, 'duct cleaning', '/services/duct-cleaning', 'duct cleaning', 1);

// Internal: Stony Plain + Spruce Grove
p14.content = p14.content.replace(
  'Walk through any Stony Plain or Spruce Grove neighbourhood',
  'Walk through any <a href="/duct-cleaning-stony-plain">Stony Plain</a> or <a href="/duct-cleaning-spruce-grove">Spruce Grove</a> neighbourhood'
);

// External: Health Canada IAQ / pet dander
p14.content = p14.content.replace(
  'dramatic improvement after professional duct cleaning. The reduction in dust',
  'dramatic improvement after professional duct cleaning. The reduction in dust — important for indoor air quality per <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">Health Canada</a>'
);

// External: NADCA pet household frequency
p14.content = p14.content.replace(
  'Pet owners who skip annual duct cleaning pay for it in other ways',
  'Pet owners who skip annual duct cleaning — which <a href="https://nadca.com" target="_blank" rel="noopener noreferrer">NADCA</a> recommends every 2-3 years for pet households — pay for it in other ways'
);

// ─── POST 15: furnace-filter-guide-types-merv-ratings ─────────────────────
let p15 = posts.find(p => p.id === '15');

// Internal: furnace cleaning → /services/furnace-cleaning (1st)
p15.content = linkNthOccurrence(p15.content, 'furnace cleaning', '/services/furnace-cleaning', 'furnace cleaning', 1);

// Internal: duct cleaning → /services/duct-cleaning (1st)
p15.content = linkNthOccurrence(p15.content, 'duct cleaning', '/services/duct-cleaning', 'duct cleaning', 1);

// Internal: Stony Plain + Spruce Grove location pages
p15.content = p15.content.replace(
  'many homeowners in Stony Plain, Spruce Grove, and Parkland County are using the wrong filter',
  'many homeowners in <a href="/furnace-cleaning-stony-plain">Stony Plain</a>, <a href="/furnace-cleaning-spruce-grove">Spruce Grove</a>, and Parkland County are using the wrong filter'
);

// External: Health Canada IAQ
p15.content = p15.content.replace(
  'This is why annual professional duct cleaning is important even if you religiously change your',
  'This is why annual professional duct cleaning — see <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">Health Canada indoor air quality guidelines</a> — is important even if you religiously change your'
);

// External: NRCan filter/energy guidance
p15.content = p15.content.replace(
  'we recommend for most Stony Plain and Spruce Grove homes. Change every 3-4 months.',
  'we recommend for most Stony Plain and Spruce Grove homes. Change every 3-4 months (per <a href="https://natural-resources.canada.ca/energy-efficiency/homes" target="_blank" rel="noopener noreferrer">Natural Resources Canada</a> home maintenance guidance).'
);

// ─── POST 16: dryer-vent-cleaning-fire-safety-essential ───────────────────
let p16 = posts.find(p => p.id === '16');

// Internal: dryer vent cleaning → /services/dryer-vents (1st)
p16.content = linkNthOccurrence(p16.content, 'dryer vent cleaning', '/services/dryer-vents', 'dryer vent cleaning', 1);

// Internal: duct cleaning → /services/duct-cleaning (1st)
p16.content = linkNthOccurrence(p16.content, 'duct cleaning', '/services/duct-cleaning', 'duct cleaning', 1);

// Internal: Stony Plain + Spruce Grove
p16.content = p16.content.replace(
  'professional dryer vent cleaning in Stony Plain, Spruce Grove, Parkland County',
  'professional dryer vent cleaning in <a href="/furnace-cleaning-stony-plain">Stony Plain</a>, <a href="/furnace-cleaning-spruce-grove">Spruce Grove</a>, Parkland County'
);

// External: NFPA fire stats
p16.content = p16.content.replace(
  'y preventable with regular professional dryer vent cleaning.',
  'y preventable with regular professional dryer vent cleaning. The <a href="https://www.nfpa.org/education-and-research/research/nfpa-research/fire-statistical-reports/home-fires" target="_blank" rel="noopener noreferrer">National Fire Protection Association</a> identifies clogged vents as the leading cause of dryer fires.'
);

// External: Health Canada
p16.content = p16.content.replace(
  'combined with your furnace and duct cleaning for the best value.',
  'combined with your furnace and duct cleaning for the best value. <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">Health Canada</a> recommends regular appliance maintenance to protect indoor air quality.'
);

// ─── POST 17: flat-rate-vs-per-vent-duct-cleaning-pricing ─────────────────
let p17 = posts.find(p => p.id === '17');

// Internal: duct cleaning → /services/duct-cleaning (1st)
p17.content = linkNthOccurrence(p17.content, 'duct cleaning', '/services/duct-cleaning', 'duct cleaning', 1);

// Internal: furnace cleaning → /services/furnace-cleaning (1st)
p17.content = linkNthOccurrence(p17.content, 'furnace cleaning', '/services/furnace-cleaning', 'furnace cleaning', 1);

// Internal: Stony Plain + Spruce Grove
p17.content = p17.content.replace(
  'shopped for duct cleaning in Stony Plain, Spruce Grove, or the Edmonton area',
  'shopped for duct cleaning in <a href="/duct-cleaning-stony-plain">Stony Plain</a>, <a href="/duct-cleaning-spruce-grove">Spruce Grove</a>, or the Edmonton area'
);

// External: NADCA consumer guide
p17.content = p17.content.replace(
  'watch out for these common upsells from duct cleaning companies:',
  'watch out for these common upsells from duct cleaning companies (as flagged by <a href="https://nadca.com" target="_blank" rel="noopener noreferrer">NADCA\'s consumer guidelines</a>):'
);

// External: Health Canada
p17.content = p17.content.replace(
  'sanitizing, antimicrobial treatment, dryer vent cleaning) than actually cleaning.',
  'sanitizing, antimicrobial treatment, dryer vent cleaning) than actually cleaning. Check <a href="https://www.canada.ca/en/health-canada/services/air-quality.html" target="_blank" rel="noopener noreferrer">Health Canada\'s air quality guidance</a> on what actually improves indoor air.'
);

// Write updated file
fs.writeFileSync('./src/data/posts.json', JSON.stringify(posts, null, 2), 'utf8');
console.log('SUCCESS: posts.json updated with internal and external links for all 13 content posts.');
