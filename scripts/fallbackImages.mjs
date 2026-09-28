import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, '../src/public');
const OUTPUT_FILE = path.resolve(__dirname, '../src/data/generatedCreations.json');

const categories = ['Puertas', 'Closets', 'Cocinas', 'Escritorios', 'Comedores', 'Muebles para TV', 'Otros'];
const woods = ['Nogal Americano', 'Roble Europeo', 'Fresno Olivo', 'Castaño del Norte', 'Olivo Centenario', 'Teca Recuperada', 'Pino Radiata'];

function generateFallbackItem(fileName) {
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomWood = woods[Math.floor(Math.random() * woods.length)];
  
  return {
    id: fileName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase() + '-' + Math.floor(Math.random()*1000),
    title: "Pieza a Medida en " + randomWood,
    category: randomCategory,
    wood: randomWood,
    tag: "Artesanal",
    dimensions: "A medida",
    description: "Diseño exclusivo fabricado a medida para optimizar el espacio y aportar calidez natural. Cada veta cuenta una historia.",
    detailedStory: "Construido bajo nuestros estrictos estándares de ebanistería tradicional, ensamblado a mano y protegido con aceites naturales.",
    image: `/src/public/${fileName}`,
    alt: `Mueble de carpintería - ${randomCategory}`,
    destination: "Proyecto Particular",
    ctaText: "Ver detalles",
    joinery: "Ensambles tradicionales",
    finish: "Aceites botánicos",
    leadTime: "A cotizar",
    estimatedPrice: "Bajo presupuesto",
    isWide: false
  };
}

const files = fs.readdirSync(PUBLIC_DIR).filter(file => file.match(/\.(jpg|jpeg|png)$/i));
let results = [];

if (fs.existsSync(OUTPUT_FILE)) {
  try {
    results = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
    console.log(`Cargados ${results.length} resultados previos clasificados por IA.`);
  } catch(e) {}
}

const processedFiles = new Set(results.map(r => r.image.split('/').pop()));

for (const file of files) {
  if (!processedFiles.has(file)) {
    results.push(generateFallbackItem(file));
  }
}

if (results.length > 0) {
  results[0].isWide = true;
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));
console.log(`Se han completado los ${results.length} elementos. Guardado en ${OUTPUT_FILE}`);
