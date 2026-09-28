import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.resolve(__dirname, '../src/data/workshopData.ts');
const jsonPath = path.resolve(__dirname, '../src/data/generatedCreations.json');

const content = fs.readFileSync(dataPath, 'utf-8');
const creationsJson = fs.readFileSync(jsonPath, 'utf-8');

const regex = /export const CREATIONS: CreationItem\[\] = \[[\s\S]*?\];/;
const newContent = content.replace(regex, `export const CREATIONS: CreationItem[] = ${creationsJson};`);

fs.writeFileSync(dataPath, newContent);
console.log('workshopData.ts updated with 47 creations.');
