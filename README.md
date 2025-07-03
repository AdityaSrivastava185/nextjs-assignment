# 🎉 Next.js Event Explorer

A responsive event listing application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This mini-events explorer allows users to browse events, filter them by location, and view event details via dynamic routing.

---

## 🚀 Features

- 🏠 **Homepage** with a list of mock events
- 🔍 **Location-based filtering** (client-side only)
- 🧭 **Dynamic routing** to view full event details
- ⚙️ Built using **Next.js App Router** (compatible with Pages Router logic)
- 💡 **SEO-friendly** via `next/head`
- 📱 **Responsive UI** using Tailwind CSS
- 🧠 **Accessible** and semantic HTML elements

---

## 📁 Folder Structure

```bash
src/
├── app/
│   ├── (pages)/               # App router route handlers (e.g. event detail page)
│   ├── favicon.ico
│   ├── globals.css
│   └── layout.tsx
├── components/                # Reusable UI components
│   ├── EventCard.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── LocationFilter.tsx
│   └── Navbar.tsx
├── lib/                       # Data logic (mock data and helpers)
│   └── events-data.ts
├── types/                     # TypeScript interfaces
│   └── events.ts
├── utils/                     # Utility components
│   ├── HeroSectionEventCard.tsx
│   ├── NavLinks.tsx
│   └── NoEventsFound.tsx
pages/                         # (Optional, if fallback Pages Router used)
public/                        # Static assets

---
```

## 💻 Tech Stack

- **Next.js 15**
- **TypeScript**
- **Tailwind CSS**
- **App Router** *(or fallback to Pages Router)*
- **Vercel** *(optional deployment)*

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nextjs-event-explorer.git
cd nextjs-event-explorer
```

### 2. Install the node modules and dependencies

```bash
npm install
```
### 3. Run the project

```bash
npm run dev
```

## 🗂️ Project Structure Explanation

- All mock events are stored and managed in:  
  `src/lib/events-data.ts`

- Routing is handled using the **App Router**:  
  `src/app/(pages)/[id]/page.tsx`

- `HeroSection.tsx` controls filtering and passes the filtered results to:  
  `HeroSectionEventCard.tsx`

- Components are:
  - Reusable  
  - Semantic  
  - Follow best practices for **accessibility** and **SEO**

## 🚀 Improvements (If More Time Available)

- ✅ Add unit tests for filtering and routing logic  
- 🔄 Implement pagination or infinite scroll  
- 🌐 Integrate real API for live events  
- 🌙 Add dark mode toggle

---

## 🧑‍💻 Author

**Aditya Srivastava**  
Frontend Developer & UI Enthusiast  