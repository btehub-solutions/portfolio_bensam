# DESIGN-SYSTEM.md

Google Material Design 3 (M3) rules for every product we build.
Version: 3.0
Checked against live sources: 2026-10-04
Owner: BTEHub Team

## 0. How to use this file

1. Read this file fully before any UI task.
2. Rules use MUST and MUST NOT. Follow them exactly.
3. Never guess or invent tokens, components, or links. If unsure, check the links in Section 1 and say what you were unsure about.
4. If a link fails, search m3.material.io for the topic and report the broken link.
5. Report your work using the format in Section 12.
6. If Section 14 shows "Verified: no" or "Verified: partial", complete the open items there before building.

### Priority order when rules conflict

1. Security and accessibility
2. This file (M3 rules)
3. AGENTS.md project context
4. The user's current request

If the user asks for something that breaks M3, do not silently comply. Follow M3, explain the conflict in one line, and offer the alternative.

### Design mode

Default is standard M3.

M3 Expressive is an expansion of M3, not a new version. Use Expressive patterns only if AGENTS.md says "M3 Expressive: yes". Material Web is in maintenance mode, and I could not confirm Expressive components in it, so Expressive components are custom builds from the spec. Start at https://m3.material.io/blog/building-with-m3-expressive.

### Playful or illustration-led projects

If AGENTS.md says "Illustration style" is anything other than "none", also read `ILLUSTRATION-GUIDE.md`. This file still wins on structure, accessibility, color tokens, type scale, shape scale, and motion tokens. The illustration guide governs illustration and brand art only.

---

## 1. Reference links

Status was checked on 2026-10-04.
- Confirmed: the URL appeared in live search results or a fetched page.
- Unverified: standard URL that I could not open. Verify before relying on it.

| Topic | Link | Status |
|---|---|---|
| Main guidelines | https://m3.material.io | Confirmed |
| Get started | https://m3.material.io/get-started | Confirmed |
| Foundations hub (Accessibility, Design tokens, Interaction states, Layout) | https://m3.material.io/foundations | Confirmed |
| Styles hub | https://m3.material.io/styles | Confirmed |
| Components hub | https://m3.material.io/components | Unverified |
| Color system | https://m3.material.io/styles/color/system/overview | Confirmed |
| Dynamic color | https://m3.material.io/styles/color/dynamic-color/overview | Unverified |
| Typography | https://m3.material.io/styles/typography/overview | Confirmed |
| Shape | https://m3.material.io/styles/shape/overview-principles | Confirmed |
| Elevation | https://m3.material.io/styles/elevation/overview | Confirmed |
| Motion | https://m3.material.io/styles/motion/overview | Confirmed |
| Motion easing and duration | https://m3.material.io/styles/motion/easing-and-duration/applying-easing-and-duration | Confirmed |
| Motion tokens | https://m3.material.io/styles/motion/easing-and-duration/tokens-specs | Confirmed |
| Icons | https://m3.material.io/styles/icons/designing-icons | Confirmed |
| Layout | https://m3.material.io/foundations/layout/understanding-layout/overview | Confirmed |
| Window size classes | https://m3.material.io/foundations/layout/applying-layout/window-size-classes | Confirmed |
| Feed layout | https://m3.material.io/foundations/layout/canonical-layouts/feed | Confirmed |
| Supporting pane layout | https://m3.material.io/foundations/layout/canonical-layouts/supporting-pane | Confirmed |
| List-detail layout | https://m3.material.io/foundations/layout/canonical-layouts/list-detail | Unverified |
| Usability | https://m3.material.io/foundations/usability/overview | Confirmed |
| Accessibility page | https://m3.material.io/foundations/accessible-design/overview | Unverified (open Accessibility from the Foundations hub if it fails) |
| Develop for web | https://m3.material.io/develop/web | Confirmed |
| Theme Builder | https://m3.material.io/theme-builder | Confirmed |
| M3 blog | https://m3.material.io/blog | Confirmed |
| M3 Expressive guide | https://m3.material.io/blog/building-with-m3-expressive | Confirmed |
| Web components docs | https://material-web.dev | Confirmed |
| Button docs (example) | https://material-web.dev/components/button/ | Confirmed |
| Web components source | https://github.com/material-components/material-web | Confirmed |
| Component docs folder | https://github.com/material-components/material-web/tree/main/docs/components | Confirmed |
| Quick start | https://github.com/material-components/material-web/blob/main/docs/quick-start.md | Confirmed |
| Maintenance mode notice | https://github.com/material-components/material-web/discussions/5642 | Confirmed |
| npm package | https://www.npmjs.com/package/@material/web | Confirmed |
| Material Symbols | https://fonts.google.com/icons | Unverified |
| Roboto font | https://fonts.google.com/specimen/Roboto | Unverified |
| Color utilities | https://github.com/material-foundation/material-color-utilities | Unverified |
| WCAG 2.2 quick reference | https://www.w3.org/WAI/WCAG22/quickref/ | Unverified |
| Lighthouse | https://developer.chrome.com/docs/lighthouse | Unverified |
| axe | https://www.deque.com/axe/ | Unverified |
| Open Graph | https://ogp.me | Unverified |
| Web app manifest | https://developer.mozilla.org/en-US/docs/Web/Manifest | Unverified |

Illustration rules for playful projects: `ILLUSTRATION-GUIDE.md`.

Design side: use the Figma "Material 3 Design Kit" (Figma Community) so design and code stay aligned.

---

## 2. Foundation

1. **Library:** use `@material/web` at a pinned exact version.
   - Latest found on npm on 2026-10-04: 2.5.0.
   - Install with: `npm install @material/web@2.5.0 --save-exact`
   - MUST NOT use `latest` or version ranges.
   - It is in maintenance mode. Its docs say components are not recommended for production use because breaking changes can ship without a major version bump. Pin it, and test before any upgrade.
   - Angular projects MUST use Angular Material instead (the Material Web README recommends this).
2. **Production loading:** install from npm and bundle. MUST NOT rely on the `esm.run` CDN in production. The CDN snippet is for prototypes only.
3. **Imports:** import only the components a page uses (for example `@material/web/button/filled-button.js`). MUST NOT import `all.js` in production.
4. **Missing components:** if `@material/web` has no stable version of a component, build it from the M3 spec using tokens (see Section 3).
5. **Colors:** M3 color roles only (primary, on-primary, secondary, tertiary, surface, on-surface, outline, error, and related roles). Hex values are allowed ONLY inside `/styles/theme.css`. MUST NOT hardcode colors anywhere else.
6. **Tokens:** use the M3 token layers (reference, system, component). All values come from CSS variables such as `--md-sys-color-primary`, defined once in `/styles/theme.css`, generated from Material Theme Builder. Material Web components read these variables and also expose component tokens (for example `--md-filled-tonal-button-container-shape`) that you set on `:root` or a parent element.
7. **Typography:** M3 type scale (display, headline, title, body, label; each large, medium, small) using `--md-sys-typescale-*` tokens. Default typeface is Roboto unless AGENTS.md names a brand font. If M3 Expressive is on, check the Typography page for the current recommended typeface and emphasized styles.
8. **Shape:** M3 corner tokens only (`--md-sys-shape-corner-*`).
9. **Spacing:** 4dp and 8dp increments only.
10. **Icons:** Material Symbols only. One style (Outlined, Rounded, or Sharp) per product.
11. **No invention:** MUST NOT invent tokens, components, or CSS variable names. If it is not in the M3 docs or the library, do not use it. The only exception is custom brand tokens with the prefix `--bte-` (for example `--bte-illus-sun`), defined in `/styles/theme.css` with light and dark values, and documented in the README. Use them only for brand needs M3 does not cover.

---

## 3. Component map

Checked against the Material Web repository and docs on 2026-10-04.

### Use from `@material/web` (stable folders)

| Need | Use |
|---|---|
| Buttons | `md-elevated-button`, `md-filled-button`, `md-filled-tonal-button`, `md-outlined-button`, `md-text-button` |
| Icon buttons | `md-icon-button`, `md-filled-icon-button`, `md-filled-tonal-icon-button`, `md-outlined-icon-button` |
| Floating action button | `md-fab`, `md-branded-fab` |
| Text input | `md-filled-text-field`, `md-outlined-text-field` |
| Dropdown | `md-filled-select`, `md-outlined-select`, `md-select-option` |
| Selection | `md-checkbox`, `md-radio`, `md-switch`, `md-slider` |
| Chips | `md-chip-set`, `md-assist-chip`, `md-filter-chip`, `md-input-chip`, `md-suggestion-chip` |
| Dialog | `md-dialog` |
| Menu | `md-menu`, `md-menu-item` |
| List | `md-list`, `md-list-item` |
| Tabs | `md-tabs`, `md-primary-tab`, `md-secondary-tab` |
| Progress | `md-linear-progress`, `md-circular-progress` |
| Utilities | `md-divider`, `md-icon`, `md-ripple`, `md-elevation`, `md-focus-ring` |

Before using any tag, confirm it exists in the installed package folder or in https://github.com/material-components/material-web/tree/main/docs/components. Tags in this table whose docs you could not find are "unverified": check them first.

### Build from the M3 spec using tokens

These are not in the stable set. Some exist only in `@material/web/labs` (experimental) or not at all:

Card, top app bar, navigation bar, navigation rail, navigation drawer, snackbar, bottom sheet, side sheet, date picker, time picker, badge, search, carousel, tooltip, segmented button, toolbar, button group, loading indicator.

Components in `/labs` are experimental. MUST NOT use them unless AGENTS.md approves, the version is pinned, and the use is noted in the report.

For each custom component:
1. Read its spec at https://m3.material.io/components.
2. Use only tokens, never raw values.
3. Support all states: enabled, hover, focus, pressed, disabled.
4. Support keyboard and screen readers.
5. Prefix the name (for example `bte-card`) and document it in the README.

If a component in the stable table does not exist in the installed version, treat it as custom.

---

## 4. Theming

1. Dynamic color from one source color. Generate schemes in Theme Builder.
2. Support light, dark, and high contrast schemes.
3. Theme switching changes tokens only, never component code.
4. Implementation: tokens live under `:root`, with dark overrides under `@media (prefers-color-scheme: dark)` and `:root[data-theme="dark"]`. See Section 13.
5. No flash of wrong theme: the one small inline script in Section 13 MUST run in `<head>` before CSS. This is the ONLY allowed inline script. MUST NOT use inline styles anywhere.
6. Respect system preference by default. Save the user's choice in `localStorage` (wrapped in try/catch).
7. Images and illustrations MUST work in both light and dark mode.

---

## 5. Layout and navigation

### Window size classes (confirmed 2026-10-04)

| Class | Width |
|---|---|
| Compact | under 600dp |
| Medium | 600dp to 839dp |
| Expanded | 840dp to 1199dp |
| Large | 1200dp to 1599dp |
| Extra large | 1600dp and above |

Window size classes describe available space, not device type. MUST NOT write "isTablet" style logic. Also consider height: a phone in landscape can be medium width with compact height, where two-pane layouts do not fit.

Source: https://m3.material.io/foundations/layout/applying-layout/window-size-classes

### Rules

1. Mobile first. Build compact first, then scale up.
2. Navigation: navigation bar on compact, navigation rail on medium, navigation drawer on expanded and above.
3. Top app bar on every page.
4. Use canonical layouts per page type:
   - Lists with details: list-detail
   - Browsing content: feed
   - Main content with side tools: supporting pane
5. Page content MUST NOT scroll horizontally at any width.

---

## 6. Component behavior

1. **States:** M3 state layers for hover, focus, pressed, disabled. Elevation by M3 tokens only.
2. **Motion:** M3 easing and duration tokens only (`--md-sys-motion-*`). MUST respect `prefers-reduced-motion`.
3. **Overlays:** dialogs, menus, tooltips, and sheets follow M3 specs. Trap focus inside. Close on Escape. Return focus to the trigger on close.
4. **Data display:** tables, lists, and charts use M3 color roles and type scale. Charts stay readable in dark mode and do not rely on color alone.
5. **Forms:** every input has a label, validation, helper text, error text, correct `type`, and `autocomplete` attribute.
6. **Page states:** every page and data view has loading, empty, and error states. Handle network failure with a retry action.
7. **Feedback:** every user action shows feedback (snackbar, progress, or inline message).
8. **Images:** set width and height. Broken or missing images show a fallback.
9. **Destructive actions** (delete, sign out of all devices) need a confirmation dialog.

---

## 7. Pages and content

1. Every product includes: onboarding, login, settings, profile, 404, and offline pages.
2. Content: short labels, sentence case, plain language. Empty and error messages say what happened and what to do next.
3. Brand: logo, favicon, and app icons live in `/assets` and are used consistently.

---

## 8. Quality

1. **Accessibility:** WCAG 2.2 AA contrast, visible focus, 48dp minimum touch targets, aria labels on icon-only controls, full keyboard navigation, semantic HTML, one `h1` per page.
2. **Internationalization:** no hardcoded user-facing strings (use a strings file), support RTL using logical CSS properties (`margin-inline-start`), locale-aware dates and numbers via `Intl`.
3. **Performance:** lazy load below-the-fold images, set image dimensions, no layout shift, Lighthouse score above 90 in all four categories.
4. **SEO and sharing:** unique page title, meta description, Open Graph tags, web app manifest.
5. **Security:** sanitize user input, no secrets or API keys in frontend code, consent banner before analytics.
6. **Browser support:** latest two versions of Chrome, Safari, Firefox, Edge, plus iOS Safari and Android Chrome. Check https://github.com/material-components/material-web/blob/main/docs/support.md for Material Web limits.
7. **Testing before each release:** axe accessibility check, responsive check at all window size classes, light, dark, and high contrast check, keyboard-only walkthrough.

---

## 9. Project setup

### Folder structure

```
/styles/theme.css     tokens only (generated from Theme Builder)
/styles/base.css      reset, global styles, typography classes
/components           custom components (prefixed)
/pages                one folder or file per page
/assets               logo, favicon, app icons, images
/docs                 saved reference pages and notes
DESIGN-SYSTEM.md
ILLUSTRATION-GUIDE.md (playful projects only)
AGENTS.md
```

### Fonts in the `<head>`

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
```

### Loading components and type scale (confirmed from the Material Web README)

```html
<script type="module">
  import '@material/web/button/filled-button.js';
  import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js';

  document.adoptedStyleSheets.push(typescaleStyles.styleSheet);
</script>

<h1 class="md-typescale-display-medium">Title</h1>
<md-filled-button>Save</md-filled-button>
```

### Rules

1. If AGENTS.md names no framework, use plain HTML, CSS, and JavaScript.
2. Name custom components with a clear prefix. Document each with usage and props in the README.
3. Use small commits with descriptive messages.

---

## 10. Process

1. Before building, confirm the product goal, target users, and brand source color. If you cannot ask, state your assumptions and use the safest default.
2. Before creating any component, search the project for an existing one and reuse it. MUST NOT duplicate.
3. Only change what was asked. MUST NOT redesign or refactor unrelated parts.
4. If a request conflicts with M3, follow M3 and explain why in one line.
5. For large tasks, state a short plan first, then build.

---

## 11. Definition of done

A task is done only when ALL are true:

- [ ] Responsive on compact, medium, and expanded
- [ ] Themed with tokens in light, dark, and high contrast
- [ ] Accessible (WCAG 2.2 AA, keyboard, focus, labels)
- [ ] Loading, empty, error, hover, focus, pressed, and disabled states built
- [ ] No hardcoded colors, fonts, or spacing outside `/styles/theme.css`
- [ ] No inline styles
- [ ] axe check passes and Lighthouse is above 90
- [ ] Report in Section 12 delivered

---

## 12. Report format after every build

```
M3 components used:
Tokens used:
Layouts used:
Custom components built (and why):
Assumptions made:
Unsure about:
Broken links found:
Checks run and results:
```

---

## 13. Token and theme starter

Generate real values in Material Theme Builder and export into `/styles/theme.css`. Do not hand-write color values.

```css
:root {
  /* light scheme: paste from Theme Builder */
  --md-sys-color-primary: /* value */;
  --md-sys-color-on-primary: /* value */;
  --md-sys-color-surface: /* value */;
  --md-sys-color-on-surface: /* value */;
  --md-ref-typeface-brand: 'Roboto', sans-serif;
  --md-ref-typeface-plain: 'Roboto', sans-serif;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* dark scheme: paste from Theme Builder */
  }
}

:root[data-theme="dark"] {
  /* dark scheme: paste from Theme Builder */
}
```

Theme init script (place in `<head>` before the stylesheet):

```html
<script>
  (function () {
    try {
      var t = localStorage.getItem('theme');
      if (t) document.documentElement.setAttribute('data-theme', t);
    } catch (e) {}
  })();
</script>
```

---

## 14. Verification and change log

### Status

```
Verified: yes
Last verified date: 2026-10-04
Verified by: Antigravity AI Assistant
@material/web latest found: 2.5.0 (npm)
@material/web installed in this project: 2.5.0 (pinned exactly in package.json)
Next verification due: 2027-01-02
```

### What was confirmed on 2026-10-04

- Links marked "Confirmed" in Section 1.
- Window size class breakpoints (Section 5).
- `@material/web` latest version 2.5.0 pinned and installed with 0 vulnerabilities.
- Component tags verified directly in installed package (including `md-filled-tonal-icon-button`, `md-menu-item`, `md-select-option`, `md-secondary-tab`).
- Experimental components in `/labs` isolated and replaced with custom spec-compliant implementations (`bte-card`, `bte-navigation`, `bte-top-app-bar`, `bte-page-states`).
- The type scale loading and full M3 tokens in `styles/theme.css` and `styles/base.css`.
- Interactive showcase and kitchen sink tested with Vite build.

### Change log

| Date | Change | Reason | By |
|---|---|---|---|
| 2026-10-04 | Color link corrected to /styles/color/system/overview | Old URL not found in live results | Claude |
| 2026-10-04 | Added link status column, motion token links, window size class link | Verification pass | Claude |
| 2026-10-04 | Replaced "Verify breakpoints" with confirmed values | Confirmed against Material window size class sources | Claude |
| 2026-10-04 | Updated component map; moved card, navigation, segmented button to "build from spec" | They live in labs or are not in the stable set | Claude |
| 2026-10-04 | Added exact-pin install command (2.5.0) and "no CDN in production" rule | Latest version check, maintenance mode status | Claude |
| 2026-10-04 | Added Expressive clarification | Google states Expressive is not a new version | Claude |
| 2026-10-04 | Initialized package.json with exact pinned @material/web@2.5.0, built tokens, base styles, spec components, and test showcase | Implementation pass & verification | Antigravity |
| 2026-10-04 | Remediated all 27 audit gaps: added spacing tokens, logical CSS properties (RTL), extracted all inline styles, added onboarding/profile/offline pages, skip links, menu/list/tabs components, and comprehensive docs | Best-practice audit remediation | Antigravity |

---

BTEHub Team
