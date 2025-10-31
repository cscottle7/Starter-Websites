# Multi-Site Website Development System Investigation
## Squad Analysis Report

**Investigation Date:** October 29, 2025
**Working Directory:** C:\Users\cscot\Documents\Websites\Starter
**Mission:** Research and design a multi-site website development system leveraging Claude Code Sub-agents

---

## Executive Summary

This investigation deployed a specialized research squad to analyze the optimal architecture for a multi-site website development system powered by Claude Code Sub-agents. The analysis reveals that **Astro** combined with **Git-based CMS** (Sveltia CMS recommended) and a **monorepo architecture** presents the strongest foundation for scalable, AI-optimized client websites in late 2025.

**Key Recommendation:** Adopt an Astro-based monorepo starter template with Sveltia CMS integration, enhanced by custom Claude Code agents for website-specific workflows (content optimization, SEO auditing, and deployment automation).

---

## Squad Composition

1. **Technology Landscape Analyst** - HTML frameworks, static site generators, starter templates (2025 landscape)
2. **Integration Architect** - CMS solutions and Claude Code on the Web integration patterns
3. **SEO/AI Optimization Specialist** - Current SEO best practices and AI-agent optimization strategies
4. **Asset Inventory Analyst** - Audit of existing Claude Code agents/skills setup
5. **Architecture Strategist** - Template repository design and multi-site architecture recommendations

---

## Investigation Area 1: 2025 HTML Frameworks & Starter Templates

**Analyst:** Technology Landscape Analyst

### Top Static Site Generators (October 2025)

#### Tier 1 Recommendations

**1. Astro (Recommended)**
- **Status:** Version 5.0 released with Server Islands for deferred dynamic content rendering
- **Core Advantage:** Partial hydration/"islands architecture" - ships zero JavaScript by default, hydrates only interactive components
- **Performance:** ~40% faster loads, ~90% less JavaScript than comparable Next.js setups
- **Framework Flexibility:** Use React, Vue, Svelte, Solid, or Alpine components side-by-side in one project
- **Build Speed:** Very fast via Vite (though not as fast as Eleventy/Hugo)
- **Best For:** Content-heavy, SEO-optimized sites requiring high performance
- **GitHub Stars:** Rapidly growing, strong community adoption

**2. Next.js**
- **Status:** Most popular React framework with React Server Components and Incremental Static Regeneration
- **Core Advantage:** Full-stack hybrid SSR/SSG model with built-in API routes
- **Best For:** Complex, data-driven applications with database interactions and real-time logic
- **Ecosystem:** Backed by Vercel with excellent tooling (Fast Refresh, analytics)
- **Trade-offs:** More JavaScript shipped to client compared to Astro

**3. Eleventy (11ty)**
- **Status:** Version 3.0 (October 2024) with full ESM support, pnpm/yarn/Deno compatibility
- **Core Advantage:** Fastest build times, zero client-side JavaScript by default
- **Best For:** Simple, static content sites (blogs, personal websites)
- **Trade-offs:** Server-side templating languages vs. modern component frameworks

#### Tier 2 Options

- **Hugo:** Blazing fast builds (often <1 second), 84,399 GitHub stars as of October 28, 2025
- **SvelteKit:** Efficient performance with new Svelte features on the horizon
- **Gatsby:** React-based with GraphQL data layer, emphasizes performance and SEO

### Starter Template Ecosystem

**GitHub Template Trends:**
- **SaaS Boilerplates:** Next.js + Tailwind CSS + Shadcn UI + TypeScript (6.3k stars) with Auth, Multi-tenancy, i18n
- **Multi-Tenant Kits:** Next.js + Prisma + Stripe for rapid SaaS platform development (1.3k stars)

**WordPress Multi-Site:**
- Starter Templates plugin: 300+ ready-to-use templates compatible with Elementor, Spectra, Gutenberg
- GeneratePress, Blocksy, Kadence, Astra all offer starter template libraries ($149-$649)

**Key Insight:** Modern template repositories emphasize reusability through component libraries and shared configuration while maintaining flexibility for client-specific customization.

---

## Investigation Area 2: CMS Options for Claude Code Web Integration

**Analyst:** Integration Architect

### Claude Code on the Web Capabilities (Current Status)

**Core Features:**
- Asynchronous code task execution on secure cloud infrastructure
- GitHub repository integration (GitHub-only, no GitLab support)
- Parallel task processing with universal development image
- Move tasks between web and terminal via "Open in CLI"

**Authentication & Access:**
- Requires GitHub account connection
- Available to Pro and Max users
- Claude GitHub app installation required in repositories

**Security Model:**
- Restricted internet access by default
- GitHub operations routed through dedicated proxy
- Allowlisted domains for network access
- Scoped authentication for credential protection

**Optimal Use Cases:**
- "Well-defined tasks that don't require frequent steering"
- Working on repositories not locally checked out
- Backend changes with automated test generation

**Limitations:**
- Research preview status
- Repository authentication restricted to same account
- Currently GitHub-only

### Git-Based CMS Solutions (2025 Comprehensive Comparison)

#### Primary Recommendation

**1. Sveltia CMS (Recommended - Free & Open Source)**
- **Positioning:** Modern successor to Decap CMS, actively maintained
- **Key Features:**
  - Direct replacement for Netlify/Decap CMS with 265+ bug fixes
  - Modern, fast, lightweight architecture
  - First-class i18n support
  - Mobile-friendly interface
  - Framework-agnostic (works with any static site generator)
- **Integration:** Excellent with Astro, Next.js, Hugo, Jekyll, 11ty
- **Pricing:** 100% Free & Open Source
- **Development Status:** Public beta, v1.0 expected early 2026
- **Client Suitability:** High - Modern UX, actively maintained, no vendor lock-in
- **Why Recommended:** Best combination of modern features, active development, zero cost, and no vendor lock-in

#### Alternative Options

**2. Decap CMS (formerly Netlify CMS) - Free & Open Source**
- **Positioning:** Original open-source Git-based CMS
- **Key Features:**
  - Single-page React app
  - Configure everything in YAML
  - Git versioning with no database required
  - Install by adding two files to your site
- **Integration:** Works well with Hugo, Jekyll, 11ty, Astro
- **Pricing:** 100% Free & Open Source
- **Development Status:** Maintenance mode (stagnating, less active than Sveltia)
- **Client Suitability:** Medium - Less modern UX, but stable and proven
- **Notes:** Sveltia CMS is recommended as the modern alternative

**3. TinaCMS - Free Tier + Paid Plans**
- **Positioning:** Open-source, Git-backed headless CMS with cloud option
- **Key Features:**
  - Real-time inline visual editing
  - Apache 2.0 license
  - Self-hosted or Tina Cloud options
  - Excellent developer experience
- **Integration:** Works particularly well with Next.js and Astro
- **Pricing:**
  - Free tier (fully functional)
  - Team plan: $29/month (3 users, 2 roles)
  - Business plan: $599/month
- **Client Suitability:** Medium-High - Great UX but requires hosting decision
- **Notes:** Good choice if you want optional paid support/hosting

**4. Pages CMS - Free & Open Source**
- **Positioning:** GitHub-native CMS with one-click start
- **Key Features:**
  - Built directly on GitHub
  - One-click setup
  - No backend required
  - Works with modern frameworks
- **Integration:** Next.js, Astro, Nuxt, Hugo, Jekyll, 11ty
- **Pricing:** 100% Free & Open Source
- **Client Suitability:** Medium - Simpler feature set but easy setup
- **Notes:** Good for simple content needs

**5. Publii - Free & Open Source**
- **Positioning:** Desktop-based static CMS
- **Key Features:**
  - Desktop application (different paradigm)
  - Privacy-focused, GDPR compliant
  - Built-in publishing to various hosts
  - No server or database required
- **Integration:** GitHub Pages, GitLab Pages, Netlify
- **Pricing:** 100% Free & Open Source
- **Client Suitability:** Medium - Desktop app may be less familiar to web editors
- **Notes:** Unique approach, good for privacy-focused projects

**6. CloudCannon - Commercial Option**
- **Positioning:** Premium editor-first CMS with visual builders
- **Key Features:**
  - Professional visual editing layer
  - Real-time live previews across entire site
  - Multiple editing modes (Visual, Content, Data, Source)
  - Branch management without Git knowledge
  - Enterprise-grade hosting via Cloudflare
- **Integration:** Hugo, Eleventy, Jekyll, Astro, 11ty
- **Pricing:** Starting at $49/month (14-day free trial)
- **Client Suitability:** Very High - Best-in-class UX, designed for agencies
- **Notes:** Premium option if budget allows, excellent for non-technical clients

### CMS Selection Decision Matrix

| Feature | Sveltia CMS | Decap CMS | TinaCMS | Pages CMS | Publii | CloudCannon |
|---------|-------------|-----------|---------|-----------|--------|-------------|
| **Cost** | Free | Free | Free/Paid | Free | Free | $49+/mo |
| **Maintenance** | Active | Stable | Active | Active | Active | Commercial |
| **Modern UX** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Setup Complexity** | Low | Low | Medium | Very Low | Very Low | Low |
| **Visual Editing** | Good | Basic | Excellent | Basic | Excellent | Excellent |
| **Mobile Support** | Yes | Limited | Yes | Yes | No | Yes |
| **Self-Hosted** | Yes | Yes | Yes | GitHub | Desktop | No |
| **Multi-Site** | Yes | Yes | Yes | Per-site | Desktop | Yes |
| **Best For** | Most projects | Legacy projects | React/Next.js | Simple sites | Privacy-focused | Enterprise/Agency |

### CMS Webhook Automation Opportunities

**Integration Platforms (2025):**
- **n8n:** Webhook + Claude integration for workflow automation
- **Zapier:** Seamless webhook-to-Claude connections
- **Make:** Visual workflow builder for CMS + Claude automation
- **Pipedream:** Claude API integrations for event-driven workflows

**Automation Use Cases:**
1. Content generation: Trigger Claude via webhook when new content template created
2. Multi-language publishing: Auto-generate translations via Claude when content published
3. SEO optimization: Webhook triggers Claude to audit/optimize content before deployment
4. Image alt-text generation: Automated accessibility improvements

**Claude Code Hooks (June 2025 Release):**
- User-defined shell commands at lifecycle events (PreToolUse, PostToolUse, etc.)
- Automation opportunities: Code formatting, logging, notifications, custom permissions
- Security note: Hooks run with current environment credentials

### Integration Architecture Recommendation

**Proposed Flow:**
```
Client Editor (Sveltia CMS)
  → Git Commit
  → Webhook Trigger
  → Claude Code on Web (via GitHub integration)
  → Automated optimizations (SEO, accessibility, performance)
  → CI/CD Pipeline (Vercel/Netlify)
  → Production Deployment
```

**Key Advantages:**
- Non-technical clients use Sveltia CMS's modern visual editor
- All changes versioned in Git (no vendor lock-in)
- Claude Code on Web runs quality checks automatically via webhooks
- Separation of concerns: editing vs. automation vs. deployment
- Zero CMS costs allows budget focus on development and hosting

---

## Investigation Area 3: SEO + AI Optimization (October 2025)

**Analyst:** SEO/AI Optimization Specialist

### Google SEO Best Practices (October 2025 Updates)

**Core Algorithm Update (October 2025):**
- Emphasis on high-quality, authoritative content
- Websites with comprehensive, user-focused information rewarded
- Low-value or thin content experiences ranking drops

**Spam Update:**
- Completed after one-month rollout
- Targeted manipulative SEO tactics

**AI Mode Expansion:**
- Google AI Mode expanded to more languages
- More visual presentation
- Testing "agentic experiences"

**E-A-T Remains Critical:**
- Expertise, Authority, Trustworthiness (E-A-T) gains higher visibility
- Content must directly address search queries with user intent alignment

**Technical Requirements (October 2025):**
- Mobile-first indexing reinforced
- Local SEO algorithm changes: Google My Business listings more prominent
- Positive reviews + consistent NAP (Name, Address, Phone) data critical
- Regular monitoring: Site speed, mobile usability, backlink quality

### AI Agent Website Optimization (2025 Landscape)

**Current State:**
- AI crawlers (GPTBot, ClaudeBot, etc.) now visit 1 in 4 websites daily
- AI crawlers account for ~20% of Googlebot's crawl activity
- Early adopters see 64% average increase in AI mentions within 90 days
- 7% of B2B buyers use LLMs like ChatGPT in buying process (2025)
- ChatGPT referral traffic often converts better than Google traffic

**Critical Technical Requirements:**

1. **Server-Side Rendering (SSR) Essential**
   - Most AI crawlers ignore client-side JavaScript
   - Content loading after page renders or requiring user interaction is invisible to AI
   - HTML must be clean, semantically structured, and lightweight

2. **Content Structure for LLMs**
   - Clear, hierarchical headings (H1, H2, H3) to organize content logically
   - Topic clustering: Group related subtopics under main themes
   - Concise answers immediately after question-based headings
   - Use descriptive, relevant titles and headings

3. **Crawlability**
   - Don't block AI crawlers in robots.txt or llms.txt (unless intentional)
   - Publish clear, well-organized, fact-checked, timely content
   - Optimize site speed (slow pages may not be fully crawled)

**Key Difference from Traditional SEO:**
- LLM Search Optimization (LLMO/Generative Engine Optimization) requires adapting for how AI models find, understand, and cite content
- Focus shifts from keyword optimization to contextual understanding and entity recognition

### Schema Markup & Structured Data (Critical for 2025)

**Importance in AI Search:**
- Microsoft Bing's Principal Product Manager (March 2025): "Schema Markup helps Microsoft's LLMs understand content"
- Google's Gemini uses Knowledge Graph enriched by Schema Markup
- BrightEdge study: Schema markup improved brand presence in Google AI Overviews
- LLMs grounded in knowledge graphs achieve 300% higher accuracy vs. unstructured data alone

**Priority Schema Types:**
1. **Article Schema:** Establishes E-A-T signals heavily weighted by AI systems
2. **FAQ Schema:** Provides direct question-answer pairs AI systems easily extract and cite
3. **Organization Schema:** Entity recognition and brand authority
4. **Product Schema:** E-commerce visibility in AI-driven shopping experiences

**Implementation:**
- **JSON-LD format preferred** (separates markup from HTML, easier to maintain)
- Google recommends JSON-LD for optimal AI search results
- Schema markup no longer optional for organizations serious about AI search visibility

### llms.txt Standard (Emerging 2025)

**What It Is:**
- Simple text file to help LLMs find, understand, and prioritize important content
- Like a "curated sitemap.xml" designed specifically for AI comprehension
- NOT about blocking models - about guiding them to the right content

**Current Adoption Status:**
- Proposed standard with growing interest
- **No public adoption by major AI platforms yet** (as of late 2025)
- Analysts predict no widespread adoption in next 6-9 months
- Forward-looking optimization strategy rather than immediate essential

**Implementation Recommendation:**
- Include llms.txt as future-proofing measure
- Focus primary effort on schema markup and HTML optimization
- Monitor adoption by ChatGPT, Claude, Perplexity, and others

### Convergence: Traditional SEO vs. AI Optimization

**Similarities:**
- Both prioritize high-quality, authoritative content
- Both value structured data and semantic HTML
- Both emphasize user intent and clear information architecture
- Both reward mobile-friendly, fast-loading sites

**Differences:**
- **Traditional SEO:** Keywords, backlinks, domain authority, meta tags
- **AI Optimization:** Entity recognition, contextual understanding, citation-worthiness, structured data
- **Traditional SEO:** Optimizing for ranking positions
- **AI Optimization:** Optimizing for being cited/recommended by AI agents

**Convergence Point (2025):**
Content that is factual, well-structured, semantically rich, and authoritative performs well in BOTH traditional search and AI-driven discovery. The gap is narrowing.

---

## Investigation Area 4: Existing Agent/Skill Library Audit

**Analyst:** Asset Inventory Analyst

### Current Claude Code Setup (C:\Users\cscot\.claude\)

#### Agents Inventory (40 total)

**Design & Research (9):**
- user-centric-designer.md
- ux-heuristic-evaluator.md
- brand-design-strategist.md
- design-system-reviewer.md
- user-empath-analyst.md
- web-intelligence-analyst.md ⭐ (Highly relevant)
- academic-researcher.md
- data-miner.md
- research-strategist.md

**Planning & Coordination (7):**
- plan-synthesizer.md
- squad-coordinator.md
- workflow-orchestrator.md
- brief-creator.md
- cognitive-architect.md
- context_assembler.md
- innovation-designer.md

**Code Quality & Review (8):**
- code-archaeologist.md
- quality-assessor.md
- performance-tuner.md
- static-code-scanner.md
- legacy-refactoring-strategist.md
- critical-synthesizer.md
- review_architext.md
- design_specifier.md

**Testing & Security (7):**
- test-strategist.md
- qa-automation.md (duplicate: qa_automation.md)
- security-auditor.md
- threat-modeler.md
- pentest-strategist.md

**Documentation & Communication (6):**
- technical-readme-writer.md
- api-documenter.md
- user-guide-writer.md
- sop-steward.md
- prompt-engineering-consultant.md
- skills-creator.md

**Utilities (3):**
- cost-estimator.md
- opportunity-analyst.md
- glenn.md (custom agent)

#### Skills Inventory (4 foundation skills)

Located in `C:\Users\cscot\.claude\skills\foundation\`:
1. **code-quality-standards** - Style guidelines, naming conventions, error handling, testing requirements
2. **security-best-practices** - Security-related code standards
3. **documentation-standards** - Code documentation specifics
4. **testing-frameworks** - Detailed testing patterns and tools

**Note:** Skills are "model-invoked" - Claude autonomously decides when to use them based on request and skill description.

### Gap Analysis: Website Development Workflows

**Existing Assets Applicable to Website Projects:**
- ✅ web-intelligence-analyst - Research current web trends, competitors
- ✅ user-centric-designer - Accessible, usable design concepts
- ✅ brand-design-strategist - Brand-aligned design concepts
- ✅ performance-tuner - Website performance optimization
- ✅ security-auditor - Security best practices
- ✅ technical-readme-writer - Client documentation

### Insights from BiggerBoss System Analysis

**Reference System:** The BiggerBoss system (https://github.com/craig-dws/bigger-boss) provides validated patterns for multi-agent coordination and workflow orchestration that directly apply to website development automation.

**Key Patterns Identified:**

1. **Multi-Orchestrator Hierarchy**
   - BiggerBoss uses specialized orchestrators at different levels:
     - Master Orchestrator (high-level project coordination)
     - Workflow Orchestrator (4-phase software development pipeline)
     - Quality Gate Orchestrator (multi-checkpoint quality control)
     - Research Strategy Orchestrator (research task coordination)
   - **Application:** Implement similar hierarchy for website projects

2. **Agent Coordination Syntax**
   - BiggerBoss uses `@agent_name` syntax for inter-agent communication
   - **Application:** Adopt this pattern for orchestrator → specialist agent workflows

3. **Quality Gate Pattern**
   - Multi-gate checkpoints before deployment (not just single CI/CD pass)
   - **Application:** Implement staged quality validation in deployment pipeline

4. **Specialized Agent Library**
   - 57 specialized agents organized by function (Content, Research, Analysis, Strategy)
   - **Application:** Expand beyond basic website agents to include research and strategy agents

5. **Comprehensive Documentation Structure**
   - Includes QUICK_START.md, AUTOMATION_SETUP_GUIDE.md, SYSTEM_SETUP_STATUS_AND_WORKFLOWS.md
   - **Application:** Create similar documentation hierarchy for template onboarding

**Critical Gaps Identified (Enhanced with BiggerBoss Insights):**

**Tier 1 - Core Website Agents (Priority: Immediate)**

1. **SEO Optimization Agent** ❌
   - Purpose: Audit pages for SEO, implement schema markup, optimize meta tags
   - Tools needed: WebSearch, Read, Edit, Grep
   - Model: Haiku (efficiency for repetitive audits)
   - BiggerBoss Parallel: SEO Strategist

2. **Accessibility Auditor Agent** ❌
   - Purpose: WCAG compliance checking, ARIA implementation, semantic HTML validation
   - Tools needed: Read, Grep, Edit, mcp__playwright__* (for browser testing)
   - Model: Sonnet (complexity of accessibility rules)
   - BiggerBoss Parallel: Accessibility Checker

3. **Content Optimizer Agent** ❌
   - Purpose: Optimize content for AI + traditional search, readability improvements
   - Tools needed: Read, Edit, WebSearch
   - Model: Haiku
   - BiggerBoss Parallel: Content Optimizer

**Tier 2 - Orchestration & Coordination (Priority: High)**

4. **Website Project Orchestrator** ❌
   - Purpose: High-level client project coordination across all phases
   - Coordinates: Research → Development → Quality → Deployment
   - Tools needed: Task, TodoWrite, Read
   - Model: Sonnet (complex decision-making)
   - BiggerBoss Pattern: Master Orchestrator architecture

5. **Quality Gate Orchestrator** ❌
   - Purpose: Multi-checkpoint quality validation before deployment
   - Coordinates: Code Quality → SEO → Accessibility → Performance → Security gates
   - Tools needed: Task, Read, TodoWrite
   - Model: Haiku (structured validation)
   - BiggerBoss Pattern: Quality Gate Orchestrator

6. **Multi-Site Deployment Orchestrator** ❌
   - Purpose: Coordinate deployment across multiple client sites, environment management
   - Tools needed: All Bash-related, Read, Edit, TodoWrite
   - Model: Sonnet (complex orchestration)
   - BiggerBoss Pattern: Workflow Orchestrator (Phase 4: Deployment & QA)

**Tier 3 - Research & Strategy (Priority: Medium)**

7. **Keyword Researcher Agent** ❌
   - Purpose: SEO keyword research, content strategy, competitive keyword analysis
   - Tools needed: WebSearch, Read, Write, WebFetch
   - Model: Haiku
   - BiggerBoss Parallel: Keyword Researcher (with multi-phase tracking)

8. **Competitive Intelligence Analyst** ❌
   - Purpose: Analyze competitor websites, identify opportunities, benchmark performance
   - Tools needed: WebSearch, WebFetch, mcp__playwright__*, Read, Write
   - Model: Sonnet (complex analysis)
   - BiggerBoss Parallel: Competitive Intelligence Searcher

9. **Brand Sentiment Analyst** ❌
   - Purpose: Ensure client brand consistency across content, validate tone and voice
   - Tools needed: Read, Edit, WebSearch
   - Model: Haiku
   - BiggerBoss Parallel: Brand Sentiment Researcher

10. **Content Auditor Agent** ❌
    - Purpose: Comprehensive content quality assessment across all client sites
    - Tools needed: Read, Glob, Grep, Write (audit reports)
    - Model: Sonnet
    - BiggerBoss Parallel: Content Auditor

**Tier 4 - Specialized Analysis (Priority: Lower)**

11. **AI Readiness Auditor** ❌
    - Purpose: Validate AI crawler optimization, verify schema markup effectiveness
    - Tools needed: WebSearch, Read, mcp__playwright__*, WebFetch
    - Model: Haiku
    - BiggerBoss Parallel: AI Readiness Auditor

12. **Static Site Build Agent** ❌
    - Purpose: Framework-specific build optimization (Astro configs, bundle analysis)
    - Tools needed: Read, Edit, Bash, Glob
    - Model: Haiku

**Skills Gap Analysis:**

**Missing Website-Specific Skills:**
1. **seo-optimization-checklist** - Step-by-step SEO audit procedures
2. **accessibility-standards** - WCAG 2.1 AA/AAA guidelines with examples
3. **astro-best-practices** - Framework-specific patterns and anti-patterns
4. **cms-integration-patterns** - Sveltia CMS setup and workflows
5. **performance-budgets** - Core Web Vitals targets and monitoring
6. **orchestrator-coordination-patterns** - How orchestrators delegate to specialist agents (BiggerBoss pattern)
7. **quality-gate-workflows** - Multi-checkpoint validation procedures

### Orchestrator Hierarchy Design (BiggerBoss-Inspired)

**Proposed Agent Coordination Architecture:**

```
User Request
    ↓
┌──────────────────────────────────────────┐
│  @website-project-orchestrator           │  ← Master coordinator
│  (Sonnet - Complex decision-making)      │
└──────────────────────────────────────────┘
    ↓
    ├─→ Phase 1: Research & Strategy
    │   ├─→ @keyword-researcher
    │   ├─→ @competitive-intelligence-analyst
    │   └─→ @brand-sentiment-analyst
    │
    ├─→ Phase 2: Development
    │   ├─→ @seo-optimizer
    │   ├─→ @accessibility-auditor
    │   ├─→ @content-optimizer
    │   └─→ @performance-tuner (existing)
    │
    ├─→ Phase 3: Quality Validation
    │   ├─→ @quality-gate-orchestrator
    │   │   ├─→ Gate 1: Code Quality
    │   │   ├─→ Gate 2: SEO Compliance (@seo-optimizer)
    │   │   ├─→ Gate 3: Accessibility (@accessibility-auditor)
    │   │   ├─→ Gate 4: Performance (@performance-tuner)
    │   │   ├─→ Gate 5: AI Readiness (@ai-readiness-auditor)
    │   │   └─→ Gate 6: Security (@security-auditor)
    │
    └─→ Phase 4: Deployment
        └─→ @multi-site-deployment-orchestrator
            ├─→ Staging deployment
            ├─→ Preview URL generation
            ├─→ Client approval workflow
            └─→ Production deployment
```

**Orchestrator Coordination Principles:**

1. **Hierarchical Delegation:** Master orchestrator delegates to phase-specific orchestrators
2. **Parallel Execution:** Research agents run concurrently, development agents run concurrently
3. **Quality Gates:** Sequential validation (must pass Gate N before Gate N+1)
4. **Failure Handling:** Gate failure returns to development phase for fixes
5. **Agent Communication:** Using `@agent_name` syntax from BiggerBoss pattern

**Quality Gate Pattern (Detailed):**

```yaml
quality-gate-orchestrator:
  gate_1_code_quality:
    checks:
      - Linting (ESLint, Prettier)
      - Type checking (TypeScript)
      - Import validation
    pass_criteria: Zero errors, <10 warnings

  gate_2_seo_compliance:
    agent: @seo-optimizer
    checks:
      - Meta tags present and optimized
      - Schema markup (JSON-LD) implemented
      - Heading hierarchy correct (H1 → H2 → H3)
      - Image alt text present
      - Sitemap generated
    pass_criteria: SEO score >90/100

  gate_3_accessibility:
    agent: @accessibility-auditor
    checks:
      - WCAG 2.1 AA compliance
      - ARIA attributes correct
      - Semantic HTML validation
      - Keyboard navigation functional
      - Color contrast ratios meet standards
    pass_criteria: Zero critical violations, <5 warnings

  gate_4_performance:
    agent: @performance-tuner
    checks:
      - LCP <2.5s
      - FID <100ms
      - CLS <0.1
      - Bundle size <500KB
    pass_criteria: All Core Web Vitals "Good"

  gate_5_ai_readiness:
    agent: @ai-readiness-auditor
    checks:
      - AI crawlers not blocked in robots.txt
      - Schema markup machine-readable
      - Clean semantic HTML (no excessive client-side JS)
      - llms.txt present (future-proofing)
    pass_criteria: AI crawl simulation successful

  gate_6_security:
    agent: @security-auditor (existing)
    checks:
      - No exposed secrets or API keys
      - Dependencies up to date
      - No high/critical vulnerabilities
      - HTTPS enforced
    pass_criteria: Zero high/critical security issues
```

### Recommendations: New Agents & Skills (Prioritized)

**Phase 1A - Core Website Agents (Weeks 1-2):**
1. `seo-optimizer.md` - SEO auditing and optimization (Haiku)
2. `accessibility-auditor.md` - WCAG compliance checking (Sonnet)
3. `content-optimizer.md` - Content quality and AI-readiness (Haiku)

**Phase 1B - Orchestration Layer (Weeks 3-4):**
4. `website-project-orchestrator.md` - Master client project coordinator (Sonnet)
5. `quality-gate-orchestrator.md` - Multi-checkpoint quality validation (Haiku)
6. `multi-site-deployment-orchestrator.md` - Deployment coordination (Sonnet)

**Phase 2 - Research & Strategy Agents (Weeks 5-6):**
7. `keyword-researcher.md` - SEO keyword research and strategy (Haiku)
8. `competitive-intelligence-analyst.md` - Competitor analysis (Sonnet)
9. `brand-sentiment-analyst.md` - Brand consistency checking (Haiku)
10. `content-auditor.md` - Cross-site content quality assessment (Sonnet)

**Phase 3 - Specialized Analysis (Weeks 7-8+):**
11. `ai-readiness-auditor.md` - AI crawler optimization validation (Haiku)
12. `static-site-build-agent.md` - Build optimization (Haiku)

**Skills Creation Priority:**

**Phase 1 - Core Skills:**
1. `skills/website/seo-checklist/SKILL.md` - SEO audit procedures
2. `skills/website/accessibility-wcag/SKILL.md` - WCAG guidelines with examples
3. `skills/website/astro-patterns/SKILL.md` - Astro best practices
4. `skills/website/performance-budgets/SKILL.md` - Core Web Vitals targets

**Phase 2 - Orchestration Skills:**
5. `skills/orchestration/coordination-patterns/SKILL.md` - Agent delegation patterns
6. `skills/orchestration/quality-gates/SKILL.md` - Multi-checkpoint workflows

**Phase 3 - Strategy Skills:**
7. `skills/website/keyword-research-methodology/SKILL.md` - SEO research techniques
8. `skills/website/competitive-analysis/SKILL.md` - Competitor benchmarking
9. `skills/website/sveltia-cms-config/SKILL.md` - CMS setup patterns

**Enhancement Priority:**
- Update `web-intelligence-analyst.md` to include specific SEO/competitor analysis workflows
- Document orchestrator coordination patterns in new skill
- Create agent interaction playbooks

---

## Investigation Area 5: Template Architecture Strategy

**Analyst:** Architecture Strategist

### Recommended Architecture: Monorepo Approach

**Decision:** Monorepo for multi-site management

**Rationale:**
1. **Shared Component Library:** Update design system components in single commit, propagate to all client sites atomically
2. **Centralized Dependencies:** Reduce version conflicts, consistent tooling across all projects
3. **Cross-Site Updates:** SEO improvements, accessibility fixes, performance optimizations applied universally
4. **Developer Experience:** Single repository to clone, unified testing/CI/CD pipelines
5. **Claude Code Integration:** Easier for Claude Code on Web to access and modify multiple sites in single session

**When Multi-Repo Would Be Better:**
- Different teams own different client sites with separate deployment schedules
- Strict access control required per client (highly confidential projects)
- Vastly different tech stacks per client (not applicable if using starter template)

**Monorepo Tools (2025):**
- **Nx:** Recommended for Astro/Next.js monorepos, excellent caching and task orchestration
- **Turborepo:** Vercel's monorepo tool, optimized for JavaScript/TypeScript
- **Lerna:** Established tool, good for package versioning

### Template Repository Structure

```
starter-template/                    # Root monorepo
├── .github/
│   ├── workflows/
│   │   ├── ci-quality.yml           # Linting, testing, type-checking
│   │   ├── deploy-staging.yml       # Automated staging deployments
│   │   └── deploy-production.yml    # Production deployments per site
│   └── CODEOWNERS                   # Define who reviews changes
├── packages/
│   ├── ui-components/               # Shared design system
│   │   ├── src/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   └── Navigation.astro
│   │   ├── package.json
│   │   └── README.md
│   ├── seo-utils/                   # Shared SEO utilities
│   │   ├── src/
│   │   │   ├── schema-generator.ts  # JSON-LD schema helpers
│   │   │   ├── meta-tags.ts
│   │   │   └── sitemap-builder.ts
│   │   └── package.json
│   └── cms-config/                  # Shared CMS configurations
│       ├── sveltia-base-config.yml  # Base Sveltia CMS configuration
│       └── content-schemas/
├── sites/
│   ├── client-a/                    # Client A's website
│   │   ├── src/
│   │   │   ├── pages/
│   │   │   ├── layouts/
│   │   │   └── content/             # Sveltia CMS editable content
│   │   ├── public/
│   │   │   └── admin/
│   │   │       ├── index.html       # Sveltia CMS entry point
│   │   │       └── config.yml       # Sveltia CMS configuration
│   │   ├── astro.config.mjs
│   │   ├── package.json
│   │   └── BRAND_GUIDELINES.md      # Client brand identity
│   ├── client-b/
│   └── client-c/
├── .claude/
│   ├── agents/
│   │   ├── orchestrators/           # NEW: Orchestrator agents (BiggerBoss pattern)
│   │   │   ├── website-project-orchestrator.md
│   │   │   ├── quality-gate-orchestrator.md
│   │   │   └── multi-site-deployment-orchestrator.md
│   │   ├── website/                 # NEW: Website-specific specialist agents
│   │   │   ├── seo-optimizer.md
│   │   │   ├── accessibility-auditor.md
│   │   │   ├── content-optimizer.md
│   │   │   ├── keyword-researcher.md
│   │   │   ├── competitive-intelligence-analyst.md
│   │   │   ├── brand-sentiment-analyst.md
│   │   │   ├── content-auditor.md
│   │   │   └── ai-readiness-auditor.md
│   │   └── README.md                # Agent coordination documentation
│   └── skills/
│       ├── website/
│       │   ├── seo-checklist/
│       │   ├── accessibility-wcag/
│       │   ├── astro-patterns/
│       │   ├── sveltia-cms-config/
│       │   ├── keyword-research-methodology/
│       │   ├── competitive-analysis/
│       │   └── performance-budgets/
│       └── orchestration/
│           ├── coordination-patterns/
│           └── quality-gates/
├── scripts/
│   ├── new-client-site.sh           # Scaffold new client from template
│   └── sync-shared-deps.sh          # Update shared packages
├── docs/                            # Documentation (BiggerBoss-inspired)
│   ├── QUICK_START.md               # Get started with template in 5 minutes
│   ├── AGENT_GUIDE.md               # How to use and create agents
│   ├── ORCHESTRATOR_WORKFLOWS.md   # How orchestrators coordinate work
│   ├── CLIENT_ONBOARDING.md        # Add new client process
│   ├── CMS_SETUP.md                # Sveltia CMS configuration guide
│   ├── DEPLOYMENT_GUIDE.md         # Vercel/Netlify deployment
│   ├── QUALITY_GATES.md            # Understanding quality validation
│   ├── TROUBLESHOOTING.md          # Common issues and solutions
│   └── AUTOMATION_SETUP.md         # Webhook and CI/CD automation
├── nx.json                          # Nx monorepo configuration
├── package.json                     # Root workspace dependencies
└── README.md                        # Setup and contribution guide
```

### Customization Strategy

**Three-Tier Customization Model:**

**Tier 1: Template Core (Never Customized)**
- Build tooling and CI/CD configurations
- Core SEO utilities and accessibility helpers
- Testing frameworks and quality standards

**Tier 2: Design System (Customizable per Client)**
- Color tokens and typography scales (in `client-x/astro.config.mjs`)
- Component variants (extend base components in `sites/client-x/src/components/`)
- Brand-specific layouts and templates

**Tier 3: Content & Configuration (Fully Client-Specific)**
- CloudCannon content in `sites/client-x/src/content/`
- Client brand guidelines in `sites/client-x/BRAND_GUIDELINES.md`
- Client-specific plugins and integrations

### Client Update Workflow

**Scenario:** Non-technical client wants to update website copy

1. **Client Action:** Navigates to `site.com/admin` and logs in via GitHub OAuth
2. **Content Edit:** Changes homepage hero text using Sveltia CMS's visual editor
3. **Git Commit:** Sveltia CMS commits change directly to `sites/client-x/src/content/` via GitHub API
4. **Webhook Trigger:** GitHub webhook fires on push event, triggers automation workflow
5. **Claude Code on Web:**
   - Webhook invokes Claude Code task via GitHub integration
   - `seo-optimizer` agent audits new content
   - `accessibility-auditor` checks compliance
   - `content-optimizer` suggests improvements
   - Automated fixes committed if needed
6. **CI/CD Pipeline:** Vercel/Netlify builds and deploys to staging
7. **Approval:** Client previews staging site, approves
8. **Production:** Manual or automated promotion to production

**Key Benefits:**
- Client never touches code
- All changes versioned in Git with full history
- Automated quality checks via Claude Code agents
- Professional oversight maintained
- Zero CMS licensing costs
- Full ownership of content and infrastructure

### Scalability Considerations

**As Client Portfolio Grows:**

**Monorepo Advantages:**
1. Central governance: One security update propagates to all sites
2. Consistent quality: Shared CI/CD ensures all sites meet standards
3. Efficient onboarding: New clients start from proven template
4. Cross-client insights: Learn from performance data across portfolio

**Monorepo Challenges:**
1. **Build Performance:** Mitigated by Nx caching and incremental builds
2. **Repository Size:** Git LFS for media assets, careful dependency management
3. **Access Control:** GitHub CODEOWNERS and branch protection rules per client

**Threshold for Multi-Repo Migration:**
- 50+ client sites with highly divergent needs
- Clients requiring separate Git repositories for compliance
- Different development teams with conflicting deployment schedules

### Technology Stack Recommendation

**Core Stack:**
- **Framework:** Astro 5.0 (islands architecture, optimal performance)
- **Styling:** Tailwind CSS (utility-first, shared design tokens)
- **CMS:** Sveltia CMS (modern visual editing, Git-based, free & open source)
- **Monorepo Tool:** Nx (advanced caching, task orchestration)
- **Deployment:** Vercel or Netlify (first-class Astro support, preview deployments)
- **CI/CD:** GitHub Actions (native integration with Claude Code on Web)

**Component Library:**
- Base components in `packages/ui-components/` as Astro components
- Client-specific variants extend base components
- Storybook for component documentation and testing

**Alternative Considerations:**

**Next.js Instead of Astro If:**
- Client sites require significant dynamic functionality (e-commerce, user authentication)
- Server-side rendering with database queries needed
- React ecosystem strongly preferred by development team

**TinaCMS Instead of Sveltia CMS If:**
- Premium inline visual editing experience is critical
- Willing to pay for managed hosting/support ($29+/month)
- Next.js is chosen as primary framework (better integration)

**CloudCannon Instead of Sveltia CMS If:**
- Budget allows for premium CMS ($49+/month)
- Need enterprise-grade support and SLA
- Want the absolute best visual editing experience for non-technical clients

**Decap CMS Instead of Sveltia CMS If:**
- Prefer the stability of a more mature (though less actively developed) platform
- Existing Decap CMS experience on team
- Sveltia CMS beta status is a concern (though it's a drop-in replacement)

---

## Interconnections Between Findings

### The Golden Thread: AI-First Architecture

All specialist findings converge on a central insight: **The next generation of website development must optimize for AI agents as first-class users**.

**How Findings Interconnect:**

1. **Framework Choice → SEO/AI Optimization**
   - Astro's SSR-by-default approach directly supports AI crawler requirements
   - Zero-JS baseline ensures AI crawlers (which ignore client-side JS) access full content
   - Server-side schema markup generation guarantees AI-readable structured data

2. **CMS Integration → Client Workflows → Automation**
   - Sveltia CMS's Git-based approach enables version control for all content changes
   - Git commits trigger webhooks that invoke Claude Code on Web
   - Claude Code agents perform automated SEO/accessibility audits
   - Automation flows back into deployment pipeline
   - Zero CMS licensing costs enable investment in better hosting and automation tools

3. **Monorepo Architecture → Shared Quality Standards**
   - Central component library ensures consistent accessibility across all client sites
   - Shared SEO utilities guarantee schema markup implementation
   - Unified CI/CD pipelines enforce quality gates (Claude Code agent checks)

4. **Existing Agent Library → New Website Agents**
   - Current `web-intelligence-analyst` provides research capabilities for competitor SEO analysis
   - New `seo-optimizer` agent builds on `code-quality-standards` skill
   - `accessibility-auditor` complements `user-centric-designer` agent
   - Architecture mirrors existing agent patterns for consistency

5. **Template Architecture → Client Customization**
   - Three-tier customization model (Core → Design System → Content)
   - Brand-design-strategist agent can analyze `BRAND_GUIDELINES.md` per client
   - Shared component library + client-specific theming = scalable customization

### Reinforcing Feedback Loops

**Loop 1: Content Quality Improvement**
```
Client edits content (Sveltia CMS)
  → Claude Code SEO audit identifies improvements
  → Automated optimization suggestions
  → Client approves changes
  → Site performance improves
  → Better AI citations and search rankings
  → Client sees value, creates more content
  → [LOOP REPEATS]
```

**Loop 2: Cross-Client Learning**
```
Client A's site undergoes performance optimization
  → Performance improvements committed to shared component library
  → All client sites benefit from optimization
  → Aggregate performance data informs further improvements
  → New optimizations added to shared utilities
  → [LOOP REPEATS]
```

---

## Documentation Structure Planning (BiggerBoss-Inspired)

**Reference:** BiggerBoss system's comprehensive documentation approach provides a proven model for technical documentation that enables rapid onboarding and self-service troubleshooting.

### Proposed Documentation Hierarchy

**Location:** `docs/` directory in monorepo root

**Philosophy:** Progressive disclosure - start simple (QUICK_START), then provide detailed documentation for each subsystem.

### Documentation Files (Planned Content)

#### 1. QUICK_START.md
**Purpose:** Get developer or agency partner running in <5 minutes
**Target Audience:** New developers joining project
**Content Outline:**
```markdown
# Quick Start Guide

## Prerequisites
- Node.js 20+, pnpm 8+
- Claude Code CLI installed
- GitHub account

## 60-Second Setup
1. Clone repository
2. pnpm install
3. Copy .env.example to .env
4. pnpm dev
5. Open http://localhost:4321

## Your First Client Site
- Run: pnpm create-client --name="acme"
- Configure Sveltia CMS: sites/acme/public/admin/config.yml
- Deploy: pnpm deploy:staging acme

## Next Steps
- Read CLIENT_ONBOARDING.md for full client setup
- Read AGENT_GUIDE.md to understand automation
```

#### 2. AGENT_GUIDE.md
**Purpose:** Complete guide to using and creating Claude Code agents
**Target Audience:** Developers working with agents
**Content Outline:**
```markdown
# Claude Code Agent Guide

## What Are Agents?
- Specialist AI assistants for specific tasks
- Coordinated by orchestrator agents
- Triggered manually or via webhooks

## Using Existing Agents

### Core Website Agents
- @seo-optimizer - SEO audits and fixes
- @accessibility-auditor - WCAG compliance
- @content-optimizer - Content quality

### Orchestrators
- @website-project-orchestrator - Full project coordination
- @quality-gate-orchestrator - Pre-deployment validation

## Agent Coordination Syntax
@agent_name - Invoke specific agent
Orchestrators delegate to specialists automatically

## Creating New Agents
1. Use skills-creator agent
2. Define agent purpose, tools, model
3. Test with sample tasks
4. Document in this guide

## Agent Directory Structure
.claude/
├── agents/
│   ├── orchestrators/    # Coordination agents
│   └── website/          # Specialist agents
└── skills/               # Reusable knowledge

## Best Practices
- Keep agents focused (single responsibility)
- Use Haiku for repetitive tasks
- Use Sonnet for complex analysis
- Document agent capabilities
```

#### 3. ORCHESTRATOR_WORKFLOWS.md
**Purpose:** How orchestrators coordinate multi-agent workflows
**Target Audience:** Advanced developers, system architects
**Content Outline:**
```markdown
# Orchestrator Workflows

## Architecture Overview
Hierarchical delegation: Master → Phase-specific → Specialists

## Website Project Orchestrator
Master coordinator for full client projects

### Workflow Phases
1. Research & Strategy (@keyword-researcher, @competitive-intelligence-analyst)
2. Development (@seo-optimizer, @accessibility-auditor, @content-optimizer)
3. Quality Validation (@quality-gate-orchestrator)
4. Deployment (@multi-site-deployment-orchestrator)

## Quality Gate Orchestrator
Sequential validation with pass/fail criteria

### Gate Definitions
- Gate 1: Code Quality (linting, types)
- Gate 2: SEO Compliance (>90/100 score)
- Gate 3: Accessibility (WCAG 2.1 AA)
- Gate 4: Performance (Core Web Vitals)
- Gate 5: AI Readiness (crawler optimization)
- Gate 6: Security (no vulnerabilities)

### Failure Handling
- Failed gate returns to development phase
- Fix applied, re-run from failed gate
- Maximum 3 retry attempts

## Multi-Site Deployment Orchestrator
Coordinates deployment across client portfolio

### Deployment Workflow
1. Staging deployment
2. Preview URL generation
3. Client approval (manual or automated)
4. Production deployment
5. Post-deployment validation

## Agent Communication Protocol
Using @agent_name syntax for explicit delegation
Orchestrators maintain state via TodoWrite
```

#### 4. CLIENT_ONBOARDING.md
**Purpose:** Step-by-step process to add new client website
**Target Audience:** Project managers, account managers
**Content Outline:**
```markdown
# Client Onboarding Process

## Phase 1: Pre-Project
- [ ] Client discovery meeting
- [ ] Gather brand guidelines
- [ ] Define success metrics
- [ ] Contract signed

## Phase 2: Project Setup (Day 1)
- [ ] Run: pnpm create-client --name="client-name"
- [ ] Add BRAND_GUIDELINES.md to sites/client-name/
- [ ] Configure Sveltia CMS collections
- [ ] Setup GitHub branch protection

## Phase 3: Research & Strategy (Days 2-3)
- [ ] Invoke @keyword-researcher for client industry
- [ ] Run @competitive-intelligence-analyst on 3-5 competitors
- [ ] Document keyword strategy in sites/client-name/STRATEGY.md

## Phase 4: Development (Week 1-2)
- [ ] Build pages using shared components
- [ ] Customize theme in astro.config.mjs
- [ ] Add client content
- [ ] Configure Sveltia CMS for client editing

## Phase 5: Quality Validation (Week 2)
- [ ] Run @quality-gate-orchestrator
- [ ] Address all gate failures
- [ ] Achieve "All Gates Passed" status

## Phase 6: Deployment & Training (Week 2-3)
- [ ] Deploy to staging
- [ ] Client training session (Sveltia CMS)
- [ ] Client approval
- [ ] Production deployment

## Phase 7: Handoff & Monitoring
- [ ] Document site-specific notes
- [ ] Setup monitoring dashboards
- [ ] Schedule first content update
```

#### 5. CMS_SETUP.md
**Purpose:** Sveltia CMS configuration guide
**Target Audience:** Developers setting up CMS
**Content Outline:**
```markdown
# Sveltia CMS Setup Guide

## Installation
Already included in template - no installation needed

## Configuration
File: sites/[client]/public/admin/config.yml

## Content Collections
Define editable content types (pages, blog, navigation)

## Preview Templates
Configure how content appears in visual editor

## GitHub OAuth Setup
Connect CMS to GitHub for Git-based editing

## Client Training Materials
- Login at site.com/admin
- GitHub OAuth authentication
- Creating/editing content
- Publishing workflow
```

#### 6. DEPLOYMENT_GUIDE.md
**Purpose:** Vercel/Netlify deployment setup
**Target Audience:** DevOps, deployment administrators

#### 7. QUALITY_GATES.md
**Purpose:** Understanding quality validation system
**Target Audience:** Developers, QA

#### 8. TROUBLESHOOTING.md
**Purpose:** Common issues and solutions
**Target Audience:** All users

#### 9. AUTOMATION_SETUP.md
**Purpose:** Webhook and CI/CD automation configuration
**Target Audience:** DevOps, advanced developers

### Documentation Maintenance Strategy

**Ownership:** Technical writer or lead developer
**Update Frequency:**
- QUICK_START.md - Review quarterly
- Agent docs - Update when new agents added
- Troubleshooting - Update as issues discovered

**Version Control:** All documentation in Git, versioned with codebase

### Documentation Success Metrics
- Time to first client site: <1 week (with docs) vs. 3-4 weeks (without)
- Support ticket volume: <5/month per 10 client sites
- New developer onboarding: <1 day productive

---

## Root Cause Analysis: Why This Architecture Solves Core Challenges

### Problem 1: Non-Technical Clients Need Update Capabilities
**Root Cause:** Traditional development workflows require technical knowledge to edit websites
**Solution:** Sveltia CMS visual editor + Git-based workflow
**Why It Works:** Separation of editing interface (Sveltia CMS) from code repository (GitHub) with automated quality checks (Claude Code agents), all at zero licensing cost

### Problem 2: Maintaining Quality Across Multiple Sites
**Root Cause:** Each site as separate project leads to inconsistent quality, duplicated effort
**Solution:** Monorepo with shared component library + centralized CI/CD
**Why It Works:** Single source of truth for design system, SEO utilities, and quality standards ensures consistency

### Problem 3: SEO/AI Optimization is Time-Consuming and Error-Prone
**Root Cause:** Manual schema markup, meta tag optimization, accessibility checks across many sites
**Solution:** Automated Claude Code agents (seo-optimizer, accessibility-auditor) triggered by webhooks
**Why It Works:** Codifies best practices into agent instructions, runs automatically on every content change

### Problem 4: Scaling to Multiple Clients Without Team Growth
**Root Cause:** Each new client site requires proportional developer time
**Solution:** Starter template + automation + non-technical client editing
**Why It Works:** Initial setup investment creates reusable foundation, automation handles repetitive quality checks, clients handle content updates

### Problem 5: Keeping Up With Rapidly Evolving Best Practices
**Root Cause:** SEO algorithms, accessibility standards, and AI optimization techniques change frequently
**Solution:** Claude Code agents updated centrally, automatically applied to all sites
**Why It Works:** Single update to `seo-optimizer` agent propagates to all client sites' CI/CD pipelines

---

## Prioritized Actionable Recommendations

### Phase 1: Foundation (Weeks 1-2)

**1.1 Setup Monorepo Template**
- [ ] Initialize Nx monorepo in `C:\Users\cscot\Documents\Websites\Starter`
- [ ] Create `packages/ui-components/` with 5-10 base Astro components (Button, Card, Navigation, Hero, Footer)
- [ ] Create `packages/seo-utils/` with schema markup generators (Article, FAQ, Organization)
- [ ] Setup GitHub repository with branch protection rules

**1.2 Create Pilot Client Site**
- [ ] Scaffold first site in `sites/client-pilot/` using Astro 5.0
- [ ] Integrate shared components from `packages/ui-components/`
- [ ] Implement base layout with SEO meta tags and JSON-LD schema
- [ ] Create sample content structure

**1.3 Develop Core Claude Code Agents**
- [ ] Create `C:\Users\cscot\.claude\agents\seo-optimizer.md`
  - System prompt: Audit meta tags, schema markup, heading hierarchy, image alt text
  - Tools: Read, Edit, Grep, WebSearch
  - Model: Haiku (efficiency)
  - Output: Structured SEO audit report with specific fixes
- [ ] Create `C:\Users\cscot\.claude\agents\accessibility-auditor.md`
  - System prompt: Check WCAG 2.1 AA compliance, ARIA implementation, semantic HTML
  - Tools: Read, Grep, Edit, mcp__playwright__* (browser testing)
  - Model: Sonnet (complexity of rules)
  - Output: Accessibility compliance report with prioritized fixes
- [ ] Create `C:\Users\cscot\.claude\agents\content-optimizer.md`
  - System prompt: Optimize content for AI + traditional search, readability
  - Tools: Read, Edit, WebSearch
  - Model: Haiku
  - Output: Content quality score with improvement suggestions

**1.4 Test Agent Workflows Locally**
- [ ] Run `seo-optimizer` agent on pilot site homepage
- [ ] Run `accessibility-auditor` on pilot site navigation
- [ ] Document agent performance and iterate on system prompts

### Phase 2: CMS Integration (Weeks 3-4)

**2.1 Sveltia CMS Setup**
- [ ] Install Sveltia CMS by adding `/admin` folder to pilot site
- [ ] Configure `config.yml` for Sveltia CMS
- [ ] Connect GitHub repository via OAuth
- [ ] Define editable content collections (pages, blog posts, navigation)
- [ ] Configure preview templates for common page types
- [ ] Test local development with Sveltia CMS

**2.2 Test Client Editing Workflow**
- [ ] Deploy pilot site with Sveltia CMS to staging environment
- [ ] Access Sveltia CMS admin panel at `/admin`
- [ ] Perform sample edits (homepage hero text, about page content)
- [ ] Verify Git commits appear in GitHub repository with proper attribution
- [ ] Test mobile editing experience
- [ ] Document client-facing editing instructions

**2.3 Webhook Automation (Initial Implementation)**
- [ ] Setup GitHub webhook for repository push events
- [ ] Create n8n workflow or GitHub Actions workflow for webhook handling
- [ ] Test webhook delivery and logging
- [ ] Document automation workflow

### Phase 3: Automation Pipeline (Weeks 5-6)

**3.1 Claude Code on Web Integration**
- [ ] Verify GitHub account connected to Claude Pro/Max account
- [ ] Install Claude GitHub app in template repository
- [ ] Test "Open in CLI" functionality with template repository
- [ ] Document authentication and access patterns

**3.2 CI/CD Pipeline with Claude Code Agents**
- [ ] Create GitHub Actions workflow: `.github/workflows/content-quality-check.yml`
  - Trigger: On push to `sites/*/src/content/*` or manual dispatch
  - Steps:
    1. Checkout code
    2. Invoke Claude Code on Web task (or local CLI if Web not feasible)
    3. Run `seo-optimizer` agent on changed files
    4. Run `accessibility-auditor` on changed pages
    5. Commit automated fixes to new branch
    6. Create pull request with quality report
- [ ] Test workflow with sample content changes
- [ ] Refine agent instructions based on CI/CD results

**3.3 Deployment Pipeline**
- [ ] Setup Vercel or Netlify account
- [ ] Connect pilot site to deployment platform
- [ ] Configure preview deployments for all pull requests
- [ ] Setup production deployment on main branch merge
- [ ] Document deployment workflow for clients

### Phase 4: Scale to Additional Clients (Weeks 7-8)

**4.1 Create New Client Scaffolding Script**
- [ ] Write `scripts/new-client-site.sh` (or `.ps1` for Windows) that:
  - Creates new directory in `sites/client-[name]/`
  - Copies base Astro configuration
  - Initializes Sveltia CMS config (`/admin/config.yml`)
  - Creates `BRAND_GUIDELINES.md` template
  - Updates Nx workspace configuration
- [ ] Test script with second pilot client
- [ ] Document client onboarding checklist

**4.2 Develop Website-Specific Skills**
- [ ] Create `C:\Users\cscot\.claude\skills\website\seo-checklist\SKILL.md`
  - Description: Step-by-step SEO audit procedures, schema markup checklists
  - Content: October 2025 SEO best practices, AI crawler optimization
- [ ] Create `C:\Users\cscot\.claude\skills\website\accessibility-wcag\SKILL.md`
  - Description: WCAG 2.1 AA/AAA guidelines with Astro-specific examples
  - Content: Semantic HTML patterns, ARIA roles, keyboard navigation
- [ ] Create `C:\Users\cscot\.claude\skills\website\astro-patterns\SKILL.md`
  - Description: Astro best practices, component patterns, performance optimization
  - Content: Islands architecture, partial hydration, build optimization
- [ ] Test skills by invoking in Claude Code sessions

**4.3 Measurement and Iteration**
- [ ] Setup analytics on pilot sites (Google Analytics, Vercel Analytics)
- [ ] Monitor Core Web Vitals scores
- [ ] Track AI crawler activity (GPTBot, ClaudeBot in server logs)
- [ ] Measure time saved through automation (baseline vs. automated)
- [ ] Collect client feedback on CloudCannon editing experience

### Phase 5: Advanced Features (Weeks 9-12+)

**5.1 Multi-Site Orchestrator Agent**
- [ ] Create `multi-site-orchestrator.md` agent for:
  - Cross-site dependency updates
  - Coordinated deployments
  - Portfolio-wide performance monitoring
  - Security patch propagation

**5.2 Enhanced Automation**
- [ ] Implement automated image optimization and alt-text generation via Claude
- [ ] Setup multi-language content generation workflows (if needed)
- [ ] Create automated accessibility testing with Playwright integration
- [ ] Develop client-facing performance dashboards

**5.3 Documentation & Knowledge Sharing**
- [ ] Create comprehensive client handbook (editing guide, best practices)
- [ ] Document internal developer workflows (new site setup, agent development)
- [ ] Create video tutorials for CloudCannon editing
- [ ] Build internal knowledge base of solved problems and agent improvements

**5.4 Continuous Improvement**
- [ ] Monthly review of SEO algorithm updates, update `seo-optimizer` agent
- [ ] Quarterly review of accessibility standards, update `accessibility-auditor`
- [ ] Monitor Claude Code feature releases, adapt agents to new capabilities
- [ ] Track client site performance metrics, refine shared components

---

## Success Metrics

### Technical Metrics
- **Build Performance:** All client sites build in <60 seconds
- **Core Web Vitals:** All sites achieve "Good" scores (LCP <2.5s, FID <100ms, CLS <0.1)
- **Accessibility:** All sites pass WCAG 2.1 AA automated checks
- **SEO Health:** 100% schema markup coverage on key pages
- **AI Crawler Indexing:** 90%+ of content successfully crawled by GPTBot/ClaudeBot

### Business Metrics
- **Time to Launch:** New client site from scaffolding to production in <2 weeks
- **Automation ROI:** 70% reduction in manual SEO/accessibility audit time
- **Client Satisfaction:** Clients can independently update content without developer support
- **Scalability:** Support 10+ client sites with current team size
- **Maintenance Burden:** <5 hours/week per site for ongoing maintenance

### Quality Metrics
- **Consistency:** All sites maintain design system compliance (measured by automated linting)
- **Security:** Zero high-severity vulnerabilities in dependency audits
- **Performance Regression:** Automated alerts for any Core Web Vitals degradation
- **Accessibility Compliance:** Monthly automated audits show 95%+ WCAG compliance

---

## Risk Assessment & Mitigation

### Risk 1: Claude Code on Web Limitations
**Risk Level:** Medium
**Description:** Claude Code on Web is in research preview, GitHub-only, may have reliability issues
**Mitigation:**
- Maintain fallback to local Claude Code CLI for critical workflows
- Design agents to work in both Web and CLI environments
- Monitor Claude release notes for feature updates and deprecations
- Have manual fallback procedures documented for all automated checks

### Risk 2: Sveltia CMS Beta/Maturity Status
**Risk Level:** Low
**Description:** Sveltia CMS is in public beta (v1.0 expected early 2026), may have stability issues
**Mitigation:**
- All content stored in Git (CMS is just an editing interface)
- Sveltia is drop-in replacement for Decap CMS (easy fallback)
- Design architecture to support CMS swapping (TinaCMS, CloudCannon alternatives)
- Keep CMS configuration isolated per client site
- Monitor Sveltia GitHub releases and community feedback
- Can migrate to CloudCannon if budget allows and enterprise support needed

### Risk 3: Monorepo Scaling Challenges
**Risk Level:** Low-Medium
**Description:** Repository may become too large, slow builds, complex access control
**Mitigation:**
- Implement Nx caching from day one
- Use Git LFS for media assets
- Monitor repository size and build times monthly
- Have multi-repo migration plan as contingency (threshold: 50+ sites)

### Risk 4: Agent Quality Drift
**Risk Level:** Medium
**Description:** SEO/accessibility standards change, agents provide outdated advice
**Mitigation:**
- Schedule monthly agent review and update sessions
- Subscribe to Google Search Central, W3C WAI updates
- Version control agent prompts with changelog
- Implement agent output validation (cross-check recommendations)

### Risk 5: Client Breaks Site via CMS
**Risk Level:** Low
**Description:** Non-technical client makes breaking changes through Sveltia CMS
**Mitigation:**
- Staging environment for all changes (preview before production)
- Sveltia CMS schema validation prevents malformed data
- Git version control allows instant rollback
- Automated CI/CD checks catch errors before deployment
- Can configure required fields and validation rules in `config.yml`

---

## Conclusion

This investigation reveals a clear path forward for a multi-site website development system powered by Claude Code Sub-agents. The convergence of Astro's performance-first architecture, Sveltia CMS's modern Git-based visual editing, and Claude Code's automation capabilities creates a powerful platform for scalable, high-quality client websites—all with zero CMS licensing costs.

**The Core Innovation:** Treating AI agents (both as clients of websites via crawlers AND as development automation via Claude Code) as first-class citizens in the development workflow positions this system at the intersection of 2025's most important web trends.

**The Strategic Advantage:** By automating repetitive quality checks through custom Claude Code agents while empowering non-technical clients through visual editing, this architecture enables a small team to deliver and maintain a large portfolio of consistently high-quality, AI-optimized websites.

**Next Steps:** Begin with Phase 1 recommendations to establish the foundation, then iterate based on real-world client feedback and emerging best practices in the rapidly evolving SEO/AI landscape.

---

**Report Compiled By:** Investigation Lead
**Squad Contributors:**
- Technology Landscape Analyst
- Integration Architect
- SEO/AI Optimization Specialist
- Asset Inventory Analyst
- Architecture Strategist

**Date:** October 29, 2025
**Location:** C:\Users\cscot\Documents\Websites\Starter\Squad_Analysis_Report.md
