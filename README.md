# naatai

Frontend PWA for NaatAI — guided 360° body capture and 3D mesh viewer.

## Pages

| Route | Description |
|---|---|
| `/` | Landing — choose Capture or Upload |
| `/capture` | Guided camera capture with step-by-step body rotation instructions |
| `/upload` | Drag-and-drop video upload |
| `/processing/[jobId]` | Real-time processing status with step list |
| `/result/[jobId]` | Interactive Three.js OBJ viewer + download buttons |

## Local setup

```bash
npm install
cp .env.example .env.local
# Edit .env.local: set NEXT_PUBLIC_API_URL to your backend URL
npm run dev
```

Runs on http://localhost:3000

## Capture flow

1. User opens `/capture`
2. Reads pre-scan checklist (distance, lighting, clothing)
3. Taps **Start Guided Capture** — camera opens
4. App walks through 5 timed steps with visual progress:
   - Get Ready (3s)
   - Face Forward (3s)
   - Slowly Turn Right (4s)
   - Keep Turning (3s)
   - Face Forward Again (2s)
5. Recording auto-stops, video uploads to backend
6. Redirects to `/processing/[jobId]`

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Three.js (OBJ viewer with OrbitControls)
