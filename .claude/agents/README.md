# Claude Code Agents - Multi-Site Website Development System

This directory contains specialized Claude Code agents for automating quality assurance, content optimization, and deployment workflows across the multi-site platform.

## Directory Structure

```
.claude/agents/
├── website/                    # Website-specific specialist agents
│   ├── seo-optimizer.md       # SEO compliance and schema markup validation
│   ├── accessibility-auditor.md  # WCAG 2.1 AA accessibility testing
│   ├── content-optimizer.md   # Content quality and AI readability
│   ├── security-auditor.md    # Security vulnerability scanning
│   ├── quality-assessor.md    # Code quality and best practices
│   └── performance-tuner.md   # Performance optimization and analysis
├── orchestrators/             # Workflow orchestration agents
│   ├── quality-gate-orchestrator.md  # 6-gate sequential quality validation
│   └── workflow-orchestrator.md      # General workflow automation
└── README.md                  # This file
```

## Agent Overview

### Website Specialist Agents

#### SEO Optimizer (`@seo-optimizer`)
**Purpose:** Ensures all websites meet SEO best practices and are optimized for AI crawler indexing.

**Key Responsibilities:**
- Schema markup validation (JSON-LD)
- Meta tag analysis (title, description, Open Graph, Twitter Cards)
- Heading hierarchy validation
- AI crawler readiness (GPTBot, ClaudeBot access)
- Sitemap and robots.txt validation

**Pass Criteria:** ≥90/100 overall SEO score

**Usage:**
```bash
# Manual invocation
@seo-optimizer audit sites/dws-web-ai

# Via quality gates (automatic)
Triggered on: PR to main, content changes, page updates
```

---

#### Accessibility Auditor (`@accessibility-auditor`)
**Purpose:** Automates WCAG 2.1 Level AA compliance testing using axe-core and Playwright.

**Key Responsibilities:**
- Color contrast validation (4.5:1 normal, 3:1 large text)
- Keyboard navigation testing
- ARIA attribute validation
- Semantic HTML structure
- Image alt text coverage

**Pass Criteria:** ≥95/100 score + zero critical violations

**Usage:**
```bash
# Manual audit
@accessibility-auditor test sites/dws-web-ai

# Automated testing
pnpm playwright test tests/accessibility.spec.ts
```

---

#### Content Optimizer (`@content-optimizer`)
**Purpose:** Analyzes content quality, readability, and AI-friendliness for markdown content.

**Key Responsibilities:**
- Readability scoring (Flesch Reading Ease, Flesch-Kincaid)
- Keyword optimization (density, placement)
- Content structure analysis (headings, lists, paragraphs)
- AI readability (clear topics, contextual clarity)
- Technical quality (grammar, spelling, broken links)

**Pass Criteria:** ≥80/100 content quality score (Grade B or higher)

**Usage:**
```bash
# Analyze blog post
@content-optimizer analyze src/content/blog/my-post.md

# Audit all content
@content-optimizer audit-all sites/dws-web-ai/src/content/
```

---

#### Security Auditor (`@security-auditor`)
**Purpose:** Scans codebase for security vulnerabilities, hardcoded secrets, and dependency issues.

**Key Responsibilities:**
- Dependency vulnerability scanning (npm audit)
- Hardcoded secrets detection
- Security best practices validation
- Outdated package detection
- HTTPS configuration verification

**Pass Criteria:** Zero high/critical vulnerabilities

**Usage:**
```bash
# Security scan
@security-auditor scan sites/dws-web-ai

# Dependency audit
@security-auditor audit-deps
```

---

#### Quality Assessor (`@quality-assessor`)
**Purpose:** Evaluates code quality, identifies code smells, and ensures adherence to best practices.

**Key Responsibilities:**
- Code smell detection
- Design pattern validation
- Error handling review
- Test coverage assessment
- Documentation completeness

**Pass Criteria:** Zero critical issues, <10 warnings

**Usage:**
```bash
# Code quality review
@quality-assessor review src/pages/index.astro

# Full codebase assessment
@quality-assessor assess sites/dws-web-ai
```

---

#### Performance Tuner (`@performance-tuner`)
**Purpose:** Analyzes performance bottlenecks and optimizes Core Web Vitals.

**Key Responsibilities:**
- Lighthouse performance audits
- Core Web Vitals measurement (LCP, FID, CLS)
- Bundle size analysis
- Image optimization validation
- Render-blocking resource detection

**Pass Criteria:** Lighthouse score ≥90, all Core Web Vitals "Good"

**Usage:**
```bash
# Performance audit
@performance-tuner analyze sites/dws-web-ai

# Lighthouse CI
pnpm lighthouse-ci --site=dws-web-ai
```

---

### Orchestrator Agents

#### Quality Gate Orchestrator (`@quality-gate-orchestrator`)
**Purpose:** Coordinates the 6-gate sequential quality validation system before deployment.

**Gate Sequence:**
1. **Code Quality** (@quality-assessor) - Linting, type-checking, tests
2. **SEO Compliance** (@seo-optimizer) - Schema, meta tags, AI readiness
3. **Accessibility** (@accessibility-auditor) - WCAG 2.1 AA compliance
4. **Performance** (@performance-tuner) - Core Web Vitals, Lighthouse
5. **Content Quality** (@content-optimizer) - Readability, keywords, AI-friendliness
6. **Security** (@security-auditor) - Vulnerabilities, secrets, dependencies

**Execution Model:**
- Sequential: Gate N+1 only runs if Gate N passes
- Fail-fast: Any gate failure stops entire process
- Retry logic: Maximum 3 attempts per gate
- Escalation: After 3 failures, manual review required

**Usage:**
```bash
# Run full quality gate validation
@quality-gate-orchestrator validate sites/dws-web-ai --target=main

# Override specific gates (emergency only)
@quality-gate-orchestrator validate --override-gates=5 --reason="Critical hotfix"
```

---

#### Workflow Orchestrator (`@workflow-orchestrator`)
**Purpose:** General-purpose workflow automation for complex multi-step tasks.

**Capabilities:**
- Task dependency management
- Multi-agent coordination
- Progress tracking
- Error handling and retry logic

**Usage:**
```bash
# Execute task plan
@workflow-orchestrator execute task_deps.md

# Custom workflow
@workflow-orchestrator run custom-workflow.yaml
```

---

## Integration with GitHub Actions

All agents integrate with GitHub Actions for automated quality validation:

### Trigger Events
- **Pull Request to main:** Full quality gate validation
- **Content changes:** SEO + Content optimizer only
- **Code changes:** Code quality + Security audit
- **Manual dispatch:** On-demand agent invocation

### Example Workflow

`.github/workflows/quality-gates.yml`:
```yaml
name: Quality Gate System

on:
  pull_request:
    branches: [main]

jobs:
  quality-gates:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install

      - name: Run Quality Gate Orchestrator
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          @quality-gate-orchestrator validate sites/dws-web-ai \
            --target=main \
            --output=quality-report.json

      - name: Upload Report
        uses: actions/upload-artifact@v3
        with:
          name: quality-gate-report
          path: quality-report.json
```

---

## Agent Invocation Methods

### 1. Manual Command Line
```bash
# Direct agent invocation
@seo-optimizer audit sites/dws-web-ai

# With specific options
@accessibility-auditor test sites/dws-web-ai --wcag-level=AAA
```

### 2. Via GitHub Actions (Automated)
Agents automatically invoked on PR/push events based on file changes detected.

### 3. Via Quality Gate Orchestrator
```bash
# Orchestrator coordinates all agents
@quality-gate-orchestrator validate sites/dws-web-ai
```

### 4. Programmatic (Node.js)
```javascript
const { ClaudeCodeSDK } = require('@anthropic-ai/claude-code-sdk');

const sdk = new ClaudeCodeSDK({ apiKey: process.env.ANTHROPIC_API_KEY });

const result = await sdk.invokeAgent('seo-optimizer', {
  command: 'audit',
  target: 'sites/dws-web-ai'
});

console.log(result.score); // 95
```

---

## Agent Development

### Creating New Agents

Use the `@skills-creator` agent to scaffold new agents:

```bash
@skills-creator create-agent \
  --name="my-new-agent" \
  --type="specialist" \
  --purpose="Specific task description"
```

### Agent File Structure

All agents follow this markdown structure:

```markdown
# Agent Name

## name
agent-slug

## description
Brief description for autonomous discovery

## system_prompt
Detailed instructions for the agent's behavior and responsibilities

## Tools Available
- Read: Access files
- Bash: Execute commands
- Grep: Search patterns

## Output Format
JSON structure for agent reports

## model
claude-sonnet-4-5
```

---

## Best Practices

### When to Use Each Agent

- **@seo-optimizer:** After page content changes, before deployment
- **@accessibility-auditor:** On UI component updates, new page creation
- **@content-optimizer:** For all blog posts, before publishing
- **@security-auditor:** On dependency updates, before production
- **@quality-assessor:** During code reviews, refactoring
- **@performance-tuner:** After feature additions, asset changes
- **@quality-gate-orchestrator:** **ALWAYS before production deployment**

### Agent Chaining

Agents can invoke other agents for complex workflows:

```bash
# Orchestrator invokes specialists
@quality-gate-orchestrator
  ↓
  @quality-assessor (Gate 1)
  ↓
  @seo-optimizer (Gate 2)
  ↓
  @accessibility-auditor (Gate 3)
  ↓
  @performance-tuner (Gate 4)
  ↓
  @content-optimizer (Gate 5)
  ↓
  @security-auditor (Gate 6)
```

### Error Handling

All agents return standardized error formats:

```json
{
  "status": "ERROR",
  "agent": "seo-optimizer",
  "error_code": "SCHEMA_VALIDATION_FAILED",
  "message": "Organization schema missing required 'logo' property",
  "remediation": "Add logo URL to organization schema in src/pages/index.astro",
  "docs_link": "https://schema.org/Organization"
}
```

---

## Maintenance

### Updating Agents

1. Edit agent `.md` file in `.claude/agents/`
2. Test agent locally before committing
3. Update this README if agent capabilities change
4. Version control all agent changes

### Agent Versioning

Agents use semantic versioning in their approval signatures:

```json
{
  "approval_signature": "seo-optimizer-v1.2.3"
}
```

---

## Troubleshooting

### Common Issues

**Agent Not Found:**
```bash
# Verify agent exists
ls -la .claude/agents/website/

# Check agent name matches file
cat .claude/agents/website/seo-optimizer.md | grep "^## name"
```

**Gate Failure - No Details:**
```bash
# Run agent manually with verbose output
@seo-optimizer audit sites/dws-web-ai --verbose
```

**Authentication Errors:**
```bash
# Verify ANTHROPIC_API_KEY set
echo $ANTHROPIC_API_KEY

# Or use .env file
export ANTHROPIC_API_KEY=your-api-key-here
```

---

## Related Documentation

- [Quality Gates System](../../docs/QUALITY_GATES.md)
- [Agent Usage Guide](../../docs/AGENT_GUIDE.md)
- [Skills Library](../ skills/README.md)
- [Project Constitution](../../CLAUDE.md)
- [Task Dependency Plan](../../task_deps.md)

---

**Last Updated:** 2025-11-02
**Agent Count:** 7 specialists + 2 orchestrators
**Quality Gates:** 6 sequential validation stages
