Standard Operating Procedure

SOP: Agentic RAG & Creative Synthesis for AI Design

| Document ID: | DWS-SOP-GEM-002 |
| :---- | :---- |
| **Version:** | 1.0 |
| **Status:** | Final |
| **Approved By:** | Craig Cottle |
| **Date of Issue:** | 16-Nov-2025 |
| **Next Review Date:** | 16-Nov-2026 |

---

### **1.0 Purpose**

The purpose of this Standard Operating Procedure (SOP) is to establish the formal technical architecture and operational methodologies for the Iris \- Creative Director (v2.0) Gem. This document defines the advanced, agentic framework Iris must use for creative prompt synthesis.

This SOP ensures that all creative outputs are grounded in source documents, non-generic, compliant, and fully traceable, moving beyond simple retrieval to active query planning and multi-source synthesis.

### **2.0 Scope**

This SOP applies to the design, implementation, evaluation, and refinement of the Iris \- Creative Director (v2.0) Gem. It governs all internal processes related to prompt generation.

The scope of this procedure covers four primary operational components:

* **Core Architecture:** The mandated use of an Agentic RAG framework over other models.  
* **Creative Engine:** The "Grounded Metaphor" reasoning engine and the "Constraint-as-Creativity" framework.  
* **Variability Engine:** The deterministic and stochastic systems for generating structured prompt variations.  
* **Oversight & Refinement:** The "Traceability Mandate" and the "Self-Correcting" iterative loop.

### **3.0 Definitions**

For clarity, the following terms are defined:

* **Summarizer-First Architecture:** An unsuitable model that compresses all source documents into a single summary *before* generation. This is a "lossy" pipeline that guarantees both "information loss" (granular details are discarded) and "generic averaging".  
* **Traditional RAG:** A "Query-Based" model that retrieves semantically similar chunks of text from an index to augment a prompt. It is insufficient for creative synthesis as it "averages" a complex query into a single vector, leading to retrieval bias.  
* **Agentic RAG:** The mandated architecture. An advanced system that moves beyond simple retrieval. It functions as an AI agent capable of autonomous reasoning, multi-step query planning, and the synthesis of *disparate* data points.  
* **Query Decomposition:** The agent's first step. The agent reasons about a complex request and breaks it down into a multi-step plan of granular, parallel sub-queries.  
* **Grounded Metaphor:** A creative metaphor demonstrably derived from source-document keywords (e.g., brand attributes, emotional goals) through a three-step process of Extraction, Blending, and Scoring.  
* **Constraint-as-Creativity:** A framework that treats brand constraints (e.g., legal, UX) as a *catalyst* for creativity, not a limitation. It reframes the *intersection* of constraints as a "creative puzzle" to be solved.  
* **Systematic (Deterministic) Variation:** A variability system that generates a *batch* of prompts by deterministically pivoting on a pre-defined list of core elements (e.g., one prompt for each persona).  
* **Controlled (Stochastic) Variation:** A variability system that generates *one* unique prompt by randomly selecting a *combination* of "conceptual seeds" (e.g., one random persona \+ one random metaphor) from grounded lists.  
* **Traceability Mandate ('Grounding-Check'):** An automated "immune system" that functions as a Verification Agent, fact-checking creative claims (like metaphors) against source documents to verify they are grounded and not hallucinations.  
* **Iterative Refinement Loop:** A self-correcting mechanism built into the agent's meta-prompt. If the agent critiques its own output as "generic," it automatically refines its query plan to be more granular and re-runs the retrieval process.

---

### **4.0 Core Architecture: Agentic RAG Framework**

This section defines the core methodology for all prompt generation.

#### **4.1 Architectural Mandate**

The Iris Gem **must** be implemented as an Agentic RAG system.

* **'Summarizer-First' Failure:** This architecture is forbidden. Its mechanism of pre-compression guarantees "information loss" (granular details are discarded as noise) and "generic averaging" (generation is based on a "generic average" of all documents).  
* **'Traditional RAG' Failure:** This architecture is insufficient for creative synthesis. A complex creative request is vectorized into a *single semantic average*, which leads to "retrieval bias" and a generic context, failing the synthesis task.

#### **4.2 Mandated Agentic Workflow**

The Gem cannot be a single-step pipeline; it must execute an agentic workflow governed by a meta-prompt that forces multi-step reasoning. This workflow consists of three stages:

1. Step 1: Query Decomposition  
   The agent's first action is to reason, not retrieve. It must deconstruct the user's complex creative request into a multi-step query plan. This plan must consist of multiple, granular, and specific sub-queries designed to target disparate data points.  
2. Step 2: Parallel Retrieval  
   The agent spawns multiple retrieval tasks (e.g., via tool calling) to query for each disparate data point simultaneously (e.g., "Retrieve persona's emotion," "Retrieve compliance rule," "Retrieve design concept").  
3. Step 3: Disparate Synthesis  
   The agent's "brain" (the LLM) receives the structured set of all retrieved, non-averaged, and highly specific data points. It then integrates these disparate contexts into a single, coherent, and non-generic final prompt. This process is governed by the "Agentic Query Planner & Synthesizer" meta-prompt.

---

### **5.0 Creative Engine: Grounded Synthesis**

This section defines the internal logic required to solve the "Creativity vs. Hallucination" gap.

#### **5.1 The 'Grounded Metaphor' Reasoning Engine**

To generate creative metaphors that are demonstrably derived from the 13-document brand suite, the Gem must use the following three-step Chain of Thought process:

1. Step 1: Extraction (Thematic Analysis)  
   The agent performs an automated thematic analysis to scan the corpus and extract a grounded list of keywords. This list serves as the "ground truth" and must include:  
   * Core Brand Attributes (e.g., "secure", "fluid", "transparent")  
   * Emotional Goals (e.g., "calm", "confident")  
   * Key Concepts/Goals (e.g., "reduce user friction")  
2. Step 2: Thematic Blending (Metaphor Generation)  
   The agent applies Conceptual Metaphor Theory. It treats the extracted keywords (Target Domain) as the abstract idea and brainstorms concrete, physical Source Domains (metaphors) that map to them.  
   * *Example:* Target "secure" \-\> Brainstorm "vault", "fortress", "guardian".  
   * *Example:* Target "fluid" \-\> BrainBstorm "river", "water", "flow".  
3. Step 3: Selection & Application (Grounded Scoring)  
   The agent selects the "most potent" metaphor using a scoring and validation step. Each candidate metaphor is scored against the full list of extracted attributes for holistic conceptual consistency.  
   * *Example:* The metaphor "vault" (from "secure") is *discarded* because it is strongly inconsistent with the attributes "fluid" and "fast".  
   * Example: The metaphor "calm river" (from "fluid" \+ "calm") is an excellent candidate as it has high holistic consistency with "reduce user friction" and is neutral towards "secure".  
     The highest-scoring, most consistent metaphor is then selected to frame the final prompt.

#### **5.2 The 'Constraint-as-Creativity' Framework**

This framework instructs the Gem to treat constraints (e.g., from compliance.pdf) as a *catalyst* for creativity, not a limitation.

* **Avoid (Restrictive "Filter" Prompts):** The Gem **must not** use simple, subtractive filter prompts (e.g., "Design a page, but do not use images of people"). This method leads to restrictive, mundane, and homogenized results.  
* **Mandate ("Creative Puzzle" Prompts):** The Gem **must** reframe constraints as a "creative puzzle". The prompt must be generative, forcing lateral thinking by presenting the *intersection* of multiple constraints as the central creative challenge. This forces the downstream AI to invent a novel solution that showcases the constraints. (See Table 2 for examples).

---

### **6.0 Variability Engine: Structured Variation**

This section defines the two distinct systems for generating prompt variations based on the same 13-document suite, ensuring both variety and quality.

#### **6.1 System 1: Systematic (Deterministic) Variation**

This system provides predictable and structured variability, ideal for A/B testing or structured reviews.

* **Concept:** Generates a *batch* of prompts, where each prompt is deterministically pivoted on a different core element from the brand suite.  
* **Procedure:**  
  1. **Query & Identify Pivots:** The agent queries the suite to identify all valid "pivot elements" (e.g., the 3 defined personas, the 2 core design concepts).  
  2. **Systematically Generate:** The agent *systematically iterates* through a pre-defined list of these pivots, generating *one prompt for each specified pivot*.  
  3. **Structured Output:** The agent formats the entire batch as a single, machine-readable JSON array.

#### **6.2 System 2: Controlled (Stochastic) Variation**

This system uses controlled randomness to generate one single, highly unique prompt per run, ideal for idea generation and breaking creative blocks.

* **Concept:** Creates *architectural randomness* by randomizing the *conceptual seeds* of the prompt *before* generation, forcing the exploration of novel combinations.  
* **Procedure:**  
  1. **Query & Build Grounded Lists:** The agent queries the suite to build *lists* of all valid, grounded options for several categories (e.g., valid\_personas, valid\_metaphors, valid\_ctas).  
  2. **Randomly Select Seeds:** The agent *randomly selects one item* from each list.  
  3. **Synthesize Single Prompt:** The agent synthesizes a single, coherent prompt based on that *unique, random combination* of seeds.

---

### **7.0 Oversight & Refinement: Self-Correcting Loop**

This section defines the automated architectural components required for verification, traceability, and reliability.

#### **7.1 The Traceability Mandate ('Grounding-Check' Module)**

This automated "immune system" ensures every creative output is verifiably linked to a source-document keyword.

* **Procedure (Verification Agent):** This module acts as an automated agent that fact-checks the Creative Engine's output.  
  1. **Input:** The Creative Engine produces a structured claim (e.g., {"metaphor": "calm river", "source\_keyword": "fluid", "source\_doc": "brand\_voice.pdf"}).  
  2. **Verification Query:** The Verification Agent performs a new, targeted RAG query to fact-check this claim (e.g., "Retrieve chunks from 'brand\_voice.pdf' containing 'fluid'").  
  3. **Branching Logic:**  
     * **Pass (Grounded):** The query returns relevant chunks. The output is appended with a verified citation and approved as "Grounded Synthesis".  
     * **Fail (Hallucination):** The query returns no relevant chunks. The output is flagged as a "potential hallucination," discarded, sent to a human review queue, and the Creative Engine is instructed to re-run and find a *different*, verifiable metaphor.

#### **7.2 Self-Correcting 'Generic Average' Loop**

This procedure provides the diagnostic and refinement mechanism to automatically fix the "generic average" trap.

* **Diagnosis:** A generic output is a *retrieval failure*. The root cause is *insufficient query decomposition*—the agent's sub-queries were too broad, causing the retriever to return generic chunks.  
* **Procedure (Iterative Refinement Loop):** This logic is built directly into the agent's meta-prompt as a self-critiquing loop.  
  1. **Synthesize Draft:** The agent generates a draft prompt.  
  2. **Self-Critique:** The agent analyzes its own draft against criteria for "genericness" or "vagueness".  
  3. **Branching Logic:**  
     * **If 'Generic' \== TRUE:** The agent identifies retrieval failure. It **must** refine its plan by decomposing the original query into *more granular, aggressive sub-queries* (e.g., changing "Get persona info" to "Get persona's primary *frustration*"). It then re-executes retrieval (Step 3\) and re-synthesizes the prompt (Step 5\) based on the superior, more specific evidence.  
     * **If 'Generic' \== FALSE:** The agent outputs the draft as the final prompt.

---

### **8.0 Supporting Playbooks & Frameworks**

The following tables provide the detailed rules, comparative analyses, and diagnostic playbooks necessary for the execution and maintenance of this SOP.

**Table 1: Comparative Analysis: 'Summarizer-First' vs. 'Agentic RAG' for Creative Synthesis**

| Architecture | Core Mechanism | Risk: 'Information Loss' (Granular Detail) | Risk: 'Generic Averaging' | Viability for Prompt 1 (Disparate Data Synthesis) |
| :---- | :---- | :---- | :---- | :---- |
| **'Summarizer-First'** | Full-document abstractive or extractive summarization. Generation is based on a single, compressed summary. | **High.** Granular details (e.g., "third constraint") are algorithmically identified as 'noise' and **discarded** during compression. | **High.** The summary **is** the "generic average" of the source suite. Generation is based on this average, guaranteeing a generic output. | **Failed.** Structurally incapable of accessing specific details or avoiding an averaged output. |
| **Traditional RAG** | Single-query retrieval. A complex query is "averaged" into one vector, retrieving the top-k semantically similar chunks. | **Low.** Granular detail is **retrievable** if the query is precise and specific (e.g., Q\&A). | **Medium.** Fails on **synthesis**. A complex creative query retrieves "average" chunks, leading to retrieval bias and a generic context. | **Failed.** Cannot retrieve **disparate** data points from a **single** complex query. Fails the synthesis task. |
| **Agentic RAG** | Multi-query decomposition & synthesis. An agent **plans**, decomposes the query, retrieves **disparate** chunks in parallel, and **synthesizes** them. | **Low.** Granular detail is **targeted** for retrieval by the agent's "Retrieval Plan" (Step 2). | **Low.** This architecture **prevents** averaging by retrieving **specific, disparate** chunks **before** any synthesis occurs. The final synthesis is based on specific, non-averaged data. | **Viable.** The only architecture designed for multi-source, non-generic, granular synthesis. |

**Table 2: Constraint-as-Creativity Prompting Matrix**

| Constraint(s) | "Restrictive ""Filter"" Prompt (Avoid This)" | """Creative Puzzle"" Meta-Prompt (Use This)" | Expected Novel AI Behavior |
| :---- | :---- | :---- | :---- |
| **1\. Negative (No People) \+ Positive (H1)**  \- "No images of people's faces." \- "H1 must be 'Security That Flows With You.'" | "Design a landing page with the H1 'Security That Flows With You'. Do not use images of people." | "Your creative challenge is to design a landing page that visually **embodies** the concept of 'Security That Flows With You.' You face a specific puzzle: you must evoke a deep sense of human trust and fluidity **without** using any photographs of people. How can you use abstract shapes, light, motion, typography, and negative space to solve this challenge and make the H1 feel inevitable?" | The AI is forced to innovate on typography, data visualization, and abstract generative design rather than defaulting to a generic "secure-looking" template with a person-less stock photo of a landscape. |
| **2\. Positive (Legal) \+ Positive (UX)**  \- "Must include full 3-paragraph legal disclosure text." \- "UX goal: simple, uncluttered, minimalist design." | "Design a simple, uncluttered page. You must also include the 3-paragraph legal disclosure from compliance.pdf at the bottom." | "Your design puzzle is to solve the tension between 'uncluttered design' and 'dense information.' You **must** include the full 3-paragraph legal disclosure from compliance.pdf \[context provided\], but the primary goal is a **simple, uncluttered** user experience. Find a novel UI/UX solution (e.g., creative 'read more' toggles, elegant in-line expansion, or type hierarchy) that **integrates** this dense text without **disrupting** the primary user flow." | The AI is forced to **invent** a UI element to **manage** the constraint, rather than just "pasting" the text, which would violate the "uncluttered" rule. It prioritizes the **relationship** between the constraints. |
| **3\. Negative (Tech) \+ Positive (CTA)**  \- "No auto-playing video." \- "CTA button 'Request Demo' must be sticky and always visible." | "Design a page with a sticky 'Request Demo' CTA. Do not use auto-playing video." | "Your challenge is to create a **highly engaging** and **dynamic** landing page that feels modern, **without** relying on auto-playing video. The core user journey must be focused on one action: the 'Request Demo' CTA, which must be sticky \[per ux\_spec.pdf\]. How can you use scroll-based animations, micro-interactions, or generative-art elements to create a sense of 'flow' and **draw maximum attention** to the sticky CTA?" | The AI is pushed **away** from the default "video header" and **towards** more subtle, high-impact micro-interactions, generative design, or advanced CSS animations that **serve** the positive constraint (the CTA). |

**Table 3: Variability Generation Systems: Systematic vs. Stochastic**

| System | Core Mechanism | Full System-Level Meta-Prompt | Primary Use Case | Variability (per Run) | Quality/Compliance |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **System 1: Systematic Variation** | **Deterministic Pivot:** Identifies N pivots (e.g., 3 personas) and generates a **batch** of N prompts, one for each pivot. | "You are a Systematic Prompt Generator... Generate a batch of 3 distinct prompts... Your process must be systematic... Pivot 1: Persona A, Pivot 2: Persona B, Pivot 3: Metaphor X... Output a JSON array." | A/B Testing, Design Reviews, Client Presentations. | **Low per prompt, High per batch.** The **batch** covers a wide, **predictable** spread. Every run produces the same set of pivots. | **High.** Quality and compliance are enforced on each **known** pivot. Very stable and predictable. |
| **System 2: Controlled Variation** | **Stochastic Synthesis:** Identifies N **lists** of seeds (e.g., list of personas, list of metaphors), **randomly selects one** from each list, and **synthesizes** a **single prompt** from the unique combination. | "You are a Stochastic Prompt Generator... Generate one single, unique prompt... Your process must be stochastic... 1\. Build lists... 2\. Randomly select seeds... 3\. Synthesize single prompt from seeds." | Idea Generation, Creative Exploration, Breaking Homogenization. | **High per prompt.** Each run produces a **single, unique, and unpredictable** combination of concepts. | **High.** Compliance is maintained as the **seeds** themselves are multiplied by the number of combinations. |

**Table 4: RAG Failure Mode Diagnostic & Refinement Playbook**

| Symptom (Observed Failure) | Root Cause (Architectural Diagnosis) | Automated Detection Method | Mitigation Strategy / Refinement Loop |
| :---- | :---- | :---- | :---- |
| "Prompt is generic, uses brand buzzwords but no specifics." (The 'Generic Average' Trap) | **Retrieval Failure**. RAG agent's query plan (Part 1.3) is not granular enough; retrieves broad, "average" chunks. | Automated **'Self-Critique' step** (Part 4.2) flags its own prompt for "vagueness" or "genericness". | **Trigger Iterative Query Refinement**. Refine the agent's meta-prompt to force more granular sub-query decomposition (e.g., "persona frustration" vs. "persona info"). |
| "Creative metaphor ('design like a rocket ship') is off-brand." (Hallucination / Ungrounded Creativity) | **Generation Failure**. Gem's 'Grounded Metaphor' engine (Part 2.1) failed. It generated an **un-grounded** metaphor not traceable to source keywords. | **'Grounding-Check' Module (Part 4.1).** This Verification Agent performs a RAG query and **fails** to find the "source keyword" (e.g., 'rocket') in the source docs. | **Flag & Re-run.** Flag output as 'Hallucination' and discard. Send the failed {metaphor, source\_docs} pair to a human review queue. Trigger the 'Grounded Metaphor' engine to run again and select a **different, verifiable** metaphor. |
| "Prompt fails to include a specific, mandatory detail." (e.g., the 'third UI/UX constraint') | **Retrieval Failure**. 'Missing Content'. The agent's query plan (Part 1.3) **omitted** a sub-query for this constraint, **or** the chunking/indexing strategy is poor. | **Mandatory Checklist Validation.** An automated step compares the final generated prompt against a 'checklist' of mandatory positive constraints (from Part 2.2). The check fails. | **Meta-Prompt Refinement**. Refine the RAG agent's meta-prompt (Part 1.3) to **require** a 'Mandatory Constraint-Checking' sub-query for all known mandatory documents (e.g., compliance.pdf, ux\_spec.pdf). |
| "Prompt includes contradictory instructions." (e.g., "Be playful" and "Be formal") | **Retrieval & Synthesis Failure.** The agent retrieved conflicting information (e.g., from brand\_voice.pdf and legal\_guidelines.pdf) and **failed to synthesize** them, instead just listing both. | **Conflict Analysis (Part 1.3, Step 4).** The agent **identifies** the conflict but fails to resolve it in Step 5\. This can be flagged by a rule. | **Refine Meta-Prompt (Step 5).** Strengthen the mandate in the meta-prompt to **explicitly** use the "Constraint-as-Creativity" framework (Part 2.2) to **resolve** all identified conflicts as a "creative puzzle," not just list them. |
