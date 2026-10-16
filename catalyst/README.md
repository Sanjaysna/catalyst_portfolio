# CATALYST — Retro Pop Group Portfolio & Soft-Skills Showcase

> *"We are CATALYST — a team that believes success is not measured by scores alone, but by the **willingness to participate**, the **courage to try**, and the **ability to learn** from every experience."*  
> **Slogan:** *We Learn, We Lead And We Deliver*

---

## 🌟 Overview & Aesthetic Vision

CATALYST is a production-quality, hand-designed single-page group portfolio built for an 8-member soft-skills workshop team. Inspired by 90s retro desktop browser windows, tactile sticker-bomb aesthetics, and bold pop-art colors, the site delivers a vibrant, memorable presence while maintaining strict semantic accessibility and modern performance standards.

### Key Highlights
- **Retro Desktop Window Shell:** Thick outlines, lavender window titlebar with traffic-light control dots, hard offset zero-blur shadows (`8px 8px 0 #111`), and tactile SVG film-grain overlay.
- **Handcrafted Sticker Suite:** Peeling smiley face, clipped rainbow arc, 4-point sparkle stars, lightning bolt, pixel mouse cursor, 16-point starburst badge (`8 MEMBERS`), and tilted ellipse label (`TEAM CATALYST`).
- **Data-Driven 8-Member Roster:** Clean 4×2 desktop grid (2×4 tablet, 1-col mobile), custom aspect-ratio photo windows (4:5) with face-tuned coordinates, and role badges honoring team leadership.
- **Dedicated Retro Resume Viewer (`resume.html?m=<slug>`):** High-DPI canvas rendering powered by PDF.js with responsive width scaling, stacked multi-page support, sticky retro window chrome, and a sticker-styled **"← Back to Team"** button preserving scroll position on the team grid.
- **Retro Windows-98 Glitch Screen:** Nostalgic loading dialog for members without an uploaded resume (`aflah`, `visakh`), featuring a chunky segmented progress bar (stalling at ~75%), RGB channel split headline glitch, CRT scanlines, and screen reader accessibility.
- **Pure Vanilla Stack:** 100% Vanilla HTML5, Vanilla CSS3 (Custom Properties), and Vanilla ES Modules. Zero build steps, zero bloated frameworks.

---

## 🚀 How to Run Locally

Because PDF.js loads resume PDFs dynamically via `fetch` / `XMLHttpRequest` and the project uses standard ES Modules (`import`/`export`), it **must be served via an HTTP/HTTPS server** rather than opened directly as `file://` in a browser.

### Option 1: Python HTTP Server (Built-in)
```bash
# Navigate to the project directory
cd catalyst

# Start local server on port 8000 (or any free port)
python -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

### Option 2: VS Code Live Server
Right-click `index.html` inside VS Code and choose **"Open with Live Server"**.

### Option 3: Node.js `serve` / `npx`
```bash
cd catalyst
npx -y serve .
```

---

## 👥 How to Add, Edit, or Replace Resumes

All member data and resume mappings are centralized in a single source of truth: [`js/members.js`](file:///c:/Users/sanjay/OneDrive/Desktop/catalystwebsite/catalyst/js/members.js). The UI is completely data-driven and automatically adapts to any edits.

### 1. Adding or Replacing a Member's Resume PDF
1. **Drop the PDF into the `/assets/` folder** (the project root folder, alongside the member photos).
   - *Rule:* Keep the exact filename as provided (spaces, parentheses, and underscores are fully supported).
2. **Open [`js/members.js`](file:///c:/Users/sanjay/OneDrive/Desktop/catalystwebsite/catalyst/js/members.js)** and locate the member's object by their slug.
3. **Set the `resumePdf` property** to `"assets/<exact filename>"`:
   ```javascript
   {
     slug: "aflah",
     name: "Aflah Mujeeb",
     // ... other fields
     resumePdf: "assets/Aflah_Mujeeb_Resume.pdf" // Set exact filename
   }
   ```
4. If a member does not have a PDF yet, leave `resumePdf: null`. The site will automatically display the retro Windows-98 glitch screen (`"Resume not uploaded yet"`). As soon as the PDF is dropped into `/assets/` and mapped in `members.js`, the real resume renders immediately without changing any HTML or CSS!

### 2. Tuning Card Photo Centering
Because portraits vary in height, each member has an `objectPosition` property (e.g. `'50% 20%'`). Adjust the second percentage value up or down (15%–35%) to frame the member's face within the 4:5 card window.

---

## 🎨 How to Swap Colors & Branding

### 1. Color Palette Tokens
All colors are defined via CSS Custom Properties in [`css/tokens.css`](file:///c:/Users/sanjay/OneDrive/Desktop/catalystwebsite/catalyst/css/tokens.css):
```css
:root {
  --lavender: #D0C4FB;     /* Page background & Top Window Chrome */
  --pink:     #FFC4D6;     /* Primary Canvas Background */
  --cyan:     #4DC4E6;     /* Extruded Headline Fill */
  --yellow:   #FFD21F;     /* Script Kicker, Badges, Underlines */
  --black:    #111111;     /* Borders, Outlines & Hard Shadows */
  --white:    #FFFFFF;     /* Card Interiors */
  --hot-pink: #FF7BAC;     /* Role Badges & Tags */
  --green:    #A8D98B;     /* Accent Details */
}
```
Update any hex code to instantly transform the visual theme across the entire application.

### 2. Official Brand Logo & Assets
The official CATALYST logo assets reside in [`assets/brand/`](file:///c:/Users/sanjay/OneDrive/Desktop/catalystwebsite/catalyst/assets/brand/):
- `logo-full.png` / `logo-full@2x.png` (800px and 1600px full logo on clean white background).
- `logo-mark.png` / `logo-mark-256.png` / `logo-mark-512.png` (isolated "C + arrow" mark for nav and mobile headers).
- Complete favicon suite (`favicon-32x32.png`, `apple-touch-icon.png`, `favicon-512x512.png`, `favicon.ico`).
- Social sharing card (`og-image.png`, 1200×630).
All logo presentations use the retro sticker card treatment (thick black outline and hard offset shadow) on a white surface to preserve brand integrity.

---

## 🚢 How to Deploy

The website has zero build steps and can be hosted instantly on any static web host.

### Deploying to GitHub Pages
1. Push this folder to a GitHub repository.
2. In your repository, go to **Settings > Pages**.
3. Under **Build and deployment > Source**, select `Deploy from a branch`.
4. Choose `main` branch and `/ (root)` folder (or `/catalyst`), then click **Save**.
5. Your live site will be ready within 60 seconds at `https://<username>.github.io/<repo-name>/`.

### Deploying to Netlify / Vercel
- **Netlify:** Drag and drop the `catalyst` folder directly into [Netlify Drop](https://app.netlify.com/drop).
- **Vercel:** Run `npx vercel` inside the folder and follow the CLI prompt.

---

## ♿ Accessibility & Performance Compliance

- **WCAG AA Contrast:** High-contrast text on all pastel tints and buttons.
- **Keyboard Navigation:** `Esc` key navigates back to the team grid from the resume page; full keyboard accessibility across all cards, buttons, and links.
- **Accessible Glitch Screen:** Missing resume screen includes `role="status"`, semantic title, and `.sr-only` announcement for screen readers.
- **Reduced Motion:** Automatic `@media (prefers-reduced-motion: reduce)` disables floating sticker animations, RGB glitch jitter, and switches the Windows-98 progress bar to a static 75% indicator.
