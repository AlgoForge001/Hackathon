# 🛒 AI Personal Shopping Assistant

An intelligent, multi-platform e-commerce shopping assistant that helps users discover, compare, and analyze products across platforms (Amazon, Flipkart, Myntra) with AI-powered review summaries, sentiment insights, and quantitative deal signals.

---

## 🛡️ Arcjet Security Configuration

The backend is secured with **[Arcjet](https://arcjet.com)** (`@arcjet/node`), providing enterprise-grade security tailored for AI applications:

- **Shield WAF (LIVE mode):** Proactively detects and mitigates common web attacks including SQL Injection (SQLi), Cross-Site Scripting (XSS), and malicious payloads.
- **Bot Detection (LIVE mode):** Blocks automated scrapers and malicious bots on public API routes while allowing legitimate search engine crawlers (`CATEGORY:SEARCH_ENGINE`).
- **Tiered Token Bucket Rate Limiting:**
  - **Strict Tier (10 req / 10s per IP):** Applied to computationally heavy and LLM-powered endpoints (`/api/search`, `/api/chat`, `/api/search/image`).
  - **General Tier (60 req / min per IP):** Applied to standard API endpoints (`/api/alerts`, `/api/budget-explorer`, `/api/auth/*`).
- **Email Validation:** Validates email syntax and blocks temporary or disposable email addresses on authentication and registration routes.
- **Fail-Open Resilience:** If the `ARCJET_KEY` is missing or the Arcjet API is unreachable, the system fails open gracefully with a descriptive log warning to ensure the hackathon demo is never disrupted.

---

### 🔑 How to Get Your `ARCJET_KEY`

1. **Sign Up / Log In:** Go to **[https://app.arcjet.com](https://app.arcjet.com)** and create a free account.
2. **Create a Site:** In the Arcjet dashboard, click **"New Site"** or select your existing project.
3. **Copy the SDK Key:** Under your site settings, find your **SDK Key** (starts with `ajkey_...`).
4. **Configure your `.env`:**
   Open `backend/.env` (or create it from `backend/.env.example`) and set:

   ```env
   ARCJET_KEY=ajkey_your_actual_key_here
   ARCJET_ENV=development
   ```

5. **Start / Restart the Backend Server:**
   ```bash
   cd backend
   npm run dev
   ```

---

## 🚀 Quick Start

### 1. Backend Setup
```bash
cd backend
npm install
npm run dev
```
Backend will run at `http://localhost:5000`.

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend will run at `http://localhost:5173`.
