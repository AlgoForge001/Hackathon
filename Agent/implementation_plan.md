# Implementation Plan: AI Personal Shopping Assistant (Frontend & Backend)

Comprehensive, separated implementation plan for building the full-stack AI Personal Shopping Assistant.

---

## 🏗️ 1. Architecture & System Overview

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                   FRONTEND (React 19 + Vite)                           │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  ┌─────────────────────────┐  │
│  │ Search & Hero │  │ Product Grid  │  │ Chat Drawer   │  │ Value Tools             │  │
│  │ (Voice/Image) │  │ (Cards+Badges)│  │ (Assistant AI)│  │ (Budget + Alternatives) │  │
│  └───────┬───────┘  └───────┬───────┘  └───────┬───────┘  └────────────┬────────────┘  │
│          └──────────────────┼──────────────────┴───────────────────────┘               │
│                             ▼ Axios (REST API + Interceptors)                          │
└─────────────────────────────┬──────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────▼──────────────────────────────────────────────────────────┐
│                                  BACKEND (Node.js / Express 5)                         │
│  ┌────────────────────┬────────────────────┬────────────────────┬───────────────────┐  │
│  │ Product & Search   │ AI/LLM Reasoning   │ Chat Assistant     │ Alerts & Users    │  │
│  │ Service + Cache    │ Service (Gemini)   │ Service            │ Service           │  │
│  └────────┬───────────┴────────┬───────────┴────────┬───────────┴─────────┬─────────┘  │
│           │                    │                    │                     │            │
│  ┌────────▼─────────┐ ┌────────▼─────────┐ ┌────────▼──────────┐ ┌────────▼─────────┐  │
│  │ Mock Multi-Store │ │ Gemini / Claude  │ │ Intent / Param    │ │ MongoDB Atlas /   │  │
│  │ Catalog (JSON)   │ │ LLM API          │ │ Parser            │ │ Local Database    │  │
│  └──────────────────┘ └──────────────────┘ └───────────────────┘ └───────────────────┘  │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🖥️ 2. FRONTEND IMPLEMENTATION PLAN

### **2.1 Directory & Component Hierarchy**
```
frontend/src/
├── assets/                  # Logos (Amazon, Flipkart, Myntra), SVGs
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx               # Logo, Search bar trigger, Voice button, Auth state, Alerts icon
│   │   └── Footer.jsx               # Platform badges, Hackathon credits
│   ├── hero/
│   │   ├── HeroSection.jsx          # Futuristic 3D/Glow landing hero with interactive search
│   │   └── CategoryPills.jsx        # Instant filter chips (Electronics, Footwear, Fashion, etc.)
│   ├── products/
│   │   ├── ProductGrid.jsx          # Responsive grid container
│   │   ├── ProductCard.jsx          # Card with price, platform badge, sentiment pill, best-overall tag
│   │   ├── BestOverallBadge.jsx     # Golden highlight with scoring breakdown tooltip
│   │   ├── SentimentBadge.jsx       # 🟢 🟡 🔴 Interactive sentiment indicator with pros/cons
│   │   └── ProductDetailModal.jsx   # Deep dive: specs table, AI review summary, raw reviews
│   ├── chat/
│   │   ├── ChatDrawer.jsx           # Slide-out animated assistant panel
│   │   ├── ChatMessage.jsx          # User & AI message bubbles with embedded mini-cards
│   │   └── PromptSuggestions.jsx    # Quick clickable prompt pills
│   ├── tools/
│   │   ├── BudgetSlider.jsx         # "What If I Increase My Budget?" interactive upgrade explorer
│   │   ├── AlternativeFinder.jsx    # 3-card side-by-side alternative comparison
│   │   └── PriceAlertModal.jsx      # Target price setter with notification trigger
│   ├── search/
│   │   ├── VoiceSearchModal.jsx     # Web Speech API recorder with pulsating wave animation
│   │   ├── ImageSearchModal.jsx     # Visual product upload / dropzone
│   │   └── FilterSidebar.jsx        # Price range slider, brand filters, platform checkboxes
│   └── common/
│       ├── GlassCard.jsx            # Reusable glassmorphic container
│       ├── Loader.jsx               # Skeleton cards & AI thinking spinner
│       └── ToastNotification.jsx    # Toast alerts for saved items and price drops
├── context/
│   ├── AuthContext.jsx              # User session, JWT handling, Google login
│   └── ShoppingContext.jsx          # Active query, results, filters, chat history, saved alerts
├── hooks/
│   ├── useVoiceSearch.js            # Hook for Web Speech API recognition
│   ├── useDebounce.js               # Debounce for live search inputs
│   └── useShopping.js               # Convenience hook for ShoppingContext
├── services/
│   └── api.js                       # Centralized Axios client with endpoints
├── styles/
│   ├── index.css                    # Base tokens, theme variables, glassmorphic utility classes
│   └── animations.css               # Smooth transitions, glow pulses, shimmer loaders
├── App.jsx                          # Main routing & state provider wrapper
└── main.jsx
```

### **2.2 Design System & Visual Aesthetics**
- **Theme**: Ultra-modern Dark Cyber / Glassmorphism.
- **Palette**:
  - Background: `#0B0F19` & `#0F172A`
  - Cards: `rgba(30, 41, 59, 0.7)` with `backdrop-filter: blur(16px)` and border `rgba(255, 255, 255, 0.08)`
  - Accent Primary: `#38BDF8` (Electric Cyan) & `#818CF8` (Indigo Glow)
  - Platform Colors: Amazon (`#FF9900`), Flipkart (`#2874F0`), Myntra (`#FF3F6C`)
  - Sentiment Tags: Green (`#10B981`), Yellow (`#F59E0B`), Red (`#EF4444`)
- **Micro-Interactions**: Framer Motion hover scale (`1.02`), tab switches, and pulsating audio recording state.

### **2.3 Key Frontend Features & State Logic**
1. **Multi-Platform Comparison Cards**:
   - Compares Amazon, Flipkart, and Myntra listings side-by-side with clear platform tags and price difference calculations.
2. **AI Floating Assistant Drawer**:
   - Chat box floating in the bottom-right that can be toggled anytime.
   - User types naturally; the assistant suggests products and injects clickable recommendation cards.
3. **Interactive Budget Explorer Slider**:
   - Slider moving from current price up to `+₹10,000` showing "What extra features/specs unlock" per bracket.
4. **Voice Search Integration**:
   - Uses native `window.webkitSpeechRecognition` / `SpeechRecognition` to instantly transcribe voice to search query without external API cost.

---

## ⚙️ 3. BACKEND IMPLEMENTATION PLAN

### **3.1 Directory & File Structure**
```
backend/
├── config/
│   └── db.js                        # Mongoose connection with resilient fallback
├── controllers/
│   ├── authController.js            # Existing Auth (Register, Login, Google OAuth)
│   ├── productController.js         # Search, product detail, alternatives, budget explorer
│   ├── chatController.js            # Conversational AI assistant query handler
│   └── alertController.js           # Price alerts creation and user alert feeds
├── data/
│   └── mockProducts.json            # Curated 60+ products across 4 categories with Amazon/Flipkart/Myntra variations
├── middleware/
│   ├── authMiddleware.js            # Protect routes with JWT verification
│   └── cacheMiddleware.js           # In-memory LRU/TTL cache for search and LLM queries
├── models/
│   ├── User.js                      # User preferences, interests, saved items
│   ├── Product.js                   # Cached product schema
│   └── Alert.js                     # Price drop tracking model
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js             # /api/search, /api/products/:id, /api/products/:id/alternatives, /api/budget-explorer
│   ├── chatRoutes.js                # /api/chat
│   └── alertRoutes.js               # /api/alerts
├── services/
│   ├── aiService.js                 # Central LLM client (Gemini/Claude) for summaries, sentiment, and reasoning
│   ├── searchService.js             # Multi-platform query aggregator & filter engine
│   └── alertService.js              # Cron scheduler checking price threshold triggers
├── .env                             # Port, Mongo URI, Gemini API Key, JWT Secret
├── index.js                         # Express entrypoint
└── package.json
```

### **3.2 Core Backend Services**

#### **A. Search & Aggregator Engine (`services/searchService.js`)**
- Queries product catalog across configured platforms (Amazon, Flipkart, Myntra).
- Applies filters: `category`, `minPrice`, `maxPrice`, `brand`, `rating`, `platform`.
- Normalizes data into unified schema (uniform pricing, currency formatting, rating normalization).
- Implements fast in-memory cache (10 min TTL) so repeated queries respond in `< 50ms`.

#### **B. AI Intelligence Service (`services/aiService.js`)**
- Utilizes Google Gemini (`@google/genai` or direct REST/SDK) / Claude / OpenAI.
- **Review Summary Prompt**: Synthesizes 5–10 user reviews into 2 concise sentences of praise and critique.
- **Sentiment Classifier**: Assigns `green` (positive >80%), `yellow` (mixed 50-80%), or `red` (<50%).
- **"Best Overall" Scoring Formula**:
  $$\text{Score} = (0.35 \times \text{PriceValue}) + (0.30 \times \text{RatingScore}) + (0.20 \times \text{SentimentScore}) + (0.15 \times \text{DeliveryReliability})$$
- **"Why Buy This" Justification**: 1-2 sentence AI explanation highlighting value proposition.
- **Structured JSON Fallback**: If LLM fails or hits quota, generates deterministic rule-based summaries and justifications so the demo never fails.

#### **C. Conversational Assistant (`services/aiService.js` + `controllers/chatController.js`)**
- Natural Language Intent Parser:
  - Input: *"Find me waterproof sports shoes under ₹2500 with good grip"*
  - Extracted Params: `{ category: "footwear", maxPrice: 2500, keywords: ["waterproof", "sports", "running"], sort: "rating" }`
  - Output: Conversational friendly response + array of matched product objects.

#### **D. Smart Tools (Alternatives & Budget Explorer)**
- **`/api/products/:id/alternatives`**: Finds cheaper alternative, higher-rated alternative, and cross-platform clone.
- **`/api/budget-explorer`**: Takes `{ productId, budgetIncrease }` and returns top upgraded products with a highlight of what extra features you gain.

---

## 📡 4. API Endpoints & Request/Response Contracts

| Method | Route | Request Body / Params | Response Payload |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/search` | `{ query, category, minPrice, maxPrice, platform, sortBy }` | `{ count, results: [EnrichedProduct], bestOverallId }` |
| `GET` | `/api/products/:id` | Route Param `:id` | `{ product: EnrichedProduct, reviews: [], specs: {} }` |
| `GET` | `/api/products/:id/alternatives` | Route Param `:id` | `{ cheaper: [], premium: [], alternatePlatform: [] }` |
| `POST` | `/api/budget-explorer` | `{ productId, extraBudget }` | `{ currentProduct, upgradedOptions: [{ product, upgradeReason }] }` |
| `POST` | `/api/chat` | `{ message, history: [] }` | `{ reply: string, suggestedProducts: [], parsedFilters: {} }` |
| `POST` | `/api/search/image` | Multipart / Base64 `{ image }` | `{ detectedQuery: string, results: [EnrichedProduct] }` |
| `POST` | `/api/alerts` | `{ productId, targetPrice, email }` | `{ success: true, alertId: string }` |
| `GET` | `/api/alerts` | Protected (`Bearer JWT`) | `{ alerts: [Alert] }` |

---

## 📅 5. Phased Execution Roadmap

### **Phase 1: Backend Foundation & Mock Multi-Platform Catalog**
1. Install `@google/genai` or necessary AI SDK in `backend/`.
2. Create `backend/data/mockProducts.json` with realistic multi-platform products (Sony WH-1000XM5, Nike Air Zoom, Apple MacBook Air, etc.) across Amazon, Flipkart, Myntra.
3. Build `backend/services/searchService.js` and `backend/routes/productRoutes.js`.
4. Test `/api/search` via Postman/curl.

### **Phase 2: AI Intelligence Layer (Summaries, Sentiment & Scoring)**
1. Build `backend/services/aiService.js` connecting to Gemini / LLM.
2. Implement prompt routines for:
   - Sentiment analysis & review summarization.
   - Best-overall scoring & "Why Buy This" generator.
   - Deterministic rule-based fallback if API key is unconfigured.
3. Wire up `/api/search` to return enriched products.

### **Phase 3: Frontend Base, Search Bar & Comparison Cards**
1. Implement `frontend/src/styles/index.css` with dark glassmorphic design tokens.
2. Build `Navbar.jsx`, `CategoryPills.jsx`, and `SearchBar.jsx`.
3. Create `ProductCard.jsx`, `ProductGrid.jsx`, and `BestOverallBadge.jsx`.
4. Connect frontend `ShoppingContext` to `/api/search` with live filtering.

### **Phase 4: Conversational Shopping Assistant (Chat Drawer)**
1. Implement `backend/controllers/chatController.js` and `/api/chat`.
2. Build `frontend/src/components/chat/ChatDrawer.jsx` and `ChatMessage.jsx`.
3. Allow users to trigger search directly from chat recommendations.

### **Phase 5: Smart Value Tools (Budget Explorer & Alternatives)**
1. Implement `/api/products/:id/alternatives` and `/api/budget-explorer`.
2. Build `BudgetSlider.jsx` and `ProductDetailModal.jsx` in frontend.
3. Enable dynamic "Unlock Better Features" preview on slider move.

### **Phase 6: Multi-Modal Discovery & Price Alerts**
1. Implement `VoiceSearchModal.jsx` using the browser Web Speech API.
2. Implement `ImageSearchModal.jsx` for image queries.
3. Build `PriceAlertModal.jsx` and `/api/alerts` route with simulated price drop toast.

### **Phase 7: Polish, 3D Hero, Responsive UI & Pitch Prep**
1. Refine animations with Framer Motion and smooth scrolling.
2. Ensure mobile responsiveness.
3. Pre-warm mock cache for seamless zero-latency demo presentation.

---

## 🧪 6. Verification & Demo Plan

### **Automated / Manual Test Cases**
1. **Multi-Platform Search**: Search "headphones" $\rightarrow$ verify Amazon, Flipkart, Myntra cards render with accurate prices and badges.
2. **AI Sentiment & Summaries**: Verify 🟢 🟡 🔴 sentiment tags and concise 2-sentence summaries.
3. **Chat Assistant**: Send *"Find me running shoes under ₹3000"* $\rightarrow$ verify parsed filters and product card cards in chat.
4. **Budget Explorer**: Move slider $+₹1500$ on a product $\rightarrow$ verify upgraded models appear with clear upgrade benefits.
5. **Voice Recognition**: Click mic $\rightarrow$ speak *"laptops for college"* $\rightarrow$ verify search triggers automatically.
6. **Resilience Test**: Simulate offline/no-LLM API key $\rightarrow$ verify graceful fallback to cached AI tags without crashing.
