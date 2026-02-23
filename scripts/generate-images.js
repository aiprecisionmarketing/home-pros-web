const fs = require('fs');
const https = require('https');

const API_KEY = 'AIzaSyCJi2OXZd0zmetpkfPgz5e11Fy-Gx0wYuo';

// Image generation prompts for blog posts
const imagePrompts = [
  {
    filename: 'furnace-cleaning-hero.jpg',
    prompt: 'Professional HVAC technician in red uniform and safety gear cleaning a residential gas furnace in a modern bright basement, wide angle photography, natural lighting, high quality photo-realistic image, clean and professional service industry aesthetic',
  },
  {
    filename: 'furnace-truck-stony-plain.jpg',
    prompt: 'Red service van with "Home Pros Group" branding parked in front of a modern suburban home in Stony Plain Alberta, winter scene with snow, professional service vehicle, photo-realistic, high quality',
  },
  {
    filename: 'dirty-vs-clean-filter.jpg',
    prompt: 'Side-by-side comparison of dirty clogged furnace filter next to brand new clean white filter, educational diagram style, clear labels, professional photography, studio lighting, white background',
  },
  {
    filename: 'technician-inspecting-furnace.jpg',
    prompt: 'Professional male HVAC technician with clipboard inspecting residential furnace heat exchanger with flashlight, safety equipment, red uniform, modern basement setting, natural lighting, photo-realistic',
  },
  {
    filename: 'dryer-vent-fire-hazard.jpg',
    prompt: 'Clogged dryer vent filled with lint accumulation, educational safety image showing fire hazard, dramatic lighting, professional photography, warning educational style',
  },
  {
    filename: 'dryer-vent-cleaning-equipment.jpg',
    prompt: 'Professional dryer vent cleaning equipment with rotary brush system and high-powered vacuum, technician in red uniform working on residential dryer vent, modern laundry room, photo-realistic',
  },
  {
    filename: 'clean-dryer-vent-before-after.jpg',
    prompt: 'Before and after comparison of dryer vent cleaning, split screen showing clogged dirty vent versus clean cleared vent, professional service photography, educational diagram style',
  },
  {
    filename: 'indoor-air-quality-family.jpg',
    prompt: 'Happy Canadian family breathing fresh clean air in bright modern living room, large windows with natural light, air purifier visible, comfortable home environment, lifestyle photography, photo-realistic',
  },
  {
    filename: 'hvac-filter-comparison-chart.jpg',
    prompt: 'Educational infographic showing different MERV filter ratings side by side, MERV 8, 11, 13, and HEPA filters comparison, clean professional design, labels and specifications, educational style',
  },
  {
    filename: 'technician-duct-cleaning.jpg',
    prompt: 'HVAC technician cleaning air duct system with professional equipment in residential home, red uniform, modern interior, natural lighting, professional service photography, photo-realistic',
  }
];

console.log('🎨 Image Generation Prompts Ready!\n');
console.log('Since Google AI Studio API primarily supports text generation with Gemini,');
console.log('you can use these prompts with image generation services like:\n');
console.log('1. DALL-E 3 (via ChatGPT Plus)');
console.log('2. Midjourney');
console.log('3. Leonardo.ai (free)');
console.log('4. Ideogram (free)\n');
console.log('=' .repeat(80));

imagePrompts.forEach((img, index) => {
  console.log(`\n📸 Image ${index + 1}: ${img.filename}`);
  console.log(`Prompt: ${img.prompt}`);
  console.log('-'.repeat(80));
});

console.log('\n\n💡 ALTERNATIVE: If you have access to Imagen API, I can help integrate that!');
console.log('The provided API key appears to be for Google AI Studio (Gemini/text models).');
console.log('\nWould you like me to help you get these images another way?');
