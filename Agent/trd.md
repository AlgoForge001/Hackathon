# Technical Requirements Document (TRD)
## AI Personal Shopping Assistant

**Version:** 1.0
**Companion to:** PRD_AI_Personal_Shopping_Assistant.md
**Date:** August 2026

---

## 1. Purpose

This document defines the technical architecture, system design, APIs, data models, and implementation approach for the AI Personal Shopping Assistant. It maps directly to the MVP-first prioritization defined in the PRD (Section 6).

---

## 2. System Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT (React)                        │
│  Dashboard UI | Chat Assistant UI | Voice Input | Filters    │
└───────────────────────────┬───────────────────────────────────┘
                            │ REST / WebSocket
┌───────────────────────────▼───────────────────────────────────┐
│                     API GATEWAY / BACKEND                    │
│              (Node.js/Express or Python FastAPI)              │
├─────────────┬─────────────┬─────────────┬────────────────────┤
│  Search &    │  AI/LLM      │  User &      │  Alerts &        │
│  Aggregation │  Service     │  Personal-   │  Notification    │
│  Service     │  Layer       │  ization Svc │  Service         │
└─────┬────────┴──────┬──────┴──────┬───────┴─────────┬────────┘
      │               │             │                 │
┌─────▼─────┐   ┌─────▼─────┐ ┌─────▼─────┐    ┌───────▼──────┐
│ Platform   │   │ LLM API   │ │ Database  │    │ Scheduler /   │
│ Data       │   │ (Claude/  │ │ (Postgres │    │ Cron job for  │
│ Connectors │   │ OpenAI)   │ │ /MongoDB) │    │ price checks  │
│ (Amazon,   │   └───────────┘ └───────────┘    └──────────────┘
│ Flipkart,  │
│ Myntra...) │
└────────────┘
```

---

## 3. Component Breakdown

### 3.1 Frontend (Client)
- **Framework:** React + Tailwind CSS
- **Key views:**
  - Dashboard (product comparison cards)
  - Chat assistant panel (side drawer or full page)
  - Product detail view (reviews, price history, alternatives)
  - Settings/interests page
- **State management:** React Context or Zustand (lightweight, fast to implement)
- **Voice input:** Browser `Web Speech API` (`SpeechRecognition`)
- **Image search input:** File upload / camera capture → sent to backend as base64 or multipart

### 3.2 Backend / API Layer
- **Framework:** Node.js + Express (fastest for a hackathon) *or* Python + FastAPI (better if your ML/sentiment work is Python-native)
- **Responsibilities:**
  - Route requests to Search & Aggregation Service
  - Orchestrate calls to LLM API for summaries/justifications
  - Manage user sessions, interests, and history
  - Handle price alert scheduling

### 3.3 Search & Aggregation Service
- Queries each connected platform (real API where available, mock dataset otherwise)
- Normalizes results into a common product schema (see Section 5)
- Merges + deduplicates near-identical listings across platforms

### 3.4 AI/LLM Service Layer
Handles all AI-generated content, called via a single internal service so prompts are centralized and reusable:
- Review summarization
- Sentiment classification (red/yellow/green)
- "Best Overall" scoring + explanation
- "Why buy this" justification text
- Chat assistant responses (natural language → structured search params)
- Personalized recommendation ranking

### 3.5 User & Personalization Service
- Stores user profile, interests, search history, click/save history
- Feeds history into the LLM service for personalized recommendations

### 3.6 Alerts & Notification Service
- Cron/scheduled job checks tracked product prices at intervals
- Sends notification (in-app toast, or email via a service like SendGrid) when target price is hit

---

## 4. Data Flow (Core Search Journey)

1. User submits query (text / voice-transcribed / image) via frontend
2. Backend receives request → Search & Aggregation Service fans out to platform connectors
3. Raw results normalized into common schema, returned to backend
4. Backend sends normalized product batch + reviews to AI/LLM Service for:
   - Sentiment tagging
   - Review summarization
   - Best Overall scoring
   - "Why buy this" text generation
5. Enriched results cached (short TTL, e.g., 10 min) and returned to frontend
6. Frontend renders comparison cards with all AI-generated fields attached
7. User interaction (click, save, filter) logged to User & Personalization Service asynchronously

---

## 5. Data Model (Core Entities)

### Product (normalized schema across platforms)
```json
{
  "product_id": "string (internal UUID)",
  "platform": "amazon | flipkart | myntra | ...",
  "platform_product_id": "string",
  "title": "string",
  "brand": "string",
  "category": "string",
  "price": "number",
  "original_price": "number",
  "discount_percent": "number",
  "currency": "INR",
  "rating": "number (0-5)",
  "review_count": "number",
  "image_url": "string",
  "product_url": "string",
  "delivery_estimate": "string",
  "in_stock": "boolean",
  "specs": { "key": "value" },
  "fetched_at": "timestamp"
}
```

### AI-Enriched Product (extends Product)
```json
{
  "product_id": "string",
  "sentiment": "green | yellow | red",
  "review_summary": "string (AI-generated)",
  "why_buy": "string (AI-generated)",
  "best_overall_score": "number (0-100)",
  "is_best_overall": "boolean",
  "alternatives": ["product_id", "product_id"]
}
```

### User
```json
{
  "user_id": "string",
  "interests": ["electronics", "footwear", ...],
  "search_history": [{ "query": "string", "timestamp": "datetime" }],
  "saved_products": ["product_id"],
  "price_alerts": [
    { "product_id": "string", "target_price": "number", "active": "boolean" }
  ]
}
```

### Review (raw, pre-aggregation)
```json
{
  "product_id": "string",
  "platform": "string",
  "rating": "number",
  "text": "string",
  "author": "string",
  "date": "date"
}
```

---

## 6. API Design (Core Endpoints)

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `POST` | `/api/search` | Text/voice query → returns aggregated + AI-enriched product list |
| `POST` | `/api/search/image` | Image upload → visually similar product results |
| `GET`  | `/api/products/:id` | Full product detail (specs, reviews, price history, alternatives) |
| `GET`  | `/api/products/:id/alternatives` | Best alternative finder |
| `GET`  | `/api/products/:id/price-history` | Historical price data points |
| `POST` | `/api/chat` | Natural-language chat query → assistant response + structured results |
| `POST` | `/api/alerts` | Create a price alert |
| `GET`  | `/api/alerts/:userId` | List active alerts |
| `POST` | `/api/users/:id/interests` | Update user interest tags |
| `GET`  | `/api/recommendations/:userId` | Personalized recommendation feed |
| `POST` | `/api/budget-explorer` | Given product + increased budget, return upgraded options |

---

## 7. AI/LLM Integration Details

### 7.1 Prompt Responsibilities (centralize these as reusable prompt templates)

| Task | Input | Output |
|------|-------|--------|
| Review Summary | List of raw reviews for a product | 2–3 sentence summary of common praise/complaints |
| Sentiment Tag | Same review batch | Single label: green / yellow / red |
| Best Overall Scoring | Normalized product list (price, rating, sentiment, delivery) | Ranked list with numeric scores |
| Why Buy This | Product data + review summary + score | 1–2 sentence justification |
| Chat Assistant | User's natural language message + conversation history | Structured search params + conversational reply |
| Budget Explorer | Current product + new budget ceiling | 1–3 upgraded product suggestions with reasoning |

### 7.2 Implementation Notes
- Use **structured JSON output** from the LLM wherever the result feeds the UI directly (sentiment, scores, budget suggestions) — instruct the model to return JSON only, parse defensively (strip code fences, try/catch).
- Keep review summarization and "why buy this" as short free-text fields — these are safe to render as plain strings.
- Cache AI-generated fields per product for the session/demo to avoid repeated LLM calls and reduce latency/cost during judging.

---

## 8. Third-Party / External Integrations

| Integration | Purpose | Hackathon Approach |
|-------------|---------|---------------------|
| E-commerce platform APIs/scrapers | Product data | Use official APIs if available; otherwise pre-built mock datasets for 3–4 categories (electronics, footwear, fashion) |
| LLM API (Claude or similar) | All AI-generated content | Single API key, centralized service layer |
| Web Speech API | Voice search | Native browser API, no backend needed |
| Sentiment/embedding model (optional) | Image search similarity | CLIP embeddings or a hosted reverse-image-search API |
| Email/notification service (optional) | Price alerts | SendGrid/console-log fallback for demo |

---

## 9. Non-Functional / Engineering Requirements

- **Latency target:** Search results rendered within 3–5 seconds end-to-end for demo smoothness
- **Caching:** Cache aggregated + AI-enriched results per query for ~10 minutes to avoid re-hitting LLM/platform APIs repeatedly during a live demo
- **Fallback data:** If a live platform connector fails or rate-limits, fall back to mock dataset automatically — never let the demo show an empty state
- **Error handling:** All LLM calls wrapped in try/catch with a safe default (e.g., generic "No summary available" instead of a broken UI)
- **Mobile responsiveness:** Dashboard must degrade gracefully to a single-column card layout on mobile

---

## 10. Suggested Build Order (Tied to PRD MVP Priority)

1. Set up backend skeleton + mock product dataset (2–3 categories, ~15–20 products each, across 3 "platforms")
2. Build dashboard UI with comparison cards (static data first)
3. Wire up `/api/search` with sorting/filtering
4. Integrate LLM service for review summary + sentiment tags
5. Add "Best Overall" scoring + "Why buy this" generation
6. Build chat assistant on top of the same search pipeline
7. Add best alternative finder
8. **(Stretch)** Voice search → price alerts → image search → personalization → budget explorer → price history

---

## 11. Tech Stack Summary

| Layer | Choice |
|-------|--------|
| Frontend | React + Tailwind CSS |
| Backend | Node.js/Express (or Python/FastAPI) |
| Database | PostgreSQL (structured) or MongoDB (flexible product schema) |
| AI/LLM | Claude API (Anthropic) |
| Voice | Web Speech API |
| Image search | CLIP embeddings / reverse-image API |
| Hosting (demo) | Vercel (frontend) + Render/Railway (backend) |
| Notifications | SendGrid (or console/log fallback for demo) |

---

## 12. Open Technical Risks

| Risk | Mitigation |
|------|-----------|
| No time to build real scrapers/API integrations | Use realistic mock datasets; label clearly as "demo data" if asked by judges |
| LLM latency slows down demo | Pre-warm/cache responses for the specific products you'll demo live |
| Image search accuracy poor with limited time | Scope to a small, curated product image set for the demo |
| AR/VR not technically feasible in time available | Replace with a short pre-recorded video walkthrough in the pitch |