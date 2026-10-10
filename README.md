# 🛒 বাজার দর (BazarDor)

বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দাম ও দৈনিক মূল্য পরিবর্তন দেখার জন্য responsive Next.js App Router অ্যাপ। সরবরাহ করা সাতটি reference screenshot অনুসারে header/ticker, hero, product cards, category, detail, profile এবং authentication screens-এর layout সাজানো হয়েছে।

## Technologies
- Next.js 15 App Router, React 19, TypeScript
- Tailwind CSS v4 toolchain + responsive custom CSS
- Better Auth email/password + optional Google/GitHub OAuth
- `react-hot-toast`, Lucide React

## Features
1. Responsive two-row navbar, active category, profile menu and continuously scrolling price ticker.
2. Hero banner with same-page `#সব-পণ্য` CTA.
3. Price risers/fallers and all-products cards with Bengali numerals, price and percentage change.
4. Category listing with numeric price sorting and empty/404 states.
5. Protected product detail page with price summary and market comparison layout.
6. Sign in, sign up, social OAuth integration, profile and update-name form.
7. Loading skeletons, toast feedback, custom 404 page and Vercel-compatible App Router paths.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment setup

- `BETTER_AUTH_SECRET`: a random secret of at least 32 characters.
- `BETTER_AUTH_URL`: local or production origin.
- `BETTER_AUTH_TRUSTED_ORIGINS`: comma-separated extra origins. If using LAN, add the exact URL shown in the error, e.g. `http://192.168.0.132:3000`.
- `BETTER_AUTH_DB_PATH`: optional local SQLite database path.
- `NEXT_PUBLIC_API_BASE_URL`: defaults to `https://api.api-store.workers.dev/api/bazardor`.
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`: OAuth credentials.
- Set `NEXT_PUBLIC_GOOGLE_OAUTH_ENABLED=true` or `NEXT_PUBLIC_GITHUB_OAUTH_ENABLED=true` only when the matching provider credentials have been configured.

OAuth callback URLs for local development:
- Google: `http://localhost:3000/api/auth/callback/google`
- GitHub: `http://localhost:3000/api/auth/callback/github`

Use the deployed domain in the OAuth callback configuration after deployment. Restart the server after editing environment variables. Better Auth's database schema must be migrated before the first signup; follow the installed Better Auth CLI version's migration instructions.

## Data integrity note

The app tries the primary API and its alternative, then falls back to a demo dataset when both are unavailable. Product field normalization supports common API naming variants. The reference API's exact response schema and live availability could not be verified from this environment. Product-detail market rows are sample estimates when the API does not supply market-level data; do not present those rows as official live market prices.

## Deploy

1. Push the project to GitHub and import it into Vercel.
2. Set production environment variables in Vercel Project Settings.
3. Use a persistent supported database for production Better Auth. Local SQLite on an ephemeral serverless filesystem is not persistent and should not be used for production accounts.
4. Configure OAuth provider callbacks with the production URL and deploy.
5. Test sign-up, sign-in, protected product detail, profile update, refresh on dynamic routes and OAuth callbacks after deployment.
