// Image Registry and Fallback Manager for Yahshua Medical Clinics Ltd
// This file serves as a central hub where you can easily swap in your real clinic photos later!
// All default paths point to '/images/[filename]' in the public folder.
// Whenever you have your real photos ready, simply upload them to public/images/ with the same filenames,
// OR use the on-site Photo Manager to test them live!

export const IMAGE_SLOTS = [
  {
    id: "logo",
    title: "Official Yahshua Logo",
    path: "/images/yahshua-logo.jpg",
    fallback: "/images/yahshua-logo.jpg",
    category: "Branding",
    description: "The official water droplet & caring hands logo of YAHSHUA MEDICAL CLINICS LTD."
  },
  {
    id: "flowChart",
    title: "Patient Flow Chart Sign",
    path: "/images/patient-flow-chart.jpg",
    fallback: "/images/patient-flow-chart.jpg",
    category: "Clinic Display",
    description: "The official 24/7 Patient Flow Chart sign mounted in the clinic (well-cropped gallery edition)."
  },
  {
    id: "clinicExterior",
    title: "Clinic Exterior & Building",
    path: "/images/clinic-exterior.jpg",
    fallback: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80",
    category: "Facility",
    description: "Outside view of Yahshua Medical Clinics Ltd at EN 58 ST, Nyagatare."
  },
  {
    id: "reception",
    title: "24/7 Front Desk & Reception",
    path: "/images/reception.jpg",
    fallback: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    category: "Facility",
    description: "Where our patients are warmly received 24 hours a day."
  },
  {
    id: "triage",
    title: "Triage & Vital Signs Room",
    path: "/images/triage.jpg",
    fallback: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    category: "Facility",
    description: "Fast triage assessment — vital signs are always taken FIRST at Yahshua."
  },
  {
    id: "generalMedicine",
    title: "General Medicine Consultations",
    path: "/images/general-medicine.jpg",
    fallback: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
    category: "Services",
    description: "Comprehensive primary healthcare consultations and general check-ups."
  },
  {
    id: "ncds",
    title: "NCDs Clinic (Non-Communicable Diseases)",
    path: "/images/ncds.jpg",
    fallback: "https://images.unsplash.com/photo-1628348068473-a490ca0607d1?auto=format&fit=crop&w=1000&q=80",
    category: "Services",
    description: "Hypertension, diabetes & chronic disease screening and long-term care."
  },
  {
    id: "minorSurgery",
    title: "Minor Surgery Suite",
    path: "/images/minor-surgery.jpg",
    fallback: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1000&q=80",
    category: "Services",
    description: "All sterile minor surgical procedures: circumcision, suturing & drainage."
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy & Rehabilitation",
    path: "/images/physiotherapy.jpg",
    fallback: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80",
    category: "Services",
    description: "Rehabilitation and exercise therapy (dedicated physiotherapist joining soon)."
  },
  {
    id: "gynecology",
    title: "Gynecology & Obstetrics OPD",
    path: "/images/gynecology.jpg",
    fallback: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    category: "Services",
    description: "Dedicated maternal health, gynecology, and obstetric outpatient care."
  },
  {
    id: "dental",
    title: "Dental Clinic Care",
    path: "/images/dental.jpg",
    fallback: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
    category: "Services",
    description: "Modern oral health, extractions, scaling, and upcoming specialized dental services."
  },
  {
    id: "laboratory",
    title: "24/7 Diagnostic Laboratory",
    path: "/images/laboratory.jpg",
    fallback: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1000&q=80",
    category: "Services",
    description: "Accurate, rapid diagnostic blood work, microbiology, and routine tests."
  },
  {
    id: "pediatrics",
    title: "Pediatrics OPD & Child Health",
    path: "/images/pediatrics.jpg",
    fallback: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1000&q=80",
    category: "Services",
    description: "Gentle, expert medical care for infants, toddlers, and children."
  },
  {
    id: "xray",
    title: "Imaging & X-Ray Services",
    path: "/images/xray.jpg",
    fallback: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
    category: "Services",
    description: "Modern digital radiography and preventive diagnostic imaging."
  },
  {
    id: "hospitalization",
    title: "Hospitalization & Inpatient Ward",
    path: "/images/hospitalization.jpg",
    fallback: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1000&q=80",
    category: "Services",
    description: "Clean, comfortable inpatient rooms with 24/7 nursing and medical supervision."
  },
  // ---------------- TEAM PHOTOS (names only, no personal phone numbers) ----------------
  {
    id: "doctorJames",
    title: "Dr. James NDAHIGWA",
    path: "/images/team/dr-james-ndahigwa.jpg",
    fallback: "/images/team/dr-james-ndahigwa.jpg",
    category: "Our Team",
    description: "Dr. James NDAHIGWA — Medical Doctor, General Medicine."
  },
  {
    id: "doctorGapira",
    title: "Dr. GAPIRA SHIMA PATRICK",
    path: "/images/team/dr-gapira-shima-patrick.jpg",
    fallback: "/images/team/dr-gapira-shima-patrick.jpg",
    category: "Our Team",
    description: "Dr. GAPIRA SHIMA PATRICK — Medical Doctor, General Medicine."
  },
  {
    id: "doctorDieuDonne",
    title: "Dr. DIEU DONNE",
    path: "/images/team/dr-dieu-donne.jpg",
    fallback: "/images/team/dr-dieu-donne.jpg",
    category: "Our Team",
    description: "Dr. DIEU DONNE — Medical Doctor. (Replace this initials avatar with his real photo anytime.)"
  },
  {
    id: "headOfNurses",
    title: "KAMASERUKA Godfrey — Head of Nurses",
    path: "/images/team/kamaseruka-godfrey.jpg",
    fallback: "/images/team/kamaseruka-godfrey.jpg",
    category: "Our Team",
    description: "KAMASERUKA Godfrey — Head of Nurses, Nursing & Triage."
  },
  {
    id: "headOfLab",
    title: "Teddy MURANGO — Head of Lab Technicians",
    path: "/images/team/teddy-murango.jpg",
    fallback: "/images/team/teddy-murango.jpg",
    category: "Our Team",
    description: "Teddy MURANGO — Head of Laboratory Technicians."
  },
  {
    id: "doctorKoloneli",
    title: "Dr. KOLONELI (Joining Soon)",
    path: "/images/team/dr-koloneli.jpg",
    fallback: "/images/team/dr-koloneli.jpg",
    category: "Our Team",
    description: "Placeholder avatar — upload Dr. KOLONELI's real photo when ready."
  },
  {
    id: "doctorTheodole",
    title: "Dr. THEODOLE (Joining Soon)",
    path: "/images/team/dr-theodole.jpg",
    fallback: "/images/team/dr-theodole.jpg",
    category: "Our Team",
    description: "Placeholder avatar — upload Dr. THEODOLE's real photo when ready."
  },
  {
    id: "physiotherapistSlot",
    title: "Physiotherapist (Recruitment In Progress)",
    path: "/images/team/physiotherapist.jpg",
    fallback: "/images/team/physiotherapist.jpg",
    category: "Our Team",
    description: "Placeholder avatar — upload the new physiotherapist's photo once recruitment is confirmed."
  },
  // ---------------- PARTNERS WE WORK WITH ----------------
  {
    id: "partner1",
    title: "Partner Logo Slot 1",
    path: "/images/partners/partner-1.jpg",
    fallback: "/images/partners/partner-1.jpg",
    category: "Partners",
    description: "Partner we work with — replace with the partner's real logo."
  },
  {
    id: "partner2",
    title: "Partner Logo Slot 2",
    path: "/images/partners/partner-2.jpg",
    fallback: "/images/partners/partner-2.jpg",
    category: "Partners",
    description: "Partner we work with — replace with the partner's real logo."
  },
  {
    id: "partner3",
    title: "Partner Logo Slot 3",
    path: "/images/partners/partner-3.jpg",
    fallback: "/images/partners/partner-3.jpg",
    category: "Partners",
    description: "Partner we work with — replace with the partner's real logo."
  },
  {
    id: "partner4",
    title: "Partner Logo Slot 4",
    path: "/images/partners/partner-4.jpg",
    fallback: "/images/partners/partner-4.jpg",
    category: "Partners",
    description: "Partner we work with — replace with the partner's real logo."
  },
  // ---------------- VIDEO POSTER ----------------
  {
    id: "videoPoster",
    title: "Opening Ceremony Video Poster",
    path: "/images/video-poster.jpg",
    fallback: "/images/video-poster.jpg",
    category: "Video",
    description: "Cover image shown before the Opening Ceremony video plays."
  }
];

// Video slots — the video files themselves live in /public/videos/
export const VIDEO_SLOTS = [
  {
    id: "openingCeremonyVideo",
    title: "Official Opening Ceremony Video",
    path: "/videos/opening-ceremony.mp4",
    posterId: "videoPoster",
    category: "Video",
    description: "Upload your opening ceremony video as opening-ceremony.mp4 in public/videos/ and it plays here automatically."
  }
];

// Helper to get an image URL with automatic fallback
export function getImageUrl(id, customOverrides = {}) {
  if (customOverrides && customOverrides[id]) {
    return customOverrides[id];
  }
  const slot = IMAGE_SLOTS.find(item => item.id === id);
  if (!slot) return "/images/yahshua-logo.jpg";
  return slot.path;
}

// Function that handles loading image with fallback if local file is missing
export function handleImageError(e, id) {
  const slot = IMAGE_SLOTS.find(item => item.id === id);
  if (slot && slot.fallback && e.target.src !== slot.fallback) {
    e.target.src = slot.fallback;
  }
}
