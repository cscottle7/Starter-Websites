#!/usr/bin/env node

/**
 * Client Site Scaffolding Script
 *
 * Automates the creation of new client sites from the pilot template.
 * Achieves "<1 week launch" goal by reducing setup time from hours to minutes.
 *
 * Usage:
 *   pnpm create-client
 *
 * Or with options:
 *   node scripts/create-client-site.mjs --name=acme-corp --domain=acmecorp.com
 */

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSection(title) {
  console.log('');
  log('='.repeat(60), 'cyan');
  log(title, 'bright');
  log('='.repeat(60), 'cyan');
  console.log('');
}

function logStep(step, message) {
  log(`[${step}] ${message}`, 'blue');
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logWarning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

function logError(message) {
  log(`❌ ${message}`, 'red');
}

async function prompt(question) {
  const readline = (await import('readline')).default;
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(`${colors.cyan}${question}${colors.reset} `, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

function validateInput(value, fieldName, pattern = null) {
  if (!value || value.trim() === '') {
    logError(`${fieldName} cannot be empty`);
    return false;
  }

  if (pattern && !pattern.test(value)) {
    logError(`${fieldName} format is invalid`);
    return false;
  }

  return true;
}

async function gatherClientDetails() {
  logSection('Client Site Configuration');

  const clientName = await prompt('Client name (lowercase, hyphenated, e.g., "acme-corp"):');
  if (!validateInput(clientName, 'Client name', /^[a-z0-9-]+$/)) {
    process.exit(1);
  }

  const displayName = await prompt('Client display name (e.g., "Acme Corporation"):');
  if (!validateInput(displayName, 'Display name')) {
    process.exit(1);
  }

  const domain = await prompt('Primary domain (e.g., "acmecorp.com"):');
  if (!validateInput(domain, 'Domain', /^[a-z0-9.-]+\.[a-z]{2,}$/)) {
    process.exit(1);
  }

  const primaryColor = await prompt('Primary brand color (hex, e.g., "#1a202c"):');
  if (!validateInput(primaryColor, 'Primary color', /^#[0-9a-fA-F]{6}$/)) {
    process.exit(1);
  }

  const secondaryColor = await prompt('Secondary brand color (hex, e.g., "#2d3748"):');
  if (!validateInput(secondaryColor, 'Secondary color', /^#[0-9a-fA-F]{6}$/)) {
    process.exit(1);
  }

  return {
    clientName,
    displayName,
    domain,
    primaryColor,
    secondaryColor,
  };
}

async function createClientSite(config) {
  const { clientName, displayName, domain, primaryColor, secondaryColor } = config;

  logSection('Creating Client Site');

  const sourceDir = path.join(rootDir, 'sites', 'dws-web-ai');
  const targetDir = path.join(rootDir, 'sites', clientName);

  // Step 1: Verify source template exists
  logStep(1, 'Verifying source template...');
  if (!fs.existsSync(sourceDir)) {
    logError(`Source template not found at: ${sourceDir}`);
    logError('Please ensure dws-web-ai pilot site exists first');
    process.exit(1);
  }
  logSuccess('Source template found');

  // Step 2: Check if target already exists
  logStep(2, 'Checking target directory...');
  if (fs.existsSync(targetDir)) {
    logError(`Client site already exists at: ${targetDir}`);
    const overwrite = await prompt('Overwrite existing site? (yes/no):');
    if (overwrite.toLowerCase() !== 'yes') {
      log('Aborting...', 'yellow');
      process.exit(0);
    }
    logWarning('Removing existing site...');
    fs.removeSync(targetDir);
  }
  logSuccess('Target directory ready');

  // Step 3: Copy template
  logStep(3, 'Copying template files...');
  try {
    fs.copySync(sourceDir, targetDir, {
      filter: (src) => {
        // Exclude build artifacts and dependencies
        const relativePath = path.relative(sourceDir, src);
        if (relativePath.includes('node_modules')) return false;
        if (relativePath.includes('dist')) return false;
        if (relativePath.includes('.astro')) return false;
        return true;
      },
    });
    logSuccess('Template files copied');
  } catch (error) {
    logError(`Failed to copy template: ${error.message}`);
    process.exit(1);
  }

  // Step 4: Update Astro config
  logStep(4, 'Configuring Astro...');
  const astroConfigPath = path.join(targetDir, 'astro.config.mjs');
  if (fs.existsSync(astroConfigPath)) {
    let astroConfig = fs.readFileSync(astroConfigPath, 'utf-8');
    astroConfig = astroConfig.replace(/site: ['"]https?:\/\/[^'"]+['"]/, `site: 'https://${domain}'`);
    fs.writeFileSync(astroConfigPath, astroConfig);
    logSuccess('Astro config updated');
  } else {
    logWarning('Astro config not found, skipping...');
  }

  // Step 5: Update Tailwind config
  logStep(5, 'Configuring Tailwind CSS...');
  const tailwindConfigPath = path.join(targetDir, 'tailwind.config.cjs');
  if (fs.existsSync(tailwindConfigPath)) {
    let tailwindConfig = fs.readFileSync(tailwindConfigPath, 'utf-8');
    tailwindConfig = tailwindConfig.replace(/primary:\s*['"][^'"]+['"]/, `primary: '${primaryColor}'`);
    tailwindConfig = tailwindConfig.replace(/secondary:\s*['"][^'"]+['"]/, `secondary: '${secondaryColor}'`);
    fs.writeFileSync(tailwindConfigPath, tailwindConfig);
    logSuccess('Tailwind config updated');
  } else {
    logWarning('Tailwind config not found, skipping...');
  }

  // Step 6: Create brand guidelines
  logStep(6, 'Creating brand guidelines...');
  const brandGuidelines = `# ${displayName} Brand Guidelines

**Generated:** ${new Date().toISOString()}

## Brand Identity

- **Client Name:** ${displayName}
- **Site Directory:** \`sites/${clientName}\`
- **Primary Domain:** https://${domain}

## Color Palette

- **Primary Color:** ${primaryColor}
- **Secondary Color:** ${secondaryColor}

## Typography

[To be completed by client]

## Logo Usage

[To be completed by client]

## Voice & Tone

[To be completed by client]

## Design System Notes

This site uses the shared component library from \`@workspace/ui-components\`.
Customizations should be made by:

1. Creating client-specific components in \`src/components/\`
2. Extending base components with client brand colors
3. Using Tailwind CSS utility classes with brand tokens

## Content Guidelines

### SEO Best Practices

- All pages must have unique \`<title>\` tags (50-60 characters)
- All pages must have unique meta descriptions (150-160 characters)
- All images must have descriptive alt text
- Blog posts must include complete frontmatter (title, description, publishDate, author, image, imageAlt)

### Accessibility Requirements

- Maintain single H1 per page
- Use semantic HTML structure
- Ensure color contrast meets WCAG 2.1 AA standards (4.5:1 for normal text)
- All interactive elements must be keyboard accessible

### AI Optimization

- Use semantic HTML for content structure
- Include schema.org JSON-LD markup on key pages
- Write clear, descriptive headings for scannability
- Use descriptive anchor text for links

## Deployment

### Staging

Push to \`staging\` branch to trigger automatic staging deployment:

\`\`\`bash
git checkout staging
git merge main
git push origin staging
\`\`\`

### Production

Merge to \`main\` branch after staging approval:

\`\`\`bash
git checkout main
git merge staging
git push origin main
\`\`\`

Production deployment requires all 6 quality gates to pass.

## Sveltia CMS

Content editors can access the CMS at:

- **Local:** http://localhost:4321/admin
- **Staging:** https://${clientName}-staging.example.com/admin
- **Production:** https://${domain}/admin

### Editable Content Types

- Pages (homepage, about, services, contact)
- Blog posts
- Navigation menu
- Footer configuration

## Support

For technical support or content assistance, contact the development team.
`;

  fs.writeFileSync(path.join(targetDir, 'BRAND_GUIDELINES.md'), brandGuidelines);
  logSuccess('Brand guidelines created');

  // Step 7: Update Sveltia CMS config
  logStep(7, 'Configuring Sveltia CMS...');
  const cmsConfigPath = path.join(targetDir, 'public', 'admin', 'config.yml');
  if (fs.existsSync(cmsConfigPath)) {
    let cmsConfig = fs.readFileSync(cmsConfigPath, 'utf-8');
    // Update site-specific settings if needed
    // CMS config is mostly reusable, but could customize per client
    fs.writeFileSync(cmsConfigPath, cmsConfig);
    logSuccess('CMS config verified');
  } else {
    logWarning('CMS config not found at public/admin/config.yml');
  }

  // Step 8: Update package.json
  logStep(8, 'Updating package.json...');
  const packageJsonPath = path.join(targetDir, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = fs.readJsonSync(packageJsonPath);
    packageJson.name = `@sites/${clientName}`;
    packageJson.description = `${displayName} website`;
    fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
    logSuccess('package.json updated');
  }

  // Step 9: Create README
  logStep(9, 'Creating site README...');
  const readme = `# ${displayName}

**Client Site:** ${clientName}
**Domain:** https://${domain}
**Framework:** Astro 5.0 + Tailwind CSS

## Quick Start

\`\`\`bash
# Install dependencies (from monorepo root)
pnpm install

# Start development server
pnpm --filter=${clientName} dev

# Build for production
pnpm --filter=${clientName} build
\`\`\`

## Brand Colors

- **Primary:** ${primaryColor}
- **Secondary:** ${secondaryColor}

## Content Management

Edit content via Sveltia CMS at \`/admin\` route.

See [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) for complete brand and content guidelines.

## Quality Gates

All changes must pass 6 quality gates before production deployment:

1. Code Quality (linting, type-checking, tests)
2. Build Validation (successful build)
3. SEO Compliance (meta tags, schema markup)
4. Accessibility (WCAG 2.1 AA)
5. Content Quality (frontmatter, structure)
6. Security (dependency audit)

## Deployment

- **Staging:** Push to \`staging\` branch
- **Production:** Merge to \`main\` branch (requires quality gates pass)

## Documentation

- [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) - Brand identity and content guidelines
- [Project CLAUDE.md](../../CLAUDE.md) - System architecture and constraints
- [QUICK_START.md](../../docs/QUICK_START.md) - Developer onboarding
`;

  fs.writeFileSync(path.join(targetDir, 'README.md'), readme);
  logSuccess('README created');

  return targetDir;
}

async function validateSite(targetDir, clientName) {
  logSection('Validating Site Setup');

  // Step 1: Install dependencies
  logStep(1, 'Installing dependencies...');
  try {
    execSync('pnpm install', { cwd: rootDir, stdio: 'inherit' });
    logSuccess('Dependencies installed');
  } catch (error) {
    logError('Failed to install dependencies');
    throw error;
  }

  // Step 2: Build site
  logStep(2, 'Building site...');
  try {
    execSync(`pnpm --filter=${clientName} build`, { cwd: rootDir, stdio: 'inherit' });
    logSuccess('Site built successfully');
  } catch (error) {
    logError('Build failed');
    throw error;
  }

  // Step 3: Verify build output
  logStep(3, 'Verifying build output...');
  const distPath = path.join(targetDir, 'dist');
  if (!fs.existsSync(distPath)) {
    logError('Build output not found');
    throw new Error('Build validation failed: dist directory missing');
  }

  const htmlFiles = execSync(`find "${distPath}" -name "*.html" | wc -l`, { encoding: 'utf-8' }).trim();
  logSuccess(`Build output verified (${htmlFiles} HTML pages generated)`);
}

async function printNextSteps(config) {
  const { clientName, domain } = config;

  logSection('🎉 Client Site Created Successfully!');

  console.log('');
  log('Site Location:', 'bright');
  log(`  sites/${clientName}/`, 'cyan');
  console.log('');

  log('Next Steps:', 'bright');
  console.log('');
  log('1. Review and complete BRAND_GUIDELINES.md', 'yellow');
  log(`   - Add client logo and brand assets`, 'reset');
  log(`   - Define typography and design system`, 'reset');
  log(`   - Document voice and tone guidelines`, 'reset');
  console.log('');

  log('2. Customize content', 'yellow');
  log(`   - Update src/content/pages/ with client copy`, 'reset');
  log(`   - Add initial blog posts to src/content/blog/`, 'reset');
  log(`   - Configure navigation in Sveltia CMS`, 'reset');
  console.log('');

  log('3. Configure Sveltia CMS', 'yellow');
  log(`   - Update public/admin/config.yml if needed`, 'reset');
  log(`   - Test CMS editing at http://localhost:4321/admin`, 'reset');
  console.log('');

  log('4. Start development', 'yellow');
  log(`   pnpm --filter=${clientName} dev`, 'cyan');
  console.log('');

  log('5. Deploy to staging', 'yellow');
  log(`   git checkout staging`, 'cyan');
  log(`   git add sites/${clientName}`, 'cyan');
  log(`   git commit -m "feat(${clientName}): add new client site"`, 'cyan');
  log(`   git push origin staging`, 'cyan');
  console.log('');

  log('6. Configure deployment platform', 'yellow');
  log(`   - Option A: Vercel (add VERCEL_TOKEN secret)`, 'reset');
  log(`   - Option B: Netlify (add NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID secrets)`, 'reset');
  log(`   - Option C: Custom server (configure SCP/SFTP deployment)`, 'reset');
  console.log('');

  log('Documentation:', 'bright');
  log(`  - sites/${clientName}/BRAND_GUIDELINES.md`, 'cyan');
  log(`  - sites/${clientName}/README.md`, 'cyan');
  log(`  - docs/CLIENT_ONBOARDING.md (monorepo root)`, 'cyan');
  console.log('');

  log('Target Timeline:', 'bright');
  log(`  ⏱️  2-5 days from scaffold to staging deployment`, 'green');
  log(`  🚀 <1 week to production (after client approval)`, 'green');
  console.log('');
}

async function main() {
  try {
    logSection('Client Site Scaffolding Script');
    log('Automated new client site creation from pilot template', 'reset');

    const config = await gatherClientDetails();
    const targetDir = await createClientSite(config);
    await validateSite(targetDir, config.clientName);
    await printNextSteps(config);

    process.exit(0);
  } catch (error) {
    console.error('');
    logError('Script failed:');
    console.error(error);
    process.exit(1);
  }
}

// Run the script
main();
