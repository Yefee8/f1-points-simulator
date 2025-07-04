# 🏎️ F1 Points Simulator

An interactive web application for Formula 1 enthusiasts, designed to display historical and current season data. It allows users to input their own race results for upcoming Grand Prix and instantly see how the championship standings would be affected.

-----

## 🎯 Project Vision

This project aims to translate the most common "what if..." scenarios among F1 fans into tangible data. Users can input their own predictions or desired outcomes for the remaining races of a season and instantly calculate the potential results in the Drivers' and Constructors' championships. The application strives to be not only a simulation tool but also a sleek and fast reference for historical and current F1 data.

-----

## ✨ Core Features

  - **Historical & Current Season Data:**
      - Fetch and display the final Drivers' and Constructors' standings for any selected year (e.g., 2007, 2021, 2024).
      - Display the race calendar and the results of each Grand Prix for that season.
  - **Live Simulation Mode (2025 Season):**
      - Display the up-to-date Drivers' and Constructors' standings for the 2025 season.
      - Lock in the results for races that have already occurred.
  - **Interactive Result Input:**
      - Allow users to define the top 10 finishers for each upcoming race.
      - Provide an intuitive interface (e.g., drag-and-drop or select menus) to rank drivers.
      - Include an option to assign the "Fastest Lap" bonus point (+1 point) to a specific driver.
  - **Dynamic Standings Calculation:**
      - Instantly update the Drivers' and Constructors' standings tables with smooth animations whenever a user inputs or modifies a race result.
  - **Data Persistence:**
      - User-created simulations are saved locally in the browser's **IndexedDB**. This allows users to close the tab and return later to find their simulation preserved.
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
| **IndexedDB** | A client-side, serverless database for persisting simulation data directly in the user's browser.        |
| **f1-api-node**| For fetching dynamic data like the 2025 driver lineup and race calendar (or an alternative F1 API).         |
| **Vercel** | For seamless deployment and fast global delivery of the application.                                    |

-----

## 📂 Proposed File & Routing Structure

Based on your existing `src/app` directory, here is a proposed structure to accommodate the project's features.

### Routing Architecture (`src/app`)

```
/                                   -> Homepage, likely redirects to the latest season's standings.
/standings/[year]                   -> The main page displaying driver/constructor standings for a given year.
  - /standings/2025                 -> The primary screen where the simulation takes place.
  - /standings/2024                 -> A view for a completed, historical season.
/api/f1/[...path]                   -> Backend routes for proxying/caching requests to the external F1 API.
```

### Detailed File Structure

```
.
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx                # Root layout
│   │   └── standings/
│   │       └── [year]/
│   │           ├── page.tsx          # Renders the standings/simulation UI based on the [year] param.
│   │           └── loading.tsx       # Skeleton component shown while data is being fetched.
│   │
│   ├── components/
│   │   ├── ui/                       # Base components copied from Shadcn/UI (button, dialog, etc.)
│   │   ├── core/
│   │   │   ├── Header.tsx            # Site header and navigation
│   │   │   ├── ThemeToggle.tsx       # Dark/light mode toggle button
│   │   │   └── Footer.tsx
│   │   └── f1/
│   │       ├── StandingsTable.tsx    # The main drivers' standings table
│   │       ├── ConstructorsTable.tsx # The constructors' standings table
│   │       ├── RaceCard.tsx          # A card for each race in the season calendar
│   │       ├── SimulationModal.tsx   # The modal/dialog for inputting race results
│   │       └── DriverSelectInput.tsx # A custom select component for the simulation modal
│   │
│   ├── lib/
│   │   ├── api.ts                    # Functions to manage communication with the external F1 API.
│   │   ├── calculations.ts           # The core logic for calculating points and updating standings.
│   │   ├── db.ts                     # Helper functions for IndexedDB operations (get, set, update).
│   │   ├── types.ts                  # Global TypeScript types (Driver, Race, Standings, etc.).
│   │   └── utils.ts                  # General utility functions (cn, formatDate, etc.).
│
├── public/                           # Static assets (SVGs, images)
├── next.config.js
└── tailwind.config.js
```