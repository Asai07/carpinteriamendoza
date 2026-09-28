import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Intenta cargar variables de entorno de .env
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, '../src/public');
const OUTPUT_FILE = path.resolve(__dirname, '../src/data/generatedCreations.json');

if (!process.env.GEMINI_API_KEY) {
  console.error("ERROR: GEMINI_API_KEY no está definida en tu archivo .env");
  console.error("Por favor, crea un archivo .env en la raíz del proyecto y añade: GEMINI_API_KEY=\"tu_api_key_aqui\"");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const categories = ['Puertas', 'Closets', 'Cocinas', 'Escritorios', 'Comedores', 'Muebles para TV', 'Otros'];

function fileToGenerativePart(filePath, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(filePath)).toString("base64"),
      mimeType
    },
  };
}

async function classifyImage(filePath, fileName) {
  const mimeType = filePath.endsWith('.png') ? 'image/png' : 'image/jpeg';
  const imagePart = fileToGenerativePart(filePath, mimeType);

  const prompt = `Analiza esta foto de un mueble de carpintería. Clasifícalo en UNA de las siguientes categorías exactas: 'Puertas', 'Closets', 'Cocinas', 'Escritorios', 'Comedores', 'Muebles para TV', 'Otros'.
Inventa un título atractivo para la pieza, describe el mueble brevemente pero con detalles de ebanistería, y adivina o sugiere el tipo de madera.
Devuelve tu respuesta EXACTAMENTE y ÚNICAMENTE como un objeto JSON válido con esta estructura (no agregues comillas invertidas de markdown alrededor):
{
  "title": "...",
  "category": "...", 
  "wood": "...",
  "description": "...",
  "tag": "..." 
}`;

    // ... existing logic up to classifyImage definition is fine, we just update the classifyImage try-catch and the run function
    let attempt = 0;
    while (attempt < 3) {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3.6-flash',
          contents: [prompt, imagePart],
          config: {
            responseMimeType: 'application/json'
          }
        });

        const responseText = response.text;
        let data;
        try {
          data = JSON.parse(responseText);
        } catch (e) {
          const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
          data = JSON.parse(cleanJson);
        }

        return {
          id: fileName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase() + '-' + Math.floor(Math.random()*1000),
          title: data.title || "Mueble a Medida",
          category: categories.includes(data.category) ? data.category : "Otros",
          wood: data.wood || "Madera Sólida",
          tag: data.tag || "Artesanal",
          dimensions: "A medida",
          description: data.description || "Diseño artesanal.",
          detailedStory: "Cada detalle ha sido cuidadosamente elaborado en nuestro taller para asegurar durabilidad y belleza.",
          image: `/src/public/${fileName}`,
          alt: data.title || "Mueble de carpintería",
          destination: "Proyecto Particular",
          ctaText: "Ver detalles",
          joinery: "Técnicas tradicionales",
          finish: "Aceites botánicos y ceras",
          leadTime: "A cotizar",
          estimatedPrice: "Bajo presupuesto",
          isWide: false
        };
      } catch (error) {
        if (error.message && error.message.includes("429")) {
          console.log(`Rate limit hit on ${fileName}, waiting 30 seconds...`);
          await new Promise(resolve => setTimeout(resolve, 30000));
          attempt++;
        } else {
          console.error(`Error classifying ${fileName}:`, error.message);
          return null;
        }
      }
    }
    return null;
}

async function run() {
  console.log("Iniciando clasificación de imágenes...");
  const files = fs.readdirSync(PUBLIC_DIR).filter(file => file.match(/\.(jpg|jpeg|png)$/i));
  console.log(`Encontradas ${files.length} imágenes.`);

  let results = [];
  if (fs.existsSync(OUTPUT_FILE)) {
    try {
      results = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
      console.log(`Cargados ${results.length} resultados previos para reanudar.`);
    } catch(e) {}
  }
  
  const processedFiles = new Set(results.map(r => r.image.split('/').pop()));

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (processedFiles.has(file)) {
      continue; // Skip already processed
    }

    console.log(`[${i+1}/${files.length}] Clasificando ${file}...`);
    const filePath = path.join(PUBLIC_DIR, file);
    const item = await classifyImage(filePath, file);
    if (item) {
      results.push(item);
      // Guardar progreso incremental
      fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));
    }
    // Delay de 5s para no saturar la API (Free tier: 15 RPM = 1 req / 4s)
    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  // Hacer que la primera pieza sea destacada
  if (results.length > 0) {
    results[0].isWide = true;
  }

  console.log("Clasificación terminada. Guardando resultados...");
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));
  console.log(`Guardado en ${OUTPUT_FILE}`);
}

run();
