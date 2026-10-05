# ELAH Product Concept

Source of truth for Cursor and the ELAH landing page.

This document describes ELAH's current product direction. Do not reintroduce the earlier framing around a human-intention score, behavioural matrix, or a model that reads an agent's private reasoning.

## 1. The product in one sentence

ELAH is the verification layer that lets a protected website safely accept AI-agent actions performed on behalf of a person or organization.

Before a protected action runs, ELAH verifies the agent, the delegated permission behind it, the target site, and whether the specific request remains within the approved scope.

## 2. The shift

Traditional CAPTCHAs were built to keep bots away from human-facing services. That model breaks down when useful AI agents legitimately browse, research, purchase, update accounts, and operate inside authenticated portals.

The question is no longer:

“Are you human?”

It is:

“Is this a known agent acting under a valid, limited permission?”

ELAH is sometimes described as an agentic CAPTCHA, but this must be explained precisely:

- ELAH does not make legitimate agents solve puzzles.
- ELAH gives legitimate, known agents a verifiable path into protected workflows.
- Unknown, compromised, replayed, or over-scoped automation does not get that path.
- A computational challenge may later help control large-scale abuse, but it is not ELAH's core trust decision and it does not prove user permission.

## 3. The problem

Today, a protected website often cannot distinguish between:

- an agent acting for a real customer who approved a specific task;
- an automated client with a stable, accountable operator;
- a scraper, compromised agent, or bot abusing an authenticated session.

Existing products solve only parts of this:

- bot-management products identify suspicious traffic;
- identity products authenticate users and issue credentials;
- agent platforms connect agents to tools.

What is missing at the receiving site is an action-level verification layer that proves delegated authority for this request.

## 4. The ELAH answer

ELAH is deployed by the protected platform at the point where a backend action is about to execute. It issues or verifies a short-lived access grant that is bound to:

- a specific agent public key;
- a specific principal (person or organization);
- a specific partner site and tenant;
- explicit permitted actions and resource constraints;
- optional limits such as count, value, or duration;
- a short expiry and replay protection.

The platform remains the final decision-maker. Its policy can proceed, require fresh approval, rate-limit, or reject the request.

### What ELAH can prove

ELAH can prove that a signed request came from an identified agent key carrying a currently valid, site-bound delegation, and that the request is inside the scope the platform chose to enforce.

### What ELAH does not claim

ELAH does not:

- read an agent's private reasoning;
- guarantee that an otherwise valid agent is harmless;
- replace the partner's user authentication, tenant authorization, business rules, or backend action;
- operate as a universal browser extension, global proxy, or global agent registry in v1.

Prompt injection and key compromise still matter. ELAH reduces their blast radius through narrow scope, short expiry, request binding, revocation, and fresh approval for sensitive actions.

## 5. How it works

### The access flow

1. Discover — The protected platform declares how it accepts agent access and which scopes it supports.
2. Approve — The user or organization approves a narrow task in the platform's consent experience.
3. Delegate — A short-lived grant is created for the agent key, target site, tenant, permitted actions, and limits.
4. Sign — The agent signs each protected request and presents the grant.
5. Verify — ELAH checks signature, issuer, audience, expiry, nonce freshness, scope, resource constraints, action binding, and revocation.
6. Decide — The partner applies its own business policy: proceed, require fresh approval, limit, or reject.
7. Revoke — The principal or platform can withdraw future access; ELAH records the authorization and attempted protected action.

### The trust chain

Principal → Delegated grant → Agent public key → Protected site → Permitted action → Signed request

Every link matters. A grant for another site, tenant, agent key, action, or time window must fail verification.

## 6. V1 product

### First wedge

Start with B2B SaaS portals where customers want agents to operate inside an authenticated account and the action boundary is clear.

Example design-partner actions:

- view a customer's own support tickets;
- create a support ticket or add an approved comment;
- change one bounded account setting after fresh confirmation.

### V1 components

- server-side SDK or API-gateway middleware at the partner API boundary;
- a partner-owned approval screen for a defined action;
- short-lived, audience-bound grants with explicit scopes and limits;
- request signing and replay protection;
- revocation lookup and a compact audit trail;
- a verification response that explains why a request was verified, needs step-up, or was rejected.

### Verification result

```
status: verified | step_up_required | rejected
principal: partner-scoped identifier
agent: stable agent-key identifier
grant: grant identifier and expiry
action: resolved action contract
reason: machine-readable verification reason
```

This is not an execution command. The partner's own policy decides what happens next.

## 7. Technical posture

ELAH should work with the rails that are already forming rather than invent a new universal identity system.

- HTTP message signatures and Web Bot Auth can help establish who operates an automated client.
- OAuth/OIDC, token exchange, and sender-constrained credentials can carry delegated authorization.
- The initial grant may be a JWT or comparable signed credential.
- Request proof should cover HTTP method, authority, path, timestamp, nonce, and a content digest for state-changing requests.

The product differentiation is the receiving-site contract: converting these identity and authorization inputs into enforceable permission for one real web or API action, with clear consent, revocation, and auditability.

## 8. Who it is for

### Buyer

The buyer is the SaaS platform that wants to welcome useful agent traffic without exposing broad credentials or weakening tenant boundaries, consent, auditability, and support control.

### First use cases

- customer-support portals;
- account-management workflows;
- authenticated B2B SaaS APIs;
- controlled ticket, comment, setting, and other bounded customer-owned actions.

### Value to the platform

- more legitimate agent requests completed without broad credentials;
- fewer out-of-scope or cross-tenant requests reaching protected actions;
- faster investigation when a customer disputes what an agent did;
- a partner integration measured in days, not a months-long identity project.

## 9. Landing page instructions

Use this structure and preserve the product boundaries above.

### Hero

- Eyebrow: ELAH — VERIFIED AGENT ACCESS
- Headline: Let the right AI agents in. Keep every action in scope.
- Supporting copy: ELAH gives websites a verifiable way to accept AI-agent actions on behalf of people and organizations—without sharing broad credentials or giving agents open-ended access.
- Primary CTA: Talk to ELAH
- Secondary CTA: See how verification works

### Section: The shift

Headline: The web needs an answer beyond “Are you human?”

| Old web | Agentic web |
| --- | --- |
| Is this a human? | Is this a known agent with valid delegated permission? |
| Keep bots out | Let legitimate agents into bounded workflows |
| Session-based access | Short-lived, request-bound access |

### Section: How ELAH works

Present the seven-step access flow as a clean horizontal or vertical trust flow. The visual emphasis should be on delegation, request verification, and platform-controlled decision.

### Section: What the platform verifies

Use short cards for:

- Agent identity
- Delegated principal
- Site and tenant binding
- Action scope and limits
- Freshness and replay protection
- Revocation state

### Section: Built for protected workflows

Lead with B2B SaaS portals. Use concrete examples such as viewing a customer's own tickets, creating an approved support ticket, or changing a bounded setting after fresh confirmation.

### Section: The product boundary

State this clearly:

ELAH verifies delegated, scoped access. It does not claim to read an agent's private reasoning or replace the platform's own policy.

### Closing CTA

- Headline: Make agent access verifiable before the protected action runs.
- Copy: Start with one narrow workflow. Keep the platform in control.

## 10. Visual direction

- Use the ELAH logo, not typed substitute lettering.
- Primary blue: #1086FC.
- Primary ink: #111111.
- Backgrounds should be clean white or near-white, with restrained pale-blue accents.
- The product should feel precise, premium, and security-native: substantial whitespace, strong typography, crisp diagrams, and no generic bot imagery.
- Use the shield/ELAH mark as a product-security cue, not as decorative wallpaper.

## 11. Terms to avoid

Do not position ELAH as:

- a human-behaviour model or behavioural matrix;
- a score that evaluates the agent's private reasoning;
- a generic AI risk score;
- a replacement for IAM, user authentication, authorization, bot management, or the platform's policy engine;
- a universal global agent registry in v1;
- a puzzle-solving CAPTCHA for good agents.

## 12. Canonical short descriptions

**One sentence.** ELAH verifies that an AI agent is acting with valid, limited permission before a protected website or API action runs.

**Short homepage description.** Verified access for AI agents on the web.

**Technical description.** A receiving-site verification layer for signed, delegated, scoped agent access.
