# Implementation Plan: AI Personal Shopping Assistant (Frontend & Backend)
## Updated: OpenRouter AI + Multi-Platform Data Strategy

---

> [!IMPORTANT]
> **Key Updates in This Revision:**
> - **AI Layer**: Switched from Gemini/Claude direct API → **OpenRouter API** (unified gateway to 200+ models: GPT-4o, Claude 3.5, Mistral, Llama, etc. via one key)
> - **Multi-Platform Data**: Amazon, Flipkart & Myntra don't offer free public APIs — strategy is **structured mock catalog + scraping layer** with realistic data that mirrors real listings
> - **`.env` Addition**: `OPENROUTER_API_KEY` must be added alongside existing MongoDB/Google OAuth keys

---

## 🏗️ 1. Architecture & System Overview

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                   FRONTEND (React 19 + Vite)                           │
│  ┌───────────────┐  ┌───────────────────────┐  ┌───────────────┐  ┌──────────────────┐  │
│  │ Hero + Search │  │ Product Comparison    │  │ AI Chat       │  │ Smart Tools      │  │
│  │ Voice / Image │  │ Grid (Amazon/Flipkart/│  │ Drawer        │  │ Budget Slider +  │  │
│  │ Category Pills│  │ Myntra Cards + Badges)│  │ (OpenRouter)  │  │ Alternatives     │  │
│  └───────┬───────┘  └──────────┬────────────┘  └───────┬───────┘  └────────┬─────────┘  │
│          └───────────────────── ▼ Axios REST (JWT) ─────┘───────────────────┘           │
└──────────────────────────────────┬─────────────────────────────────────────────────────┘
                                   │
┌──────────────────────────────────▼─────────────────────────────────────────────────────┐
│                        BACKEND (Node.js / Express 5)                                   │
│  ┌─────────────────┬──────────────────┬──────────────────────┬────────────────────┐    │
│  │ Search &        │ OpenRouter AI    │ Chat Assistant       │ Alerts & Auth      │    │
│  │ Aggregation     │ Service Layer    │ Controller           │ Services           │    │
│  │ Service         │ (Multi-Model)    │ (Intent Parsing)     │                    │    │
│  └────────┬────────┴──────────┬───────┴──────────┬───────────┴───────────┬────────┘    │
│           │                   │                  │                       │             │
│  ┌────────▼──────┐  ┌─────────▼──────┐  ┌────────▼──────────┐  ┌────────▼──────────┐  │
│  │ Platform Data │  │ OpenRouter API │  │ MongoDB Atlas     │  │ In-Memory Cache   │  │
│  │ Connectors:   │  │ openrouter.ai/ │  │ (Users, Alerts,   │  │ (Search + LLM     │  │
│  │ Amazon Layer  │  │ api/v1/chat/   │  │  Products)        │  │  responses 10min) │  │
│  │ Flipkart Layer│  │ completions    │  │                   │  │                   │  │
│  │ Myntra Layer  │  └────────────────┘  └───────────────────┘  └───────────────────┘  │
│  │ (Mock JSON or │                                                                     │
│  │  RapidAPI)    │                                                                     │
│  └───────────────┘                                                                     │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🔑 2. Environment Configuration

Update `backend/.env` with the OpenRouter key alongside existing vars:

```env
PORT=5000
MONGO_URI=mongodb+srv://...   # ← Already set
JWT_SECRET=...                # ← Already set
GOOGLE_CLIENT_ID=...          # ← Already set
GOOGLE_CLIENT_SECRET=...      # ← Already set
CLIENT_URL=http://localhost:5173

# NEW: OpenRouter AI
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_MODEL=openai/gpt-4o-mini   # Default model (cheap, fast, smart — great for hackathon)
# Alt options: anthropic/claude-3.5-sonnet, mistralai/mistral-7b-instruct, meta-llama/llama-3.1-8b-instruct
```

> [!TIP]
> **OpenRouter Model Strategy**: Use `openai/gpt-4o-mini` by default for all AI calls (cheap & fast). For the "Best Overall" reasoning and chat assistant, optionally escalate to `anthropic/claude-3.5-sonnet` for richer outputs.

---

## 🛒 3. Multi-Platform Data Strategy (Amazon / Flipkart / Myntra)

> [!WARNING]
> Amazon, Flipkart, and Myntra **do not offer free public product APIs**. Direct scraping violates their TOS and will get blocked instantly during a live demo. Use the hybrid approach below.

### **Strategy: Structured Mock Catalog + Optional RapidAPI Layer**

#### Option A — Mock JSON Catalog (Recommended for Hackathon)
- Build `backend/data/mockProducts.json` with **60–80 realistic product listings** spread across 4 categories.
- Each product appears as **3 variants** (one per platform) with slightly different prices, delivery ETAs, and seller details — exactly how real comparison would look.
- Data is curated to be realistic (actual model names, real-world price ranges, plausible specs).

```
backend/data/
├── mockProducts.json          # Master catalog — all products, all platforms
├── categories/
│   ├── electronics.json       # Headphones, Laptops, Phones, Earbuds
│   ├── footwear.json          # Nike, Adidas, Puma, Reebok — running/casual
│   ├── fashion.json           # T-shirts, Jackets, Jeans — Flipkart/Myntra focused
│   └── home.json              # Smart lights, Chairs, Kitchen appliances
```

**Sample multi-platform product entry structure:**
```json
{
  "group_id": "sony-wh1000xm5",
  "product_name": "Sony WH-1000XM5 Wireless Headphones",
  "category": "electronics",
  "platforms": [
    {
      "platform": "amazon",
      "platform_product_id": "B09XS7JWHH",
      "price": 24990,
      "original_price": 29990,
      "discount_percent": 17,
      "rating": 4.5,
      "review_count": 12847,
      "delivery_estimate": "2-3 days",
      "seller": "Amazon Fulfilled",
      "in_stock": true,
      "product_url": "https://amazon.in/...",
      "image_url": "https://...",
      "reviews": [
        { "text": "Incredible noise cancellation, best I've used", "rating": 5 },
        { "text": "Battery life is excellent but a bit expensive", "rating": 4 }
      ],
      "specs": { "battery_life": "30 hours", "weight": "250g", "connectivity": "Bluetooth 5.2" }
    },
    {
      "platform": "flipkart",
      "price": 25499,
      "discount_percent": 15,
      "rating": 4.4,
      "delivery_estimate": "3-4 days",
      ...
    },
    {
      "platform": "myntra",
      "price": 26990,
      "discount_percent": 10,
      "rating": 4.3,
      "delivery_estimate": "4-5 days",
      ...
    }
  ]
}
```

#### Option B — RapidAPI Shopping APIs (Optional Enhancement)
If time allows, plug in RapidAPI endpoints that legally scrape e-commerce sites:
- **Real-Time Amazon Data API** (`real-time-amazon-data.p.rapidapi.com`) — Free tier: 100 req/month
- **Flipkart Unofficial API** (`real-time-flipkart-api.p.rapidapi.com`) — Free tier available
- These can supplement mock data for a few live queries during the demo.

#### Scraping Architecture (Platform Connectors)
```
backend/services/connectors/
├── amazonConnector.js     # Tries RapidAPI → falls back to mock data
├── flipkartConnector.js   # Tries RapidAPI → falls back to mock data
└── myntraConnector.js     # Mock only (no viable API available)
```

**Connector pattern** — always resilient:
```js
async function fetchAmazonProducts(query) {
  try {
    // Try live RapidAPI
    const response = await rapidApiClient.get('/search', { params: { query } });
    return normalizeAmazonResponse(response.data);
  } catch (err) {
    console.warn('Amazon live fetch failed, using mock data:', err.message);
    return getMockProducts({ query, platform: 'amazon' });  // Never fails
  }
}
```

---

## 🖥️ 4. FRONTEND IMPLEMENTATION PLAN

### **4.1 Directory & Component Hierarchy**
```
frontend/src/
├── assets/
│   ├── logos/              # amazon.svg, flipkart.svg, myntra.svg (for platform badges)
│   └── icons/              # Mic, Camera, Bell, Star SVGs
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx               # Logo, Search trigger, Voice btn, Auth state, Alerts bell
│   │   └── Footer.jsx               # Platform partner badges, credits
│   ├── hero/
│   │   ├── HeroSection.jsx          # Dark glassmorphic hero with animated search bar
│   │   └── CategoryPills.jsx        # Scrollable pill chips: Electronics, Footwear, Fashion, Home
│   ├── products/
│   │   ├── ProductGrid.jsx          # Masonry/grid container rendering comparison groups
│   │   ├── ProductCard.jsx          # Card: platform badge, price, discount, rating, sentiment pill
│   │   ├── PlatformBadge.jsx        # Amazon🟠 / Flipkart🔵 / Myntra🔴 color-coded badges
│   │   ├── BestOverallBadge.jsx     # Gold 👑 badge with AI score breakdown tooltip on hover
│   │   ├── SentimentBadge.jsx       # 🟢 🟡 🔴 clickable — expands to show pros/cons
│   │   └── ProductDetailModal.jsx   # Full modal: specs, AI summary, raw reviews, price diff chart
│   ├── chat/
│   │   ├── ChatDrawer.jsx           # Slide-out drawer from right, powered by OpenRouter
│   │   ├── ChatMessage.jsx          # Message bubbles — supports embedded ProductMiniCard
│   │   ├── ProductMiniCard.jsx      # Compact card rendered inline inside chat messages
│   │   └── PromptSuggestions.jsx    # Clickable example queries shown before first message
│   ├── tools/
│   │   ├── BudgetSlider.jsx         # Drag slider → shows "unlock" progression of better products
│   │   ├── AlternativeFinder.jsx    # 3-column: Cheaper / Similar / Premium upgrade cards
│   │   └── PriceAlertModal.jsx      # Set target price, email; shows existing alerts list
│   ├── search/
│   │   ├── VoiceSearchModal.jsx     # Web Speech API — mic animation, live transcript display
│   │   ├── ImageSearchModal.jsx     # Dropzone or camera capture for visual search
│   │   └── FilterSidebar.jsx        # Price slider, Platform toggles, Brand checkboxes, Rating filter
│   └── common/
│       ├── GlassCard.jsx            # Reusable glassmorphic card container
│       ├── SkeletonLoader.jsx        # Animated shimmer skeleton for loading states
│       └── Toast.jsx                # In-app toast notifications (price drop, alert set, saved)
├── context/
│   ├── AuthContext.jsx              # JWT session, Google OAuth, logout
│   └── ShoppingContext.jsx          # Global: query, results, filters, sort, chatHistory, alerts
├── hooks/
│   ├── useVoiceSearch.js            # Wraps SpeechRecognition API with start/stop/transcript state
│   ├── useDebounce.js               # 400ms debounce for live search input
│   └── useShopping.js               # Shortcut hook for consuming ShoppingContext
├── services/
│   └── api.js                       # Axios instance with base URL, JWT interceptor, all endpoint fns
├── App.jsx                          # Routes + Context providers
└── main.jsx
```

### **4.2 Design System**
| Token | Value |
| :--- | :--- |
| `--bg-primary` | `#0B0F19` |
| `--bg-secondary` | `#0F172A` |
| `--glass-bg` | `rgba(30, 41, 59, 0.65)` |
| `--glass-border` | `rgba(255, 255, 255, 0.08)` |
| `--accent-cyan` | `#38BDF8` |
| `--accent-indigo` | `#818CF8` |
| `--amazon` | `#FF9900` |
| `--flipkart` | `#2874F0` |
| `--myntra` | `#FF3F6C` |
| `--sentiment-green` | `#10B981` |
| `--sentiment-yellow` | `#F59E0B` |
| `--sentiment-red` | `#EF4444` |

---

## ⚙️ 5. BACKEND IMPLEMENTATION PLAN

### **5.1 Directory & File Structure**
```
backend/
├── config/
│   └── db.js                        # Mongoose + graceful connection retry
├── controllers/
│   ├── authController.js            # ← Existing (Register, Login, Google OAuth)
│   ├── productController.js         # search, getById, getAlternatives, budgetExplorer
│   ├── chatController.js            # processChat — OpenRouter intent parser + recommender
│   └── alertController.js           # createAlert, getUserAlerts, deleteAlert
├── data/
│   ├── mockProducts.json            # Master multi-platform catalog (60-80 products × 3 platforms)
│   └── categories/                  # electronics.json, footwear.json, fashion.json, home.json
├── middleware/
│   ├── authMiddleware.js            # ← Existing JWT verify
│   └── cacheMiddleware.js           # Simple Map-based TTL cache (10 min) for search + AI results
├── models/
│   ├── User.js                      # ← Existing (extend with: interests[], savedProducts[])
│   ├── Alert.js                     # { userId, productId, targetPrice, platform, active, createdAt }
│   └── ProductCache.js              # Optional: persist AI-enriched products to DB
├── routes/
│   ├── authRoutes.js                # ← Existing
│   ├── productRoutes.js             # /api/search, /api/products/:id, /api/products/:id/alternatives
│   ├── chatRoutes.js                # /api/chat
│   └── alertRoutes.js               # /api/alerts
├── services/
│   ├── aiService.js                 # ← OpenRouter client — all LLM interactions
│   ├── searchService.js             # Query aggregator + filter + normalize
│   ├── connectors/
│   │   ├── amazonConnector.js       # RapidAPI → mock fallback
│   │   ├── flipkartConnector.js     # RapidAPI → mock fallback
│   │   └── myntraConnector.js       # Mock only
│   └── alertService.js             # Scheduled price check loop
├── .env
├── index.js
└── package.json
```

### **5.2 OpenRouter AI Service (`services/aiService.js`)**

OpenRouter exposes an **OpenAI-compatible API**, so the integration is clean:

```js
// services/aiService.js
import axios from 'axios';

const openRouterClient = axios.create({
  baseURL: process.env.OPENROUTER_BASE_URL,   // https://openrouter.ai/api/v1
  headers: {
    'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
    'HTTP-Referer': 'http://localhost:5173',   // Required by OpenRouter
    'X-Title': 'AI Shopping Assistant',
    'Content-Type': 'application/json'
  }
});

const DEFAULT_MODEL = process.env.OPENROUTER_MODEL || 'openai/gpt-4o-mini';
```

**All AI Tasks Handled by `aiService.js`:**

| Task | OpenRouter Prompt Type | Output Format |
| :--- | :--- | :--- |
| Review Summarization | User + reviews batch | Free text (2 sentences) |
| Sentiment Classification | User + reviews text | JSON `{ sentiment: "green/yellow/red", confidence: 0.92 }` |
| "Best Overall" Ranking | User + normalized product list | JSON `{ rankedIds: [], scores: {}, reasoning: "" }` |
| "Why Buy This" Generator | User + product + summary | Free text (1-2 sentences) |
| Chat Intent Parser | User message + history | JSON `{ category, maxPrice, keywords[], sortBy, reply }` |
| Budget Explorer | Current product + delta budget | JSON `{ upgrades: [{ id, reason, specGain }] }` |
| Alternative Finder Reasoning | Cheaper/similar/premium products | JSON with comparison rationale |

**Fallback chain** (zero demo failure):
```
OpenRouter API call
    → Success: return parsed JSON
    → Rate limit / Timeout: return rule-based computed result
    → Both fail: return static pre-cached response for demo product set
```

### **5.3 Search & Aggregation Service (`services/searchService.js`)**
```
1. Receive query + filters from controller
2. Check in-memory cache (cacheMiddleware) — return instantly if hit
3. Fan out to all 3 connectors in parallel (Promise.allSettled)
4. Normalize each platform's response → unified Product schema
5. Deduplicate by product group_id
6. Apply filters (price range, brand, rating, platform)
7. Sort by requested criteria
8. Pass product batch to aiService for enrichment
9. Cache enriched results (10 min TTL)
10. Return to controller
```

---

## 📡 6. API Endpoints & Contracts

| Method | Route | Auth | Request | Response |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/api/search` | No | `{ query, category, minPrice, maxPrice, platform[], sortBy }` | `{ count, results: [EnrichedProduct], bestOverallId }` |
| `GET` | `/api/products/:id` | No | Param: `id` | `{ product, reviews[], specs, alternatives[] }` |
| `GET` | `/api/products/:id/alternatives` | No | Param: `id` | `{ cheaper[], similar[], premium[] }` |
| `POST` | `/api/budget-explorer` | No | `{ productId, extraBudget }` | `{ upgradedOptions: [{ product, upgradeReason, specGain }] }` |
| `POST` | `/api/chat` | No | `{ message, history[] }` | `{ reply, suggestedProducts[], parsedFilters }` |
| `POST` | `/api/search/image` | No | `{ imageBase64 }` | `{ detectedQuery, results: [EnrichedProduct] }` |
| `POST` | `/api/alerts` | Yes (JWT) | `{ productId, targetPrice, platform }` | `{ alertId, message }` |
| `GET` | `/api/alerts` | Yes (JWT) | — | `{ alerts: [Alert] }` |
| `DELETE` | `/api/alerts/:id` | Yes (JWT) | Param: `id` | `{ success: true }` |

---

## 📅 7. Phased Execution Roadmap

### **Phase 1 — Backend: Foundation + Mock Multi-Platform Catalog**
- [ ] Install `axios` (already present) and confirm `OPENROUTER_API_KEY` in `.env`
- [ ] Create `backend/data/mockProducts.json` — 60+ products × 3 platforms (Amazon/Flipkart/Myntra)
- [ ] Build `backend/services/connectors/` — `amazonConnector.js`, `flipkartConnector.js`, `myntraConnector.js` with mock fallbacks
- [ ] Build `backend/services/searchService.js` with filter + normalize + cache logic
- [ ] Create `backend/routes/productRoutes.js` and `backend/controllers/productController.js`
- [ ] Test: `POST /api/search` with `{ query: "headphones" }` returns 3-platform normalized results

### **Phase 2 — Backend: OpenRouter AI Intelligence Layer**
- [ ] Build `backend/services/aiService.js` with OpenRouter client
- [ ] Implement prompt templates for: sentiment, review summary, best-overall scoring, "why buy this"
- [ ] Add JSON fallback / deterministic rule-based results if API unavailable
- [ ] Wire enrichment into `searchService.js` — every search result is AI-enriched before response
- [ ] Test: Verify each product card response includes `sentiment`, `review_summary`, `why_buy`, `best_overall_score`

### **Phase 3 — Backend: Chat Assistant + Smart Tools**
- [ ] Build `backend/controllers/chatController.js` using OpenRouter intent parsing
- [ ] Build `backend/routes/chatRoutes.js` (`POST /api/chat`)
- [ ] Build `/api/products/:id/alternatives` — cheaper / similar / premium logic
- [ ] Build `/api/budget-explorer` — delta-budget upgrade recommendations via AI

### **Phase 4 — Frontend: Design System + Search Dashboard**
- [ ] Set up `index.css` with CSS variables (glass cards, platform colors, sentiment colors)
- [ ] Build `Navbar.jsx`, `HeroSection.jsx`, `CategoryPills.jsx`
- [ ] Build `PlatformBadge.jsx`, `ProductCard.jsx`, `SentimentBadge.jsx`, `BestOverallBadge.jsx`
- [ ] Build `ProductGrid.jsx` with filter sidebar
- [ ] Connect `ShoppingContext` → `api.js` → `POST /api/search`
- [ ] Test: Searching "headphones" renders 3 platform cards with correct badges and AI data

### **Phase 5 — Frontend: AI Chat Drawer**
- [ ] Build `ChatDrawer.jsx`, `ChatMessage.jsx`, `PromptSuggestions.jsx`
- [ ] Wire chat to `POST /api/chat` with conversation history
- [ ] Render `ProductMiniCard.jsx` inline inside AI chat response bubbles
- [ ] Test: Natural language query in chat triggers product search and displays results

### **Phase 6 — Frontend: Smart Value Tools**
- [ ] Build `BudgetSlider.jsx` wired to `/api/budget-explorer`
- [ ] Build `AlternativeFinder.jsx` wired to `/api/products/:id/alternatives`
- [ ] Build `ProductDetailModal.jsx` with specs table, raw reviews, AI summary

### **Phase 7 — Frontend: Multi-Modal Search + Alerts**
- [ ] Build `VoiceSearchModal.jsx` using `window.SpeechRecognition`
- [ ] Build `ImageSearchModal.jsx` for image upload
- [ ] Build `PriceAlertModal.jsx` and wire to `POST /api/alerts`
- [ ] Build `Toast.jsx` for in-app alert notifications

### **Phase 8 — Polish: Animations, Responsiveness & Demo Prep**
- [ ] Add Framer Motion transitions on search results, modal open/close, chat messages
- [ ] Test mobile responsiveness (single-column card fallback)
- [ ] Pre-warm mock responses for the 5 specific products you'll demo to judges
- [ ] Prepare demo script: search → compare → chat → budget slider → voice query

---

## 🧪 8. Verification & Demo Checklist

| Test | What to Verify |
| :--- | :--- |
| `POST /api/search?query=headphones` | Returns ≥3 cards (one per platform) with sentiment + AI summary |
| `POST /api/chat` with *"Find me running shoes under ₹3000"* | Parses intent, returns filtered results + conversational reply |
| `GET /api/products/:id/alternatives` | Returns cheaper / similar / premium product cards |
| `POST /api/budget-explorer` with `extraBudget: 2000` | Suggests upgraded models with clear spec gains |
| Voice search: speak *"laptops for students"* | Auto-transcribes and triggers search |
| Offline / No API key | Fallback rule-based AI tags render; no crash, no empty state |

---

## 📦 9. Required Package Additions

### Backend
```bash
# In backend/
npm install axios node-cron
# OPENROUTER_API_KEY used directly via axios — no extra SDK needed
```

### Frontend
```bash
# Already installed: axios, framer-motion, lucide-react, react-router-dom
# No additional packages needed for Web Speech API (native browser)
```
