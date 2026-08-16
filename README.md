# YAHSHUA MEDICAL CLINICS LTD — Website

« YAHWEH SAVES » — Nyagatare, Eastern Province, Rwanda. Open 24/7.

## Pages
| File | Content |
|---|---|
| `index.html` | Hero (INSIDE US photo background) + slogan, quick contacts, about summary, stats, services, insurances, patient flow chart, gallery teaser, map |
| `about.html` | Aim, Mission, Vision, Values, patient flow |
| `services.html` | All 10 services + full Dental section (incl. OPG X-Ray) + dental photo upload spaces |
| `doctors.html` | Doctor profiles with reserved photo spaces |
| `insurance.html` | Insurer logos + payment info |
| `gallery.html` | Clinic photos with click-to-zoom lightbox |
| `contact.html` | Contacts, appointment form (sends to WhatsApp), Google Map |

## Brand
Colours taken from the logo: green `#6CBE2A` / `#4E9418`, blue `#0B72BC` / `#075592`.
The original logo is used everywhere at full quality; `assets/img/logo-transparent.png` is the
background-free version used for the **watermark** (faint, centred on every page) and the
**floating logo** (bottom-left, gently animated on every page).

## Contacts wired into the site
- Call: **0788663250**
- Reception: **0794746337**
- WhatsApp: **0784852344** (floating green button + form)
- Email: **yahshuaclini6@gmail.com**
- Address: **EN 58 ST, Nyagatare, Eastern Province, Rwanda** — every mention links to
  https://maps.google.com/?q=EN+58+ST,+Nyagatare,+Rwanda and an embedded live Google Map is on the
  home and contact pages.

## Adding photos later
1. **Doctor portraits** — save square images (≈800×800) in `assets/img/` as
   `doctor-koloneli.jpg`, `doctor-ndahigwa.jpg`, `doctor-shima.jpg`, `doctor-nsengimana.jpg`,
   `therapist-irene.jpg`. In `doctors.html` each card has a ready-made `<img>` tag inside an HTML
   comment — replace the placeholder `<div class="doc-ph">…</div>` with it.
2. **Dental materials** — save as `assets/img/dental-1.jpg` … `dental-6.jpg` and replace the
   matching `upload-box` blocks in `services.html` with
   `<figure data-lb><img src="assets/img/dental-1.jpg" alt="..."><figcaption>Caption</figcaption></figure>`.

## Rebuilding
Pages share one header/footer defined in `build.py`. After editing it run:

```bash
cd site && python3 build.py
```

## Running locally
```bash
cd site && python3 -m http.server 8080
```
Then open http://localhost:8080

## Publishing
The folder is fully static — upload the whole `site/` directory to any host
(cPanel/public_html, Netlify, Vercel, GitHub Pages). No database or server code needed.
