# Unified Service Sections — Design Spec

**Date:** 2026-05-09
**Status:** Approved

## Summary

Replace the current dual-component approach (`ServiceTextFree` for service 01, `ServiceCarousel` for services 02-05) with a single unified `ServiceSection` component. Each service section displays its introductory content as flowing prose text, and from "Entregáveis" (deliverables) onward displays cards in a horizontal drag/swipe carousel.

## Current State

- Service 01 renders via `ServiceTextFree.tsx` — full flowing text layout
- Services 02-05 render via `ServiceCarousel.tsx` — all content in 4 carousel cards (DESTAQUE, O QUE VOCÊ RECEBE, COMO FUNCIONA, RESULTADO)
- Data lives in `CAROUSEL_SERVICES` array in `src/lib/constants.ts`

## New Behavior

Every service section follows the same pattern:
1. Step number + title + subtitle (header)
2. **Prose section** — one or more text blocks rendered as flowing text with left border accent
3. **Carousel section** — remaining content rendered as draggable cards (starting from Entregáveis)

### Content Split Per Service

| Service | Prose (flowing text) | Cards (carousel) |
|---------|---------------------|-----------------|
| 01 Planejamento Estratégico | DESTAQUE | Entregáveis, Processo, O que muda |
| 02 Gestão de Redes Sociais | DESTAQUE | Entregáveis, Processo, O que muda |
| 03 Método Direcione | DESTAQUE, Como Funciona | Entregáveis, O que muda |
| 04 Perfil do Zero | DESTAQUE, Como Funciona | Entregáveis, O que muda |
| 05 Rotina em Conteúdo | DESTAQUE, O que Aprende | Entregáveis, O que muda |

### Deliverables Card Format

The "Entregáveis" card displays items as a bulleted list with a checkmark (✓) icon as the bullet separator. The deliverables text (currently a comma-separated string) must be split into individual topic items.

## Data Structure

### New Interface

```typescript
interface ServiceSectionData {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  theme: "dark" | "cream";
  prose: { tag: string; title: string; text: string }[];
  cards: CarouselCard[];
}

interface CarouselCard {
  tag: string;
  title: string;
  text?: string;      // free text (Processo, O que muda)
  items?: string[];   // bulleted list with ✓ (Entregáveis)
}
```

### New Constant

Replace `CAROUSEL_SERVICES` with `UNIFIED_SERVICES: ServiceSectionData[]` containing all 5 services with their content properly split between `prose` and `cards`.

## Component: `ServiceSection.tsx`

### Props

```typescript
interface ServiceSectionProps {
  service: ServiceSectionData;
}
```

### Rendering

1. **Section wrapper** — full-width, themed background (dark/cream alternating), section id for scroll-to navigation
2. **Header** — step number with parallax scroll effect, title (Playfair Display), subtitle
3. **Prose blocks** — each `prose` item rendered as a paragraph with:
   - Left border accent (brand color)
   - Subtle background tint
   - Fade-up entrance animation
4. **Carousel** — horizontal scroll container with:
   - Cards at 75% viewport width
   - Drag/swipe via Framer Motion
   - Spring physics (stiffness: 400, damping: 35)
   - Opacity fade for inactive cards
   - Dot navigation + prev/next buttons
5. **Deliverables card** — when `card.items` exists, render as:
   - List with no default bullets
   - Each item prefixed with a ✓ icon (brand accent color)
   - Vertical padding between items
6. **CTA button** — WhatsApp link, appears on the last card
7. **BrandLogo** — bottom of section, as current implementation

### Theming

Maintain existing theme system:
- `dark`: dark navy background, light text, brand accent cards
- `cream`: ice-white background, dark text, subtle card backgrounds

### Animations

Carry over from current implementation:
- Parallax on step number (useScroll + useTransform)
- Staggered fade-up on prose blocks
- Card reveal animation on scroll into view
- Spring-based drag for carousel

## Page Integration

In `src/app/page.tsx`:
- Remove individual service section renders
- Import `UNIFIED_SERVICES` from constants
- Map over array rendering `<ServiceSection service={s} />` for each

## Files Changed

| File | Action |
|------|--------|
| `src/lib/constants.ts` | Add `ServiceSectionData` interface, add `UNIFIED_SERVICES` array, keep `CAROUSEL_SERVICES` temporarily for reference |
| `src/components/ServiceSection.tsx` | **New** — unified component |
| `src/app/page.tsx` | Replace service section renders with loop |
| `src/components/ServiceTextFree.tsx` | **Delete** after migration |
| `src/components/ServiceCarousel.tsx` | **Delete** after migration |

## Files Unchanged

- `src/components/BrandLogo.tsx`
- `src/components/ServicesGrid.tsx`
- `src/components/Hero.tsx`
- All other section components
- `src/app/globals.css`

## Edge Cases

- Service 05 uses tag "O QUE VOCÊ APRENDE" instead of "COMO FUNCIONA" — handled naturally since prose content is explicit per service
- Service 03 card order is DESTAQUE → COMO FUNCIONA → Entregáveis → RESULTADO (Como Funciona before Entregáveis) — this is why it goes to prose
- Deliverables text varies: some are comma-separated items, some are full sentences with descriptions — items array handles both (each string is one bullet point)

## Success Criteria

- All 5 services render with the new unified layout
- Prose text displays clearly with left border accent
- Carousel works with drag/swipe, dots, and prev/next
- Entregáveis card shows items with ✓ bullets
- Themes alternate correctly (dark/cream)
- Animations work (parallax, fade-up, spring carousel)
- Mobile responsive
- ServicesGrid navigation links still scroll to correct sections
