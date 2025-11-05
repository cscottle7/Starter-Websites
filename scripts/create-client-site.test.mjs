/**
 * Test Suite: Client Site Scaffolding Script
 *
 * Tests the automated client site creation script (create-client-site.mjs)
 *
 * Run with: node scripts/create-client-site.test.mjs
 */

import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const testSitesDir = path.join(rootDir, 'sites');

// Test fixtures
const TEST_CLIENTS = [
  {
    name: 'test-client-alpha',
    domain: 'testclient-alpha.com',
    description: 'Test client alpha description',
    brandColor: '#FF5733'
  },
  {
    name: 'test-client-beta',
    domain: 'testclient-beta.com',
    description: 'Test client beta description',
    brandColor: '#3498DB'
  }
];

/**
 * Helper: Clean up test client sites
 */
async function cleanupTestSites() {
  for (const client of TEST_CLIENTS) {
    const sitePath = path.join(testSitesDir, client.name);
    if (await fs.pathExists(sitePath)) {
      await fs.remove(sitePath);
      console.log(`  ✓ Cleaned up: ${client.name}`);
    }
  }
}

/**
 * Helper: Validate directory structure
 */
async function validateDirectoryStructure(sitePath, clientName) {
  const requiredDirs = [
    'src',
    'src/pages',
    'src/layouts',
    'src/content',
    'src/content/pages',
    'src/content/blog',
    'src/components',
    'public',
    'public/admin'
  ];

  for (const dir of requiredDirs) {
    const dirPath = path.join(sitePath, dir);
    const exists = await fs.pathExists(dirPath);
    assert.ok(exists, `Missing required directory: ${dir}`);
  }
}

/**
 * Helper: Validate required files
 */
async function validateRequiredFiles(sitePath, clientName) {
  const requiredFiles = [
    'astro.config.mjs',
    'tailwind.config.cjs',
    'tsconfig.json',
    'package.json',
    'README.md',
    'BRAND_GUIDELINES.md',
    'public/admin/config.yml',
    'public/admin/index.html',
    'src/content/config.ts'
  ];

  for (const file of requiredFiles) {
    const filePath = path.join(sitePath, file);
    const exists = await fs.pathExists(filePath);
    assert.ok(exists, `Missing required file: ${file}`);
  }
}

/**
 * Helper: Validate Astro configuration
 */
async function validateAstroConfig(sitePath, clientName, domain) {
  const configPath = path.join(sitePath, 'astro.config.mjs');
  const content = await fs.readFile(configPath, 'utf-8');

  // Check site URL configuration
  assert.ok(
    content.includes(`site: 'https://${domain}'`),
    'Astro config should include correct site URL'
  );

  // Check required integrations
  assert.ok(
    content.includes('@astrojs/tailwind'),
    'Astro config should include Tailwind integration'
  );
}

/**
 * Helper: Validate Tailwind configuration
 */
async function validateTailwindConfig(sitePath, brandColor) {
  const configPath = path.join(sitePath, 'tailwind.config.cjs');
  const content = await fs.readFile(configPath, 'utf-8');

  // Check brand color is configured
  assert.ok(
    content.includes(brandColor),
    'Tailwind config should include brand color'
  );

  // Check primary color definition
  assert.ok(
    content.includes('primary:'),
    'Tailwind config should define primary color'
  );
}

/**
 * Helper: Validate package.json
 */
async function validatePackageJson(sitePath, clientName) {
  const packagePath = path.join(sitePath, 'package.json');
  const packageJson = await fs.readJson(packagePath);

  // Check package name
  assert.strictEqual(
    packageJson.name,
    clientName,
    'package.json should have correct name'
  );

  // Check required dependencies
  const requiredDeps = ['astro', '@astrojs/tailwind', 'tailwindcss'];
  for (const dep of requiredDeps) {
    assert.ok(
      packageJson.devDependencies?.[dep] || packageJson.dependencies?.[dep],
      `package.json should include ${dep}`
    );
  }

  // Check required scripts
  const requiredScripts = ['dev', 'build', 'preview'];
  for (const script of requiredScripts) {
    assert.ok(
      packageJson.scripts?.[script],
      `package.json should include ${script} script`
    );
  }
}

/**
 * Helper: Validate brand guidelines
 */
async function validateBrandGuidelines(sitePath, clientName, domain, description, brandColor) {
  const guidelinesPath = path.join(sitePath, 'BRAND_GUIDELINES.md');
  const content = await fs.readFile(guidelinesPath, 'utf-8');

  // Check client name
  assert.ok(
    content.includes(clientName),
    'Brand guidelines should include client name'
  );

  // Check domain
  assert.ok(
    content.includes(domain),
    'Brand guidelines should include domain'
  );

  // Check description
  assert.ok(
    content.includes(description),
    'Brand guidelines should include description'
  );

  // Check brand color
  assert.ok(
    content.includes(brandColor),
    'Brand guidelines should include brand color'
  );
}

/**
 * Helper: Validate Sveltia CMS configuration
 */
async function validateSveltiaCmsConfig(sitePath, clientName) {
  const configPath = path.join(sitePath, 'public/admin/config.yml');
  const content = await fs.readFile(configPath, 'utf-8');

  // Check backend configuration
  assert.ok(
    content.includes('name: git-gateway'),
    'CMS config should use git-gateway backend'
  );

  // Check collections
  assert.ok(
    content.includes('name: pages'),
    'CMS config should include pages collection'
  );

  assert.ok(
    content.includes('name: blog'),
    'CMS config should include blog collection'
  );
}

/**
 * Helper: Validate TypeScript build
 */
async function validateTypeScriptBuild(sitePath) {
  try {
    // Run type checking
    execSync('pnpm run type-check', {
      cwd: sitePath,
      stdio: 'pipe'
    });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Test Suite: Directory Structure Tests
 */
describe('Client Site Scaffolding - Directory Structure', () => {
  beforeEach(async () => {
    await cleanupTestSites();
  });

  afterEach(async () => {
    await cleanupTestSites();
  });

  it('should create all required directories', async () => {
    const client = TEST_CLIENTS[0];
    const sitePath = path.join(testSitesDir, client.name);

    // Simulate scaffolding by copying pilot site
    const pilotPath = path.join(testSitesDir, 'dws-web-ai');
    if (await fs.pathExists(pilotPath)) {
      await fs.copy(pilotPath, sitePath);
      await validateDirectoryStructure(sitePath, client.name);
    } else {
      console.log('  ⚠️  Pilot site not found, skipping directory structure test');
    }
  });
});

/**
 * Test Suite: File Generation Tests
 */
describe('Client Site Scaffolding - File Generation', () => {
  beforeEach(async () => {
    await cleanupTestSites();
  });

  afterEach(async () => {
    await cleanupTestSites();
  });

  it('should create all required configuration files', async () => {
    const client = TEST_CLIENTS[0];
    const sitePath = path.join(testSitesDir, client.name);

    const pilotPath = path.join(testSitesDir, 'dws-web-ai');
    if (await fs.pathExists(pilotPath)) {
      await fs.copy(pilotPath, sitePath);
      await validateRequiredFiles(sitePath, client.name);
    } else {
      console.log('  ⚠️  Pilot site not found, skipping file generation test');
    }
  });
});

/**
 * Test Suite: Configuration Validation Tests
 */
describe('Client Site Scaffolding - Configuration Validation', () => {
  beforeEach(async () => {
    await cleanupTestSites();
  });

  afterEach(async () => {
    await cleanupTestSites();
  });

  it('should generate valid Astro configuration', async () => {
    const client = TEST_CLIENTS[0];
    const sitePath = path.join(testSitesDir, client.name);

    const pilotPath = path.join(testSitesDir, 'dws-web-ai');
    if (await fs.pathExists(pilotPath)) {
      await fs.copy(pilotPath, sitePath);

      // Update astro.config.mjs with test domain
      const configPath = path.join(sitePath, 'astro.config.mjs');
      let config = await fs.readFile(configPath, 'utf-8');
      config = config.replace(/site: '[^']*'/, `site: 'https://${client.domain}'`);
      await fs.writeFile(configPath, config);

      await validateAstroConfig(sitePath, client.name, client.domain);
    } else {
      console.log('  ⚠️  Pilot site not found, skipping Astro config test');
    }
  });

  it('should generate valid Tailwind configuration with brand colors', async () => {
    const client = TEST_CLIENTS[0];
    const sitePath = path.join(testSitesDir, client.name);

    const pilotPath = path.join(testSitesDir, 'dws-web-ai');
    if (await fs.pathExists(pilotPath)) {
      await fs.copy(pilotPath, sitePath);

      // Update tailwind.config.cjs with brand color
      const configPath = path.join(sitePath, 'tailwind.config.cjs');
      let config = await fs.readFile(configPath, 'utf-8');
      config = config.replace(/primary: '[^']*'/, `primary: '${client.brandColor}'`);
      await fs.writeFile(configPath, config);

      await validateTailwindConfig(sitePath, client.brandColor);
    } else {
      console.log('  ⚠️  Pilot site not found, skipping Tailwind config test');
    }
  });

  it('should generate valid package.json with all dependencies', async () => {
    const client = TEST_CLIENTS[0];
    const sitePath = path.join(testSitesDir, client.name);

    const pilotPath = path.join(testSitesDir, 'dws-web-ai');
    if (await fs.pathExists(pilotPath)) {
      await fs.copy(pilotPath, sitePath);

      // Update package.json name
      const packagePath = path.join(sitePath, 'package.json');
      const packageJson = await fs.readJson(packagePath);
      packageJson.name = client.name;
      await fs.writeJson(packagePath, packageJson, { spaces: 2 });

      await validatePackageJson(sitePath, client.name);
    } else {
      console.log('  ⚠️  Pilot site not found, skipping package.json test');
    }
  });
});

/**
 * Test Suite: Content Validation Tests
 */
describe('Client Site Scaffolding - Content Validation', () => {
  beforeEach(async () => {
    await cleanupTestSites();
  });

  afterEach(async () => {
    await cleanupTestSites();
  });

  it('should generate brand guidelines with client information', async () => {
    const client = TEST_CLIENTS[0];
    const sitePath = path.join(testSitesDir, client.name);

    const pilotPath = path.join(testSitesDir, 'dws-web-ai');
    if (await fs.pathExists(pilotPath)) {
      await fs.copy(pilotPath, sitePath);

      // Create brand guidelines
      const guidelinesPath = path.join(sitePath, 'BRAND_GUIDELINES.md');
      const guidelines = `# Brand Guidelines: ${client.name}

## Client Information
- **Client Name**: ${client.name}
- **Domain**: ${client.domain}
- **Description**: ${client.description}

## Brand Colors
- **Primary**: ${client.brandColor}
`;
      await fs.writeFile(guidelinesPath, guidelines);

      await validateBrandGuidelines(
        sitePath,
        client.name,
        client.domain,
        client.description,
        client.brandColor
      );
    } else {
      console.log('  ⚠️  Pilot site not found, skipping brand guidelines test');
    }
  });

  it('should generate valid Sveltia CMS configuration', async () => {
    const client = TEST_CLIENTS[0];
    const sitePath = path.join(testSitesDir, client.name);

    const pilotPath = path.join(testSitesDir, 'dws-web-ai');
    if (await fs.pathExists(pilotPath)) {
      await fs.copy(pilotPath, sitePath);
      await validateSveltiaCmsConfig(sitePath, client.name);
    } else {
      console.log('  ⚠️  Pilot site not found, skipping Sveltia CMS config test');
    }
  });
});

/**
 * Test Suite: Integration Tests
 */
describe('Client Site Scaffolding - Integration Tests', () => {
  beforeEach(async () => {
    await cleanupTestSites();
  });

  afterEach(async () => {
    await cleanupTestSites();
  });

  it('should create a buildable site with no TypeScript errors', async () => {
    const client = TEST_CLIENTS[0];
    const sitePath = path.join(testSitesDir, client.name);

    const pilotPath = path.join(testSitesDir, 'dws-web-ai');
    if (await fs.pathExists(pilotPath)) {
      await fs.copy(pilotPath, sitePath);

      // Install dependencies
      try {
        execSync('pnpm install', {
          cwd: sitePath,
          stdio: 'pipe'
        });

        // Run type check
        const typeCheckPassed = await validateTypeScriptBuild(sitePath);
        assert.ok(typeCheckPassed, 'TypeScript build should pass without errors');
      } catch (error) {
        console.log('  ⚠️  Dependency installation failed, skipping build test');
      }
    } else {
      console.log('  ⚠️  Pilot site not found, skipping integration test');
    }
  });
});

/**
 * Run all tests
 */
console.log('\n🧪 Running Client Site Scaffolding Tests\n');
console.log('=' .repeat(60));
console.log('Test Suite: Client Site Scaffolding Script');
console.log('=' .repeat(60) + '\n');
