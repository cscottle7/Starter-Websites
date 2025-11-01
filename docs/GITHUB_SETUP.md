# GitHub Repository Setup Guide

This document provides instructions for configuring GitHub repository settings, branch protection rules, and team permissions.

## Repository Configuration

### 1. Repository Visibility
**Recommendation:** Public repository

**Rationale:**
- Free unlimited GitHub Actions minutes for public repos (60 hours vs 2,000 minutes for private)
- Enables community contributions
- Demonstrates open-source best practices
- No client-specific code in this template repo

**Alternative:** Private repository if client work requires confidentiality (note: costs apply for Actions beyond free tier)

### 2. Repository Settings
Navigate to **Settings** → **General**:
- Enable **Issues** for bug tracking
- Enable **Projects** for task management
- Enable **Discussions** for team collaboration
- Enable **Wiki** for extended documentation (optional)
- Disable **Wikis** if documentation stays in `docs/` (recommended)

### 3. GitHub Actions
Navigate to **Settings** → **Actions** → **General**:
- **Actions permissions:** Allow all actions and reusable workflows
- **Workflow permissions:** Read and write permissions
- **Allow GitHub Actions to create and approve pull requests:** Enabled (for automated quality checks)

## Branch Protection Rules

### Main Branch Protection
Navigate to **Settings** → **Branches** → **Add rule**

**Branch name pattern:** `main`

#### Required Settings:
- ✅ **Require a pull request before merging**
  - ✅ Require approvals: **1** (increase to 2 for production systems)
  - ✅ Dismiss stale pull request approvals when new commits are pushed
  - ✅ Require review from Code Owners

- ✅ **Require status checks to pass before merging**
  - ✅ Require branches to be up to date before merging
  - Required status checks (add after Phase 3 CI/CD setup):
    - `lint` - ESLint and Prettier checks
    - `type-check` - TypeScript compilation
    - `test` - Unit tests
    - `build` - Production build validation

- ✅ **Require conversation resolution before merging**
  - All PR comments must be resolved before merge

- ✅ **Require linear history**
  - Prevents merge commits, enforces rebase or squash merges
  - Keeps commit history clean

- ❌ **Do not allow bypassing the above settings**
  - Even administrators must follow rules

- ✅ **Restrict who can push to matching branches**
  - Only allow technical lead to push directly (emergency hotfixes only)

- ✅ **Allow force pushes: Disabled**
  - Protects against history rewriting

- ✅ **Allow deletions: Disabled**
  - Prevents accidental branch deletion

#### Optional Settings:
- ✅ **Require deployments to succeed before merging** (if using GitHub Environments)
- ✅ **Lock branch** (for production branches only)

### Staging Branch Protection
Navigate to **Settings** → **Branches** → **Add rule**

**Branch name pattern:** `staging`

#### Required Settings:
- ✅ **Require status checks to pass before merging**
  - Same checks as main branch

- ✅ **Require linear history**

- ✅ **Allow force pushes: Disabled**

- ✅ **Allow deletions: Disabled**

#### Less Restrictive:
- ⚠️ **Require pull request:** Optional (can commit directly to staging for rapid iteration)

## Team Permissions

### Recommended Team Structure
Navigate to **Settings** → **Collaborators and teams**

#### 1. Technical Lead Team
- **Permission level:** Admin
- **Members:** Project technical lead(s)
- **Responsibilities:**
  - Repository configuration
  - Branch protection management
  - CI/CD pipeline setup
  - Emergency hotfix access

#### 2. Senior Developers Team
- **Permission level:** Write
- **Members:** Senior developers, frontend/backend leads
- **Responsibilities:**
  - Code review (required for shared packages)
  - Merge pull requests
  - Release management

#### 3. Developers Team
- **Permission level:** Write
- **Members:** All contributing developers
- **Responsibilities:**
  - Create pull requests
  - Implement features
  - Write tests and documentation

#### 4. Content Team (Optional)
- **Permission level:** Write (client site directories only)
- **Members:** Content strategists, copywriters
- **Responsibilities:**
  - Content updates via Sveltia CMS
  - Documentation improvements

#### 5. External Contributors / Contractors
- **Permission level:** Read
- **Members:** External contributors, contractors during onboarding
- **Responsibilities:**
  - Fork repository
  - Submit pull requests from forks
  - No direct commit access

## Code Owners Configuration

The `.github/CODEOWNERS` file defines review requirements:

```plaintext
# Default owner for everything
* @technical-lead

# Shared packages require extra scrutiny
/packages/ @technical-lead @senior-developer

# UI components - design and accessibility review
/packages/ui-components/ @technical-lead @frontend-lead

# SEO utilities - SEO specialist review
/packages/seo-utils/ @technical-lead @seo-specialist

# CMS configuration - content strategy review
/packages/cms-config/ @technical-lead @content-strategist
```

**Update CODEOWNERS with actual GitHub usernames:**
1. Replace `@technical-lead` with actual username (e.g., `@johndoe`)
2. Replace role-based placeholders with real team member usernames
3. Add client-specific ownership rules as sites are added

## Webhooks for Automation

### Sveltia CMS Content Updates
Navigate to **Settings** → **Webhooks** → **Add webhook**

**Payload URL:** Your deployment service endpoint (Vercel, Netlify, or custom server)
**Content type:** `application/json`
**Events:** Select individual events:
- ✅ Pull requests (for editorial workflow)
- ✅ Pushes (for automatic deployments)
- ✅ Releases (for versioned deployments)

### Claude Code on Web Integration
Navigate to **Settings** → **Integrations** → **GitHub Apps**
- Install Claude Code app (if using automated quality checks via webhooks)

## GitHub Actions Secrets

Navigate to **Settings** → **Secrets and variables** → **Actions**

### Required Secrets (Phase 3 - CI/CD):
- `VERCEL_TOKEN` - Vercel deployment token (if using Vercel)
- `NETLIFY_AUTH_TOKEN` - Netlify auth token (if using Netlify)
- `SLACK_WEBHOOK` - Slack notifications webhook (optional)

### Repository Variables:
- `NODE_VERSION` - Node.js version (e.g., `18.x`)
- `PNPM_VERSION` - pnpm version (e.g., `8.x`)

## Initial Repository Setup Checklist

After creating the repository on GitHub:

- [ ] Configure repository visibility (public/private)
- [ ] Enable Issues, Projects, Discussions
- [ ] Configure GitHub Actions permissions
- [ ] Add branch protection rules for `main`
- [ ] Add branch protection rules for `staging`
- [ ] Create `staging` branch from `main`
- [ ] Update `.github/CODEOWNERS` with real GitHub usernames
- [ ] Invite team members and assign roles
- [ ] Configure webhooks for deployment automation
- [ ] Add necessary GitHub Actions secrets
- [ ] Test branch protection (try direct commit to main - should be blocked)
- [ ] Test pull request workflow (create test PR, verify checks run)

## Verifying Configuration

### Test Branch Protection:
```bash
# This should fail with "protected branch" error
git checkout main
git commit --allow-empty -m "test: verify branch protection"
git push origin main
```

### Test Pull Request Workflow:
```bash
# Create feature branch
git checkout -b test/verify-pr-workflow

# Make a change
echo "# Test PR" >> test.md
git add test.md
git commit -m "test: verify PR workflow"

# Push and create PR
git push origin test/verify-pr-workflow
# Go to GitHub UI and create pull request
# Verify: CODEOWNERS review requested, status checks pending
```

## Maintenance

### Quarterly Review:
- Review and update CODEOWNERS file
- Audit team member access levels
- Review GitHub Actions usage/costs
- Update branch protection rules as needed

### When Adding New Client Site:
- Add client-specific ownership rules to CODEOWNERS
- Add client-specific status checks (if needed)
- Update webhook configurations for new deployment targets

---

## Support

For questions about GitHub configuration:
- See [GitHub Docs - Branch Protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- See [GitHub Docs - Code Owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- Contact technical lead for access issues
