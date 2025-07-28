# 🏎️ F1 Points Simulator

An interactive web application for Formula 1 enthusiasts, designed to display historical and current season data. It allows users to input their own race results for upcoming Grand Prix and instantly see how the championship standings would be affected.

-----

## 🎯 Project Vision

This project aims to translate the most common "what if..." scenarios among F1 fans into tangible data. Users can input their own predictions or desired outcomes for the remaining races of a season and instantly calculate the potential results in the Drivers' and Constructors' championships. The application strives to be not only a simulation tool but also a sleek and fast reference for historical and current F1 data.

-----

## ✨ Core Features

  - **Live Simulation Mode (Current Season):**
      - Display the up-to-date Drivers' and Constructors' standings for the Current season.
      - Lock in the results for races that have already occurred.
  - **Interactive Result Input:**
      - Allow users to define the top 10 finishers for each upcoming race.
      - Provide an intuitive interface (e.g., drag-and-drop or select menus) to rank drivers.
  - **Dynamic Standings Calculation:**
      - Instantly update the Drivers' and Constructors' standings tables with smooth animations whenever a user inputs or modifies a race result.
  - **Responsive & Modern UI:**
      - A sleek, dark-mode-first interface built with **Tailwind CSS** and based on **Shadcn/UI** principles, ensuring a flawless experience on both desktop and mobile devices.

-----

## 🛠️ Tech Stack & Architecture

| Technology     | Purpose                                                                                                 |
| :------------- | :------------------------------------------------------------------------------------------------------ |
| **Next.js** | Modern routing with the App Router, performance via Server-Side Rendering (SSR) and Static Site Generation (SSG). |
| **React** | Building a component-based user interface.                                                              |
| **TypeScript** | Enforcing type safety across the project for improved developer experience and robustness.                |
| **Tailwind CSS** | A utility-first CSS framework for rapid, custom, and modern UI design.                                  |
| **Shadcn/UI** | A foundation for accessible and composable UI components that can be easily customized.                   |
| **f1-api-node**| For fetching dynamic data like the 2025 driver lineup and race calendar (or an alternative F1 API).         |
| **Vercel** | For seamless deployment and fast global delivery of the application.                                    |

-----

## 📂 Proposed File & Routing Structure

Based on your current `src/app` directory, here is the finalized structure reflecting your project layout.

### Routing Architecture (`src/app`)

```
/                                   -> Homepage or simulation entry page
/simulate                           -> Race result simulation page
/api/active-driver-lineup           -> Returns active drivers
/api/active-standings               -> Returns current driver & constructor standings
/api/active-team-lineup             -> Returns current team lineup
```

### Detailed File Structure

```
.
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── active-driver-lineup/
│   │   │   │   └── route.ts          # API for active drivers
│   │   │   ├── active-standings/
│   │   │   │   └── route.ts          # API for current standings
│   │   │   └── active-team-lineup/
│   │   │       └── route.ts          # API for team lineup
│   │   ├── simulate/
│   │   │   └── page.tsx              # Main simulation page
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Homepage or layout wrapper
│   │   └── globals.css               # Global styles
│
│   ├── components/
│   │   ├── dashboard/
│   │   │   └── standings/
│   │   │       └── SimulateList/
│   │   │           ├── SimulateList.tsx
│   │   │           ├── SimulateListModal.tsx
│   │   │           ├── List.tsx
│   │   │           └── StandingsList.tsx
│   │   │
│   │   └── Dashboard.tsx            # Standings dashboard wrapper
│   │
│   │   └── ui/
│   │       ├── modal.tsx            # Modal UI component
│   │       └── table.tsx            # Table UI component
│
│   ├── lib/
│   │   └── utils.ts                 # Utility functions
│
│   └── types/
│       └── index.ts                 # Shared TypeScript types
│
├── .gitignore
├── .yarnrc.yml
├── components.json
├── next-env.d.ts
├── next.config.ts
├── package.json
├── package-lock.json
├── yarn.lock
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── README.md
```
