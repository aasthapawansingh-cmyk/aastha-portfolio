# Aastha Singh — Portfolio

A responsive React + Vite portfolio designed to present web development, Java/Spring Boot backend, API integration, and AI integration services to freelance clients.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
1. Push this folder to a new GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

No API keys are required for the current frontend.

## Before publishing
- Replace the `AS.` monogram placeholder in the About section with your actual portrait if desired.
- Verify the CareSync live URL and repository are still current.
- Add the public GitHub URL for the Social Media Backend if available.
- Add LinkedIn and Fiverr profile links when you have the exact URLs.
- Update the AI integration status only after the feature is implemented and tested.
- If you want a contact form that submits without opening the visitor's email app, connect it to a backend endpoint or form provider. The current form uses `mailto:` and does not store data.
- Verify all displayed features against the deployed app before sharing with clients.

## Project structure
```text
aastha-portfolio/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.jsx
    └── styles.css
```
