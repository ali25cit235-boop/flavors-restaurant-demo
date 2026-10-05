# FLAVORS — Taste the Difference
### Premium Restaurant Website Concept & Dining Showcase

A production-quality, responsive website concept created for **FLAVORS**. Designed with an editorial culinary aesthetic, warm cream canvas, deep burgundy accents, muted gold highlights, high-resolution food photography, and smooth interactions.

> **Project Disclosure**: This is a visual website concept and demonstration for presentation to a restaurant prospect. Specific menu items, pricing, opening hours, and address details are illustrative placeholders to be confirmed by the establishment.

---

## 🍽️ Key Features

- **Editorial Culinary Design**: Warm cream background (`#FDFBF7`), deep wine-burgundy accents (`#631526`), charcoal typography, and subtle champagne gold accents.
- **Top Bar Contract Navigation**: Sticky header with single-element FLAVORS wordmark, smooth scroll anchors, and mobile drawer menu with Escape key support.
- **Mouth-Watering Hero Section**: Gourmet dinner spread showcase, balanced display headlines, and dual conversion paths.
- **Our Story / Philosophy**: Two-column editorial storytelling highlighting culinary craft and genuine hospitality without making unverified historical claims.
- **Interactive Signature Menu**: Category filtering (Starters, Burgers, Mains, Pizza, Desserts, Drinks) with interactive dish inspection modals and clear sample menu notices.
- **Featured Dish Spotlight**: Immersive flame-seared dry-aged ribeye spotlight with chef tasting notes.
- **Culinary Values**: Asymmetric presentation of core dining commitments (Craftsmanship, Variety, Sharing, Atmosphere).
- **Curated Food Gallery**: Editorial mosaic grid with responsive modal lightbox, keyboard navigation (Escape, Left/Right arrows), and touch support.
- **The FLAVORS Experience**: High-impact brand quote section celebrating communion around the dining table.
- **Location, Hours & Direct Contact**: Clear demo indicators for pending establishment verification, plus interactive Get Directions preview, WhatsApp readiness modal, and a working table booking simulator.
- **Single Source of Truth Configuration**: All restaurant details, hours, phone numbers, and menu items reside in `src/data/restaurant.ts` for rapid client customization.

---

## 📁 Project Structure

```text
flavors-restaurant/
├── public/
│   └── images/                    # Static high-fidelity food and ambiance photography
│       ├── hero_gourmet_spread.jpg
│       ├── about_restaurant_ambiance.jpg
│       ├── spotlight_signature_dish.jpg
│       ├── gallery_artisan_pizza.jpg
│       └── gallery_gourmet_dessert.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky navigation with mobile drawer
│   │   ├── Hero.tsx               # Entrance hero with food photography
│   │   ├── About.tsx              # Story & philosophy section
│   │   ├── Menu.tsx               # Interactive categorized menu
│   │   ├── Spotlight.tsx          # Featured dish culinary spotlight
│   │   ├── Values.tsx             # Dining principles & hospitality pillars
│   │   ├── Gallery.tsx            # Photo gallery with full-screen lightbox
│   │   ├── Experience.tsx         # Brand dining experience quote
│   │   ├── Contact.tsx            # Venue details, hours, inquiry form & map
│   │   ├── Footer.tsx             # Navigation mirror, copyright & disclaimers
│   │   ├── ReservationModal.tsx   # Interactive booking simulator
│   │   └── DishDetailModal.tsx    # Dish ingredient & flavor profile modal
│   ├── data/
│   │   └── restaurant.ts          # Central restaurant configuration & menu data
│   ├── App.tsx                    # Main application root
│   ├── index.css                  # Tailwind CSS configuration & typography
│   └── main.tsx                   # React 19 entry point
├── index.html                     # HTML5 entry with fonts, SEO & Schema.org JSON-LD
├── metadata.json                  # AI Studio application metadata
├── package.json                   # NPM dependencies & scripts
├── tsconfig.json                  # TypeScript configuration
└── vite.config.ts                 # Vite bundler configuration
```

---

## 🚀 Running Locally

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn or pnpm

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port specified in terminal).

### 3. Build for production
```bash
npm run build
```
This generates the optimized static bundle in the `dist/` directory.

### 4. Preview production build locally
```bash
npm run preview
```

---

## 🌐 Deploying to Cloudflare Pages

This project is 100% static client-side React and is immediately ready to deploy on **Cloudflare Pages**:

1. **Push to GitHub**: Follow the steps in the section below to push this repository to GitHub.
2. Log into the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your GitHub repository.
4. Set the following build settings:
   - **Framework preset**: `Vite` (or `React (Vite)`)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: *(leave blank)*
5. Click **Save and Deploy**. Your site will be globally live on Cloudflare's high-speed CDN in under a minute!

---

## 🐙 Uploading to GitHub

To upload this repository to GitHub:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Add all files
git add .

# 3. Create initial commit
git commit -m "feat: complete FLAVORS restaurant website concept"

# 4. Create a new repository on GitHub (e.g. 'flavors-restaurant')

# 5. Link local repo to GitHub remote
git remote add origin https://github.com/<YOUR_USERNAME>/flavors-restaurant.git

# 6. Push to main branch
git branch -M main
git push -u origin main
```

---

## 📋 Restaurant Verification Checklist Before Client Handoff

Before presenting this concept as a finalized, business-specific website for the restaurant owner, the following items in `src/data/restaurant.ts` should be confirmed:

1. **Official Legal Name & Logo**: Verify exact spelling, capitalization, and whether an official vector logo SVG should replace the wordmark.
2. **Physical Address**: Replace `"Restaurant address to be confirmed"` with the exact street address, suite number, and postal code.
3. **Official Phone Number**: Connect the actual reservations and customer service telephone line for the `tel:` link.
4. **Verified WhatsApp Business Number**: Enter the international format telephone number (e.g. `+1234567890`) to activate instant WhatsApp direct messaging.
5. **Exact Operating Hours**: Verify lunch, dinner, and kitchen closing hours, along with any dark days (e.g., Mondays).
6. **Live Menu & Pricing**: Audit all dishes, prices, descriptions, and dietary allergen tags against the chef's current seasonal offerings.
7. **Social Media Profiles**: Link real Instagram, Facebook, TikTok, or TripAdvisor profile URLs.
8. **Reservation System Integration**: Decide whether to connect the booking modal to OpenTable, Resy, SevenRooms, or email/SMS webhooks.
