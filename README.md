# AlbionMKTfront

A web interface for exploring item market prices in **Albion Online**. Built as a personal frontend project with a focus on item searches, market filters, and displaying price data across cities.

## Features

- Search for Albion Online items.
- Filter market results by item tier, city, and quality.
- Display item information and market prices in reusable cards.
- Browse results in a scrollable interface.

## Tech stack

- Next.js 15 (App Router)
- React 19 and TypeScript
- Tailwind CSS
- Radix UI components
- Axios

## Getting started

Requirements: Node.js and npm.

```bash
git clone https://github.com/MilkeDeveloper/AlbionMKTfront.git
cd AlbionMKTfront
npm install
npm run dev
```

Open http://localhost:3000.

> Market data depends on the services used by the application. The frontend alone may not provide live results without the corresponding API/backend configuration.

## Project structure

- `src/app/market/page.tsx` — market page and result state
- `src/components/Search` — item search UI
- `src/components/Filters` — market filtering UI
- `src/components/CardItem` — item/price presentation

## Status

Personal project / portfolio code. Some loading and filtering behavior may still need refinement; this README documents the existing implementation rather than claiming a production deployment.

## Author

[MilkeDeveloper](https://github.com/MilkeDeveloper)
