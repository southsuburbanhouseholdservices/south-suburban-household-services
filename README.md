# South Suburban Household Services Website

Official website starter for South Suburban Household Services.

## Cloudflare Pages build settings

- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`
- Root directory: `/`

## Local development

```bash
npm install
npm run dev
```

## Current intake form

The starter form opens the visitor's email app with their service request pre-filled.
The next development step is replacing this with a Cloudflare Pages Function so requests
submit directly from the website.

## Updating the website

Commit changes to the `main` branch in GitHub. Cloudflare Pages will automatically rebuild
and publish the site.
