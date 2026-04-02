# Design System Strategy: High-End Editorial Utility

## 1. Overview & Creative North Star
The core objective of this design system is to transform a simple utility—a counter—into a high-end, tactile experience. We are moving away from "app-like" interfaces and toward an **"Atmospheric Monolith"** aesthetic. 

The Creative North Star is **Kinetic Precision.** The UI should feel like a premium physical device—think high-end audio equipment or a Leica camera—where every interaction has weight, and the typography does the heavy lifting. We achieve this through aggressive whitespace, intentional asymmetry, and a total rejection of standard container borders in favor of tonal depth.

## 2. Colors & Surface Architecture
This system utilizes a deep, nocturnal palette to allow the "Primary" actions to vibrate with energy.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. To define boundaries, you must use **Background Color Shifts**. 
*   An inner element should sit on `surface_container_low` (#151b2d) against a `background` (#0c1324) floor. 
*   Use negative space (Spacing Scale 8 to 16) to define blocks rather than lines.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of darkened glass.
*   **Base:** `surface` (#0c1324) – The infinite void.
*   **Layer 1:** `surface_container_low` (#151b2d) – Primary grouping containers.
*   **Layer 2:** `surface_container_high` (#23293c) – Elevated interactive elements or cards.
*   **Layer 3:** `surface_bright` (#33394c) – Active states or "pop" elements.

### The Glass & Gradient Rule
To prevent the dark mode from feeling "flat," floating elements (like modals or FABs) must use **Glassmorphism**:
*   **Fill:** `surface_variant` at 60% opacity.
*   **Effect:** Backdrop blur at 12px–20px.
*   **Signature Texture:** Main Increase buttons (`primary_container`) should utilize a subtle linear gradient from `primary` (#4be277) to `primary_container` (#22c55e) at a 135-degree angle to give the button a "convex" physical feel.

## 3. Typography: Editorial Scale
We are pairing the geometric brutality of **Space Grotesk** with the Swiss precision of **Inter**.

*   **Display & Headline (Space Grotesk):** Reserved for the counter value and page titles. The counter should use `display-lg` (3.5rem) or larger. Use `letter-spacing: -0.04em` to make the numbers feel tight and engineered.
*   **Body & Labels (Inter):** Used for all functional text. Inter provides the necessary legibility at smaller scales (body-sm) to balance the loud, expressive nature of Space Grotesk.
*   **Intentional Asymmetry:** Align display typography to the left with significant padding-right to create a modern, editorial "imbalance" that guides the eye toward the interactive buttons.

## 4. Elevation & Depth: Tonal Layering
Forget drop shadows that look like "fuzzy glow." We use physics-based layering.

*   **The Layering Principle:** Instead of a shadow, a `surface_container_highest` (#2e3447) element placed on a `surface_dim` (#0c1324) background provides all the "lift" required.
*   **Ambient Shadows:** If an element must float (e.g., a reset confirmation sheet), use a shadow color tinted with `primary` at 4% opacity with a blur of 40px. This mimics a light source reflecting off the primary action button.
*   **The "Ghost Border":** If accessibility requires a stroke, use `outline_variant` (#3d4a3d) at 20% opacity. It should be felt, not seen.

## 5. Component Logic

### The Counter Display
The hero of the app. It should not be in a box. It should sit naked on the `background`, using `display-lg` Space Grotesk. If the number exceeds 4 digits, scale down to `display-md` dynamically.

### Action Buttons (The "Contact" Points)
*   **Primary (Increase):** Use `primary_container` (#22c55e). Large, rounded-xl (0.75rem). The height should be at least 80px to emphasize "Utility."
*   **Error (Decrease):** Use `error_container` (#93000a). Half the width of the Primary button, placed asymmetrically to prevent accidental taps.
*   **Secondary (Reset):** Use `secondary_container` (#404754) with `on_secondary_container` (#aeb5c5) text. This should feel recessed and less tempting to press.

### Lists & History
*   **Style:** No dividers. Use `surface_container_lowest` for even rows and `surface_container_low` for odd rows, or simply use `spacing-4` (1.4rem) between items.
*   **Leading Elements:** Timestamps should use `label-sm` in `secondary_fixed_dim` for a "dimmed" metadata look.

### Input Fields
*   **State:** Use `surface_container_highest` for the field background. 
*   **Focus:** Instead of a border change, animate the background color to `surface_bright` and shift the `on_surface_variant` label to `primary`.

## 6. Do's and Don'ts

### Do
*   **Use the Spacing Scale religiously.** A high-end feel comes from consistent "breathing room."
*   **Embrace the "Void."** Let the `background` color occupy at least 40% of the screen.
*   **Animate Transitions.** Because we lack lines, use subtle "slide-up" animations when values change to reinforce the stacking order.

### Don't
*   **Don't use pure white text (#FFFFFF) for body copy.** Use `on_surface_variant` (#bccbb9) to reduce eye strain and maintain the "Atmospheric" vibe.
*   **Don't use standard Material Design ripples.** Use a subtle "Scale Down" (to 0.98) transform on tap to mimic a physical button being depressed.
*   **Don't center everything.** Editorial design thrives on "Off-Center" layouts. Try left-aligning the counter and right-aligning the controls.