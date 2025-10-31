# Strategic Decision Points - Phase 0

**Document Purpose:** Capture critical decisions before committing to Phase 1 infrastructure build.

**Created:** 2025-10-31
**Status:** IN PROGRESS - Awaiting Stakeholder Input
**Review Date:** [To be scheduled]

---

## Decision Point 1: Team Composition & Capacity

**Question:** What is the current team size and skill composition available for this 8-10 week project?

**Context:** Task estimates assume 1-2 developers. Timeline compression possible with 2-person team doing parallel work (e.g., one on Nx monorepo setup, another on Sveltia POC).

**Required Information:**
- [ ] Number of developers available full-time
- [ ] Skill levels: Junior / Mid / Senior
- [ ] Specialized skills: DevOps experience? Claude Code agent familiarity? Astro experience?
- [ ] Availability constraints (part-time, other project commitments)

**Decision:**
```
[TO BE COMPLETED IN STAKEHOLDER MEETING]

Team Size: _____ developers
Skill Breakdown:
- Developer 1: [Name], [Skill Level], [Specialization], [% Availability]
- Developer 2: [Name], [Skill Level], [Specialization], [% Availability]

Timeline Expectation: [8 weeks / 9 weeks / 10 weeks] based on team capacity
```

**Impact on Timeline:**
- 1 developer (solo): 10 weeks realistic
- 2 developers (parallel work): 8 weeks achievable
- Part-time availability: Add +20-30% to timeline

---

## Decision Point 2: Pilot Client Identification

**Question:** Which client will serve as the pilot for Phase 2, and are they ready?

**Context:** Phase 2 success depends on pilot client having content/assets ready. Internal delays can derail timeline. Need confirmed pilot before starting Phase 1.

**Required Information:**
- [ ] Pilot client name and organization
- [ ] Client type: External paying client OR Internal demo site
- [ ] Project scope: Number of pages, features required
- [ ] Content readiness: When will copy, images, branding be available?
- [ ] Client availability: Can they commit to feedback cycles (48-72 hour turnaround)?
- [ ] Launch deadline: Is there a hard deadline driving this timeline?

**Decision:**
```
[TO BE COMPLETED IN STAKEHOLDER MEETING]

Pilot Client: [Name]
Client Type: [External / Internal]
Scope Summary:
- Page count: _____ pages
- Features: [List required features]
- Blog: Yes / No (_____ initial posts)

Content Readiness:
- Brand assets (logo, colors): Available by [DATE]
- Copywriting: Available by [DATE]
- Images/photography: Available by [DATE]
- Client availability for reviews: Yes / No

Contingency Plan if External Client Delays:
[Use internal site as backup pilot? Accept timeline extension?]
```

**Acceptance Criteria:**
-  Pilot client signed agreement (if external) OR executive approval (if internal)
-  Content delivery timeline confirmed within Phase 2 window (Weeks 4-6)
-  Pilot client aware of CMS training requirement (1-hour onboarding session)

---

## Decision Point 3: GitHub Actions Budget & Repository Visibility

**Question:** Will this repository be public or private, and what is the GitHub Actions budget?

**Context:**
- **Public repo:** Unlimited free GitHub Actions minutes (recommended)
- **Private repo:** 2,000 free minutes/month, then $0.008/minute ($6-13/month for 10 sites)

**Required Information:**
- [ ] Can this repository be public? (Open-source the starter template?)
- [ ] If private, what is the acceptable monthly GitHub Actions cost?
- [ ] Is there an existing GitHub organization account with Actions enabled?
- [ ] Who approves GitHub Actions spending if overages occur?

**Decision:**
```
[TO BE COMPLETED IN STAKEHOLDER MEETING]

Repository Visibility: [Public / Private]

If Private:
- Approved Monthly Budget: $_____
- Billing Alert Threshold: _____ minutes (recommended: 1,600 min = 80% of free tier)
- Overage Approval Process: [Who to notify? Auto-approve up to $X?]

If Public:
- Code review for sensitive data removal: [Who is responsible?]
- Open-source license choice: [MIT / Apache 2.0 / Other]
- Public documentation strategy: [Keep CLAUDE.md? Redact client info?]
```

**GitHub Actions Cost Model:** See `docs/GITHUB_ACTIONS_COST_MODEL.md` (created in Task 0.3)

**Acceptance Criteria:**
-  Repository visibility decision documented
-  GitHub billing alerts configured (if private repo)
-  Stakeholder aware of cost trade-offs

---

## Decision Point 4: Sveltia CMS Migration Triggers

**Question:** Under what conditions should we migrate from Sveltia CMS to a paid alternative (CloudCannon, TinaCMS)?

**Context:** Sveltia CMS is pre-v1.0 software (free, actively developed). If critical bugs or client dissatisfaction occurs, migration path exists but adds cost and complexity.

**Required Information:**
- [ ] What constitutes a "critical bug" requiring migration? (Content loss? Editor crashes?)
- [ ] What client complaint threshold triggers migration? (1 complaint? 3 per month?)
- [ ] What is acceptable migration timeline if needed? (Immediate? Next phase?)
- [ ] What is budget for paid CMS if migration necessary? ($49-200/month per site)

**Decision:**
```
[TO BE COMPLETED IN STAKEHOLDER MEETING]

Sveltia CMS Migration Triggers (GO/NO-GO):

=¨ IMMEDIATE MIGRATION if:
- [ ] Content loss or data corruption occurs
- [ ] Editor unusable for >_____ hours without fix
- [ ] Security vulnerability unfixed >_____ days

  EVALUATION MIGRATION if:
- [ ] _____ client complaints per month about CMS usability
- [ ] Critical feature missing (specify: _____________)
- [ ] Sveltia development stalled >_____ days without updates

Migration Destination (Pre-approved):
- Primary choice: [CloudCannon / TinaCMS / Decap CMS / Other]
- Budget approved: $_____ per month for _____ sites
- Migration timeline: [Immediate / Next sprint / End of phase]

Who Approves Migration Decision: [Name/Role]
```

**Acceptance Criteria:**
-  Clear migration triggers documented
-  Budget pre-approved for CMS migration (avoid re-approval delays)
-  Decision-maker identified (no ambiguity in crisis)

---

## Decision Point 5: Definition of "Routine Content Update"

**Question:** What types of content updates should clients handle independently vs. requiring developer assistance?

**Context:** Success metric targets 90% client independence. Need clear definition to measure this and set client expectations.

**Required Information:**
- [ ] What content changes are "routine" (client can do solo)?
- [ ] What changes require developer support (too technical)?
- [ ] What training/documentation will clients receive?
- [ ] How will we measure the 90% target? (Git commit authors? Support tickets?)

**Decision:**
```
[TO BE COMPLETED IN STAKEHOLDER MEETING]

 CLIENT CAN DO INDEPENDENTLY (Routine Updates):
- [ ] Edit page text/copy
- [ ] Upload/replace images
- [ ] Create new blog posts
- [ ] Update navigation menu links
- [ ] Change meta descriptions/SEO titles
- [ ] Publish/unpublish pages
- [ ] [Add others: _____________]

L REQUIRES DEVELOPER (Technical Changes):
- [ ] Add new page types (beyond blog/page templates)
- [ ] Modify site structure (e.g., add new section)
- [ ] Change design/layout (colors, fonts, spacing)
- [ ] Add third-party integrations (forms, analytics)
- [ ] Troubleshoot build failures
- [ ] [Add others: _____________]

Client Training Plan:
- 1-hour CMS onboarding session: [Who conducts?]
- Video tutorial library: [Who creates?]
- Support escalation path: [Email? Slack? Ticketing system?]

Measurement Plan:
- Track Git commits by author (client vs. developer)
- Track support tickets categorized as "content update requests"
- Monthly report: % of content updates done by clients independently
```

**Acceptance Criteria:**
-  Clear boundary between client-managed and developer-required changes
-  Client training plan documented
-  Measurement method agreed upon (Git commits, support tickets, etc.)

---

## Decision Point 6: AI Crawler Indexing Success Criteria

**Question:** How do we define success for "AI-optimized" sites given no guarantees on crawler indexing?

**Context:** CLAUDE.md targets "90%+ content crawled" but AI crawler behavior is unpredictable. Need realistic success criteria distinguishing technical optimization from guaranteed results.

**Required Information:**
- [ ] Is technical optimization sufficient (schema markup, SSR, robots.txt)?
- [ ] Do we need to validate actual crawler activity (server logs, traffic analysis)?
- [ ] What is acceptable timeline for crawler indexing? (Immediate? 30 days? 90 days?)
- [ ] How important is this vs. traditional Google SEO?

**Decision:**
```
[TO BE COMPLETED IN STAKEHOLDER MEETING]

AI Crawler Optimization Success Definition:

 TECHNICAL READINESS (Required, Measurable):
- [ ] Server-side rendering (SSR) enabled for all content pages
- [ ] JSON-LD schema markup on 100% of key pages (homepage, about, services, blog)
- [ ] robots.txt allows GPTBot, ClaudeBot, Google-Extended, PerplexityBot
- [ ] Semantic HTML structure (proper heading hierarchy, alt text, ARIA)
- [ ] Sitemap.xml includes all pages
- [ ] Build validates schema markup (no errors)

=Ê CRAWLER ACTIVITY MONITORING (Best-effort, Not Guaranteed):
- [ ] Server log analysis for AI crawler user agents (monthly report)
- [ ] Track percentage of pages accessed by AI crawlers
- [ ] Goal: [50% / 75% / 90%] of pages crawled within [30 / 60 / 90] days

Acceptance: Technical optimization complete = SUCCESS, regardless of actual crawler behavior
Rationale: We control optimization, not crawler decisions. Measure what we can control.

Priority vs. Traditional SEO:
- Google SEO (PageSpeed, Core Web Vitals): [Primary / Equal / Secondary] priority
- AI Crawler optimization: [Primary / Equal / Secondary] priority
```

**Acceptance Criteria:**
-  Success defined by technical implementation, not uncontrollable crawler behavior
-  Monitoring plan documented (server logs, analytics)
-  Stakeholders understand "AI-optimized" ` "guaranteed indexing"

---

## Decision Point 7: Phase 1-3 Timeline Confirmation

**Question:** Is the 8-10 week timeline for Phases 1-3 realistic and approved given team capacity and business needs?

**Context:** Task plan estimates 8 weeks best-case, 10 weeks realistic. Scope creep or team availability issues could extend further.

**Required Information:**
- [ ] Are there hard external deadlines driving this timeline? (Client launch dates, sales commitments, conferences?)
- [ ] What is minimum viable product (MVP) for Phase 3 exit? (Can we defer features to Phase 4?)
- [ ] What happens if timeline extends beyond 10 weeks? (Acceptable? Cancel project? Reduce scope?)
- [ ] Are stakeholders available for Phase 0 (Week 0) decisions immediately?

**Decision:**
```
[TO BE COMPLETED IN STAKEHOLDER MEETING]

Approved Timeline:
- Phase 0 (Validation): _____ days (Target: 3-5 days)
- Phase 1 (Foundation): _____ weeks (Target: 2-3 weeks)
- Phase 2 (Pilot Site): _____ weeks (Target: 2-3 weeks)
- Phase 3 (Automation): _____ weeks (Target: 2-3 weeks)
- Total Duration: _____ weeks

Hard Deadlines (if any):
- Pilot client launch: [DATE]
- Demo/presentation: [DATE]
- Sales commitment: [DATE]

Contingency Plan if Timeline Extends:
- Acceptable delay: Up to _____ weeks
- Scope reduction options: [List features to defer to Phase 4]
- Cancel threshold: If not complete by [DATE], reassess project viability

MVP Definition for Phase 3 Exit:
Must Have:
- [ ] 1 pilot client site deployed to production
- [ ] Sveltia CMS functional for client editing
- [ ] 6 quality gates operational (even if not all agents built)
- [ ] Client site scaffolding script working

Can Defer to Phase 4:
- [ ] Advanced orchestrator agents (keyword research, competitive analysis)
- [ ] Second client site deployment
- [ ] Enhanced documentation beyond core guides
```

**Acceptance Criteria:**
-  Timeline approved by stakeholders with contingency plan
-  Hard deadlines identified (if any)
-  MVP scope clearly defined (prevents scope creep)

---

## Decision Point 8: WordPress Migration Path

**Question:** Is WordPress integration a future requirement, and should architecture accommodate it?

**Context:** CLAUDE.md explicitly excludes WordPress for MVP (Astro + Sveltia CMS chosen). Some clients may require WordPress. Need to decide if this is future roadmap item.

**Required Information:**
- [ ] What percentage of target clients require WordPress? (Market research)
- [ ] What is timeline for WordPress option if needed? (Phase 4? Year 2?)
- [ ] What is budget for WordPress development? (Headless WP + Astro frontend)
- [ ] Is this a dealbreaker for pilot client or near-term sales?

**Decision:**
```
[TO BE COMPLETED IN STAKEHOLDER MEETING]

WordPress Integration Strategy:

Current Position: [Option A / Option B / Option C]

OPTION A: NO WORDPRESS INTEGRATION (Recommended for MVP)
- Focus 100% on Astro + Sveltia CMS
- If client requires WordPress, politely decline or refer
- Rationale: Maintain simplicity, avoid dual-platform complexity
- Decision: [Approved / Rejected]

OPTION B: WORDPRESS AS PHASE 4+ PREMIUM TIER
- Build MVP without WordPress (Phases 1-3)
- Research WordPress headless integration in Phase 4
- Offer as premium tier (higher pricing, longer timelines)
- Rationale: Capture broader market, don't block future revenue
- Decision: [Approved / Rejected]

OPTION C: WORDPRESS IMMEDIATE REQUIREMENT
- Pilot client requires WordPress (dealbreaker)
- Need to pivot architecture now before Phase 1
- Use WordPress Options Analysis document to guide implementation
- Rationale: Client requirements override technical preferences
- Decision: [Approved / Rejected]

Market Context:
- % of target clients requiring WordPress: _____%
- Competitive positioning: [WordPress alternative / WordPress-friendly / Agnostic]
```

**Acceptance Criteria:**
-  WordPress strategy decided (No / Future / Immediate)
-  If Future: Timeline and budget estimated
-  If Immediate: Pivot plan documented before Phase 1

---

## Decision Summary & Sign-off

**Meeting Date:** [To be scheduled]
**Attendees:**
- [ ] [Name, Role] - Project Sponsor
- [ ] [Name, Role] - Technical Lead
- [ ] [Name, Role] - Developer(s)
- [ ] [Name, Role] - Pilot Client Stakeholder (if external)

**Decisions Status:**
- [ ] Decision 1: Team Composition - COMPLETE
- [ ] Decision 2: Pilot Client - COMPLETE
- [ ] Decision 3: GitHub Actions Budget - COMPLETE
- [ ] Decision 4: Sveltia CMS Migration Triggers - COMPLETE
- [ ] Decision 5: Routine Content Update Definition - COMPLETE
- [ ] Decision 6: AI Crawler Success Criteria - COMPLETE
- [ ] Decision 7: Timeline Confirmation - COMPLETE
- [ ] Decision 8: WordPress Migration Path - COMPLETE

**Phase 0 ’ Phase 1 Gate:**
- [ ] All 8 decision points documented above
- [ ] Sveltia CMS POC completed (Task 0.2) - GO decision made
- [ ] GitHub Actions cost model approved (Task 0.3)
- [ ] Detailed roadmap reviewed (Task 0.4)

**Approval to Proceed to Phase 1:**
- [ ]  Approved by: _________________ [Name, Title] Date: _______
- [ ] ø On Hold - Reason: _________________
- [ ] L Cancelled - Reason: _________________

---

**Next Steps After Approval:**
1. Complete Task 0.2: Sveltia CMS Proof-of-Concept
2. Complete Task 0.3: GitHub Actions Cost Modeling
3. Complete Task 0.4: Detailed Roadmap with Acceptance Criteria
4. Phase 1 Kickoff: Initialize Nx Monorepo (Task 1.1)

**Document Maintenance:**
- Update this document as decisions are made during stakeholder meetings
- Archive final version in project repository
- Reference in all Phase 1+ planning documents
