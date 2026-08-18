# Backend — AI Personal Shopping Assistant

Express.js / Node.js backend server with AI-driven deal analysis, multi-platform search aggregators, and Arcjet security.

## 🛡️ Arcjet Security

Arcjet (`@arcjet/node`) protects the API layer with:
- **Shield WAF** (`shield({ mode: "LIVE" })`)
- **Bot Detection** (`detectBot({ mode: "LIVE", allow: ["CATEGORY:SEARCH_ENGINE"] })`)
- **Tiered Token Bucket Rate Limiting**:
  - Strict: 10 requests / 10s (`/api/search`, `/api/chat`, `/api/search/image`)
  - General: 60 requests / minute (`/api/alerts`, `/api/budget-explorer`, `/api/auth/*`)
- **Email Validation** (`validateEmail({ mode: "LIVE", deny: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"] })`)
- **Fail-Open Architecture:** Guarantees uptime even if the key is missing or the external API is unreachable.

### Setting up `ARCJET_KEY`
1. Get your key at [https://app.arcjet.com](https://app.arcjet.com).
2. Add it to `backend/.env`:
   ```env
   ARCJET_KEY=ajkey_your_key_here
   ARCJET_ENV=development
   ```
