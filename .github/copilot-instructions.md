# 🏠 Sleekhouse Website Redevelopment — Copilot Guide

Give this file (e.g. `COPILOT_INSTRUCTIONS.md`) to GitHub Copilot Chat / Labs so it has shared context while you code.

---

## 📌 Project Snapshot
- **Name:** **Sleekhouse Website Redevelopment**
- **Live site:** <https://sleeqhouse.onrender.com/>
- **Objective:** Redesign + refactor the current frontend into a premium-feeling, mobile-first experience with top-notch DX.

---

## 🎯 Goals
1. **Modern UI/UX** — sleek, minimal, spacious.
2. **Responsive & accessible** — great on phones, passes a11y audits.
3. **Performance** — Lighthouse ≥ 90 for Perf & Accessibility.
4. **Dev-friendly** — clear structure, TypeScript everywhere.

---

## 🛠 Tech Stack
| Layer      | Preferred Tools                                     |
|------------|------------------------------------------------------|
| Frontend   | **Nextjs**             |
| Styling    | **Tailwind CSS**, shadcn/ui or Headless UI           |
| Animations | **Framer Motion** (subtle transitions)               |
| Language   | **TypeScript** only                                  |

---

## 🎨 Design Principles
- Generous whitespace, clear visual hierarchy.  
- Consistent sans-serif typography.  
- Soft shadows, rounded corners (8-12 px).  
- Card-based layouts for feature sections.  
- Subtle hover / focus states (no flashy neon).  
- Strict mobile-first breakpoints (`sm`, `md`, `lg`).  
- Semantic HTML + ARIA for SEO & accessibility.

---

## 🗂 Dev Notes
- **Hooks:** colocate in `hooks/`; keep side-effects isolated.  
- **No class components** — functional only.  
- **Avoid inline styles**; lean on Tailwind utilities or small `clsx` helpers.  

---

## 🚀 Deployment
- Target **Vercel** — zero-config CI.  
- Configure image optimization if using Next.js.  

