# Home Pros Web - Project Instructions

## Overview
This is the new "Next Age" website for Home Pros Group, built with Next.js 14, Tailwind CSS, and a Programmatic SEO engine.

## Key Features
- **Programmatic SEO**: Maps 452 legacy URLs to modern templates (`ServiceTemplate`, `BlogTemplate`).
- **AI Concierge**: A floating chatbot integrated into the layout.
- **Professional Design**: Green/White theme with "Outfit" font.

## Getting Started

### 1. Install Dependencies
Run this command in the terminal to ensure all packages are installed:
```bash
cd "d:/home pros marketing/New Website/home-pros-web"
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the site.

### 3. Verify SEO Routes
Visit these URLs to see the templates in action:
- [Home](http://localhost:3000)
- [Example Service](http://localhost:3000/airdrie-furnace-cleaning) (Should replicate old URL)
- [Example Blog](http://localhost:3000/10-simple-home-security-tips)

## Project Structure
- `src/app/page.tsx`: The main homepage.
- `src/app/[...slug]/page.tsx`: The catch-all route for legacy URLs.
- `src/components/templates`: The designs for specific page types.
- `src/lib/all_urls.ts`: The database of legacy URLs.
