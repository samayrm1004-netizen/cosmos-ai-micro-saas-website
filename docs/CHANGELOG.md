# Cosmos AI SaaS - Product Release Log

Frontend and customer dashboard release tracking.


## [2025-12-19 10:56] - fix(footer): correct links to terms of service and privacy policy
- Updated footer anchors with canonical legal document URLs.

## [2025-12-19 16:37] - fix(auth): prevent session drop on rapid client page navigation
- Synchronized cookie expiration with Supabase auth refresh cycle.

## [2025-12-24 18:41] - perf(bundle): remove unused icon libraries to cut initial JS bundle
- Replaced full package imports with tree-shaken lucide-react icons.

## [2025-12-24 22:02] - feat(feedback): add floating user feedback widget with screenshot support
- Enabled beta users to submit bug reports directly from dashboard.

## [2025-12-26 13:52] - feat(analytics): add privacy-friendly event tracking for signup funnels
- Tracked conversion milestone rates without third-party cookies.

## [2025-12-26 22:48] - fix(forms): add email normalization before submission check
- Trimmed whitespace and lowercased input to avoid duplicate records.

## [2025-12-31 21:32] - perf(bundle): remove unused icon libraries to cut initial JS bundle
- Replaced full package imports with tree-shaken lucide-react icons.

## [2026-01-01 15:59] - perf(loading): implement skeleton placeholders for dashboard metric cards
- Prevented cumulative layout shifts while usage statistics load.

## [2026-01-01 20:01] - style(nav): implement sticky glassmorphism header on scroll
- Added backdrop-blur-md and subtle border separator on scroll down.

## [2026-01-03 12:04] - test(auth): add integration tests for magic link login flow
- Verified token exchange and user profile creation in test database.

## [2026-01-03 12:27] - fix(footer): correct links to terms of service and privacy policy
- Updated footer anchors with canonical legal document URLs.

## [2026-01-03 22:17] - feat(analytics): add privacy-friendly event tracking for signup funnels
- Tracked conversion milestone rates without third-party cookies.

## [2026-01-03 22:42] - feat(seo): generate dynamic sitemap and OpenGraph meta tags
- Included social preview cards for blog posts and feature pages.

## [2026-01-12 11:55] - docs(changelog): document v1.2.0 production release updates
- Summarized newly introduced features and UX improvements.

## [2026-01-13 14:48] - perf(bundle): remove unused icon libraries to cut initial JS bundle
- Replaced full package imports with tree-shaken lucide-react icons.

## [2026-01-13 19:41] - fix(auth): prevent session drop on rapid client page navigation
- Synchronized cookie expiration with Supabase auth refresh cycle.

## [2026-01-15 14:23] - perf(images): enable Next.js image optimization for testimonial avatars
- Converted raw png uploads to modern webp with responsive srcSet.

## [2026-01-15 17:21] - docs(setup): document environment variables for Stripe and Supabase
- Listed required keys and sandbox test credit card numbers in readme.

## [2026-01-15 22:41] - feat(seo): generate dynamic sitemap and OpenGraph meta tags
- Included social preview cards for blog posts and feature pages.

## [2026-01-19 13:56] - perf(loading): implement skeleton placeholders for dashboard metric cards
- Prevented cumulative layout shifts while usage statistics load.

## [2026-01-19 18:00] - perf(bundle): remove unused icon libraries to cut initial JS bundle
- Replaced full package imports with tree-shaken lucide-react icons.

## [2026-01-19 20:29] - refactor(dashboard): split usage metric charts into separate components
- Improved code readability and reduced bundle footprint on dashboard load.

## [2026-01-20 10:47] - refactor(api): convert raw API routes to typed handler wrapper
- Standardized try/catch error handling and error JSON response schema.

## [2026-01-20 12:33] - perf(loading): implement skeleton placeholders for dashboard metric cards
- Prevented cumulative layout shifts while usage statistics load.

## [2026-01-21 17:48] - refactor(middleware): protect authenticated routes with edge middleware
- Redirected unauthenticated visitors to login before loading app shell.

## [2026-01-21 19:49] - perf(fonts): self-host Geist Sans font to reduce layout shift
- Eliminated Google Fonts CDN roundtrips to improve Core Web Vitals.

## [2026-01-25 10:11] - perf(fonts): self-host Geist Sans font to reduce layout shift
- Eliminated Google Fonts CDN roundtrips to improve Core Web Vitals.

## [2026-01-25 19:50] - style(nav): implement sticky glassmorphism header on scroll
- Added backdrop-blur-md and subtle border separator on scroll down.

## [2026-01-27 20:32] - style(nav): implement sticky glassmorphism header on scroll
- Added backdrop-blur-md and subtle border separator on scroll down.

## [2026-01-28 11:56] - refactor(api): convert raw API routes to typed handler wrapper
- Standardized try/catch error handling and error JSON response schema.

## [2026-01-28 18:02] - style(landing): polish hero headline typography and CTA glow effect
- Fine-tuned font weights and subtle linear gradient accents.

## [2026-01-28 20:41] - fix(footer): correct links to terms of service and privacy policy
- Updated footer anchors with canonical legal document URLs.

## [2026-01-30 18:22] - refactor(api): convert raw API routes to typed handler wrapper
- Standardized try/catch error handling and error JSON response schema.

## [2026-02-06 17:37] - fix(billing): correct prorated invoice calculation on plan upgrade
- Adjusted billing cycle date matching logic to prevent double charging.

## [2026-02-06 20:52] - feat(pricing): add annual discount toggle and tiered breakdown
- Added interactive billing switch with dynamic savings calculations.

## [2026-02-06 21:30] - refactor(api): convert raw API routes to typed handler wrapper
- Standardized try/catch error handling and error JSON response schema.

## [2026-02-09 15:48] - docs(setup): document environment variables for Stripe and Supabase
- Listed required keys and sandbox test credit card numbers in readme.

## [2026-02-19 16:44] - style(landing): polish hero headline typography and CTA glow effect
- Fine-tuned font weights and subtle linear gradient accents.

## [2026-02-19 20:03] - perf(bundle): remove unused icon libraries to cut initial JS bundle
- Replaced full package imports with tree-shaken lucide-react icons.

## [2026-02-24 14:53] - docs(setup): document environment variables for Stripe and Supabase
- Listed required keys and sandbox test credit card numbers in readme.

## [2026-02-25 11:08] - perf(images): enable Next.js image optimization for testimonial avatars
- Converted raw png uploads to modern webp with responsive srcSet.

## [2026-02-25 19:38] - perf(fonts): self-host Geist Sans font to reduce layout shift
- Eliminated Google Fonts CDN roundtrips to improve Core Web Vitals.

## [2026-03-02 10:09] - fix(footer): correct links to terms of service and privacy policy
- Updated footer anchors with canonical legal document URLs.

## [2026-03-02 21:32] - fix(billing): correct prorated invoice calculation on plan upgrade
- Adjusted billing cycle date matching logic to prevent double charging.

## [2026-03-04 14:40] - feat(seo): generate dynamic sitemap and OpenGraph meta tags
- Included social preview cards for blog posts and feature pages.

## [2026-03-04 18:25] - refactor(middleware): protect authenticated routes with edge middleware
- Redirected unauthenticated visitors to login before loading app shell.
