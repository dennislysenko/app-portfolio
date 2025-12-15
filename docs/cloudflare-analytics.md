# Cloudflare Web Analytics Integration

## Overview
Cloudflare Web Analytics is a free, privacy-first analytics tool. No cookie consent required.

## Features
- Page views & unique visitors
- Visit duration & bounce rate
- Top pages & referrers
- Geographic & device data
- Core Web Vitals

## Limitations
- No scroll depth tracking
- No click tracking
- No session recordings

## Setup Steps

1. Go to https://dash.cloudflare.com → Web Analytics
2. Add your site (doesn't need to be on Cloudflare DNS)
3. Copy your site token

## Integration

Add to `src/layouts/Layout.astro` before `</body>`:

```html
<!-- Cloudflare Web Analytics -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

## Resources
- Dashboard: https://dash.cloudflare.com
- Docs: https://developers.cloudflare.com/web-analytics/
