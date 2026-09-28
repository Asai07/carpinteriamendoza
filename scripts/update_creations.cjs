const fs = require('fs');
const path = require('path');

const galeriaDir = path.join(__dirname, 'public', 'galeria');
const files = fs.readdirSync(galeriaDir);

const creations = files.filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png')).map((file, index) => {
  let category = 'Otros';
  let title = 'Proyecto a Medida';
  if (file.startsWith('closets')) { category = 'Closets'; title = 'Closet a Medida'; }
  else if (file.startsWith('cocina')) { category = 'Cocinas'; title = 'Cocina Integral'; }
  else if (file.startsWith('muebles para tv')) { category = 'Muebles para TV'; title = 'Mueble para TV'; }
  else if (file.startsWith('puertas')) { category = 'Otros'; title = 'Puerta a Medida'; }
  else if (file.startsWith('otros')) { category = 'Otros'; title = 'Mueble a Medida'; }

  return {
    id: `galeria-${index}`,
    title: title,
    category: category,
    wood: 'Madera de Alta Calidad',
    tag: 'Artesanal',
    dimensions: 'A medida',
    description: 'Diseño exclusivo fabricado a medida para optimizar el espacio y aportar calidez natural. Cada veta cuenta una historia.',
    detailedStory: 'Construido bajo nuestros estrictos estándares de ebanistería tradicional, ensamblado a mano y protegido con aceites naturales.',
    image: `/galeria/${file}`,
    alt: title,
    destination: 'Proyecto Particular',
    ctaText: 'Ver detalles',
    joinery: 'Ensambles tradicionales',
    finish: 'Aceites botánicos',
    leadTime: 'A cotizar',
    estimatedPrice: 'Bajo presupuesto',
    isWide: false
  };
});

const dataPath = path.join(__dirname, 'src', 'data', 'workshopData.ts');
let content = fs.readFileSync(dataPath, 'utf8');

const startIndex = content.indexOf('export const CREATIONS: CreationItem[] = [');
const endIndex = content.indexOf('export const WOOD_SPECIMENS');

if (startIndex !== -1 && endIndex !== -1) {
  const newContent = content.substring(0, startIndex) + 
                     `export const CREATIONS: CreationItem[] = ${JSON.stringify(creations, null, 2)};\n\n` + 
                     content.substring(endIndex);
  fs.writeFileSync(dataPath, newContent);
  console.log('Updated workshopData.ts');
} else {
  console.log('Could not find boundaries.');
}
