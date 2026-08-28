# YAHSHUA MEDICAL CLINICS LTD — Official Website

Modern, fast, responsive website for **YAHSHUA MEDICAL CLINICS LTD**, a 24/7 clinic located at EN 58 ST, Nyagatare, Eastern Province, Rwanda (operating since May 2023).

Built with **React 18 + Vite 5 + Tailwind CSS 3**.

---

## 🌐 Live Hosting

| Host | URL |
|---|---|
| Vercel (primary) | https://yahshuamedical.vercel.app |
| Custom domain (coming soon) | `.co.rw` domain — to be connected in Vercel → Settings → Domains |
| Mirror (Surge) | https://yahshuamedicalclinics.surge.sh |

---

## ✨ Features

- **6 pages**: Home, About Us, Services (13 services), Patient Flow Chart, Doctors & Team, Contact
- **Scientific/clinical service hierarchy**: General Medicine → All OPD Services (incl. General Check-Ups) → NCDs Clinic → Pediatrics → Minor Surgery (incl. Circumcision) → Laboratory → Family Planning → Vaccination → Gynecology & Obstetrics → Imaging & X-Ray → Hospitalization → Dental → Physiotherapy
- **Triage-first patient flow** (first-aid mind): vital signs are taken before reception registration
- **Real team photos** (names & roles only — no personal phone numbers, by clinic decision)
- **"Partners We Work With"** section with replaceable partner logo slots
- **Video space** on the Home page for the Official Opening Ceremony video
- Appointment booking modal with WhatsApp deep-link generation
- Built-in **Photo Manager** (admin utility) to test-upload any photo live in the browser
- Yahshua watermark logo on every page, floating WhatsApp widget, fully mobile-responsive
- SEO-ready meta tags & favicon

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## ☁️ Deploying to Vercel (yahshuamedical.vercel.app)

### Option A — Connect GitHub (recommended, auto-deploy on every push)

1. Push this repository to GitHub (keep it **Private** — it is a business website).
2. Go to [vercel.com](https://vercel.com) → **Add New → Project** → **Import** the repository
   (or open the existing *yahshuamedical* project → Settings → Git → change the connected repo).
3. Vercel auto-detects **Vite**. Keep the defaults:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**. Every future `git push` updates the live site automatically.

### Option B — Vercel CLI (no GitHub)

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

### Connecting the `.co.rw` domain later

1. In Vercel: **Project → Settings → Domains → Add** → enter your domain (e.g. `yahshuamedicalclinics.co.rw` and `www.yahshuamedicalclinics.co.rw`).
2. At your domain registrar, add the DNS records Vercel shows you (usually an `A` record `76.76.21.21` for the apex, and a `CNAME` to `cname.vercel-dns.com` for `www`).
3. Wait for DNS propagation + SSL certificate (automatic, usually minutes to a few hours).

---

## 📸 Replacing Photos (Clinic Owner Guide)

All images live in `public/images/`. Replace a file **keeping the same filename**, commit & push — done.

### Main slots (`public/images/`)

| File | Used for |
|---|---|
| `yahshua-logo.jpg` | Official logo (header, footer, watermark) |
| `patient-flow-chart.jpg` | Flow chart wall photo (cropped edition) |
| `clinic-exterior.jpg` | Home hero card |
| `reception.jpg` | About page |
| `triage.jpg` | Triage / OPD / vaccination cards |
| `general-medicine.jpg` | General Medicine service |
| `ncds.jpg` | NCDs Clinic service |
| `minor-surgery.jpg` | Minor Surgery service |
| `physiotherapy.jpg` | Physiotherapy service |
| `gynecology.jpg` | Gynecology & Family Planning |
| `dental.jpg` | Dental service + gallery |
| `laboratory.jpg` | Laboratory service |
| `pediatrics.jpg` | Pediatrics service |
| `xray.jpg` | Imaging & X-Ray service |
| `hospitalization.jpg` | Hospitalization service |
| `video-poster.jpg` | Cover image of the video player |

*If a file is missing, the site automatically falls back to a stock photo (configurable in `src/utils/imageRegistry.js`).*

### Team slots (`public/images/team/`)

| File | Person |
|---|---|
| `dr-james-ndahigwa.jpg` | Dr. James NDAHIGWA |
| `dr-gapira-shima-patrick.jpg` | Dr. GAPIRA SHIMA PATRICK |
| `dr-dieu-donne.jpg` | Dr. DIEU DONNE *(currently an initials avatar — replace with his photo)* |
| `kamaseruka-godfrey.jpg` | KAMASERUKA Godfrey — Head of Nurses |
| `teddy-murango.jpg` | Teddy MURANGO — Head of Lab Technicians |
| `dr-koloneli.jpg` | Dr. KOLONELI *(placeholder — photo coming)* |
| `dr-theodole.jpg` | Dr. THEODOLE *(placeholder — photo coming)* |
| `physiotherapist.jpg` | Physiotherapist *(placeholder — recruitment in progress)* |

### Partner slots (`public/images/partners/`)

`partner-1.jpg` … `partner-4.jpg` — replace with real partner logos (Home → "Partners We Work With").

### Editing text content (services, team, contacts, flow steps)

All site text data is centralized in **`src/data/clinicData.js`** — edit, commit, push.

### 🎬 Publishing the Opening Ceremony video

1. Add your video as `public/videos/opening-ceremony.mp4` (≤ ~40 MB, 720p MP4 recommended).
2. Commit & push — it plays automatically on the Home page ("Watch Our Story").
3. To make the site lighter, you can alternatively host the video on YouTube and swap the
   player in `src/pages/Home.jsx`.

---

## 🗂 Project Structure

```
├── public/
│   ├── images/            # All photos (main, team/, partners/)
│   └── videos/            # Video files (opening-ceremony.mp4 goes here)
├── src/
│   ├── components/        # Header, Footer, FloatingWatermark, BookingModal, PhotoManagerModal
│   ├── data/              # clinicData.js — ALL text content (edit here)
│   ├── pages/             # Home, AboutUs, ServicesPage, FlowChartPage, DoctorsPage, ContactPage
│   ├── utils/             # imageRegistry.js — photo slot manager & fallbacks
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vercel.json            # Vercel build & routing config
├── tailwind.config.js
└── vite.config.js
```

---

## 📞 Clinic Contact (as displayed on the site)

- **Customer Care:** 0788891012 (+250 788 891 012)
- **Reception:** 0794746337 (+250 794 746 337)
- **WhatsApp:** 0788663250 (+250 788 663 250)
- **Email:** yahshuamediasites@gmail.com
- **Location:** EN 58 ST, Nyagatare, Eastern Province, Rwanda — [Google Maps](https://maps.google.com/?q=EN+58+ST,+Nyagatare,+Rwanda)
- **Hours:** We work 24/7

---

© YAHSHUA MEDICAL CLINICS LTD — Creating healthy and happy neighborhoods. 🇷🇼
