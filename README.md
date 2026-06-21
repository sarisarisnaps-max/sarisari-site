# SariSari Snaps — marketing site

The email-capture / "Made to keep" landing page. Separate Vite app from the
order configurator (`../`) on purpose — different scope, different repo,
different Vercel project — but reuses the same Tailwind design tokens, fonts,
and Apps Script backend (one new action, `subscribeEmail`, added to the
configurator's existing `apps-script/Code.gs` so this site doesn't need its
own backend).

## Stack
React + Vite + Tailwind, no extra libraries. Hosted on Vercel (free tier),
same pattern as the configurator.

## Local setup
```
npm install
cp .env.example .env.local   # fill in VITE_APPS_SCRIPT_URL + VITE_API_TOKEN
npm run dev
```
Both values are the same ones already set in the configurator's Vercel
project — see `SECRETS.local.md` one level up.

## What this site is NOT
It never touches Drive, the Orders Sheet, GCash, or order submission — all of
that stays in the configurator. The only write this site makes is adding an
email to the existing Mailchimp audience via `subscribeEmail`.

## Images
`public/images/*.jpg` are pre-resized (max 1920px wide, JPEG q82) copies of
real product photos from `../Photo Library - Organized/`. Picked deliberately
from the hero/lifestyle, personalization, and BTS sets — NOT from the
`10_Catalog-Size_*` folders, several of which have confirmed filename/
orientation mismatches (see project memory `sarisari-photo-library`). The SKU
lineup section is icon-only for the same reason the configurator's SKU cards
are icon-only — see `src/components/MiniGrid.jsx`.
