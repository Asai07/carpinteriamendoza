const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  // Replace bg-white with bg-[#151515] or bg-[#1a1a1a] depending on usage
  // We'll replace all bg-white with bg-[#151515] to ensure dark theme consistency
  const original = content;

  content = content.replace(/bg-white\/90/g, 'bg-[#151515]/90');
  content = content.replace(/bg-white\/80/g, 'bg-[#151515]/80');
  content = content.replace(/bg-white\/50/g, 'bg-[#151515]/50');
  content = content.replace(/bg-white\/10/g, 'bg-[#151515]/10');
  content = content.replace(/bg-white/g, 'bg-[#151515]');

  // Fix specific edge cases where the script might have changed from/via/to colors 
  // that were meant to be transparent to black
  // and handle borders if needed
  content = content.replace(/border-white/g, 'border-[#333333]');
  
  if (content !== original) {
    fs.writeFileSync(f, content);
    console.log(`Updated ${f}`);
  }
});
