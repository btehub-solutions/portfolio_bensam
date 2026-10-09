# Material 3 Token Architecture Reference

All design decisions in the repository are strictly driven by CSS Custom Properties defined in `/styles/theme.css`.

---

## 1. Color System

Tokens adapt automatically across four primary themes:
- **Light Theme**: Default `:root`
- **Dark Theme**: `@media (prefers-color-scheme: dark)` or `:root[data-theme="dark"]`
- **High-Contrast Light**: `:root[data-theme="high-contrast-light"]`
- **High-Contrast Dark**: `:root[data-theme="high-contrast-dark"]`

### Core Semantic Roles
| Token Variable | Description |
|---|---|
| `--md-sys-color-primary` | High-emphasis fill for primary actions and key components |
| `--md-sys-color-on-primary` | Text/icon color placed on top of `primary` |
| `--md-sys-color-primary-container` | Lower-emphasis fill for tonal containers |
| `--md-sys-color-on-primary-container` | Text/icon color on `primary-container` |
| `--md-sys-color-secondary` | Less prominent components like filter chips |
| `--md-sys-color-on-secondary` | Text/icon color on `secondary` |
| `--md-sys-color-secondary-container` | Tonal container for navigation active pills & selection |
| `--md-sys-color-on-secondary-container` | Text/icon on `secondary-container` |
| `--md-sys-color-tertiary` | Contrasting accents for balance and distinctive elements |
| `--md-sys-color-on-tertiary` | Text/icon color on `tertiary` |
| `--md-sys-color-tertiary-container` | Container background for tertiary elements |
| `--md-sys-color-on-tertiary-container` | Text/icon on `tertiary-container` |
| `--md-sys-color-error` | Critical alerts, destructive actions, badge backgrounds |
| `--md-sys-color-on-error` | Text/icon color on `error` |
| `--md-sys-color-error-container` | Container fill for error states and alert cards |
| `--md-sys-color-on-error-container` | Text/icon on `error-container` |

### Surface & Canvas Roles
| Token Variable | Description |
|---|---|
| `--md-sys-color-background` | Base background behind scrollable view content |
| `--md-sys-color-on-background` | High-contrast body text on `background` |
| `--md-sys-color-surface` | Default component surface (app bars, cards, dialogs) |
| `--md-sys-color-on-surface` | High-contrast title and body text on `surface` |
| `--md-sys-color-surface-variant` | Neutral variant for chips, search fields |
| `--md-sys-color-on-surface-variant` | Medium-contrast secondary text and icons |
| `--md-sys-color-surface-container-lowest` | Deepest surface level (e.g. auth cards) |
| `--md-sys-color-surface-container-low` | Lower surface level (drawers, elevated cards) |
| `--md-sys-color-surface-container` | Standard surface level (navigation bar, app bar scrolled) |
| `--md-sys-color-surface-container-high` | Elevated search bar, active hover states |
| `--md-sys-color-surface-container-highest` | Filled cards, text field containers |
| `--md-sys-color-outline` | High-emphasis borders (switches, text fields, outlined cards) |
| `--md-sys-color-outline-variant` | Subtle dividers and section borders |
| `--md-sys-color-inverse-surface` | Inverted background for snackbars and toasts |
| `--md-sys-color-inverse-on-surface` | Text on inverted surface |
| `--md-sys-color-inverse-primary` | Highlighting actions on inverted surfaces |

---

## 2. Typography Scale

The M3 type scale defines 15 distinct typography styles across 5 roles: `display`, `headline`, `title`, `body`, and `label`. Each style has 5 token properties: `-font`, `-size`, `-line-height`, `-weight`, and `-tracking`.

| Role | Size Class | Size | Line Height | Tracking | Weight |
|---|---|---|---|---|---|
| Display | Large | 57px | 64px | -0.25px | 400 |
| Display | Medium | 45px | 52px | 0px | 400 |
| Display | Small | 36px | 44px | 0px | 400 |
| Headline | Large | 32px | 40px | 0px | 400 |
| Headline | Medium | 28px | 36px | 0px | 400 |
| Headline | Small | 24px | 32px | 0px | 400 |
| Title | Large | 22px | 28px | 0px | 400 |
| Title | Medium | 16px | 24px | 0.15px | 500 |
| Title | Small | 14px | 20px | 0.10px | 500 |
| Body | Large | 16px | 24px | 0.50px | 400 |
| Body | Medium | 14px | 20px | 0.25px | 400 |
| Body | Small | 12px | 16px | 0.40px | 400 |
| Label | Large | 14px | 20px | 0.10px | 500 |
| Label | Medium | 12px | 16px | 0.50px | 500 |
| Label | Small | 11px | 16px | 0.50px | 500 |

Utility classes matching the pattern `.md-typescale-{role}-{size}` are provided in `/styles/base.css`.

---

## 3. Shape Scale

Corner radius tokens control the rounding of containers, chips, cards, and buttons:

| Token Variable | Value | Components |
|---|---|---|
| `--md-sys-shape-corner-none` | `0px` | Square items, full-bleed images |
| `--md-sys-shape-corner-extra-small` | `4px` | Snackbars, autocomplete dropdowns |
| `--md-sys-shape-corner-small` | `8px` | Small chips, tooltip popups |
| `--md-sys-shape-corner-medium` | `12px` | Standard cards, text fields |
| `--md-sys-shape-corner-large` | `16px` | Navigation pills, section cards |
| `--md-sys-shape-corner-extra-large` | `28px` | FABs, dialog modals |
| `--md-sys-shape-corner-full` | `9999px` | Buttons, badges, search bar, chips |

---

## 4. Spacing Scale

Incremental spacing tokens adhere strictly to the 4dp and 8dp design grid:

| Token Variable | Value | Recommended Usage |
|---|---|---|
| `--md-sys-spacing-0` | `0px` | Reset padding / margin |
| `--md-sys-spacing-1` | `4px` | Micro gaps between icon and text |
| `--md-sys-spacing-2` | `8px` | Standard button and chip gaps |
| `--md-sys-spacing-3` | `12px` | Inner container item margins |
| `--md-sys-spacing-4` | `16px` | Standard component padding (cards, bars) |
| `--md-sys-spacing-5` | `20px` | Form field spacing |
| `--md-sys-spacing-6` | `24px` | Section padding on medium/desktop screens |
| `--md-sys-spacing-7` | `32px` | Large section gaps |
| `--md-sys-spacing-8` | `40px` | Layout spacing |
| `--md-sys-spacing-9` | `48px` | Page state container padding |
| `--md-sys-spacing-10` | `64px` | Header / Hero offsets |

---

## 5. Elevation & Motion

### Elevation
- `--md-sys-elevation-level0`: Flat surface, no drop shadow.
- `--md-sys-elevation-level1`: Rest state for elevated cards and search bar.
- `--md-sys-elevation-level2`: Hover state for elevated cards, scrolled app bar.
- `--md-sys-elevation-level3`: Modals, dialogs, snackbar notifications.
- `--md-sys-elevation-level4`: Lifted drag states.
- `--md-sys-elevation-level5`: Maximum floating action prominence.

### Motion Easings
- Standard: `--md-sys-motion-easing-standard`, `--md-sys-motion-easing-standard-accelerate`, `--md-sys-motion-easing-standard-decelerate`
- Emphasized: `--md-sys-motion-easing-emphasized`, `--md-sys-motion-easing-emphasized-accelerate`, `--md-sys-motion-easing-emphasized-decelerate`
- Linear: `--md-sys-motion-easing-linear`

### Motion Durations
- Short: `--md-sys-motion-duration-short1` (50ms) to `short4` (200ms)
- Medium: `--md-sys-motion-duration-medium1` (250ms) to `medium4` (400ms)
- Long: `--md-sys-motion-duration-long1` (450ms) to `long4` (600ms)
- Extra Long: `--md-sys-motion-duration-extra-long1` (700ms) to `extra-long4` (1000ms)
