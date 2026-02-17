# 🏎️ F1 Points Simulator

An interactive Formula 1 standings simulator built with Next.js. It shows current driver standings, lets you simulate upcoming race weekends, and recalculates points instantly.

---

## ✨ What It Does

- Displays live **driver standings** on the home page.
- Pulls the active race calendar and starts simulation from the next available race.
- Lets you drag and drop drivers into a top-10 result order.
- Applies the standard F1 top-10 points system: `25, 18, 15, 12, 10, 8, 6, 4, 2, 1`.
- Updates standings after each simulated round and continues weekend by weekend until the season ends.

> Note: Current implementation focuses on **drivers standings** simulation (not constructors standings).

---

## 🧠 Data & Logic

- Standings and schedule data are fetched from the Ergast-compatible Jolpica endpoint:
  - `https://api.jolpi.ca/ergast/f1/{year}/driverstandings/?format=json`
  - `https://api.jolpi.ca/ergast/f1/{year}/races/?format=json`
- If the current season is not available yet, the app falls back to the previous season.
- Driver/team images are resolved from Formula1 media asset URLs.

---

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** + `tw-animate-css`
- **Shadcn-style UI primitives** (table/modal components)
- **Vercel Analytics**

---

## 🗺️ Routes

- `/` → Dashboard with current driver standings
- `/simulate` → Season simulation screen

---

## 📁 Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── simulate/
│   │       └── page.tsx
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── Dashboard.tsx
│   │   │   └── standings/
│   │   │       ├── List.tsx
│   │   │       ├── StandingsList.tsx
│   │   │       └── SimulateList/
│   │   │           ├── SimulateList.tsx
│   │   │           └── SimulateListModal.tsx
│   │   └── ui/
│   │       ├── modal.tsx
│   │       └── table.tsx
│   ├── lib/
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── public/
├── package.json
└── README.md
```

---

## 🚀 Getting Started

```bash
yarn install
yarn dev
```

Open `http://localhost:3000`.

---

## 📌 Deployment

The project is ready for deployment on Vercel. Sitemap generation runs automatically on build via `next-sitemap`.