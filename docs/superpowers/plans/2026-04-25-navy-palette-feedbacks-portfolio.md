# Navy Palette + Feedbacks & Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the GabayCo landing page from brown/earth palette to navy, add a Feedbacks marquee section and a Portfolio marquee section.

**Architecture:** Three-phase approach — (1) global color palette swap via CSS token rename + codebase-wide class rename, (2) new shared `ImageMarquee` component using pure CSS animations, (3) two new sections (`Feedbacks`, `Portfolio`) consuming `ImageMarquee`, wired into `page.tsx`.

**Tech Stack:** Next.js 16, React 19, Framer Motion 12, Tailwind CSS v4

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `src/app/globals.css` | Modify | Rename + recolor @theme tokens, add `@keyframes marquee` |
| `src/components/Hero.tsx` | Modify | Rename color classes (brown→navy) |
| `src/components/ServicesGrid.tsx` | Modify | Rename color classes |
| `src/components/ServiceCarousel.tsx` | Modify | Rename color classes in themes object |
| `src/components/ContentPillars.tsx` | Modify | Rename color classes |
| `src/components/AboutMe.tsx` | Modify | Rename color classes |
| `src/components/Marquee.tsx` | Modify | Rename color classes |
| `src/components/CTASection.tsx` | Modify | Rename color classes |
| `src/components/Footer.tsx` | Modify | Rename color classes |
| `src/components/WhatsAppButton.tsx` | Modify | Rename color classes |
| `src/components/PainPoints.tsx` | Modify | Rename color classes |
| `src/components/ImageMarquee.tsx` | Create | Reusable CSS-animation marquee container |
| `src/components/Feedbacks.tsx` | Create | "O que falam de nós" section with feedback image marquee |
| `src/components/Portfolio.tsx` | Create | "Últimos trabalhos" section with portfolio image marquee |
| `src/app/page.tsx` | Modify | Add Feedbacks + Portfolio to section order |

---

### Task 1: Update color palette in globals.css

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: Replace the @theme block with new navy tokens and add marquee keyframe**

Replace the entire `@theme { ... }` block in `src/app/globals.css` with:

```css
@theme {
  /* Brand colors — Navy Elegante */
  --color-brand-black: #000000;
  --color-brand-dark-navy: #1a2744;
  --color-brand-light-blue: #8eaecf;
  --color-brand-medium-navy: #2c4a7c;
  --color-brand-steel-blue: #5b7fad;
  --color-brand-blue-gray: #c9d6e3;
  --color-brand-ice-gray: #e8edf2;
  --color-brand-ice-white: #f5f7fa;
  --color-brand-white: #ffffff;

  /* Font families */
  --font-heading: var(--font-playfair), Georgia, serif;
  --font-body: var(--font-inter), system-ui, sans-serif;
}
```

Then add the marquee keyframe after the `@layer base { ... }` block:

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
```

- [ ] **Step 2: Verify globals.css compiles**

Run: `cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing" && npx tsc --noEmit 2>&1 | head -5`

Expected: No CSS-related errors (component errors are expected — old class names still in use).

- [ ] **Step 3: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: migrate color palette from brown to navy elegante + add marquee keyframe"
```

---

### Task 2: Rename color classes across all components

**Files:**
- Modify: All `.tsx` files under `src/components/`

This task applies the following find-and-replace pairs across **every** `.tsx` file in `src/components/`:

| Old | New |
|-----|-----|
| `brand-dark-brown` | `brand-dark-navy` |
| `brand-warm-brown` | `brand-medium-navy` |
| `brand-taupe` | `brand-steel-blue` |
| `brand-sage` | `brand-light-blue` |
| `brand-warm-gray` | `brand-blue-gray` |
| `brand-light-gray` | `brand-ice-gray` |
| `brand-cream` | `brand-ice-white` |

**Important:** `brand-black` and `brand-white` are unchanged.

- [ ] **Step 1: Run find-and-replace for each color token**

Execute these commands in order (each replaces one token across all component files):

```bash
cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing"
find src/components -name '*.tsx' -exec sed -i '' 's/brand-dark-brown/brand-dark-navy/g' {} +
find src/components -name '*.tsx' -exec sed -i '' 's/brand-warm-brown/brand-medium-navy/g' {} +
find src/components -name '*.tsx' -exec sed -i '' 's/brand-taupe/brand-steel-blue/g' {} +
find src/components -name '*.tsx' -exec sed -i '' 's/brand-sage/brand-light-blue/g' {} +
find src/components -name '*.tsx' -exec sed -i '' 's/brand-warm-gray/brand-blue-gray/g' {} +
find src/components -name '*.tsx' -exec sed -i '' 's/brand-light-gray/brand-ice-gray/g' {} +
find src/components -name '*.tsx' -exec sed -i '' 's/brand-cream/brand-ice-white/g' {} +
```

- [ ] **Step 2: Verify no old color names remain**

Run: `cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing" && grep -rn 'brand-dark-brown\|brand-warm-brown\|brand-taupe\|brand-sage\|brand-warm-gray\|brand-light-gray\|brand-cream' src/components/`

Expected: **No output** (zero matches). If any matches appear, fix them manually.

- [ ] **Step 3: Verify the ServiceCarousel themes object was renamed correctly**

Open `src/components/ServiceCarousel.tsx` and confirm the `themes` object now reads:

```typescript
const themes = {
  dark: {
    bg: "bg-brand-dark-navy",
    number: "text-brand-blue-gray/40",
    name: "text-brand-ice-white",
    subtitle: "text-brand-steel-blue",
    cardBg: "bg-white/[0.06] border border-white/10",
    tagBg: "bg-brand-light-blue/35 text-brand-ice-white",
    cardTitle: "text-brand-ice-white",
    cardText: "text-brand-blue-gray",
    arrow: "text-brand-blue-gray",
    dotInactive: "bg-brand-blue-gray/30",
    dotActive: "bg-brand-light-blue",
    ctaBg: "bg-brand-light-blue text-white",
  },
  cream: {
    bg: "bg-brand-ice-white",
    number: "text-brand-dark-navy/15",
    name: "text-brand-dark-navy",
    subtitle: "text-brand-medium-navy",
    cardBg: "bg-white border border-black/[0.06] shadow-[0_2px_8px_rgba(0,0,0,0.04)]",
    tagBg: "bg-brand-light-blue/10 text-brand-light-blue",
    cardTitle: "text-brand-dark-navy",
    cardText: "text-brand-medium-navy",
    arrow: "text-brand-medium-navy",
    dotInactive: "bg-brand-dark-navy/15",
    dotActive: "bg-brand-light-blue",
    ctaBg: "bg-brand-light-blue text-white",
  },
};
```

- [ ] **Step 4: Verify TypeScript compiles**

Run: `cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing" && npx tsc --noEmit 2>&1 | head -20`

Expected: No errors.

- [ ] **Step 5: Commit**

```bash
cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing"
git add src/components/
git commit -m "feat: rename all color classes from brown palette to navy palette"
```

---

### Task 3: Create ImageMarquee.tsx — Reusable CSS-animation marquee

**Files:**
- Create: `src/components/ImageMarquee.tsx`

- [ ] **Step 1: Create the ImageMarquee component**

Create `src/components/ImageMarquee.tsx`:

```tsx
"use client";

import { type ReactNode } from "react";

interface ImageMarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export default function ImageMarquee({
  children,
  direction = "left",
  duration = 40,
  pauseOnHover = true,
  className = "",
}: ImageMarqueeProps) {
  const animationDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div
      className={`group overflow-hidden ${className}`}
      role="marquee"
      aria-label="Scrolling content"
    >
      <div
        className={`flex w-max gap-6 ${
          pauseOnHover
            ? "@media(hover:hover){&:hover{animation-play-state:paused}}"
            : ""
        }`}
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection,
          willChange: "transform",
          ...(pauseOnHover ? {} : {}),
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover && window.matchMedia("(hover: hover)").matches) {
            e.currentTarget.style.animationPlayState = "paused";
          }
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = "running";
          }
        }}
      >
        {/* Original content */}
        <div className="flex gap-6 shrink-0">{children}</div>
        {/* Duplicated for seamless loop */}
        <div className="flex gap-6 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing" && npx tsc --noEmit 2>&1 | head -10`

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing"
git add src/components/ImageMarquee.tsx
git commit -m "feat: add reusable ImageMarquee component with CSS animation"
```

---

### Task 4: Create Feedbacks.tsx — "O que falam de nós" section

**Files:**
- Create: `src/components/Feedbacks.tsx`

- [ ] **Step 1: Create the Feedbacks component**

Create `src/components/Feedbacks.tsx`:

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageMarquee from "./ImageMarquee";

const FEEDBACK_IMAGES = [
  { src: "/feedbacks/feedback_1.png", alt: "Depoimento de cliente 1" },
  { src: "/feedbacks/feedback2.png", alt: "Depoimento de cliente 2" },
  { src: "/feedbacks/feedback3.png", alt: "Depoimento de cliente 3" },
  { src: "/feedbacks/feedback4.png", alt: "Depoimento de cliente 4" },
];

export default function Feedbacks() {
  return (
    <section className="bg-brand-dark-navy py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto px-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-xs uppercase tracking-[0.25em] text-brand-light-blue mb-3">
          Depoimentos
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
          <span className="text-white">O que falam </span>
          <span className="text-brand-steel-blue">de nós</span>
        </h2>
      </motion.div>

      {/* Marquee with fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-dark-navy to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-dark-navy to-transparent z-10 pointer-events-none" />

        <ImageMarquee direction="right" duration={50} pauseOnHover>
          {FEEDBACK_IMAGES.map((img) => (
            <div
              key={img.src}
              className="bg-white rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-300 overflow-hidden shrink-0"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={400}
                className="w-[240px] h-[320px] md:w-[300px] md:h-[400px] object-cover"
              />
            </div>
          ))}
        </ImageMarquee>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing" && npx tsc --noEmit 2>&1 | head -10`

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing"
git add src/components/Feedbacks.tsx
git commit -m "feat: add Feedbacks section with auto-scroll marquee"
```

---

### Task 5: Create Portfolio.tsx — "Últimos trabalhos" section

**Files:**
- Create: `src/components/Portfolio.tsx`

- [ ] **Step 1: Create the Portfolio component**

Create `src/components/Portfolio.tsx`:

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ImageMarquee from "./ImageMarquee";

const PORTFOLIO_IMAGES = [
  { src: "/photos/IMG_2491 Large.jpeg", alt: "Trabalho de portfólio 1" },
  { src: "/photos/IMG_2513 Large.jpeg", alt: "Trabalho de portfólio 2" },
  { src: "/photos/IMG_2538 Large.jpeg", alt: "Trabalho de portfólio 3" },
  { src: "/photos/IMG_2605 Large.jpeg", alt: "Trabalho de portfólio 4" },
  { src: "/photos/IMG_2666 Large.jpeg", alt: "Trabalho de portfólio 5" },
  { src: "/photos/IMG_2742 Large.jpeg", alt: "Trabalho de portfólio 6" },
  { src: "/photos/IMG_2867 Large.jpeg", alt: "Trabalho de portfólio 7" },
];

export default function Portfolio() {
  return (
    <section className="bg-brand-ice-white py-20 md:py-28 overflow-hidden">
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto px-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-body text-xs uppercase tracking-[0.25em] text-brand-steel-blue mb-3">
          Portfólio
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
          <span className="text-brand-black">Últimos </span>
          <span className="text-brand-medium-navy">trabalhos</span>
        </h2>
      </motion.div>

      {/* Marquee with fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-ice-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-ice-white to-transparent z-10 pointer-events-none" />

        <ImageMarquee direction="left" duration={40} pauseOnHover>
          {PORTFOLIO_IMAGES.map((img) => (
            <div
              key={img.src}
              className="rounded-2xl overflow-hidden shrink-0 hover:scale-[1.03] hover:-rotate-1 transition-transform duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={357}
                height={440}
                className="w-[240px] h-[300px] md:w-[357px] md:h-[440px] object-cover"
              />
            </div>
          ))}
        </ImageMarquee>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing" && npx tsc --noEmit 2>&1 | head -10`

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing"
git add src/components/Portfolio.tsx
git commit -m "feat: add Portfolio section with auto-scroll marquee"
```

---

### Task 6: Update page.tsx — New section order

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Rewrite page.tsx with Feedbacks and Portfolio in the correct positions**

Replace the entire contents of `src/app/page.tsx` with:

```tsx
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import ServiceCarousel from "@/components/ServiceCarousel";
import ContentPillars from "@/components/ContentPillars";
import Feedbacks from "@/components/Feedbacks";
import AboutMe from "@/components/AboutMe";
import Marquee from "@/components/Marquee";
import Portfolio from "@/components/Portfolio";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { CAROUSEL_SERVICES } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      {CAROUSEL_SERVICES.map((service) => (
        <ServiceCarousel key={service.id} service={service} />
      ))}
      <ContentPillars />
      <Feedbacks />
      <AboutMe />
      <Marquee />
      <Portfolio />
      <CTASection />
      <Footer />
    </main>
  );
}
```

Section order:
1. Hero
2. ServicesGrid
3. ServiceCarousel (×5)
4. ContentPillars
5. **Feedbacks** ← NEW
6. AboutMe
7. Marquee (text)
8. **Portfolio** ← NEW
9. CTASection
10. Footer

- [ ] **Step 2: Verify it compiles**

Run: `cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing" && npx tsc --noEmit 2>&1 | head -20`

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing"
git add src/app/page.tsx
git commit -m "feat: add Feedbacks and Portfolio sections to page layout"
```

---

### Task 7: Visual verification and polish

**Files:**
- Possibly touch: any of the above files for adjustments

- [ ] **Step 1: Start the dev server**

Run: `cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing" && npm run dev`

- [ ] **Step 2: Open in browser and verify all sections**

Navigate to `http://localhost:3000` and check:

1. **All sections render** with navy/blue color palette (no brown remnants)
2. **Hero** — navy text colors, ice-white background
3. **ServicesGrid** — photo background with overlay, ice-white text, light-blue accents
4. **ServiceCarousel** — alternating dark-navy/ice-white themes, light-blue dots/CTAs
5. **ContentPillars** — photo background, ice-white text, blue-gray accents
6. **Feedbacks** — dark-navy background, light-blue label, 4 feedback images scrolling right, fade edges visible, pause on hover works
7. **Portfolio** — ice-white background, steel-blue label, 7 portfolio images scrolling left, hover scale + rotate works
8. **AboutMe** — light-blue label, medium-navy text
9. **Marquee (text)** — dark-navy background, ice-white text, light-blue diamonds
10. **CTASection** — light-blue background, ice-gray text
11. **Footer** — blue-gray and light-blue link colors
12. **Mobile responsive** — test at 375px width

- [ ] **Step 3: Fix any visual issues found**

Apply tweaks based on browser verification.

- [ ] **Step 4: Final commit (if any fixes were made)**

```bash
cd "/Users/I768258/Desktop/LP's/GabayCo/gabayco-landing"
git add -A
git commit -m "fix: visual polish after navy palette migration"
```
