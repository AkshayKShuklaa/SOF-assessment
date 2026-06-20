# Replace Abstract Map with Accurate India SVG

## Goal Description
Replace the current simplified, abstract SVG outline of India in `ConnectivityMap.jsx` with a more accurate and recognizable map using the `@svg-maps/india` package. This will improve visual fidelity, reduce space usage, and ensure the map looks like actual India.

## User Review Required
> [!IMPORTANT]
> The new map will change the visual layout and possibly node positioning. Please review the updated design and confirm if any adjustments to node coordinates are needed.

## Open Questions
> [!QUESTION]
> Do you prefer to keep the existing node coordinates (x, y) or adjust them to match the new SVG's viewBox dimensions?

## Proposed Changes
---
### Packages
#### [NEW] @svg-maps/india
Add the npm package to provide an accurate India SVG map.

---
### Component Updates
#### [MODIFY] [ConnectivityMap.jsx](file:///c:/Users/shukl/OneDrive/Documents/New%20project/frontend/src/components/ConnectivityMap.jsx)
- Import the `India` map from `@svg-maps/india`.
- Replace the custom `<path>` outline with the imported SVG paths.
- Adjust the `viewBox` and scaling to fit the existing container (`max-w-[340px] aspect-square`).
- Update node placement logic to map state coordinates onto the new SVG projection (use the map's `features` data to get centroid positions).
- Remove the hand‑crafted outline `<path>` and related style overrides.
- Ensure light/dark mode colors adapt via CSS variables.

---
### Styling Adjustments
#### [MODIFY] [ConnectivityMap.jsx] (inline style block)
- Remove the `.map-outline` CSS as it will no longer be needed.
- Keep only node and line styling, adjusting colors to match the new map.

---
## Verification Plan
### Automated Tests
- Run `npm run dev` and visually confirm the map renders correctly.
- Verify that clicking a node still updates the Info Panel.
- Ensure the map does not overflow its container.

### Manual Verification
- Check map appearance in both dark and light modes.
- Confirm that the map resembles the Indian subcontinent.
- Validate that the pulse animation still follows connections.
