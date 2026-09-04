# -*- coding: utf-8 -*-
"""Static page generator for the YAHSHUA MEDICAL CLINICS LTD website."""
import os, io, re

OUT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # repo root

TEL_MAIN   = "0788663250"
TEL_RECEP  = "0794746337"
TEL_ALT    = "0788663250"
WA         = "0784852344"
WA_INTL    = "250784852344"
EMAIL      = "yahshuaclini6@gmail.com"
ADDRESS    = "EN 58 ST, Nyagatare, Eastern Province, Rwanda"
MAPS       = "https://maps.google.com/?q=EN+58+ST,+Nyagatare,+Rwanda"
MAPS_EMBED = "https://maps.google.com/maps?q=EN%2058%20ST%2C%20Nyagatare%2C%20Rwanda&t=&z=15&ie=UTF8&iwloc=&output=embed"

NAV = [
    ("index.html",     "Home"),
    ("about.html",     "About Us"),
    ("services.html",  "Services"),
    ("doctors.html",   "Our Medical Team"),
    ("insurance.html", "Partners"),
    ("gallery.html",   "Gallery"),
    ("contact.html",   "Contact"),
]

WA_SVG = ('<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1s-.5-.2-.7.1-.8 1-.9 1.2-.3.2-.6.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2c-.2-.3 0-.5.1-.7l.5-.6.3-.5v-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4C6.7 6.5 6 7.2 6 8.6s1 2.8 1.2 3 2 3.1 4.9 4.3c2.4 1 2.9.8 3.4.8s1.7-.7 2-1.4.3-1.3.2-1.4-.2-.3-.5-.4zM12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>')


def head(title, desc, depth_css="assets"):
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="keywords" content="Yahshua Medical Clinics, clinic Nyagatare, hospital Rwanda, 24/7 clinic, dental OPG, X-ray Nyagatare, RSSB clinic, NCDs, Physiotherapy, Hospitalization Nyagatare">
<meta name="author" content="Yahshua Medical Clinics Ltd">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:image" content="assets/img/logo.png">
<meta property="og:type" content="website">
<meta name="theme-color" content="#0B72BC">
<link rel="icon" type="image/png" href="assets/img/favicon.png">
<link rel="apple-touch-icon" href="assets/img/favicon.png">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<div class="page-watermark" aria-hidden="true"></div>
<div class="floating-logo" aria-hidden="true"><img src="assets/img/logo-transparent.png" alt=""></div>
"""


def header(active):
    items = ""
    for href, label in NAV:
        cls = ' class="active"' if href == active else ""
        items += f'<li><a href="{href}"{cls}>{label}</a></li>\n'
    items += f'<li><a class="nav-cta" href="tel:{TEL_MAIN}">&#9742; Call Now</a></li>'
    return f"""
<div class="topbar">
  <div class="wrap">
    <div class="tb-group">
      <span><span class="pulse-dot"></span><strong>OPEN 24/7</strong> &middot; 365 days a year</span>
      <a href="{MAPS}" target="_blank" rel="noopener">&#128205; {ADDRESS}</a>
    </div>
    <div class="tb-group">
      <a href="tel:{TEL_MAIN}">&#9742; {TEL_MAIN}</a>
      <a href="tel:{TEL_RECEP}">Reception: {TEL_RECEP}</a>
      <a href="mailto:{EMAIL}">&#9993; {EMAIL}</a>
    </div>
  </div>
</div>

<header class="site-header">
  <div class="wrap nav">
    <a class="brand" href="index.html">
      <img src="assets/img/logo-transparent.png" alt="Yahshua Medical Clinics Ltd logo">
      <span class="brand-text">
        <strong>YAHSHUA MEDICAL CLINICS LTD</strong>
        <span>YAHWEH SAVES</span>
      </span>
    </a>
    <button class="burger" data-burger aria-label="Open menu">&#9776;</button>
    <ul class="menu" id="menu">
{items}
    </ul>
  </div>
</header>
"""


CTA_BAND = f"""
<section class="cta-band">
  <div class="wrap reveal">
    <h2>Need care right now? We never close.</h2>
    <p>Our medical team is on duty 24 hours a day, 7 days a week, 365 days a year. Walk in any time or call ahead so we can prepare for you.</p>
    <div class="cta-actions">
      <a class="btn btn-ghost" href="tel:{TEL_MAIN}">&#9742; {TEL_MAIN}</a>
      <a class="btn btn-ghost" href="tel:{TEL_RECEP}">Reception {TEL_RECEP}</a>
      <a class="btn btn-ghost" href="https://wa.me/{WA_INTL}" target="_blank" rel="noopener">WhatsApp {WA}</a>
    </div>
  </div>
</section>
"""


def footer():
    links = "".join(f'<li><a href="{h}">{l}</a></li>' for h, l in NAV)
    return f"""
<footer class="site-footer">
  <div class="wrap">
    <div class="fgrid">
      <div>
        <span class="flogo"><img src="assets/img/logo-transparent.png" alt="Yahshua Medical Clinics Ltd"></span>
        <p><strong style="color:#fff">YAHSHUA MEDICAL CLINICS LTD</strong><br>&laquo;&nbsp;YAHWEH SAVES&nbsp;&raquo;</p>
        <p>Providing the highest quality of preventive, diagnostic and curative medicine, creating healthy and happy neighbourhoods.</p>
        <span class="f-badge"><span class="pulse-dot"></span> OPEN 24 HOURS / 7 DAYS</span>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>{links}</ul>
      </div>
      <div>
        <h4>Our Services</h4>
        <ul>
          <li><a href="services.html">General Medicine (GP)</a></li>
          <li><a href="services.html">All OPD Services</a></li>
          <li><a href="services.html">Pediatrics OPD</a></li>
          <li><a href="services.html">Minor Surgery &amp; Circumcision</a></li>
          <li><a href="services.html">Laboratory</a></li>
          <li><a href="services.html">Family Planning &amp; Vaccination</a></li>
          <li><a href="services.html">Gynecology &amp; Obstetrics OPD</a></li>
          <li><a href="services.html">Non-Communicable Diseases (NCDs)</a></li>
          <li><a href="services.html">Medical Imaging &amp; X-Ray</a></li>
          <li><a href="services.html">Hospitalization (30+ Rooms)</a></li>
          <li><a href="services.html">Dental &amp; OPG Panoramic X-Ray</a></li>
          <li><a href="services.html">Physiotherapy</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact Us</h4>
        <ul>
          <li>&#9742; <a href="tel:{TEL_MAIN}">{TEL_MAIN}</a></li>
          <li>&#9742; <a href="tel:{TEL_RECEP}">{TEL_RECEP}</a> (Reception)</li>
          <li>&#128172; <a href="https://wa.me/{WA_INTL}" target="_blank" rel="noopener">WhatsApp {WA}</a></li>
          <li>&#9993; <a href="mailto:{EMAIL}">{EMAIL}</a></li>
          <li>&#128205; <a href="{MAPS}" target="_blank" rel="noopener">{ADDRESS}</a></li>
        </ul>
      </div>
    </div>
    <div class="f-bottom">
      &copy; <span data-year></span> Yahshua Medical Clinics Ltd. All rights reserved. &middot; Nyagatare, Eastern Province, Rwanda
    </div>
  </div>
</footer>

<a class="wa-float" href="https://wa.me/{WA_INTL}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">{WA_SVG}</a>

<div class="lightbox" id="lightbox"><button class="close" aria-label="Close">&times;</button><img src="" alt=""></div>
<script src="assets/js/main.js"></script>
</body>
</html>
"""


def page_hero(title, sub, bg, crumb):
    return f"""
<section class="page-hero">
  <div class="bgi" style="background-image:url('assets/img/{bg}')"></div>
  <div class="ov"></div>
  <div class="wrap">
    <div class="crumb"><a href="index.html">Home</a> &nbsp;/&nbsp; {crumb}</div>
    <h1>{title}</h1>
    <p>{sub}</p>
  </div>
</section>
"""


# ---------------------------------------------------------------- data
# Scientific Hierarchy of Services:
# 1. General Medicine (GP)
# 2. All OPD Services (with general check-ups)
# 3. Pediatrics OPD
# 4. Minor Surgery (all sterile..., circumcision)
# 5. Laboratory
# 6. Family Planning
# 7. Vaccination
# 8. Gynecology & Obstetrics OPD
# 9. Non-Communicable Diseases (NCDs)
# 10. Medical Imaging & X-Ray
# 11. Hospitalization (30+ rooms: V-VIP, VIP, Single, Ward)
# 12. Dental Services & OPG X-Ray
# 13. Physiotherapy

SERVICES = [
    ("&#129658;", "General Medicine",
     "Complete adult consultation, diagnosis and treatment by our qualified General Practitioners, covering acute illnesses, routine check-ups and medical certificates.",
     ["Adult outpatient consultations", "Clinical diagnosis &amp; medical treatment", "General health check ups", "Medical certificates &amp; fitness exams"], False),
    ("&#127973;", "All OPD Services",
     "A structured outpatient department offering fast vital signs triage, routine check ups, consultations, injections, dressings and nursing care.",
     ["General check ups &amp; routine screening", "Vital signs triage &amp; priority care", "Doctor consultation rooms", "Injection &amp; sterile dressing room", "Outpatient nursing care"], False),
    ("&#128118;", "Pediatrics OPD",
     "Gentle, child focused care for newborns, infants, children and adolescents, with growth monitoring and nutrition guidance.",
     ["Childhood illness diagnosis &amp; care", "Growth &amp; nutrition monitoring", "Newborn &amp; infant health checks", "Parent counselling &amp; guidance"], True),
    ("&#128137;", "Minor Surgery",
     "All sterile minor surgical procedures performed by experienced clinicians in our dedicated procedure room.",
     ["Circumcision (safe clinical circumcision)", "Wound care, suturing &amp; sterile dressing", "Abscess incision &amp; drainage", "Excision of small lumps &amp; cysts", "Postoperative follow up"], False),
    ("&#128300;", "Laboratory",
     "A well equipped diagnostic laboratory delivering accurate, timely results so treatment can start without delay, available day and night.",
     ["Haematology &amp; biochemistry tests", "Malaria, HIV &amp; rapid diagnostic tests", "Urinalysis, stool exam &amp; microbiology", "Pregnancy &amp; hormonal tests", "Blood glucose &amp; lipid profile"], True),
    ("&#128105;&#8205;&#128105;&#8205;&#128102;", "Family Planning",
     "Confidential reproductive health counselling and a full range of modern family planning methods, offered with respect and privacy.",
     ["Confidential counselling &amp; method choice", "Short term &amp; long term modern methods", "Implant &amp; injectable methods", "Couple counselling &amp; follow up"], False),
    ("&#128137;", "Vaccination",
     "Routine childhood immunisation and adult vaccination administered by trained nurses following national health guidelines.",
     ["Routine childhood immunisation (EPI)", "Adult &amp; travel vaccines", "Tetanus prophylaxis", "Official vaccination records &amp; cards"], True),
    ("&#129656;", "Gynecology &amp; Obstetrics OPD",
     "Dedicated women's health care, from routine gynecological consultations to antenatal and postnatal maternal care.",
     ["Gynecological consultations &amp; exams", "Antenatal &amp; postnatal maternal care", "Reproductive health screening", "Ultrasound referral support"], False),
    ("&#129658;", "Non-Communicable Diseases (NCDs)",
     "Dedicated screening, treatment and continuous long term management for chronic non-communicable diseases to protect your health.",
     ["Hypertension (high blood pressure) management", "Diabetes screening &amp; glucose monitoring", "Asthma &amp; chronic respiratory care", "Cardiovascular risk assessment &amp; follow up", "Dietary, exercise &amp; lifestyle counselling"], True),
    ("&#128248;", "Medical Imaging &amp; X-Ray",
     "Digital diagnostic general X-Ray imaging on site for fast, accurate skeletal, chest and trauma radiography with rapid reporting.",
     ["General diagnostic X-Ray imaging", "Chest radiography for lungs &amp; heart", "Bone, spine &amp; joint fracture imaging", "Fast digital radiography reporting"], False),
    ("&#128715;", "Hospitalization",
     "Modern inpatient hospitalization capacity of over 30 rooms, including V-VIP suites, VIP rooms, private single rooms and comfortable general ward rooms with 24 hour continuous nursing care.",
     ["Over 30 rooms capacity (V-VIP, VIP, Single &amp; Ward)", "24 hour continuous nursing care &amp; monitoring", "Private V-VIP and VIP inpatient suites", "Observation &amp; admission beds", "Intravenous (IV) therapy &amp; daily doctor review"], True),
    ("&#129463;", "Dental Services &amp; OPG X-Ray",
     "A complete dental clinic led by our Dental Surgeon, with digital OPG panoramic dental X-Ray on site, saving Eastern Province patients from travelling to Kigali.",
     ["OPG panoramic &amp; dental X-Ray", "Scaling &amp; professional cleaning", "Tooth coloured fillings &amp; restorations", "Root canal treatment", "Tooth extraction &amp; minor oral surgery", "Dentures, crowns &amp; bridges", "Braces / orthodontic advice", "Teeth whitening &amp; cosmetic dentistry"], False),
    ("&#127939;", "Physiotherapy",
     "Hands on rehabilitation to restore movement, relieve pain and rebuild strength after injury, surgery, stroke or long illness.",
     ["Musculoskeletal &amp; back pain therapy", "Postoperative &amp; fracture rehabilitation", "Stroke &amp; neurological rehabilitation", "Sports injury management", "Joint mobilisation &amp; therapeutic exercise", "Pediatric &amp; geriatric physiotherapy"], True),
]

INSURERS = [
    ("RSSB", "rssb.png"),
    ("MMI", "mmi.png"),
    ("RADIANT", "radiant.png"),
    ("SANLAM", "sanlam.png"),
    ("BRITAM", "britam.png"),
    ("UAP", "uap.png"),
    ("OLD MUTUAL", "old.png"),
    ("EDEN CARE", "eden-care.png"),
    ("MIS UR", "misur.png"),
    ("URWEGO FINANCE", "urwego.png"),
    ("UBUZIMA BWIZA FOUNDATION", "ubf.png"),
    ("EQUITY", "equity.png"),
    ("ASA International", "asa.png"),
    ("PSF Insurance", "psf.png"),
]
INSURERS_TEXT = []

# Medical Team: Real portraits, clean names, and clean single titles (no second subtitles, no availability tags)
DOCTORS_LIST = [
    {
        "name": "Dr. KOLONELI Dieu Donné",
        "role": "Clinical Director",
        "photo": "assets/img/doctor-koloneli.jpg"
    },
    {
        "name": "Dr. James NDAHIGWA",
        "role": "General Practitioner",
        "photo": "assets/img/doctor-ndahigwa.jpg"
    },
    {
        "name": "Dr. GAPIRA SHIMA Patrick",
        "role": "General Practitioner",
        "photo": "assets/img/doctor-shima.jpg"
    },
    {
        "name": "Dr. NSENGIMANA Theodole",
        "role": "Dental Surgeon",
        "photo": "assets/img/doctor-nsengimana.jpg"
    },
    {
        "name": "KAMASERUKA Godfrey",
        "role": "Head of Nurses",
        "photo": "assets/img/nurse-godfrey.jpg"
    },
    {
        "name": "Teddy MURANGO",
        "role": "Head of Laboratory Technicians",
        "photo": "assets/img/lab-teddy.jpg"
    },
]

GALLERY = [
    ("inside-us.jpg", "Inside Yahshua Medical Clinics"),
    ("waiting-area-0.jpg", "Patient waiting area"),
    ("waiting-area-1.jpg", "Consultation corridor"),
    ("parking.jpg", "Secure on site parking"),
    ("entrance-arch.jpg", "Main entrance arch"),
    ("front-signage.jpg", "Our clinic on EN 58 ST"),
    ("hospitalization.jpg", "Hospitalization wing (30+ rooms: V-VIP, VIP, Single & Ward)"),
    ("street.jpg", "Street view &amp; reception block"),
    ("flow-chart.jpg", "Our patient flow chart: Triage first, vital signs &amp; priority care"),
]


def ins_grid():
    out = '<div class="ins-grid">'
    for name, f in INSURERS:
        out += f'<div class="ins" title="{name}"><img src="assets/insurers/{f}" alt="{name} logo" loading="lazy"></div>'
    out += '<div class="ins"><span style="color:var(--green-dark)">&amp; more<br>to come</span></div>'
    out += "</div>"
    return out


def doc_cards():
    out = ""
    for doc in DOCTORS_LIST:
        name = doc["name"]
        role = doc["role"]
        photo = doc["photo"]
        
        photo_html = f'<img src="{photo}" alt="{name}" loading="lazy">'
            
        out += f"""
      <article class="doc-card reveal">
        <div class="doc-photo">
          {photo_html}
        </div>
        <div class="doc-body">
          <h3>{name}</h3>
          <span class="doc-role">{role}</span>
          <div class="doc-actions">
            <a class="btn-sm btn-doc-call" href="tel:{TEL_MAIN}">&#9742; Call Clinic</a>
            <a class="btn-sm btn-doc-wa" href="https://wa.me/{WA_INTL}" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
      </article>"""
    return out


# ---------------------------------------------------------------- pages
def build_index():
    svc_cards = ""
    for i, (ico, t, d, items, alt) in enumerate(SERVICES[:6]):
        cls = "card alt reveal" if i % 2 else "card reveal"
        svc_cards += f"""
        <article class="{cls}">
          <div class="ico-lg">{ico}</div>
          <h3>{t}</h3>
          <p>{d}</p>
        </article>"""

    return head("Yahshua Medical Clinics Ltd | YAHWEH SAVES | 24/7 Clinic in Nyagatare, Rwanda",
                "Yahshua Medical Clinics Ltd, Nyagatare. Affordable, patient centred healthcare open 24/7. General medicine (GP), OPD, pediatrics, minor surgery, laboratory, family planning, vaccination, gynecology, NCDs, medical imaging & X-ray, hospitalization with 30+ rooms (V-VIP, VIP, Single, Ward), dental with OPG, and physiotherapy.") + header("index.html") + f"""
<main>

<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <img class="hero-logo" src="assets/img/logo-transparent.png" alt="">
  <div class="wrap">
    <div class="hero-inner">
      <span class="slogan">&laquo; YAHWEH SAVES &raquo;</span>
      <h1>YAHSHUA MEDICAL CLINICS LTD</h1>
      <p class="lead">Affordable, patient centred healthcare in Nyagatare, offering preventive, diagnostic and curative medicine delivered with excellence, <strong>24 hours a day, 7 days a week, 365 days a year.</strong></p>
      <ul class="hero-badges">
        <li>&#9200; Open 24/7</li>
        <li>&#129658; General Medicine (GP)</li>
        <li>&#127973; OPD &amp; Check-ups</li>
        <li>&#128248; Medical Imaging &amp; X-Ray</li>
        <li>&#129463; Dental &amp; OPG Panoramic X-Ray</li>
        <li>&#128300; Laboratory</li>
        <li>&#129658; NCDs Chronic Care</li>
        <li>&#127939; Physiotherapy</li>
        <li>&#128715; 30+ Inpatient Rooms (V-VIP, VIP, Ward)</li>
        <li>&#127974; 14+ Insurance Partners</li>
      </ul>
      <div class="hero-actions">
        <a class="btn btn-green" href="tel:{TEL_MAIN}">&#9742; Call {TEL_MAIN}</a>
        <a class="btn btn-ghost" href="https://wa.me/{WA_INTL}" target="_blank" rel="noopener">&#128172; WhatsApp Us</a>
        <a class="btn btn-ghost" href="contact.html">Book a Visit</a>
      </div>
    </div>
  </div>
</section>

<section class="quickbar">
  <div class="wrap">
    <div class="grid">
      <div class="qb"><div class="ico">&#9742;</div><div><small>Call us</small><strong><a href="tel:{TEL_MAIN}">{TEL_MAIN}</a></strong></div></div>
      <div class="qb"><div class="ico">&#127974;</div><div><small>Reception</small><strong><a href="tel:{TEL_RECEP}">{TEL_RECEP}</a></strong></div></div>
      <div class="qb"><div class="ico">&#128172;</div><div><small>WhatsApp</small><strong><a href="https://wa.me/{WA_INTL}" target="_blank" rel="noopener">{WA}</a></strong></div></div>
      <div class="qb"><div class="ico">&#128205;</div><div><small>Find us</small><strong><a href="{MAPS}" target="_blank" rel="noopener">EN 58 ST, Nyagatare</a></strong></div></div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="split">
      <div class="reveal">
        <span class="eyebrow">Welcome to Yahshua</span>
        <h2>Healthy and happy neighbourhoods start here</h2>
        <p>YAHSHUA MEDICAL CLINICS LTD has the aim of providing the highest quality of care in <strong>preventive, diagnostic and curative medicine</strong>, thereby creating healthy and happy neighbourhoods.</p>
        <p>From our home on EN 58 ST in Nyagatare, our doctors, dental surgeon, nurses, laboratory technicians and paramedicals work around the clock so that quality care is never more than a phone call away.</p>
        <div class="mvv" style="margin:24px 0">
          <div class="box"><h3>&#127919; Our Mission</h3><p>Committed to providing <strong>affordable quality healthcare</strong>.</p></div>
          <div class="box"><h3>&#128065; Our Vision</h3><p>Committed to providing <strong>patient centred healthcare with excellence in quality and access</strong>.</p></div>
        </div>
        <a class="btn btn-blue" href="about.html">More About Us</a>
      </div>
      <div class="reveal">
        <img src="assets/img/waiting-area-0.jpg" alt="Waiting area at Yahshua Medical Clinics Ltd" loading="lazy">
      </div>
    </div>
  </div>
</section>

<section class="stats">
  <div class="wrap">
    <div class="grid">
      <div><div class="num" data-count="24" data-suffix="/7">0</div><div class="lbl">Hours open, every day</div></div>
      <div><div class="num" data-count="30" data-suffix="+">0</div><div class="lbl">Hospitalization rooms (V-VIP, VIP, Single, Ward)</div></div>
      <div><div class="num" data-count="13" data-suffix="">0</div><div class="lbl">Clinical departments</div></div>
      <div><div class="num" data-count="14" data-suffix="+">0</div><div class="lbl">Partners we work with</div></div>
    </div>
  </div>
</section>

<section class="sec sec-soft">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow">What we do</span>
      <h2>Our Medical Services</h2>
      <p>YAHSHUA MEDICAL CLINICS LTD prides itself on a wide range of health care services under one roof.</p>
      <div class="rule"></div>
    </div>
    <div class="grid g3">{svc_cards}</div>
    <div class="center" style="margin-top:36px"><a class="btn btn-green" href="services.html">View All Services</a></div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow">Cashless care</span>
      <h2>Partners We Work With</h2>
      <p>We work with many insurance providers and <strong>accept all payment modes</strong>: cash, mobile money, card and bank transfer.</p>
      <div class="rule"></div>
    </div>
    {ins_grid()}
  </div>
</section>

<section class="sec sec-soft">
  <div class="wrap">
    <div class="split">
      <div class="reveal"><img src="assets/img/flow-chart.jpg" alt="Yahshua Medical Clinics patient flow chart" loading="lazy"></div>
      <div class="reveal">
        <span class="eyebrow">First aid mindset &bull; Vital signs first</span>
        <h2>Your patient journey</h2>
        <p>To avoid suffering in queues, our flow starts with triage vital signs first so that urgent cases receive immediate first aid care, followed by smooth registration and consultation.</p>
        <ul class="value-list" style="flex-direction:column;align-items:flex-start">
          <li><strong>1. Triage:</strong> Immediate vital signs check (BP, pulse, temperature, SpO2) &amp; priority first aid care</li>
          <li><strong>2. Reception:</strong> Fast patient registration &amp; insurance verification</li>
          <li><strong>3. Clinical Department:</strong> General Medicine, OPD, Pediatrics, Minor Surgery, Gynecology, NCDs, Dental or Physiotherapy</li>
          <li><strong>4. Diagnostics:</strong> Diagnostic Laboratory &amp; Medical Imaging / X-Ray if prescribed</li>
          <li><strong>5. Cashier:</strong> Transparent billing &amp; cashless insurance clearance</li>
          <li><strong>6. Pharmacy &amp; Treatment:</strong> Medication dispensing, sterile procedures, physiotherapy or hospitalization</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow">Inside our clinic</span>
      <h2>A calm, clean place to heal</h2>
      <div class="rule"></div>
    </div>
    <div class="gal">
      <figure data-lb><img src="assets/img/inside-us.jpg" alt="Inside Yahshua Medical Clinics" loading="lazy"><figcaption>Inside our clinic</figcaption></figure>
      <figure data-lb><img src="assets/img/waiting-area-1.jpg" alt="Consultation corridor" loading="lazy"><figcaption>Consultation corridor</figcaption></figure>
      <figure data-lb><img src="assets/img/entrance-arch.jpg" alt="Main entrance" loading="lazy"><figcaption>Main entrance</figcaption></figure>
    </div>
    <div class="center" style="margin-top:32px"><a class="btn btn-outline" href="gallery.html">See Full Gallery</a></div>
  </div>
</section>

{CTA_BAND}

<section class="sec">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow">Find us</span>
      <h2>EN 58 ST, Nyagatare, Eastern Province</h2>
      <p><a href="{MAPS}" target="_blank" rel="noopener">Open in Google Maps &rarr;</a></p>
      <div class="rule"></div>
    </div>
    <div class="map-wrap">
      <iframe src="{MAPS_EMBED}" title="Map to Yahshua Medical Clinics Ltd" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    </div>
  </div>
</section>

</main>
""" + footer()


def build_about():
    values = ["Integrity", "Caring", "Excellence", "Performance", "Respect", "Determination", "Empathy", "Team work spirit"]
    vlist = "".join(f"<li>{v}</li>" for v in values)
    return head("About Us | Yahshua Medical Clinics Ltd",
                "About Yahshua Medical Clinics Ltd. Our aim, mission, vision and values. Affordable, patient centred healthcare in Nyagatare, Rwanda, open 24/7.") \
        + header("about.html") \
        + page_hero("About Us", "Creating healthy and happy neighbourhoods through preventive, diagnostic and curative medicine.", "waiting-area-0.jpg", "About Us") + f"""
<main>
<section class="sec">
  <div class="wrap">
    <div class="split">
      <div class="reveal">
        <span class="eyebrow">Who we are</span>
        <h2>YAHSHUA MEDICAL CLINICS LTD</h2>
        <p><strong>YAHSHUA MEDICAL CLINICS LTD</strong> has aims of providing the highest quality of care in preventive, diagnostic and curative medicine, thereby creating healthy and happy neighbourhoods.</p>
        <p>Our name carries our promise: <strong>&laquo; YAHWEH SAVES &raquo;</strong>. We serve every patient who walks in our clinic with dignity, competence and compassion, whatever the hour.</p>
        <p>The clinic brings together general medicine, all OPD services, pediatrics, minor surgery, laboratory, family planning, vaccination, gynecology and obstetrics, NCDs chronic care, medical imaging and X-Ray, 30+ room hospitalization (V-VIP, VIP, Single, Ward), dental with OPG panoramic X-Ray, and physiotherapy, all in one clinic.</p>
        <a class="btn btn-green" href="services.html">Explore Our Services</a>
      </div>
      <div class="reveal"><img src="assets/img/inside-us.jpg" alt="Inside Yahshua Medical Clinics Ltd" loading="lazy"></div>
    </div>
  </div>
</section>

<section class="sec sec-soft">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow">What drives us</span>
      <h2>Mission, Vision &amp; Aim</h2>
      <div class="rule"></div>
    </div>
    <div class="grid g3">
      <article class="card reveal"><div class="ico-lg">&#127919;</div><h3>Our Mission</h3><p>YAHSHUA MEDICAL CLINICS LTD is committed to providing <strong>affordable quality healthcare</strong>.</p></article>
      <article class="card alt reveal"><div class="ico-lg">&#128065;</div><h3>Our Vision</h3><p>Committed to providing <strong>patient centred healthcare with excellence in quality and access</strong>.</p></article>
      <article class="card reveal"><div class="ico-lg">&#127973;</div><h3>Our Aim</h3><p>To provide the highest quality of care in <strong>preventive, diagnostic and curative medicine</strong>, creating healthy and happy neighbourhoods.</p></article>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow">Our culture</span>
      <h2>Values That Inspire Us</h2>
      <p>YAHSHUA MEDICAL CLINICS LTD is inspired by:</p>
      <div class="rule"></div>
    </div>
    <ul class="value-list reveal" style="justify-content:center">{vlist}</ul>
  </div>
</section>

<section class="sec sec-soft">
  <div class="wrap">
    <div class="split">
      <div class="reveal">
        <span class="eyebrow">First aid mindset</span>
        <h2>Our Patient Flow Chart</h2>
        <p>Our workflow begins with immediate vital signs triage to prioritize emergency care and avoid waiting, followed by registration and consultation.</p>
        <ul class="value-list" style="flex-direction:column;align-items:flex-start">
          <li>1. Triage (Vital signs &amp; first aid priority)</li>
          <li>2. Reception &amp; insurance verification</li>
          <li>3. Consultation: General Medicine, OPD, Pediatrics, Gynecology, NCDs, Minor Surgery, Dental, Physiotherapy</li>
          <li>4. Diagnostic Laboratory &amp; Medical Imaging / X-Ray</li>
          <li>5. Cashier &rarr; Pharmacy / Treatment / Hospitalization</li>
        </ul>
      </div>
      <div class="reveal"><img src="assets/img/flow-chart.jpg" alt="Patient flow chart" loading="lazy"></div>
    </div>
  </div>
</section>

{CTA_BAND}
</main>
""" + footer()


def build_services():
    cards = ""
    for i, (ico, t, d, items, alt) in enumerate(SERVICES):
        cls = "card alt reveal" if i % 2 else "card reveal"
        lis = "".join(f"<li>{i}</li>" for i in items)
        cards += f"""
      <article class="{cls}">
        <div class="ico-lg">{ico}</div>
        <h3>{t}</h3>
        <p>{d}</p>
        <ul>{lis}</ul>
      </article>"""

    return head("Our Services | Yahshua Medical Clinics Ltd",
                "Services at Yahshua Medical Clinics Ltd: General Medicine (GP), All OPD Services, Pediatrics, Minor Surgery with Circumcision, Laboratory, Family Planning, Vaccination, Gynecology & Obstetrics, NCDs, Medical Imaging & X-Ray, Hospitalization (over 30 rooms: V-VIP, VIP, Single, Ward), Dental with OPG panoramic X-Ray, and Physiotherapy. Open 24/7.") \
        + header("services.html") \
        + page_hero("Our Services", "A wide range of health care services under one roof, available 24 hours a day, every day of the year.", "waiting-area-1.jpg", "Services") + f"""
<main>
<section class="sec">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow">Departments</span>
      <h2>Complete care in one clinic</h2>
      <p>YAHSHUA MEDICAL CLINICS LTD prides a wide range of health care services, delivered by qualified doctors, nurses, lab technicians and paramedicals.</p>
      <div class="rule"></div>
    </div>
    <div class="grid g3">{cards}</div>
  </div>
</section>

<section class="sec sec-soft" id="dental">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow">Dental unit</span>
      <h2>Dental Services &amp; OPG X-Ray</h2>
      <p>Led by our Dental Surgeon <strong>Dr. NSENGIMANA Theodole</strong> and our qualified dental team.</p>
      <div class="rule"></div>
    </div>
    <div class="grid g4">
      <article class="card reveal"><span class="tag">Imaging</span><h3>OPG Panoramic X-Ray</h3><p>Full mouth panoramic digital imaging for accurate diagnosis, extractions, implants and orthodontic planning, right here in Nyagatare.</p></article>
      <article class="card alt reveal"><span class="tag">Preventive</span><h3>Scaling &amp; Cleaning</h3><p>Professional scaling, polishing and gum care to prevent decay and periodontal disease.</p></article>
      <article class="card reveal"><span class="tag">Restorative</span><h3>Fillings &amp; Root Canal</h3><p>Tooth coloured fillings, restorations and root canal treatment to save damaged teeth.</p></article>
      <article class="card alt reveal"><span class="tag">Surgical</span><h3>Extraction &amp; Oral Surgery</h3><p>Simple and surgical extractions, including wisdom teeth, performed under local anaesthesia.</p></article>
      <article class="card reveal"><span class="tag">Prosthetic</span><h3>Dentures &amp; Crowns</h3><p>Partial and complete dentures, crowns and bridges to restore your smile and chewing.</p></article>
      <article class="card alt reveal"><span class="tag">Orthodontic</span><h3>Braces &amp; Alignment</h3><p>Assessment and management for crooked or crowded teeth, with orthodontic guidance.</p></article>
      <article class="card reveal"><span class="tag">Cosmetic</span><h3>Whitening &amp; Aesthetics</h3><p>Teeth whitening and cosmetic finishing for a brighter, confident smile.</p></article>
      <article class="card alt reveal"><span class="tag">Children</span><h3>Pediatric Dentistry</h3><p>Gentle dental care, fluoride application and oral health education for children.</p></article>
    </div>

    <div class="sec-head center" style="margin-top:56px;margin-bottom:24px">
      <h3>Our Dental Work: Before and After</h3>
      <p>Real treatment results from our dental unit. Click any photo to enlarge.</p>
    </div>
    <div class="gal dental-gal">
      <figure data-lb class="reveal">
        <img src="assets/img/dental-1.jpg" alt="Scaling and Professional Cleaning at Yahshua Medical Clinics" loading="lazy">
        <figcaption><strong>Scaling and Professional Cleaning</strong><span>Heavy tartar and stain removed in a single scaling session, restoring healthy gums.</span></figcaption>
      </figure>
      <figure data-lb class="reveal">
        <img src="assets/img/dental-2.jpg" alt="Teeth Whitening at Yahshua Medical Clinics" loading="lazy">
        <figcaption><strong>Teeth Whitening</strong><span>Professional whitening for a brighter, more confident smile.</span></figcaption>
      </figure>
      <figure data-lb class="reveal">
        <img src="assets/img/dental-3.jpg" alt="Braces and Orthodontics at Yahshua Medical Clinics" loading="lazy">
        <figcaption><strong>Braces and Orthodontics</strong><span>Fixed braces treatment from placement through to a fully aligned bite.</span></figcaption>
      </figure>
      <figure data-lb class="reveal">
        <img src="assets/img/dental-4.jpg" alt="Dentures, Crowns and Bridges at Yahshua Medical Clinics" loading="lazy">
        <figcaption><strong>Dentures, Crowns and Bridges</strong><span>A missing front tooth restored with a natural looking prosthetic.</span></figcaption>
      </figure>
      <figure data-lb class="reveal">
        <img src="assets/img/dental-5.jpg" alt="Root Canal Treatment at Yahshua Medical Clinics" loading="lazy">
        <figcaption><strong>Root Canal Treatment</strong><span>Careful cleaning and sealing of the root canal to save a badly damaged tooth.</span></figcaption>
      </figure>
      <figure data-lb class="reveal">
        <img src="assets/img/hospitalization.jpg" alt="Hospitalization at Yahshua Medical Clinics" loading="lazy">
        <figcaption><strong>Inpatient Hospitalization</strong><span>30+ comfortable rooms including V-VIP, VIP, Single &amp; Ward rooms.</span></figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="grid g2">
      <article class="card reveal"><div class="ico-lg">&#9200;</div><h3>Operating Hours</h3><p><strong>24/7</strong>: 24 hours a day, 7 days a week, 365 days a year. Emergencies, triage, laboratory, pharmacy, hospitalization and nursing service are always staffed.</p></article>
      <article class="card alt reveal"><div class="ico-lg">&#128179;</div><h3>Payment &amp; Partners</h3><p>We work with RSSB, MMI, RADIANT, SANLAM, BRITAM, UAP, Old Mutual, Eden Care, Equity, ASA International, PSF Insurance, MIS UR, Urwego and Ubuzima Bwiza Foundation. <strong>All payment modes accepted.</strong> <a href="insurance.html">See partners we work with &rarr;</a></p></article>
    </div>
  </div>
</section>

{CTA_BAND}
</main>
""" + footer()


def build_doctors():
    return head("Our Medical Team | Yahshua Medical Clinics Ltd",
                "Meet the medical team of Yahshua Medical Clinics Ltd: Clinical Director, Dental Surgeon, General Practitioners, Head of Nurses, and Head of Laboratory Technicians serving Nyagatare 24/7.") \
        + header("doctors.html") \
        + page_hero("Our Medical Team", "Clinical Director, Dental Surgeon, General Practitioners, nursing leadership and laboratory technicians dedicated to your health.", "hospitalization.jpg", "Our Medical Team") + f"""
<main>
<section class="sec">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow">Meet the team</span>
      <h2>Doctors &amp; Clinical Leadership</h2>
      <p>Our medical team is on duty around the clock. To book an appointment or speak with our team, call our central line on <a href="tel:{TEL_MAIN}">{TEL_MAIN}</a> or reception on <a href="tel:{TEL_RECEP}">{TEL_RECEP}</a>.</p>
      <div class="rule"></div>
    </div>
    <div class="grid g3">{doc_cards()}</div>
  </div>
</section>

<section class="sec sec-soft">
  <div class="wrap">
    <div class="grid g3">
      <article class="card reveal"><div class="ico-lg">&#129658;</div><h3>General Practitioners</h3><p>Experienced medical doctors covering adult consultations, OPD triage, pediatrics, NCD chronic care, gynecology consultations and minor surgery, on duty day and night.</p></article>
      <article class="card alt reveal"><div class="ico-lg">&#129463;</div><h3>Dental Surgeon</h3><p>A qualified Dental Surgeon offering comprehensive oral healthcare, surgical extractions, restorations and digital OPG panoramic dental X-Ray on site.</p></article>
      <article class="card reveal"><div class="ico-lg">&#129657;</div><h3>Nursing &amp; Laboratory Leads</h3><p>Head of Nurses and Head of Laboratory Technicians leading our attentive 24/7 inpatient hospitalization, sterile procedures and accurate diagnostic testing.</p></article>
    </div>
  </div>
</section>

{CTA_BAND}
</main>
""" + footer()


def build_insurance():
    return head("Partners We Work With | Yahshua Medical Clinics Ltd",
                "Yahshua Medical Clinics Ltd works with RSSB, MMI, RADIANT, SANLAM, BRITAM, UAP, Old Mutual, Eden Care, Equity, ASA International, PSF Insurance, MIS UR, Urwego and Ubuzima Bwiza Foundation. All payment modes accepted.") \
        + header("insurance.html") \
        + page_hero("Partners We Work With", "We work with 14+ insurance providers and partners and accept all payment modes, so care stays affordable.", "front-signage.jpg", "Partners") + f"""
<main>
<section class="sec">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow">Our partners</span>
      <h2>Partners We Work With</h2>
      <p>Bring your valid insurance card and national ID to reception and our team will handle the rest.</p>
      <div class="rule"></div>
    </div>
    {ins_grid()}
  </div>
</section>

<section class="sec sec-soft">
  <div class="wrap">
    <div class="grid g3">
      <article class="card reveal"><div class="ico-lg">&#128179;</div><h3>All Payment Modes</h3><p>Cash, mobile money, bank transfer and card payments are all accepted at our cashier, 24 hours a day.</p></article>
      <article class="card alt reveal"><div class="ico-lg">&#128196;</div><h3>What to Bring</h3><p>Your insurance card, national ID or passport, and any previous medical documents or prescriptions.</p></article>
      <article class="card reveal"><div class="ico-lg">&#10067;</div><h3>Not Sure Your Insurance is Available?</h3><p>Call reception on <a href="tel:{TEL_RECEP}">{TEL_RECEP}</a> or WhatsApp <a href="https://wa.me/{WA_INTL}" target="_blank" rel="noopener">{WA}</a> and we will confirm before you travel.</p></article>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    <div class="split">
      <div class="reveal"><img src="assets/img/street.jpg" alt="Yahshua Medical Clinics Ltd seen from the street" loading="lazy"></div>
      <div class="reveal">
        <span class="eyebrow">Growing together</span>
        <h2>More partners to come</h2>
        <p>Our list of insurance partners keeps growing as we extend affordable care to more families in Nyagatare and across the Eastern Province.</p>
        <p>If your employer, scheme or insurer is not yet on the list, talk to us, we are always open to new partnerships.</p>
        <a class="btn btn-blue" href="contact.html">Talk To Us</a>
      </div>
    </div>
  </div>
</section>

{CTA_BAND}
</main>
""" + footer()


def build_gallery():
    figs = ""
    for f, cap in GALLERY:
        figs += f'\n      <figure data-lb><img src="assets/img/{f}" alt="{cap}" loading="lazy"><figcaption>{cap}</figcaption></figure>'
    return head("Gallery &amp; Video | Yahshua Medical Clinics Ltd",
                "Photo gallery and video of Yahshua Medical Clinics Ltd in Nyagatare: opening ceremony video, reception, waiting areas, consultation corridors, hospitalization wing, parking and entrance.") \
        + header("gallery.html") \
        + page_hero("Our Gallery", "Take a look inside Yahshua Medical Clinics Ltd. Clean, calm and built for comfortable care.", "parking.jpg", "Gallery") + f"""
<main>

<section class="sec">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow">Official clinic video</span>
      <h2>Opening Ceremony &amp; Clinic Tour</h2>
      <p>Watch our official opening ceremony and take a virtual walk through Yahshua Medical Clinics Ltd in Nyagatare.</p>
      <div class="rule"></div>
    </div>
    
    <div class="video-card reveal">
      <div class="video-wrap">
        <video class="video-player" controls preload="metadata" poster="assets/img/entrance-arch.jpg" playsinline>
          <source src="assets/video/opening-ceremony.mp4" type="video/mp4">
          Your browser does not support HTML5 video playback.
        </video>
      </div>
      <div class="video-body">
        <div class="video-info">
          <span class="video-tag"><span class="pulse-dot"></span> OFFICIAL CEREMONY</span>
          <h3>Yahshua Medical Clinics Ltd &ndash; Grand Opening &amp; Facility Tour</h3>
          <p>Highlights from our inauguration day celebrating 24/7 quality healthcare in Nyagatare, Eastern Province.</p>
        </div>
        <div class="video-upload-note">
          <span class="ico-sm">&#128249;</span>
          <div>
            <strong>Ceremony Video Space Ready</strong>
            <p>Save your video file as <code>assets/video/opening-ceremony.mp4</code> and it will automatically stream right here in full HD.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec sec-soft">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow">Inside &amp; outside</span>
      <h2>A place built for healing</h2>
      <p>Click any photo to view it full size.</p>
      <div class="rule"></div>
    </div>
    <div class="gal">{figs}</div>
  </div>
</section>

{CTA_BAND}
</main>
""" + footer()


def build_contact():
    return head("Contact Us | Yahshua Medical Clinics Ltd | EN 58 ST, Nyagatare",
                "Contact Yahshua Medical Clinics Ltd: call 0788663250 or reception 0794746337, WhatsApp 0784852344, email yahshuaclini6@gmail.com. EN 58 ST, Nyagatare, Eastern Province, Rwanda. Open 24/7.") \
        + header("contact.html") \
        + page_hero("Contact Us", "We are open 24 hours a day, 7 days a week. Call, WhatsApp, email or simply walk in.", "entrance-arch.jpg", "Contact") + f"""
<main>
<section class="sec">
  <div class="wrap">
    <div class="contact-grid">
      <div class="reveal">
        <span class="eyebrow">Get in touch</span>
        <h2>Reach Yahshua Medical Clinics</h2>
        <ul class="info-list">
          <li><div class="ico">&#9742;</div><div><small>Call us</small><a href="tel:{TEL_MAIN}">{TEL_MAIN}</a></div></li>
          <li><div class="ico">&#127974;</div><div><small>Reception</small><a href="tel:{TEL_RECEP}">{TEL_RECEP}</a></div></li>
          <li><div class="ico">&#128172;</div><div><small>WhatsApp</small><a href="https://wa.me/{WA_INTL}" target="_blank" rel="noopener">{WA}</a></div></li>
          <li><div class="ico">&#9993;</div><div><small>Email</small><a href="mailto:{EMAIL}">{EMAIL}</a></div></li>
          <li><div class="ico">&#128205;</div><div><small>Physical address</small><a href="{MAPS}" target="_blank" rel="noopener">{ADDRESS}</a></div></li>
          <li><div class="ico">&#9200;</div><div><small>Operating hours</small><strong>24/7: 24 hours a day, 7 days a week, 365 days a year</strong></div></li>
        </ul>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:22px">
          <a class="btn btn-green" href="tel:{TEL_MAIN}">&#9742; Call Now</a>
          <a class="btn btn-blue" href="https://wa.me/{WA_INTL}" target="_blank" rel="noopener">&#128172; WhatsApp</a>
          <a class="btn btn-outline" href="{MAPS}" target="_blank" rel="noopener">&#128205; Get Directions</a>
        </div>
      </div>

      <div class="reveal">
        <form class="appt" id="apptForm">
          <h3>Request an appointment</h3>
          <p style="font-size:.93rem">Fill in the form and we will open WhatsApp with your details ready to send to our team.</p>
          <div class="field"><label for="name">Full name *</label><input id="name" name="name" required placeholder="Your full name"></div>
          <div class="field"><label for="phone">Phone number *</label><input id="phone" name="phone" required placeholder="07xx xxx xxx"></div>
          <div class="field"><label for="service">Service needed</label>
            <select id="service" name="service">
              <option>General Medicine (GP)</option>
              <option>All OPD Services / General Check-ups</option>
              <option>Pediatrics OPD</option>
              <option>Minor Surgery &amp; Circumcision</option>
              <option>Laboratory</option>
              <option>Family Planning</option>
              <option>Vaccination</option>
              <option>Gynecology &amp; Obstetrics</option>
              <option>Non-Communicable Diseases (NCDs)</option>
              <option>Medical Imaging &amp; X-Ray</option>
              <option>Hospitalization (30+ Rooms: V-VIP, VIP, Single, Ward)</option>
              <option>Dental / OPG Panoramic X-Ray</option>
              <option>Physiotherapy</option>
              <option>Other / Not sure</option>
            </select>
          </div>
          <div class="field"><label for="date">Preferred date</label><input type="date" id="date" name="date"></div>
          <div class="field"><label for="insurance">Insurance (optional)</label><input id="insurance" name="insurance" placeholder="e.g. RSSB, MMI, Radiant, Sanlam, Equity, ASA..."></div>
          <div class="field"><label for="message">Message</label><textarea id="message" name="message" rows="4" placeholder="Briefly describe your concern"></textarea></div>
          <button class="btn btn-green" type="submit" style="width:100%;justify-content:center">Send via WhatsApp</button>
          <div id="formOk" style="display:none;margin-top:12px;color:var(--green-dark);font-weight:700">&#10004; WhatsApp opened. Press send to reach our team.</div>
          <p class="form-note">For emergencies please call <a href="tel:{TEL_MAIN}">{TEL_MAIN}</a> directly, we answer 24/7.</p>
        </form>
      </div>
    </div>
  </div>
</section>

<section class="sec sec-soft">
  <div class="wrap">
    <div class="sec-head center">
      <span class="eyebrow">Traceable location</span>
      <h2>Find us on the map</h2>
      <p>{ADDRESS}. <a href="{MAPS}" target="_blank" rel="noopener">open in Google Maps &rarr;</a></p>
      <div class="rule"></div>
    </div>
    <div class="map-wrap">
      <iframe src="{MAPS_EMBED}" title="Map to Yahshua Medical Clinics Ltd" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    </div>
    <div class="grid g3" style="margin-top:26px">
      <article class="card reveal"><div class="ico-lg">&#128663;</div><h3>By car</h3><p>Free, secure paved parking is available inside our gate on EN 58 ST. Look for the white entrance arch.</p></article>
      <article class="card alt reveal"><div class="ico-lg">&#127949;</div><h3>By moto / bus</h3><p>Ask for &laquo; Yahshua Clinic &raquo; on EN 58 ST, Nyagatare. The clinic is signposted 15 m from the main road.</p></article>
      <article class="card reveal"><div class="ico-lg">&#9855;</div><h3>Accessibility</h3><p>Ground floor departments, ramped walkways and wide corridors make every service easy to reach.</p></article>
    </div>
  </div>
</section>

{CTA_BAND}
</main>
""" + footer()


PAGES = {
    "index.html": build_index,
    "about.html": build_about,
    "services.html": build_services,
    "doctors.html": build_doctors,
    "insurance.html": build_insurance,
    "gallery.html": build_gallery,
    "contact.html": build_contact,
}

if __name__ == "__main__":
    for name, fn in PAGES.items():
        with io.open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
            f.write(fn())
        print("built", name)
