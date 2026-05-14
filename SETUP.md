# Naatai Fit — Setup Guide

## Architecture

```
naatai/           ← Main API (port 8000) + Mobile App
  backend/        ← FastAPI REST API
  mobile/         ← Expo React Native app

naatai-ai/        ← AI/ML body measurement service (port 8081)
```

## Quick Start (Demo / Mock Mode)

The mobile app runs in mock mode by default — no backend required.

```bash
cd mobile
npm install
npm start          # opens Expo dev server
```

Open in browser or Expo Go on your phone. Use token `NAT-DEMO0001` to log in.

## Full Stack Setup

### 1. Clone both repos side by side

```bash
git clone https://github.com/robintex7-cpu/naatai
git clone https://github.com/robintex7-cpu/naatai-ai
```

### 2. Start the backend services

```bash
cd naatai
docker-compose up -d
```

On first start, the API prints two tokens to the logs:
```bash
docker-compose logs api | grep "token"
```

Use the **Customer token** (format: `NAT-XXXXXXXX`) to log in to the app.
Use the **Admin token** to generate more customer tokens via the API.

### 3. Point the mobile app to your backend

Edit `mobile/services/api.ts` and change the IP to your server:
```ts
: "http://YOUR_SERVER_IP:8000/api/v1"
```

Disable mock mode in `mobile/.env.local`:
```
EXPO_PUBLIC_MOCK=false
```

### 4. Run the mobile app

```bash
cd mobile
npm install
npm start
```

## Generate More Customer Tokens (Admin)

```bash
curl -X POST http://localhost:8000/api/v1/auth/generate-customer-token \
  -H "Authorization: Bearer <ADMIN_JWT_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"name": "Customer Name"}'
```

Get an admin JWT first by logging in with the admin token:
```bash
curl -X POST http://localhost:8000/api/v1/auth/token-login \
  -H "Content-Type: application/json" \
  -d '{"login_token": "NAT-XXXXXXXX"}'
```

## Services Summary

| Service | Port | Description |
|---------|------|-------------|
| Main API | 8000 | FastAPI — auth, scans, file uploads |
| AI Service | 8081 | ML body measurement pipeline |
| PostgreSQL | 5432 | Database |
| Redis | 6379 | Task queue |

## Scan Accuracy Tiers

The AI service automatically falls back depending on what models are installed:

| Tier | Method | Accuracy | Requires |
|------|--------|----------|---------|
| 1 | SMPL-X body model | ±1–2 cm | SMPL-X weights + PyTorch3D |
| 2 | Silhouette mesh | ±2–4 cm | MediaPipe model file |
| 3 | Landmark fallback | ±4–8 cm | Nothing (built-in) |

Tier 3 works out of the box. See `naatai-ai/SETUP.md` for model downloads.
