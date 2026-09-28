const fs = require('fs');

function replaceAll(str, mapObj) {
  const re = new RegExp(Object.keys(mapObj).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'gi');
  return str.replace(re, matched => mapObj[matched.toLowerCase()] || mapObj[matched]);
}

// 1. QueHacemosSection.tsx (White/Bone)
let qh = fs.readFileSync('src/components/QueHacemosSection.tsx', 'utf8');
qh = replaceAll(qh, {
  'bg-[#151515]': 'bg-[#fcf9f3]',
  'text-[#ffffff]': 'text-[#111111]',
  'text-[#cccccc]': 'text-[#555555]',
  'bg-[#1a1a1a]': 'bg-[#ffffff]',
  'border-[#333333]': 'border-[#eae2d8]',
  'bg-[#111111]': 'bg-[#111111]' // Keep icon wrapper black
});
// Special fix for the inner shadow bg
qh = qh.replace('bg-[#fcf9f3] rounded-full blur-3xl', 'bg-[#ffffff] rounded-full blur-3xl'); 
// But wait, the original was bg-[#151515] rounded-full blur-3xl. Let's make it a subtle light color like #eae2d8
qh = qh.replace('bg-[#fcf9f3] rounded-full blur-3xl', 'bg-[#eae2d8] rounded-full blur-3xl');
fs.writeFileSync('src/components/QueHacemosSection.tsx', qh);
console.log('Updated QueHacemosSection.tsx');

// 2. MaderasNoblesSection.tsx (White/Bone)
let mn = fs.readFileSync('src/components/MaderasNoblesSection.tsx', 'utf8');
mn = replaceAll(mn, {
  'bg-[#111111]': 'bg-[#ffffff]',
  'text-[#ffffff]': 'text-[#111111]',
  'text-[#cccccc]': 'text-[#555555]',
  'bg-[#151515]': 'bg-[#fcf9f3]',
  'bg-[#1a1a1a]': 'bg-[#ffffff]',
  'border-[#333333]': 'border-[#eae2d8]'
});
fs.writeFileSync('src/components/MaderasNoblesSection.tsx', mn);
console.log('Updated MaderasNoblesSection.tsx');

// 3. CreacionesGallery.tsx (White/Bone background, CTA in black)
let cg = fs.readFileSync('src/components/CreacionesGallery.tsx', 'utf8');
cg = replaceAll(cg, {
  // Main bg
  'bg-[#111111]': 'bg-[#fcf9f3]',
  // Headings
  'text-[#ffffff]': 'text-[#111111]',
  'text-[#cccccc]': 'text-[#555555]',
  // Tab buttons (inactive)
  'bg-[#151515]': 'bg-[#ffffff]',
  'border-[#444444]': 'border-[#eae2d8]',
  // CTA Box (Contacto)
  'bg-[#1c1c1c]': 'bg-[#111111]',
  'border-[#e3000f]': 'border-[#e3000f]',
});
// Need to ensure the inner cards in gallery are white
cg = cg.replace(/bg-white/g, 'bg-[#ffffff]'); // If any
// Contact banner needs to be dark
cg = cg.replace('bg-[#fcf9f3] rounded-full mix-blend-multiply', 'bg-[#111111] rounded-full mix-blend-multiply');
// Wait, the banner is bg-[#111111], but if I replaced all bg-[#111111] -> bg-[#fcf9f3], I messed it up.
fs.writeFileSync('src/components/CreacionesGallery.tsx', cg);
console.log('Updated CreacionesGallery.tsx');

// 4. Footer.tsx (White background, red details)
let ft = fs.readFileSync('src/components/Footer.tsx', 'utf8');
ft = replaceAll(ft, {
  'bg-[#111111]': 'bg-[#ffffff]',
  'bg-[#050505]': 'bg-[#fcf9f3]',
  'bg-[#151515]': 'bg-[#fcf9f3]',
  'bg-[#1a1a1a]': 'bg-[#ffffff]',
  'text-[#cccccc]': 'text-[#555555]',
  'text-[#ffffff]': 'text-[#111111]',
  'text-[#aaaaaa]': 'text-[#777777]',
  'border-[#333333]': 'border-[#eae2d8]',
  'border-[#222222]': 'border-[#eae2d8]'
});
fs.writeFileSync('src/components/Footer.tsx', ft);
console.log('Updated Footer.tsx');
