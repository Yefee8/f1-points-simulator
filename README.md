# 🏎️ F1 Points Simulator

A simple yet engaging Formula 1 web app that lets users simulate race results and calculate season standings based on custom input. Built with Next.js and Tailwind CSS.

---

## ✨ Features

### ✅ Core
- Dynamic driver list for 2025 season (from `f1-api-node`)
- Dynamic race calendar (2025) with sprint flag
- Full standings table calculated using official F1 points system
- Manual result input for each race (top 10 finishers)
- Standings automatically update with each race

---

## 📊 F1 Points System

| Position | Points |
|----------|--------|
| 1st      | 25     |
| 2nd      | 18     |
| 3rd      | 15     |
| 4th      | 12     |
| 5th      | 10     |
| 6th      | 8      |
| 7th      | 6      |
| 8th      | 4      |
| 9th      | 2      |
| 10th     | 1      |

---

## 🛠️ Tech Stack

| Tech         | Usage                          |
|--------------|--------------------------------|
| Next.js      | App router, frontend rendering |
| Tailwind CSS | UI styling                     |
| IndexedDB    | Local data persistence         |
| f1-api-node  | Dynamic race & driver data     |
| TypeScript   | Full type safety               |
| Vercel       | Deployment                     |

---

## 🚀 How to Run
### Using npm

```bash
# install deps
npm install
# with yarn
yarn

# dev mode
npm run dev
# with yarn
yarn dev

# build
npm run build && npm start
# with yarn
yarn build && yarn start
```

---

## 👨‍👦 Authors
-  [Yefee](https://github.com/Yefee8)
-  [Agora](https://github.com/yigitfindikli)
