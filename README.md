# Momin Portfolio

A responsive, animated portfolio built with Next.js, React, TypeScript, Framer Motion, and Lucide icons.

## Features

- Responsive dark creative theme
- Animated hero and scroll-reveal sections
- About, skills, projects, SQA workflow, and contact sections
- Mobile navigation menu
- Reduced-motion accessibility support
- Metadata for browser tabs and social previews

## Requirements

- Node.js 18.17 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Personalize before publishing

- Review all project descriptions and technologies.
- Add the MERN repository URL once it is public and ready.
- Replace any skill or learning-status wording that no longer reflects your current experience.
- The profile illustration uses an initials monogram rather than an unverified portrait image.
- Contact links currently point to GitHub and LinkedIn; no email address has been assumed.

## Deploy

You can import this project into Vercel or deploy it to another Next.js-compatible host.

## Publish on GitHub Pages

This project is configured for static export. To publish it at
`https://momin078.github.io/`:

1. Create a **separate** GitHub repository named `momin078.github.io`.
   Keep your existing `momin078` repository for your profile README.
2. Upload the contents of this project to the new repository and commit them
   to the `main` branch.
3. In the new repository, open **Settings → Pages** and select
   **GitHub Actions** as the build and deployment source.
4. Open the **Actions** tab and wait for the “Deploy portfolio to GitHub Pages”
   workflow to complete successfully.
5. Visit `https://momin078.github.io/`.

Every push to `main` will rebuild and deploy the site automatically.

Note: GitHub Pages hosts the statically exported frontend. This portfolio does
not require a server or database. Any future backend features would need a
separately hosted API.
