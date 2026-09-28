const fs = require('fs');
const path = require('path');

const contextMap = {
  // Light Creams
  '#fcf9f3': { bg: '#111111', text: '#ffffff', border: '#2a2a2a', shadow: '#000000', from: '#111111', via: '#111111', to: '#111111' },
  '#f0e6d2': { bg: '#151515', text: '#f5f5f5', border: '#2a2a2a', shadow: '#000000', from: '#151515', via: '#151515', to: '#151515' },
  '#f0eee8': { bg: '#1c1c1c', text: '#e0e0e0', border: '#333333', shadow: '#000000', from: '#1c1c1c', via: '#1c1c1c', to: '#1c1c1c' },
  '#ebe8e2': { bg: '#1a1a1a', text: '#e0e0e0', border: '#333333', shadow: '#000000', from: '#1a1a1a', via: '#1a1a1a', to: '#1a1a1a' },
  '#eef2f0': { bg: '#111111', text: '#ffffff', border: '#2a2a2a', shadow: '#000000', from: '#111111', via: '#111111', to: '#111111' },
  '#d5c3bb': { bg: '#222222', text: '#aaaaaa', border: '#444444', shadow: '#000000', from: '#222222', via: '#222222', to: '#222222' },
  '#ffdcbf': { bg: '#e3000f', text: '#ffffff', border: '#e3000f', shadow: '#e3000f', from: '#e3000f', via: '#e3000f', to: '#e3000f' },
  
  // Darks / Browns
  '#1c1c18': { bg: '#050505', text: '#ffffff', border: '#222222', shadow: '#000000', from: '#050505', via: '#050505', to: '#050505' },
  '#3a2618': { bg: '#0a0a0a', text: '#ffffff', border: '#333333', shadow: '#000000', from: '#0a0a0a', via: '#0a0a0a', to: '#0a0a0a' },
  '#412311': { bg: '#111111', text: '#ffffff', border: '#333333', shadow: '#000000', from: '#111111', via: '#111111', to: '#111111' },
  '#2d1600': { bg: '#000000', text: '#ffffff', border: '#222222', shadow: '#000000', from: '#000000', via: '#000000', to: '#000000' },
  '#5c4a3d': { bg: '#1a1a1a', text: '#cccccc', border: '#444444', shadow: '#000000', from: '#1a1a1a', via: '#1a1a1a', to: '#1a1a1a' },
  '#50443e': { bg: '#1a1a1a', text: '#aaaaaa', border: '#333333', shadow: '#000000', from: '#1a1a1a', via: '#1a1a1a', to: '#1a1a1a' },
  '#83746d': { bg: '#222222', text: '#888888', border: '#444444', shadow: '#000000', from: '#222222', via: '#222222', to: '#222222' },
  '#a69b93': { bg: '#2a2a2a', text: '#999999', border: '#555555', shadow: '#000000', from: '#2a2a2a', via: '#2a2a2a', to: '#2a2a2a' },
  '#5a3825': { bg: '#222222', text: '#dddddd', border: '#444444', shadow: '#000000', from: '#222222', via: '#222222', to: '#222222' },
  '#895110': { bg: '#e3000f', text: '#e3000f', border: '#e3000f', shadow: '#e3000f', from: '#e3000f', via: '#e3000f', to: '#e3000f' },
  
  // Accents (Rust/Red)
  '#bd5338': { default: '#e3000f' },
  '#a6452e': { default: '#b3000c' },
  
  // Greens (Contact Banner)
  '#2a4536': { bg: '#111111', text: '#ffffff', border: '#e3000f', shadow: '#e3000f', from: '#111111', via: '#111111', to: '#111111' },
  '#3b5948': { bg: '#1a1a1a', text: '#ffffff', border: '#e3000f', shadow: '#e3000f', from: '#1a1a1a', via: '#1a1a1a', to: '#1a1a1a' },
  '#1e3328': { bg: '#0a0a0a', text: '#ffffff', border: '#222222', shadow: '#000000', from: '#0a0a0a', via: '#0a0a0a', to: '#0a0a0a' },
  '#1e382b': { bg: '#0f0f0f', text: '#ffffff', border: '#333333', shadow: '#000000', from: '#0f0f0f', via: '#0f0f0f', to: '#0f0f0f' },
  '#101f0f': { bg: '#050505', text: '#ffffff', border: '#111111', shadow: '#000000', from: '#050505', via: '#050505', to: '#050505' },
  
  // Light Greens
  '#a8c7b4': { default: '#e3000f' },
  '#c7d9cc': { bg: '#1c1c1c', text: '#cccccc', border: '#333333', shadow: '#000000', from: '#1c1c1c', via: '#1c1c1c', to: '#1c1c1c' },
  '#d4e8cf': { bg: '#222222', text: '#dddddd', border: '#444444', shadow: '#000000', from: '#222222', via: '#222222', to: '#222222' },
  '#d5ded8': { bg: '#262626', text: '#dddddd', border: '#444444', shadow: '#000000', from: '#262626', via: '#262626', to: '#262626' },
  
  // Neutral dark
  '#333': { default: '#aaaaaa' }
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.css')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;
  
  // Replace pattern: [prefix]-[#color] or [prefix]--[#color] (arbitrary vars)
  // We use a regex that captures the prefix and the hex color
  // Prefixes: bg, text, border, shadow, from, to, via, ring, stroke, fill, hover:bg, etc.
  const regex = /([a-z-]+)-\[\#([a-fA-F0-9]{3,6})\]/g;
  
  content = content.replace(regex, (match, prefix, hex) => {
    const fullHex = '#' + hex.toLowerCase();
    if (fullHex === '#25d366') return match; // skip WhatsApp
    
    if (contextMap[fullHex]) {
      const mapping = contextMap[fullHex];
      
      // Determine base prefix (ignoring state like hover:, focus:)
      let basePrefix = prefix;
      if (prefix.includes(':')) {
        basePrefix = prefix.split(':').pop();
      }
      
      let newColor = mapping.default || mapping.bg; // fallback
      
      if (basePrefix === 'bg' && mapping.bg) newColor = mapping.bg;
      else if (basePrefix === 'text' && mapping.text) newColor = mapping.text;
      else if (basePrefix === 'border' && mapping.border) newColor = mapping.border;
      else if (basePrefix === 'shadow' && mapping.shadow) newColor = mapping.shadow;
      else if (basePrefix === 'from' && mapping.from) newColor = mapping.from;
      else if (basePrefix === 'to' && mapping.to) newColor = mapping.to;
      else if (basePrefix === 'via' && mapping.via) newColor = mapping.via;
      else if ((basePrefix === 'ring' || basePrefix === 'stroke' || basePrefix === 'fill') && mapping.border) newColor = mapping.border;
      
      changed = true;
      return `${prefix}-[${newColor}]`;
    }
    return match;
  });
  
  // Also handle plain hex codes in index.css (not in [] brackets)
  if (f.endsWith('.css')) {
    const cssRegex = /\#([a-fA-F0-9]{3,6})\b/g;
    content = content.replace(cssRegex, (match, hex) => {
      const fullHex = '#' + hex.toLowerCase();
      if (fullHex === '#25d366') return match;
      if (contextMap[fullHex]) {
        changed = true;
        return contextMap[fullHex].default || contextMap[fullHex].bg || match;
      }
      return match;
    });
  }

  if (changed) {
    fs.writeFileSync(f, content);
    console.log(`Updated ${f}`);
  }
});
