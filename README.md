# 🚀 High-Fidelity Motion Engineering Study: Spylt Clone

A production-grade reverse-engineering study of the award-winning Spylt digital experience. This project was built from scratch as a technical showcase to push the absolute limits of web performance, pixel-perfect layout replication, and complex structural motion design.

---

## 🛠️ The Tech Stack

*   **Core Framework:** React.js (Component-driven architecture & state management)
*   **Animation Engine:** GSAP (GreenSock Animation Platform) + ScrollTrigger + Custom Timelines
*   **Styling & Layout:** Tailwind CSS (Utility-first fluid layouts, flexbox/grid mechanics)
*   **Deployment:** Vercel

---

## 🎯 Project Goals & Core Challenges

The primary objective of this project was to prove that premium, agency-tier motion graphics and interactive web experiences can be engineered flawlessly using a modern React frontend stack. 

### Key Engineering Milestones Accomplished:

*   **Complex Timeline Orchestration:** Managed multi-layered GSAP `ScrollTrigger` timelines where elements cross-animate dynamically based on the user's scroll position, keeping animations buttery smooth at 60+ FPS.
*   **Production-Grade Reverse-Engineering:** Analyzed and broke down complex visual interactions from the original live site, replicating the precise micro-interactions, dynamic pinning, and layout transitions.
*   **Advanced Fluid Responsive Design:** Overcame rigid viewport restrictions by refactoring standard layouts into modern CSS fluid architectures (using properties like `clamp()`, viewport units, and dynamic flex/grid scaling) to ensure pixel-perfect rendering across standard screen resolutions.
*   **Asset Performance Optimization:** Handled rich visual media, absolute image masking (`object-fit: contain`), and layering without degrading the browser's thread performance during heavy scroll events.

---

## ⚡ Animation Highlights

1. **Hero Section Transitions:** Dynamic, layered asset entry synced smoothly with initial viewport rendering.
2. **Interactive Flavor Carousel:** Utilizing GSAP horizontal scroll tracking combined with active card states.
3. **Responsive Composition Layouts:** Perfect scaling mechanics that fluidly adjust asset sizes relative to screen boundaries.
4. **Dynamic Card Expansion (Testimonials):** Responsive flex layouts shifting elegantly from side-by-side desktop rows to mobile-stacked states without breaking active scroll anchors.

---

## ⚙️ Local Development

To run this motion study locally, clone the repository and execute the following commands:

```bash
# Clone the repository
git clone https://github.com/SKT100/spylt-motion-engineering-study.git

# Install dependencies
npm install

# Start the local development server
npm run dev
