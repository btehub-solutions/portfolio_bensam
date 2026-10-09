# Material 3 Component Catalog

A comprehensive reference for all components available in the BTEHub Material 3 (M3) Design System repository.

---

## 1. Official `@material/web` Stable Components

All components are pinned to `@material/web@2.5.0` and imported individually as ES modules.

### Buttons & FABs
| Component Tag | Module Specifier | Description |
|---|---|---|
| `<md-filled-button>` | `@material/web/button/filled-button.js` | High-emphasis primary action button |
| `<md-elevated-button>` | `@material/web/button/elevated-button.js` | Elevated surface button with drop shadow |
| `<md-filled-tonal-button>` | `@material/web/button/filled-tonal-button.js` | Medium-emphasis secondary container button |
| `<md-outlined-button>` | `@material/web/button/outlined-button.js` | Medium-emphasis bordered action button |
| `<md-text-button>` | `@material/web/button/text-button.js` | Low-emphasis inline text action button |
| `<md-fab>` | `@material/web/fab/fab.js` | Floating Action Button (regular and extended) |
| `<md-icon-button>` | `@material/web/iconbutton/icon-button.js` | Standard icon-only action button |
| `<md-filled-icon-button>` | `@material/web/iconbutton/filled-icon-button.js` | High-emphasis filled icon button |
| `<md-filled-tonal-icon-button>` | `@material/web/iconbutton/filled-tonal-icon-button.js` | Tonal container icon button |
| `<md-outlined-icon-button>` | `@material/web/iconbutton/outlined-icon-button.js` | Outlined icon button |

### Form Inputs & Selectors
| Component Tag | Module Specifier | Description |
|---|---|---|
| `<md-filled-text-field>` | `@material/web/textfield/filled-text-field.js` | Filled text input with floating label |
| `<md-outlined-text-field>` | `@material/web/textfield/outlined-text-field.js` | Outlined text input with perimeter border |
| `<md-filled-select>` | `@material/web/select/filled-select.js` | Filled dropdown picker |
| `<md-outlined-select>` | `@material/web/select/outlined-select.js` | Outlined dropdown picker |
| `<md-select-option>` | `@material/web/select/select-option.js` | Option item inside select controls |
| `<md-checkbox>` | `@material/web/checkbox/checkbox.js` | Accessible multi-selection checkbox |
| `<md-radio>` | `@material/web/radio/radio.js` | Single-choice radio button |
| `<md-switch>` | `@material/web/switch/switch.js` | Two-state toggle switch |
| `<md-slider>` | `@material/web/slider/slider.js` | Continuous / discrete range slider |

### Chips
| Component Tag | Module Specifier | Description |
|---|---|---|
| `<md-chip-set>` | `@material/web/chips/chip-set.js` | Container element for grouping chips |
| `<md-assist-chip>` | `@material/web/chips/assist-chip.js` | Smart suggestion / helper chip |
| `<md-filter-chip>` | `@material/web/chips/filter-chip.js` | Toggleable filter chip with checkmark |
| `<md-input-chip>` | `@material/web/chips/input-chip.js` | Dismissible input tag chip |
| `<md-suggestion-chip>` | `@material/web/chips/suggestion-chip.js` | Recommendation action chip |

### Navigation, Menus & Lists
| Component Tag | Module Specifier | Description |
|---|---|---|
| `<md-tabs>` | `@material/web/tabs/tabs.js` | Tab navigation container |
| `<md-primary-tab>` | `@material/web/tabs/primary-tab.js` | Top-level screen destination tab |
| `<md-secondary-tab>` | `@material/web/tabs/secondary-tab.js` | Sub-category navigation tab |
| `<md-list>` | `@material/web/list/list.js` | Structured vertical list container |
| `<md-list-item>` | `@material/web/list/list-item.js` | Interactive or display item with headline & slots |
| `<md-menu>` | `@material/web/menu/menu.js` | Anchored dropdown menu container |
| `<md-menu-item>` | `@material/web/menu/menu-item.js` | Menu item action entry |
| `<md-divider>` | `@material/web/divider/divider.js` | 1px horizontal / vertical divider rule |

### Feedback & Overlays
| Component Tag | Module Specifier | Description |
|---|---|---|
| `<md-circular-progress>` | `@material/web/progress/circular-progress.js` | Determinate and indeterminate loading spinner |
| `<md-linear-progress>` | `@material/web/progress/linear-progress.js` | Determinate and indeterminate progress bar |
| `<md-dialog>` | `@material/web/dialog/dialog.js` | Modal confirmation and alert dialog |
| `<md-icon>` | `@material/web/icon/icon.js` | Icon container wrapper for Material Symbols |

---

## 2. Spec-Built Custom Components (`bte-*`)

Components built from the official Google Material Design 3 specification where `@material/web` equivalents are experimental (in `/labs`) or omitted.

### `bte-card` (`components/bte-card.css`)
- **Variants**:
  - `.bte-card--elevated`: Level 1 shadow, lifts to Level 2 on hover.
  - `.bte-card--filled`: Surface Container Highest background with 0 elevation.
  - `.bte-card--outlined`: Surface background with Outline Variant 1px perimeter border.
- **Sub-elements**: `.bte-card__headline`, `.bte-card__subhead`, `.bte-card__body`, `.bte-card__actions`.
- **States**: Default, `:hover`, `:focus-visible`, `:active`, and `[disabled]`.

### `bte-navigation` (`components/bte-navigation.css`)
- **Compact (< 600px)**: `.bte-nav-bar` sticky bottom navigation bar with active pill indicator.
- **Medium (600px - 839px)**: `.bte-nav-rail` left navigation rail with icons and concise labels.
- **Expanded (>= 840px)**: `.bte-nav-drawer` persistent side navigation drawer.
- **RTL**: Fully supports RTL direction via logical borders and block/inline insets.

### `bte-top-app-bar` (`components/bte-top-app-bar.css`)
- **Height**: 64px standard M3 height.
- **Scroll Elevation**: Dynamically gains Level 2 elevation and Surface Container tinting upon scrolling via `.bte-top-app-bar--scrolled`.
- **Slots**: Navigation icon, title headline, action button grouping.

### `bte-state-container` (`components/bte-page-states.css`)
- **Empty State**: `.bte-state-container` with large icon, title, description, and primary CTA.
- **Error State**: `.bte-state-container--error` with Error Container tinted icon badge and retry button.
- **Roles**: `role="status"` or `role="alert"`.

### `bte-badge` (`components/bte-badge.css`)
- **Anchor**: `.bte-badge-anchor` relative position wrapper.
- **Dot Badge**: `.bte-badge-dot` 6dp diameter unread notification indicator.
- **Numeric Badge**: `.bte-badge` 16dp height pill displaying unread counts.
- **RTL**: Mirrored transform logic for both LTR and RTL directions.

### `bte-snackbar` (`components/bte-snackbar.css` & `components/bte-snackbar.js`)
- **Host**: Dynamically attaches `.bte-snackbar-host` with `aria-live="polite"` and `role="status"`.
- **Controller API**:
  ```javascript
  import { showSnackbar } from './components/bte-snackbar.js';

  showSnackbar({
    message: 'Profile updated',
    actionText: 'Undo',
    onAction: () => console.log('Undone'),
    duration: 4000
  });
  ```

### `bte-search` (`components/bte-search.css`)
- **Height**: 56px standard floating pill search bar.
- **States**: Elevates from Level 1 to Level 2 on `:focus-within`.
- **Slots**: Leading search icon, input field, trailing voice/filter icon actions.

### `bte-segmented-button` (`components/bte-segmented-button.css`)
- **Container**: `.bte-segmented-button-set` with `role="radiogroup"`.
- **Buttons**: `.bte-segmented-button` with `role="radio"` and `aria-checked`.
- **Selection**: `.bte-segmented-button--selected` styled with Secondary Container role.

### `bte-theme` (`components/bte-theme.js`)
- **Theme Modes**: `auto`, `light`, `dark`, `high-contrast-light`, `high-contrast-dark`.
- **Zero Flash**: Supported via inline `<script>` initializer in `<head>`.

### `bte-tooltip` (`components/bte-tooltip.css` & `components/bte-tooltip.js`)
- **Plain Tooltip**: 24dp height, Inverse Surface background, Inverse On Surface text, Level 1 shadow.
- **Rich Tooltip**: 200–320dp width container with subhead, body text, and optional primary action buttons.
- **Controller API**:
  ```javascript
  import { attachTooltip } from './components/bte-tooltip.js';

  attachTooltip(anchorElement, {
    rich: true,
    subhead: 'Rich Tooltip',
    text: 'Provides detailed contextual assistance.',
    actionText: 'Learn More',
    onAction: () => console.log('Action clicked')
  });
  ```

### `bte-bottom-sheet` (`components/bte-bottom-sheet.css` & `components/bte-bottom-sheet.js`)
- **Container**: Surface Container Low with 28dp rounded top corners and 32x4dp pill drag handle.
- **Backdrop Scrim**: Semi-transparent scrim with smooth enter/leave animations and click-outside dismissal.
- **Controller API**:
  ```javascript
  import { createBottomSheet } from './components/bte-bottom-sheet.js';

  const sheet = createBottomSheet({
    title: 'Actions',
    content: 'Bottom sheet content...',
    actions: [{ text: 'Cancel' }, { text: 'Confirm', variant: 'filled' }]
  });
  sheet.open();
  ```

### `bte-side-sheet` (`components/bte-side-sheet.css` & `components/bte-side-sheet.js`)
- **Width**: Standard 400dp side panel with rounded start edges and Level 1 elevation.
- **Controller API**:
  ```javascript
  import { createSideSheet } from './components/bte-side-sheet.js';

  const sideSheet = createSideSheet({
    title: 'Filters',
    content: 'Filter options...',
    actions: [{ text: 'Reset' }, { text: 'Apply', variant: 'filled' }]
  });
  sideSheet.open();
  ```

### `bte-date-picker` (`components/bte-date-picker.css` & `components/bte-date-picker.js`)
- **Calendar Grid**: Full M3 calendar month grid with year/month pagination and weekday header.
- **States**: Today circular outline, selected date filled pill (`primary`), hover state layers.
- **Controller API**:
  ```javascript
  import { createDatePicker } from './components/bte-date-picker.js';

  const picker = createDatePicker({
    onDateSelect: (selectedDate) => console.log(selectedDate)
  });
  document.getElementById('picker-container').appendChild(picker.element);
  ```

### `bte-time-picker` (`components/bte-time-picker.css` & `components/bte-time-picker.js`)
- **Clock Face**: 256dp circular dial face with hour/minute selector hand.
- **Display**: Digital hours and minutes display box with AM/PM toggle selector.
- **Controller API**:
  ```javascript
  import { createTimePicker } from './components/bte-time-picker.js';

  const timePicker = createTimePicker({
    onTimeSelect: ({ hours, minutes, period, formatted }) => console.log(formatted)
  });
  document.getElementById('time-container').appendChild(timePicker.element);
  ```

### `bte-carousel` (`components/bte-carousel.css` & `components/bte-carousel.js`)
- **Layout**: Multi-browse and Hero scroll snap container (`scroll-snap-type: x mandatory`).
- **Cards**: 28dp corner radii with subtle hover elevation and smooth navigation arrows.

### `bte-bottom-app-bar` (`components/bte-bottom-app-bar.css`)
- **Height**: 80dp sticky bar supporting left navigation/action icons and right-aligned embedded FAB.

### `bte-dynamic-color` (`components/bte-dynamic-color.js`)
- **Material You Engine**: Algorithmic generation of complete 37-token tonal palettes from *any* hex seed color in real time.
- **Theme Support**: Generates Light, Dark, High-Contrast Light, and High-Contrast Dark schemes dynamically with zero external dependencies.
- **API**:
  ```javascript
  import { applyDynamicSeedColor, resetDynamicSeedColor } from './components/bte-dynamic-color.js';

  // Apply custom brand seed:
  applyDynamicSeedColor('#006A6A');

  // Reset to default baseline:
  resetDynamicSeedColor();
  ```
