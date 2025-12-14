# Screenshot Layout Plan

## Current State
- Portfolio uses alternating row layout (image left/text right, then text left/image right)
- Currently showing full App Store page screenshots - looks cluttered with sidebar visible
- Each project has a `tag` field (e.g., "0→1: Built from scratch")

## Downloaded Assets
Individual iPhone screenshots from App Store for each app:

```
public/screenshots/
├── autocaption/
│   ├── appstore.png      (full App Store page - current)
│   └── screens/
│       ├── 1.jpg         (iPhone screenshot - "INSTANT SUBTITLES WITH AI")
│       ├── 2.jpg         (iPhone screenshot - "TRENDING CAPTION STYLES")
│       └── 3.jpg         (iPhone screenshot - "99 LANGUAGES SUPPORTED")
├── trackntrail/
│   ├── appstore.png
│   └── screens/
│       ├── 1.jpg         (iPhone screenshot - app intro)
│       ├── 2.jpg         (iPhone screenshot - blood tracking UI)
│       └── 3.jpg         (iPhone screenshot - tracking interface)
└── riff/
    ├── appstore.png
    └── screens/
        ├── 1.jpg         (iPhone screenshot - concert visual)
        ├── 2.jpg         (iPhone screenshot - "TURN MUSIC INTO VIDEOS")
        └── 3.jpg         (iPhone screenshot - "FEED THE ALGORITHM")
```

## Recommendation: Overlapping Phone Stack

Replace each App Store screenshot with **2-3 iPhone mockups fanned/stacked at slight angles** (Apple marketing style).

### Visual Concept
```
    [Phone 1]  [Phone 2]  [Phone 3]
       \          |          /
        \         |         /
         \_________|_______/
            (overlapping)
```

### Implementation Plan
1. Create `PhoneStack.astro` component
   - Takes array of screenshot paths
   - Renders 2-3 phone mockups with CSS transforms
   - Rotations: -5deg, 0deg, +5deg
   - Scale: 60-70% to fit current image column
   - z-index stacking for overlap effect

2. Update `ProjectRow.astro`
   - Replace single `<img>` with `<PhoneStack>` component
   - Pass screenshot paths from frontmatter

3. Update project frontmatter
   - Add `screens` array with paths to individual screenshots
   ```yaml
   screens:
     - "/app-portfolio/screenshots/autocaption/screens/1.jpg"
     - "/app-portfolio/screenshots/autocaption/screens/2.jpg"
     - "/app-portfolio/screenshots/autocaption/screens/3.jpg"
   ```

### CSS Approach
```css
.phone-stack {
  display: flex;
  justify-content: center;
  position: relative;
}

.phone {
  position: absolute;
  width: 150px; /* adjust as needed */
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.phone:nth-child(1) { transform: rotate(-8deg) translateX(-60px); z-index: 1; }
.phone:nth-child(2) { transform: rotate(0deg); z-index: 2; }
.phone:nth-child(3) { transform: rotate(8deg) translateX(60px); z-index: 1; }
```

### Alternative Options Considered
1. **Single featured phone** - Simpler but less visual impact
2. **Horizontal carousel** - Interactive but adds complexity
3. **Simple grid** - 3 phones in a row, no overlap

### Why Overlapping Stack?
- Professional, industry-standard look (like Apple marketing)
- Shows multiple app screens without taking more space
- Creates visual depth on dark theme
- Works well with existing alternating row layout
