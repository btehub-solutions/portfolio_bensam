# ILLUSTRATION-GUIDE.md

Art direction rules for playful, illustration-led products.
Version: 1.1
Checked against live sources: 2026-10-04
Owner: BTEHub Team

## 0. How to use this file

1. Read this file only when AGENTS.md says "Illustration style: playful" (or another style other than none).
2. Always read `DESIGN-SYSTEM.md` first. This file sits on top of it and never replaces it.
3. Never guess. If an art direction field in Section 2 is empty, ask. If you cannot ask, use the defaults in Section 2.

### What wins when rules conflict

| Topic | Winner |
|---|---|
| Structure, layout, navigation, components | DESIGN-SYSTEM.md |
| Accessibility and security | DESIGN-SYSTEM.md |
| Color tokens, type scale, shape scale, motion tokens | DESIGN-SYSTEM.md |
| Illustration style, mascots, decorative art, brand visuals | This file |

If an illustration idea breaks an M3 or accessibility rule, follow M3, explain the conflict in one line, and offer an alternative.

---

## 1. Reference links

Status was checked on 2026-10-04. Confirmed means the URL appeared in live search results. Unverified means a standard URL I could not open.

| Topic | Link | Status |
|---|---|---|
| M3 shape and shape library | https://m3.material.io/styles/shape/overview-principles | Confirmed |
| M3 usability and expressive tactics | https://m3.material.io/foundations/usability/overview | Confirmed |
| M3 icon design principles | https://m3.material.io/styles/icons/designing-icons | Confirmed |
| M3 blog and updates | https://m3.material.io/blog | Confirmed |
| SVGO (SVG optimizer) | https://github.com/svg/svgo | Unverified |
| SVGOMG (browser optimizer) | https://jakearchibald.github.io/svgomg/ | Unverified |
| Lottie web player | https://airbnb.io/lottie/ | Unverified |
| LottieFiles | https://lottiefiles.com | Unverified |
| Squoosh (image compression) | https://squoosh.app | Unverified |
| WCAG 2.2 quick reference | https://www.w3.org/WAI/WCAG22/quickref/ | Unverified |

If a link fails, search for the topic, report the broken link, and log it in Section 12.

---

## 2. Art direction (fill in per project)

Defaults apply when a field is empty.

| Field | Value | Default |
|---|---|---|
| Illustration style | | Flat vector, simple shapes |
| Mood | | Friendly, warm, optimistic |
| Line style | | No outlines, filled shapes only |
| Corner style | | Rounded, matching the M3 shape scale |
| Detail level | | Low to medium |
| Gradients and shadows | | None, or one soft shadow level |
| Textures | | None |
| Characters or mascot | | None |
| Cultural references | | Respectful and accurate, reviewed by the owner |
| Illustration tool | | Adobe Illustrator, exported as SVG |

---

## 3. Color

1. Illustrations MUST use M3 color roles through CSS variables so they follow light, dark, and high contrast themes. Example: `fill="var(--md-sys-color-primary)"` in inline SVG.
2. If the art needs accent colors that M3 roles do not cover, define custom tokens in `/styles/theme.css` with the prefix `--bte-illus-` (for example `--bte-illus-sun`). Each MUST have a light and a dark value.
3. MUST NOT hardcode hex values inside SVG files used in the UI. Hex is allowed only inside `/styles/theme.css`.
4. Skin tones, brand logos, and flags are the only allowed fixed colors. Record them in `/docs/asset-licenses.md` under "fixed colors".

---

## 4. Shape and composition

1. Build forms from simple geometric shapes. Corner roundness should echo the M3 shape scale.
2. Keep one consistent stroke weight and corner radius across all illustrations in a product.
3. Leave breathing room. Illustrations MUST NOT crowd text or controls.
4. Keep one focal point per illustration.
5. Use the M3 shape library for decorative masks and frames where it fits.

---

## 5. Typography

1. Body text, labels, and forms use the M3 type scale from `DESIGN-SYSTEM.md`.
2. A playful display font is allowed only if AGENTS.md names it as the brand font, and only for display and headline roles.
3. Text MUST NOT be baked into images. Use real HTML text.

---

## 6. Characters and mascots

Use only if Section 2 says a mascot exists.

Fill in:

```
Name:
Personality (3 words):
Proportions (head to body ratio):
Signature colors (tokens):
Required poses: (for example waving, thinking, celebrating, confused, sleeping)
Never do: (for example no weapons, no stereotypes)
```

Rules:
1. Keep proportions and features identical across every pose.
2. Match each pose to a page state: celebrating for success, confused for 404, sleeping for offline, thinking for loading.
3. Do not generate a new character design without approval.

---

## 7. Where illustrations belong

Recommended places: onboarding, empty states, 404, offline, error pages, success screens, and landing page heroes.

Rules:
1. An illustration MUST NOT replace required text, labels, or instructions.
2. Every empty and error state keeps its message and action next to the illustration.
3. Illustrations scale down gracefully on compact screens. Hide purely decorative ones if they push content below the fold.
4. Decorative illustrations MUST NOT slow the page (see Section 10).

---

## 8. Asset specifications

### Format

| Use | Format |
|---|---|
| Illustrations, icons, mascots | SVG (preferred) |
| Photos and complex textures | WebP or AVIF, with JPEG fallback |
| Simple animation | CSS or SVG animation |
| Complex animation | Lottie JSON |

### Exporting SVG from Adobe Illustrator

1. Keep artboards sized to the artwork, with a clean `viewBox`.
2. Outline fonts or, better, keep text out of the art.
3. Use "Export As" or "Save As" SVG with presentation attributes and minified output.
4. Do not embed raster images inside SVG.
5. Remove hardcoded colors that should be tokens, and replace them with `currentColor` or `var(--md-sys-color-*)`.
6. Run through SVGO or SVGOMG and keep the `viewBox`.
7. Check unique IDs so multiple SVGs on one page do not clash.

### Naming and location

- Folder: `/assets/illustrations`
- Names: kebab-case, descriptive, for example `empty-state-no-messages.svg`
- Mascot poses: `mascot-name-pose.svg`

---

## 9. Accessibility

1. Informative illustrations need `alt` text (or `role="img"` with `aria-label` for inline SVG) that describes meaning, not appearance.
2. Decorative illustrations use `alt=""` or `aria-hidden="true"`.
3. Parts of an illustration that carry information MUST have at least 3:1 contrast against their background.
4. Do not rely on color alone to convey meaning.
5. Animation MUST respect `prefers-reduced-motion`.
6. Any animation that plays longer than 5 seconds needs a pause control. No flashing more than 3 times per second.

---

## 10. Performance

| Asset | Budget |
|---|---|
| Single SVG | Under 50 KB |
| Raster image above the fold | Under 200 KB |
| Lottie file | Under 100 KB |
| Total illustration weight per page | Under 500 KB |

Rules:
1. Lazy load below-the-fold images.
2. Set width and height to prevent layout shift.
3. Lottie MUST NOT autoplay on load unless it is the primary content. Pause when off screen.
4. Lighthouse above 90 still applies.

---

## 11. Animation

1. Timing and easing use M3 motion tokens from `DESIGN-SYSTEM.md`.
2. Playful motion (bounce, wobble) is allowed for decorative and reward moments only, not for navigation or form feedback.
3. Provide a static fallback for reduced motion.

---

## 12. Licensing and sources

1. Use only art that is original, commissioned, or licensed for this use.
2. MUST NOT use stock illustrations, mascots, or characters without a recorded license.
3. AI-generated art needs written approval from the owner before use.
4. Record every asset in `/docs/asset-licenses.md`:

```
| File | Source | License | Date | Notes (fixed colors, restrictions) |
|---|---|---|---|---|
```

---

## 13. Definition of done (illustration)

- [ ] Follows the art direction in Section 2
- [ ] Colors come from tokens and work in light, dark, and high contrast
- [ ] Alt text or aria-hidden set correctly
- [ ] Within size budgets
- [ ] Optimized with SVGO or compressed
- [ ] Reduced motion respected
- [ ] License recorded
- [ ] No text baked into images

---

## 14. Report additions

Add to the standard build report:

```
Illustrations used (file and where):
Custom --bte-illus tokens added:
Asset sizes and optimization done:
Licenses recorded:
Unsure about:
```

---

## 15. Verification and change log

```
Verified: partial
Last verified date: 2026-10-04
Verified by: Claude (Anthropic assistant), links marked Confirmed only
Next verification due: 2027-01-02
```

Verification task (run once, then every 90 days):
1. Open every link marked "Unverified" in Section 1. Confirm each loads. Replace broken ones.
2. Confirm the SVG export steps still match the current Illustrator export dialog.
3. Update the status block and add a change log entry.

Do not change any rule without approval. If a link cannot be opened, mark it "unverified".

| Date | Change | Reason | By |
|---|---|---|---|
| 2026-10-04 | Added link status column | Verification pass | Claude |

---

BTEHub Team
