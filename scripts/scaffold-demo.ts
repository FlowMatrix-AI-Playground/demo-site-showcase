// scripts/scaffold-demo.ts
import { execFileSync } from 'child_process';

const clientSlug = process.argv[2];
if (!clientSlug) {
  console.error('Usage: node --loader tsx scripts/scaffold-demo.ts <client-slug>');
  process.exit(1);
}

const repoName = `demo-${clientSlug}`;
const org = 'FlowMatrix-AI-Playground';

console.log(`Creating ${org}/${repoName}...`);

try {
  execFileSync('gh', [
    'repo', 'create', `${org}/${repoName}`,
    '--template', `${org}/demo-site-showcase`,
    '--public',
    '--clone',
  ], { stdio: 'inherit' });
} catch (err) {
  console.error('Failed to create repo. Is gh CLI authenticated?');
  process.exit(1);
}

console.log(`\nRepo created: https://github.com/${org}/${repoName}`);
console.log(`Cloned to: ./${repoName}`);
console.log('\nNext steps:');
console.log(`  1. cd ${repoName}`);
console.log('  2. Edit gallery/src/data/variants.ts with prospect variant data');
console.log('  3. Build each variant site into dist/sites/<variant-slug>/');
console.log('  4. pnpm run build');
console.log(`  5. wrangler pages deploy dist/ --project-name ${repoName}`);
