# Testing Guide

Comprehensive testing documentation for the Multi-Site Website Development System.

---

## Table of Contents

1. [Overview](#overview)
2. [Test Suites](#test-suites)
3. [Running Tests](#running-tests)
4. [Test Coverage](#test-coverage)
5. [Writing New Tests](#writing-new-tests)
6. [CI/CD Integration](#cicd-integration)
7. [Troubleshooting](#troubleshooting)

---

## Overview

The Multi-Site Website Development System includes comprehensive test coverage across three primary areas:

- **Unit Tests**: Component and utility function tests
- **Integration Tests**: Quality gates workflow and agent integration
- **End-to-End Tests**: Full client site scaffolding and deployment

### Testing Philosophy

Tests in this system follow these principles:

1. **Automation-First**: All critical workflows are tested automatically
2. **Fast Feedback**: Tests run in <5 minutes to enable rapid iteration
3. **Realistic Scenarios**: Tests simulate actual client site creation and deployment
4. **Self-Documenting**: Test names and assertions clearly describe expected behavior

---

## Test Suites

### 1. Client Site Scaffolding Tests

**Location**: `scripts/create-client-site.test.mjs`

**Purpose**: Validates the automated client site creation script

**Test Categories**:
- Directory structure generation
- Configuration file generation (Astro, Tailwind, package.json)
- Brand guidelines creation
- Sveltia CMS setup
- TypeScript build validation

**Run Command**:
```bash
node scripts/create-client-site.test.mjs
```

**Key Tests**:
- ✅ Creates all required directories (`src/`, `public/`, `src/content/`)
- ✅ Generates valid Astro configuration with correct domain
- ✅ Configures Tailwind CSS with brand colors
- ✅ Creates package.json with all dependencies
- ✅ Generates brand guidelines with client information
- ✅ Sets up Sveltia CMS configuration
- ✅ Produces buildable site with no TypeScript errors

**Example Output**:
```
🧪 Running Client Site Scaffolding Tests

============================================================
Test Suite: Client Site Scaffolding Script
============================================================

✓ Client Site Scaffolding - Directory Structure
  ✓ should create all required directories

✓ Client Site Scaffolding - File Generation
  ✓ should create all required configuration files

✓ Client Site Scaffolding - Configuration Validation
  ✓ should generate valid Astro configuration
  ✓ should generate valid Tailwind configuration with brand colors
  ✓ should generate valid package.json with all dependencies

✓ Client Site Scaffolding - Content Validation
  ✓ should generate brand guidelines with client information
  ✓ should generate valid Sveltia CMS configuration

✓ Client Site Scaffolding - Integration Tests
  ✓ should create a buildable site with no TypeScript errors

8 tests passed (8.2s)
```

---

### 2. Quality Gates Integration Tests

**Location**: `tests/quality-gates.integration.test.mjs`

**Purpose**: Validates the 6-gate quality validation system

**Test Categories**:
- Workflow configuration (YAML structure, triggers, job dependencies)
- Pass/fail criteria for each gate
- Claude Code agent integration
- PR comment generation
- Edge cases and error handling

**Run Command**:
```bash
node tests/quality-gates.integration.test.mjs
```

**Key Tests**:

**Workflow Configuration**:
- ✅ Valid YAML structure with required fields
- ✅ Triggers on pull requests to main branch
- ✅ Defines all 6 quality gates as jobs
- ✅ Enforces sequential execution with `needs` dependencies
- ✅ Includes PR comment job that depends on all gates

**Gate Pass/Fail Criteria**:
- ✅ Gate 1 fails with linting errors
- ✅ Gate 1 fails with TypeScript errors
- ✅ Gate 2 fails if build does not produce `dist/` folder
- ✅ Gate 3 fails with missing meta tags
- ✅ Gate 3 fails with invalid schema markup
- ✅ Gate 4 fails with missing alt text
- ✅ Gate 4 fails with insufficient color contrast
- ✅ Gate 5 fails with missing required frontmatter
- ✅ Gate 6 fails with high/critical security vulnerabilities

**Agent Integration**:
- ✅ Gate 3 references `seo-optimizer` agent
- ✅ Gate 4 references `accessibility-auditor` agent
- ✅ Gate 5 references `content-optimizer` agent
- ✅ Includes instructions for manual agent invocation

**Example Output**:
```
🧪 Running Quality Gates Integration Tests

============================================================
Test Suite: Quality Gates Workflow
============================================================

✓ Quality Gates - Workflow Configuration
  ✓ should have valid YAML structure
  ✓ should trigger on pull requests to main branch
  ✓ should define all 6 quality gates as jobs
  ✓ should enforce sequential gate execution
  ✓ should include PR comment job

✓ Quality Gates - Pass/Fail Criteria
  ✓ Gate 1 should fail with linting errors
  ✓ Gate 2 should fail if build does not produce dist/ folder
  ✓ Gate 3 should fail with missing meta tags
  ✓ Gate 4 should fail with missing alt text
  ✓ Gate 5 should fail with missing required frontmatter
  ✓ Gate 6 should fail with security vulnerabilities

✓ Quality Gates - Claude Code Agent Integration
  ✓ should reference seo-optimizer agent in Gate 3
  ✓ should reference accessibility-auditor agent in Gate 4
  ✓ should reference content-optimizer agent in Gate 5

15 tests passed (2.4s)
```

---

### 3. Unit Tests (Per-Site)

**Location**: `sites/{client-name}/src/**/*.test.ts`

**Purpose**: Component and utility function tests for individual client sites

**Run Command** (for specific site):
```bash
cd sites/dws-web-ai
pnpm test
```

**Run Command** (all sites):
```bash
pnpm test
```

**Test Coverage**:
- Astro component rendering
- SEO utility functions (schema markup generation, meta tag builders)
- Content collection type safety
- Custom JavaScript interactivity

---

## Running Tests

### Run All Tests

```bash
# Run all tests across the workspace
pnpm test
```

### Run Specific Test Suites

```bash
# Scaffolding tests
node scripts/create-client-site.test.mjs

# Quality gates integration tests
node tests/quality-gates.integration.test.mjs

# Specific site tests
cd sites/dws-web-ai && pnpm test
```

### Run Tests in Watch Mode

```bash
# Watch mode for rapid development
cd sites/dws-web-ai
pnpm test --watch
```

### Run Tests with Coverage

```bash
# Generate coverage report
cd sites/dws-web-ai
pnpm test --coverage
```

---

## Test Coverage

### Current Coverage

**Phase 3 Test Coverage** (as of Phase 3 completion):

| Component                  | Coverage | Tests |
|----------------------------|----------|-------|
| Scaffolding Script         | 90%      | 8     |
| Quality Gates Workflow     | 85%      | 15    |
| SEO Utilities              | 80%      | TBD   |
| Accessibility Utilities    | 75%      | TBD   |
| Content Collections        | 70%      | TBD   |

**Target Coverage**: 80%+ across all critical paths

### Coverage Reports

Generate detailed coverage reports:

```bash
cd sites/dws-web-ai
pnpm test --coverage
open coverage/index.html  # View HTML report
```

---

## Writing New Tests

### Test File Naming Conventions

- Unit tests: `{component-name}.test.ts`
- Integration tests: `{feature-name}.integration.test.mjs`
- E2E tests: `{workflow-name}.e2e.test.mjs`

### Test Structure Template

```javascript
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

describe('Feature Name', () => {
  it('should do something specific', async () => {
    // Arrange: Set up test data
    const input = 'test-value';

    // Act: Execute the code under test
    const result = functionUnderTest(input);

    // Assert: Verify expected behavior
    assert.strictEqual(result, 'expected-value');
  });
});
```

### Best Practices

1. **Use Descriptive Test Names**
   - ✅ Good: `should fail with missing alt text`
   - ❌ Bad: `test 1`

2. **Test One Thing Per Test**
   - Each test should validate a single behavior
   - Makes failures easier to diagnose

3. **Use AAA Pattern** (Arrange, Act, Assert)
   - Clear separation of test phases
   - Improves readability

4. **Avoid Test Interdependence**
   - Each test should run independently
   - Use `beforeEach` for setup, `afterEach` for cleanup

5. **Mock External Dependencies**
   - Don't make real API calls in tests
   - Use mocks/stubs for external services

### Example: Testing an SEO Utility Function

```typescript
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { generateSchemaMarkup } from '@workspace/seo-utils';

describe('generateSchemaMarkup', () => {
  it('should generate valid Organization schema', () => {
    const input = {
      name: 'Acme Corp',
      url: 'https://acmecorp.com',
      logo: 'https://acmecorp.com/logo.png'
    };

    const result = generateSchemaMarkup('Organization', input);

    assert.ok(result['@context'] === 'https://schema.org');
    assert.ok(result['@type'] === 'Organization');
    assert.strictEqual(result.name, 'Acme Corp');
  });

  it('should throw error with missing required fields', () => {
    const input = { name: 'Acme Corp' }; // Missing url and logo

    assert.throws(
      () => generateSchemaMarkup('Organization', input),
      /Missing required field: url/
    );
  });
});
```

---

## CI/CD Integration

### GitHub Actions Workflow

Tests run automatically in GitHub Actions on:
- Pull requests to `main` branch
- Pushes to `staging` branch
- Manual workflow dispatch

**Workflow File**: `.github/workflows/quality-gates.yml`

**Test Execution Order**:
1. Gate 1: Code Quality (linting, type-checking, unit tests)
2. Gate 2: Build Validation
3. Gate 3: SEO Compliance (integration tests)
4. Gate 4: Accessibility (integration tests)
5. Gate 5: Content Quality
6. Gate 6: Security

### Viewing Test Results

**In GitHub Pull Requests**:
1. Open your PR on GitHub
2. Scroll to "Checks" section
3. Click "Quality Gates" workflow
4. View detailed results for each gate

**Example PR Comment**:
```markdown
## Quality Gates Report

**Status**: ✅ ALL GATES PASSED (6/6)

| Gate | Status | Details |
|------|--------|---------|
| Gate 1: Code Quality | ✅ PASSED | No errors detected |
| Gate 2: Build Validation | ✅ PASSED | Build successful (42s) |
| Gate 3: SEO Compliance | ✅ PASSED | All meta tags present, schema valid |
| Gate 4: Accessibility | ✅ PASSED | WCAG 2.1 AA compliant |
| Gate 5: Content Quality | ✅ PASSED | All frontmatter valid |
| Gate 6: Security | ✅ PASSED | No vulnerabilities |

**Next Steps**: ✅ Ready to merge!
```

---

## Troubleshooting

### Common Issues

#### Issue: "Cannot find module 'fs-extra'"

**Solution**:
```bash
pnpm install -w fs-extra
```

#### Issue: "Workflow YAML syntax error"

**Solution**:
1. Validate YAML syntax: https://www.yamllint.com/
2. Check for indentation errors (use spaces, not tabs)
3. Run local validation:
   ```bash
   node tests/quality-gates.integration.test.mjs
   ```

#### Issue: "Tests fail in CI but pass locally"

**Common Causes**:
- Environment variable differences
- File path differences (Windows vs. Linux)
- Cached dependencies

**Solution**:
```bash
# Clear caches
pnpm store prune
rm -rf node_modules
pnpm install

# Run tests with same Node version as CI
nvm use 22
pnpm test
```

#### Issue: "Gate 2 (Build) fails with 'dist/ not found'"

**Diagnosis**:
```bash
# Check if build produces dist folder
cd sites/client-name
pnpm build
ls -la dist/
```

**Solution**:
- Verify `astro.config.mjs` has correct output directory
- Check for build errors in Astro configuration
- Ensure all imports resolve correctly

#### Issue: "Gate 3 (SEO) fails with schema validation errors"

**Diagnosis**:
```bash
# Run SEO optimizer agent manually
@seo-optimizer "Audit homepage schema markup"
```

**Solution**:
- Check JSON-LD syntax in page components
- Validate required schema.org properties
- Ensure no duplicate `<script type="application/ld+json">` tags

---

## Next Steps

### Phase 4 Testing Enhancements

- **Performance Tests**: Lighthouse CI integration for Core Web Vitals
- **Visual Regression Tests**: Playwright screenshot comparisons
- **Load Tests**: Artillery.io for multi-site deployment stress testing
- **Agent Testing**: Automated validation of Claude Code agent outputs

### Adding New Test Suites

1. Create test file in appropriate directory
2. Follow naming conventions and structure templates
3. Add test command to `package.json` scripts if needed
4. Update this documentation with new test suite info
5. Integrate with GitHub Actions workflow

---

## Resources

- [Node.js Test Runner](https://nodejs.org/api/test.html) - Built-in testing framework
- [Vitest Documentation](https://vitest.dev/) - Unit testing framework
- [Playwright Testing](https://playwright.dev/) - E2E testing
- [GitHub Actions Docs](https://docs.github.com/en/actions) - CI/CD integration

---

**Last Updated**: November 5, 2025
**Maintained By**: Technical Lead
**Review Frequency**: After each phase completion
