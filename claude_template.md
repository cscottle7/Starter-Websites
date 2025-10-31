# Project Constitution: Multi-Site Website Development System

## Part A: Strategic & Product Definition

### 1. The Press Release
Multi-site website development platform launches, enabling agencies to 
build and maintain high-quality, AI-optimized client websites 10x faster...

### 2. Customer FAQ
Q: Can each client have their own domain?
A: Yes, each client gets their own custom domain...

### 3. Internal FAQ
Q: Can we use WordPress?
A: No, we're using Astro + Sveltia CMS for better performance and automation...

Q: Are we using Vercel or our own server?
A: We're deploying to our own server for full control and zero hosting costs...

### 4. Project Goal & High-Level Requirements
Build a monorepo starter template that enables:
- Creating new client sites in <1 week
- Automated quality checks (SEO, accessibility, performance)
- Non-technical client editing via Sveltia CMS
- AI-optimized websites (schema markup, SSR, semantic HTML)

### 5. Success Metrics
- Time to launch new client site: <1 week
- Automation ROI: 70% reduction in manual audits
- Support 10+ client sites with current team

### 6. Core Features & Scope
**In Scope:**
- Nx monorepo with shared components
- Astro 5.0 framework
- Sveltia CMS integration
- Claude Code agent automation (SEO, accessibility, content)
- Deployment to our own server
- Custom domains per client

**Out of Scope:**
- WordPress integration
- E-commerce functionality (MVP)
- Multi-language support (MVP)

## Part B: Technical & Operational Framework

### 7. Strategic Constraint Tags
- Philosophy Tag: [Philosophy:Pragmatism]
- Constraint Tags: [Constraint:Performance], [Constraint:Scalability]

### 8. Tech Stack
- Frontend: Astro 5.0 + Tailwind CSS
- CMS: Sveltia CMS (free, Git-based)
- Monorepo: Nx
- Deployment: Own server (Nginx/Apache)
- CI/CD: GitHub Actions
- Automation: Claude Code agents

### 9. Project File Structure
[Use structure from Squad Analysis Report]

### 10. Key Commands
- Install: `pnpm install`
- Dev: `pnpm dev`
- Build: `nx build [project]`
- New client: `pnpm create-client --name="acme"`

### 11. Architectural Principles
- Static site generation (SSR) for AI crawler optimization
- Git-based content workflow (all content versioned)
- Monorepo for shared components and quality standards
- Zero client-side JavaScript by default (Astro islands)
- Automated quality gates before deployment

### 12. Prohibitions
- DO NOT use WordPress or PHP
- DO NOT deploy without passing all quality gates
- DO NOT store content in databases (use Git)
- DO NOT block AI crawlers (GPTBot, ClaudeBot)