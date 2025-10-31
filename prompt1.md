I need to create a comprehensive CLAUDE.md file for a multi-site website development system project based on our completed Squad Analysis Report.

**Project Overview:**
We're building a monorepo-based starter template that enables agencies to rapidly create and maintain multiple client websites with automated quality checks via Claude Code agents.

**Key Technical Decisions:**
- Framework: Astro 5.0 (islands architecture, SSR, AI-optimized)
- CMS: Sveltia CMS (free, Git-based, visual editing)
- Monorepo: Nx (shared components, unified CI/CD)
- Deployment: Our own server (not Vercel/Netlify)
- Domains: Each client gets their own custom domain
- Automation: Claude Code agents for SEO, accessibility, content optimization
- NOT using WordPress (for now - exploring as alternative later)

**Strategic Goals:**
1. Launch new client sites in <1 week (vs. 3-4 weeks currently)
2. Automate 70% of manual SEO/accessibility audits
3. Enable non-technical clients to edit content independently
4. Optimize all sites for AI crawlers (GPTBot, ClaudeBot) and traditional SEO
5. Support 10+ client sites with current team size

**Success Metrics:**
- Build performance: <60 seconds per site
- Core Web Vitals: All "Good" scores (LCP <2.5s, FID <100ms, CLS <0.1)
- Accessibility: WCAG 2.1 AA compliance
- SEO: 100% schema markup coverage
- AI crawler indexing: 90%+ content successfully crawled

**Architecture Highlights:**
- Multi-orchestrator hierarchy (BiggerBoss-inspired pattern)
- 6-gate quality validation system
- Git-based content workflow (all content versioned)
- Zero CMS licensing costs
- 12 specialized Claude Code agents (planned in phases)

**Reference Documents:**
- Squad Analysis Report: c:\Users\cscot\Documents\Websites\Starter\Squad_Analysis_Report.md
- Template: c:\Users\cscot\Documents\Websites\Starter\claude_template.md

**Instructions:**
Create a CLAUDE.md file following the template structure with:
- Part A: Strategic & Product Definition (Press Release, FAQs, Goals, Metrics)
- Part B: Technical & Operational Framework (Tech Stack, Architecture, Constraints)

Include clarifications:
- Each client can have their own custom domain
- Deploying to our own server (full control)
- NOT using WordPress in this architecture
- Git-based content workflow (Sveltia CMS)

Make it comprehensive enough to guide Claude Code during implementation, but concise enough to be actionable.