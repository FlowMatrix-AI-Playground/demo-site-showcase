// scripts/validate-configs.ts
import { templates } from '../sections/index.js';

console.log(`Validating ${templates.length} templates...\n`);

let errors = 0;

for (const t of templates) {
  const issues: string[] = [];

  if (!t.id) issues.push('Missing id');
  if (!t.name) issues.push('Missing name');
  if (!t.philosophy) issues.push('Missing philosophy');
  if (!t.keywords || t.keywords.length === 0) issues.push('No keywords');
  if (!t.sectionComposition || t.sectionComposition.length === 0) issues.push('No sections defined');
  if (!t.suggestedFonts || t.suggestedFonts.length === 0) issues.push('No font pairings');
  if (!t.interactionModel) issues.push('Missing interaction model');
  if (!t.interactionModel?.navigation) issues.push('Missing navigation type');
  if (!t.colorStrategy) issues.push('Missing color strategy');
  if (!t.bestFor || t.bestFor.length === 0) issues.push('No bestFor entries');

  // Validate tone pattern matches section count
  const sectionCount = t.sectionComposition.length;
  const toneCount = t.colorStrategy?.tonePattern?.length ?? 0;
  if (toneCount !== sectionCount) {
    issues.push(`Tone pattern length (${toneCount}) != section count (${sectionCount})`);
  }

  // Validate font pairings have googleFonts
  for (const fp of t.suggestedFonts) {
    if (!fp.googleFonts || fp.googleFonts.length === 0) {
      issues.push(`Font pairing ${fp.heading}/${fp.body} missing googleFonts`);
    }
  }

  if (issues.length > 0) {
    console.log(`FAIL: ${t.id} -- ${issues.join(', ')}`);
    errors++;
  } else {
    console.log(`PASS: ${t.id} (${sectionCount} sections, ${t.suggestedFonts.length} font pairs, ${t.interactionModel.navigation})`);
  }
}

console.log(`\n${templates.length - errors}/${templates.length} passed`);
if (errors > 0) process.exit(1);
