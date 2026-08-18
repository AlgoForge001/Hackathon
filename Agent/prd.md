# Product Requirements Document (PRD)
## AI Personal Shopping Assistant

**Version:** 1.0
**Prepared for:** Hackathon Problem Statement 05 — AI Personal Shopping Assistant
**Team:** [Your Team Name]
**Date:** August 2026

---

## 1. Problem Statement

Shoppers today have to manually jump between Amazon, Myntra, Flipkart, and dozens of other e-commerce platforms to compare prices, specs, and reviews before buying anything. This is slow, inconsistent, and doesn't account for personal preferences, budget flexibility, or genuine product quality — it's mostly guesswork and endless tab-switching.

**Goal:** Build an AI-powered shopping assistant that finds products across multiple platforms, understands what the user actually wants (needs, preferences, budget), and helps them decide — not just search.

---

## 2. Product Vision

A single dashboard where a user describes (or speaks, or photographs) what they want, and the assistant returns a ranked, explained, cross-platform comparison — with AI reasoning on *why* to buy, price trends, alternatives, and personalized recommendations that improve over time.

---

## 3. Target Users

- Everyday online shoppers comparing prices across platforms before purchase
- Budget-conscious buyers who want to know "what do I get if I spend a bit more?"
- Users who don't know exactly what they want and need guided discovery (AR/VR try-on, image search, voice search)

---

## 4. Core User Flow

1. User opens dashboard → enters a search (text / voice / image) or browses by category
2. System queries multiple e-commerce platforms (Amazon, Myntra, Flipkart, etc.)
3. Results are shown as **comparison cards**, one per platform/product
4. User can sort/filter, view AI-generated "why buy this" summaries, sentiment-tagged reviews, and price history
5. AI recommends a "Best Overall" pick and alternatives
6. User can set a price alert, save to interests, or ask "what if I increase my budget?"
7. Over time, the assistant personalizes recommendations based on past searches/purchases

---

## 5. Feature List — Detailed

### 5.1 Multi-Platform Price Comparison Dashboard (Core)
- Aggregates product listings from Amazon, Myntra, Flipkart, and other configured platforms
- Displays each result as a **card**: image, price, platform logo, rating, delivery estimate
- This is the anchor feature — every other feature attaches to this card/dashboard model

### 5.2 AI-Powered Price Comparison Assistant
- Conversational/chat-style assistant layered on top of the dashboard
- User can ask natural-language questions ("find me the cheapest running shoes under ₹3000 with good reviews") and the assistant queries + ranks results
- Explains price differences (e.g., discounts, delivery charges, platform fees)

### 5.3 Sorting & Filtering
- Sort by: price (low–high/high–low), rating, discount %, delivery time, popularity
- Filter by: brand, price range, size, color, platform, availability

### 5.4 User Interests
- User selects/tags categories or brands they care about (electronics, fashion, footwear, etc.)
- Used to bias search ranking and personalized recommendations

### 5.5 AR/VR Try-On / Visualization
- For fashion/accessories: virtual try-on using camera (AR overlay)
- For furniture/large items: AR placement in real space using phone camera
- *(Note: this is the most technically heavy feature — see MVP note below)*

### 5.6 AI Review Summary + User Reviews
- Aggregates reviews from the product's listing(s) across platforms
- AI generates a short summary of common praise/complaints
- Displays raw user reviews alongside the AI summary for transparency

### 5.7 "Best Overall" Badge
- AI ranks all compared products and highlights one as "Best Overall" based on a weighted score (price, rating, review sentiment, delivery, seller trust)
- Shows the scoring logic briefly so it doesn't feel like a black box

### 5.8 "Why Buy This?" (AI-Generated Justification)
- Short AI-generated explanation per product: *"Good value — 20% cheaper than average for this spec, 4.5★ from 2,300 reviews, fast delivery."*
- Tied directly to the review summary and best-overall scoring data

### 5.9 Review Sentiment Icons (🔴 🟡 🟢)
- Each product/review batch gets a color-coded sentiment indicator
- Green = mostly positive, Yellow = mixed, Red = mostly negative
- Powered by sentiment analysis on aggregated review text

### 5.10 Price History / Trend Tracking
- Line chart showing price movement over time (where historical data is available, e.g., via price-tracking APIs or your own scraped history)
- Helps users judge if "today's price" is actually a good deal

### 5.11 Personalized AI Recommendations
- Based on past searches, saved interests, and purchase/click history
- Two layers:
  - **General recommendations** (trending, similar users also liked)
  - **Personal recommendations** (specific to this user's history)

### 5.12 Price Alerts
- User sets a target price for a product
- System notifies (in-app/email) when price drops to/below target

### 5.13 "What If I Increase My Budget?" Explorer
- Interactive slider: user adjusts budget up and instantly sees what better options unlock ("+₹500 gets you a model with double the storage")
- Great differentiator — makes the "why upgrade" tradeoff visual instead of manual re-searching

### 5.14 Image Search
- User uploads/takes a photo of a product → system finds visually similar products across platforms
- Useful for "I saw this somewhere, find it cheaper" use case

### 5.15 Best Alternative Finder
- For any given product, suggest 2–3 alternatives (cheaper, better-rated, or similar-spec from another brand/platform)

### 5.16 Voice Search
- User speaks their query instead of typing
- Converts speech → text → feeds into the same search/recommendation pipeline

---

## 6. MVP Scope vs Stretch Goals (Important for Hackathon Timeline)

Trying to build all 16 features in a hackathon window will likely mean nothing works well. Recommended split:

### MVP (build first, must work end-to-end)
- Multi-platform comparison dashboard with cards (5.1)
- Sorting & filtering (5.3)
- AI review summary + sentiment icons (5.6, 5.9)
- "Best Overall" badge + "Why buy this" AI justification (5.7, 5.8)
- Price comparison AI assistant (chat-based) (5.2)
- Best alternative finder (5.15)

### Stretch Goals (add if time permits, in this order)
1. Voice search (5.16) — relatively easy win, high demo impact
2. Price alerts (5.12)
3. Image search (5.14)
4. Personalized recommendations (5.11)
5. "What if I increase my budget?" slider (5.13)
6. Price history tracking (5.10) — depends on data availability
7. User interests tagging (5.4)

### Demo-Only / Post-Hackathon (don't attempt live in a hackathon)
- AR/VR try-on (5.5) — needs significant AR dev time and device/camera access; consider mocking this with a short pre-recorded demo video or a static AR placeholder instead of building it live

---

## 7. Functional Requirements

| ID | Requirement |
|----|-------------|
| FR1 | System shall fetch product data from at least 3 e-commerce platforms |
| FR2 | System shall display results in a card-based dashboard UI |
| FR3 | System shall allow sorting/filtering by price, rating, discount, delivery |
| FR4 | System shall generate an AI summary of reviews per product |
| FR5 | System shall assign a sentiment color tag per product |
| FR6 | System shall generate a "Best Overall" recommendation with a justification |
| FR7 | System shall support natural-language chat queries |
| FR8 | System shall support voice input converted to search queries |
| FR9 | System shall allow users to set and receive price-drop alerts |
| FR10 | System shall suggest alternative products for any selected item |

---

## 8. Non-Functional Requirements

- **Performance:** Search results should return within ~3–5 seconds for a good demo experience
- **Scalability:** Not a primary hackathon concern, but architecture should not hard-code to one platform
- **Data reliability:** Where live scraping/APIs aren't available or are rate-limited, use mock/sample datasets so the demo doesn't break live
- **Usability:** Dashboard should work well on both desktop and mobile for judging/demo purposes

---

## 9. Suggested Tech Stack

- **Frontend:** React (fast to build cards/dashboard UI, easy to demo)
- **Backend:** Node.js/Express or Python (FastAPI) — Python is easier if you're doing sentiment analysis/ML in-house
- **AI/LLM layer:** Claude API (or any LLM API) for review summarization, "why buy this" generation, and the chat assistant
- **Data source:** 
  - Real APIs where available (some platforms have official/partner APIs)
  - Otherwise, pre-scraped or mock datasets for 3–4 sample product categories (safest for a live demo)
- **Sentiment analysis:** A lightweight sentiment model, or just have the LLM classify review batches as positive/neutral/negative
- **Voice search:** Browser Web Speech API (free, fast to integrate)
- **Image search:** CLIP-based embedding similarity, or a simpler reverse-image API if time is short

---

## 10. Success Metrics (for judging/demo narrative)

- Time saved: how much faster is finding a "best deal" vs manual browsing
- Comparison accuracy: does the "Best Overall" pick genuinely make sense given price/rating/reviews
- Feature completeness relative to MVP scope
- Demo smoothness — a working MVP with 6 solid features beats a shaky demo with 16 half-built ones

---

## 11. Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| E-commerce sites block scraping / no public API | Use mock datasets for demo; mention real integration as a roadmap item |
| AR/VR too time-consuming to build live | Mock with a short pre-recorded clip or skip for MVP |
| LLM costs/rate limits during demo | Cache sample responses as a fallback |
| Too many features, not enough time | Follow the MVP-first prioritization in Section 6 |

---

## 12. Future Roadmap (Post-Hackathon)

- Real-time API integrations with major e-commerce platforms
- Full AR/VR try-on experience
- Browser extension for on-page price comparison
- Community-driven "best overall" voting alongside AI scoring
- Multi-language voice search support