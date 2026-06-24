// scripts/build-variants.ts
import { execFileSync } from 'child_process';
import { existsSync, mkdirSync, cpSync } from 'fs';
import { resolve } from 'path';

const distDir = resolve('dist');
const sitesDir = resolve(distDir, 'sites');

// Ensure output dirs exist
if (!existsSync(sitesDir)) {
  mkdirSync(sitesDir, { recursive: true });
}

console.log('Building gallery...');
execFileSync('pnpm', ['build'], { cwd: resolve('gallery'), stdio: 'inherit' });

// Copy gallery build to dist root
const galleryDist = resolve('gallery', 'dist');
if (existsSync(galleryDist)) {
  cpSync(galleryDist, distDir, { recursive: true });
  console.log('Gallery build copied to dist/');
}

console.log('\nBuild complete. Output in dist/');
console.log('Place variant site builds in dist/sites/<variant-slug>/');
