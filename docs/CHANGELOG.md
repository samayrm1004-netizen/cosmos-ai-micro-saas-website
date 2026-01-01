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
