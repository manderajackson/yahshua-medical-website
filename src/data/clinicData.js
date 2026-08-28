// Official Data for YAHSHUA MEDICAL CLINICS LTD
// Located at EN 58 ST, Nyagatare, Eastern Province, Rwanda
// Operating since May 2023 - 24/7 Service

export const CLINIC_INFO = {
  name: "YAHSHUA MEDICAL CLINICS LTD",
  shortName: "Yahshua Medical Clinics",
  tagline: "Creating Healthy and Happy Neighborhoods",
  established: "May 2023",
  hours: "We Work 24/7 (24 Hours, 7 Days a Week)",
  location: "EN 58 ST, Nyagatare, Eastern Province, Rwanda",
  mapUrl: "https://maps.google.com/?q=EN+58+ST,+Nyagatare,+Rwanda",
  contacts: {
    customerCare: "0788891012",
    reception: "0794746337",
    whatsapp: "0788663250",
    email: "yahshuamediasites@gmail.com"
  },
  formattedContacts: {
    customerCare: "+250 788 891 012",
    reception: "+250 794 746 337",
    whatsapp: "+250 788 663 250",
    email: "yahshuamediasites@gmail.com"
  },
  aboutUs: "YAHSHUA MEDICAL CLINICS LTD has aims of providing the highest quality of care in preventive, diagnostic and curative medicine thereby creating healthy and happy neighborhoods. Since our inception in May 2023 in Nyagatare, Eastern Province, we have continuously expanded our facilities, technology, and specialized staff to serve Rwanda with compassionate, 24/7 medical excellence.",
  mission: "YAHSHUA MEDICAL CLINICS LTD is committed in providing affordable quality healthcare.",
  vision: "YAHSHUA MEDICAL CLINICS LTD is committed to providing patient centered healthcare with excellence in quality and access."
};

export const CLINIC_VALUES = [
  {
    id: "integrity",
    title: "Integrity",
    description: "Upholding the highest ethical standards, transparency, and honesty in every diagnosis and treatment.",
    iconName: "ShieldCheck"
  },
  {
    id: "caring",
    title: "Caring",
    description: "Treating every patient and family with warmth, kindness, and personal attention.",
    iconName: "HeartHandshake"
  },
  {
    id: "excellence",
    title: "Excellence",
    description: "Striving for superior medical outcomes through modern technology and skilled clinical expertise.",
    iconName: "Award"
  },
  {
    id: "performance",
    title: "Performance",
    description: "Efficient, responsive 24/7 operations that respect patient time and urgent healthcare needs.",
    iconName: "Zap"
  },
  {
    id: "respect",
    title: "Respect",
    description: "Honoring the dignity, culture, and individual choices of our patients and community.",
    iconName: "Users"
  },
  {
    id: "determination",
    title: "Determination",
    description: "Relentlessly pursuing recovery and healing even in complex or challenging health situations.",
    iconName: "Target"
  },
  {
    id: "empathy",
    title: "Empathy",
    description: "Deeply understanding our patients' feelings and concerns, walking with them through every step.",
    iconName: "Smile"
  },
  {
    id: "teamwork",
    title: "Team Work Spirit",
    description: "Collaborating seamlessly across reception, triage, doctors, lab, and nursing to deliver unified care.",
    iconName: "Activity"
  }
];

// ============================================================================
// SERVICES - arranged in scientific / clinical hierarchy order:
// 1 General Medicine -> 2 All OPD Services -> 3 NCDs Clinic -> 4 Pediatrics
// -> 5 Minor Surgery -> 6 Laboratory -> 7 Family Planning -> 8 Vaccination
// -> 9 Gynecology & Obstetrics -> 10 Imaging & X-Ray -> 11 Hospitalization
// -> 12 Dental Services -> 13 Physiotherapy
// ============================================================================
export const CLINIC_SERVICES = [
  {
    id: "general-medicine",
    title: "General Medicine",
    category: "Primary Care",
    shortDesc: "Comprehensive consultations, diagnosis and treatment of acute & chronic illnesses by experienced physicians, 24/7.",
    description: "Our General Medicine department is staffed 24/7 by experienced physicians ready to diagnose and treat tropical infections, cardiovascular disorders, metabolic diseases, and common ailments. We also provide general check-ups and preventive medical counseling for the whole family.",
    imageId: "generalMedicine",
    features: [
      "24/7 Doctor Consultations",
      "Diagnosis & Treatment of Acute Illnesses",
      "Chronic Disease Follow-Up (Hypertension, Diabetes & NCDs)",
      "General Check-Ups & Preventive Counseling"
    ],
    available247: true
  },
  {
    id: "all-opd-services",
    title: "All OPD Services",
    category: "Primary Care",
    shortDesc: "Comprehensive outpatient department consultations across all specialties, including general check-ups, with minimal waiting times.",
    description: "Our Outpatient Department (OPD) delivers fast, structured, and patient-centered consultations. Supported by our streamlined triage and laboratory integration, patients receive thorough evaluations, general check-ups, and customized care plans.",
    imageId: "triage",
    features: [
      "General Check-Ups (Full Medical Examinations)",
      "No-Appointment Walk-In Access 24/7",
      "Fast Triage & Vitals Check",
      "Electronic Medical Record Tracking",
      "Follow-Up Consultation Management"
    ],
    available247: true
  },
  {
    id: "ncds-clinic",
    title: "NCDs Clinic (Non-Communicable Diseases)",
    category: "Chronic Care",
    shortDesc: "Screening, treatment and long-term management of non-communicable diseases for longer, healthier lives.",
    description: "Our dedicated NCDs clinic fights the silent epidemic of non-communicable diseases. We screen for, treat, and follow up conditions such as hypertension, diabetes, and chronic respiratory diseases — with structured records and lifestyle counseling to keep our community healthy.",
    imageId: "ncds",
    features: [
      "Blood Pressure (Hypertension) Screening & Care",
      "Diabetes Testing & Long-Term Management",
      "Asthma & Chronic Respiratory Disease Care",
      "NCD Screening Records & Healthy Lifestyle Counseling"
    ],
    available247: true
  },
  {
    id: "pediatrics-opd",
    title: "Pediatrics OPD",
    category: "Child Health",
    shortDesc: "Warm, child-friendly outpatient care for newborns, infants, and adolescents.",
    description: "We understand that treating children requires special patience, gentleness, and clinical expertise. Our Pediatrics OPD addresses childhood fevers, respiratory infections, nutritional wellness, and growth monitoring.",
    imageId: "pediatrics",
    features: [
      "Infant & Child Health Evaluations",
      "Management of Childhood Fevers & Infections",
      "Growth & Nutritional Monitoring",
      "Parental Guidance & Child Hygiene"
    ],
    available247: true
  },
  {
    id: "minor-surgery",
    title: "Minor Surgery",
    category: "Surgical Care",
    shortDesc: "All sterile minor surgical procedures — from suturing and abscess drainage to circumcision — under strict infection control.",
    description: "Our dedicated minor surgery suite handles all sterile minor surgical procedures with strict aseptic technique and professional nursing support. From wound suturing and abscess drainage to safe male circumcision, every procedure is performed with precision, dignity, and careful follow-up care.",
    imageId: "minorSurgery",
    features: [
      "Male Circumcision (Safe, Sterile Procedure)",
      "Wound Suturing & Debridement",
      "Abscess Incision & Drainage",
      "Minor Trauma Care & Wound Dressings"
    ],
    available247: true
  },
  {
    id: "laboratory",
    title: "24/7 Diagnostic Laboratory",
    category: "Diagnostics",
    shortDesc: "Equipped diagnostic lab offering hematology, biochemistry, parasitology, and rapid disease screening.",
    description: "Our on-site medical laboratory operates around the clock to support physicians with rapid, accurate diagnostic results. We maintain stringent quality controls to ensure reliable reports for every test.",
    imageId: "laboratory",
    features: [
      "Malaria, Typhoid & Tropical Disease Panels",
      "Full Blood Count (CBC) & Hematology",
      "Liver & Kidney Function Tests",
      "Urinalysis & Serological Screening"
    ],
    available247: true
  },
  {
    id: "family-planning",
    title: "Family Planning Services",
    category: "Preventive Care",
    shortDesc: "Confidential reproductive health counseling, modern contraception options, and family guidance.",
    description: "We empower individuals and couples to make informed decisions about reproductive health. We offer personalized counseling and safe, modern family planning solutions in a respectful environment.",
    imageId: "gynecology",
    features: [
      "Confidential Family Counseling",
      "Short & Long-Acting Contraceptive Options",
      "Reproductive Health Education",
      "Follow-up & Method Management"
    ],
    available247: true
  },
  {
    id: "vaccination",
    title: "Vaccination & Immunization",
    category: "Preventive Care",
    shortDesc: "Essential vaccines for infants, children, and adults to protect against preventable diseases.",
    description: "Prevention is at the core of our mission. We provide immunization services aligned with national and international health guidelines to safeguard our Nyagatare community against infectious illnesses.",
    imageId: "triage",
    features: [
      "Routine Childhood Immunizations",
      "Tetanus & Booster Vaccinations",
      "Seasonal & Preventive Shots",
      "Immunization Record Verification"
    ],
    available247: true
  },
  {
    id: "gynecology-obstetrics",
    title: "Gynecology & Obstetrics OPD",
    category: "Specialized Care",
    shortDesc: "Dedicated women's health, antenatal care, maternity counseling, and gynecological disorder management.",
    description: "We provide respectful and confidential care for women at all stages of life. From routine gynecological checkups to obstetrics consultations, antenatal screening, and maternal wellbeing, our team prioritizes safety and comfort.",
    imageId: "gynecology",
    features: [
      "Antenatal & Postnatal Consultations",
      "Gynecological Screening & Checkups",
      "Reproductive Health Advisory",
      "Pelvic Exam & Diagnostic Support"
    ],
    available247: true
  },
  {
    id: "imaging-xray",
    title: "Imaging & X-Ray Services",
    category: "Diagnostics",
    shortDesc: "Modern digital X-ray imaging and radiology support for rapid, accurate diagnosis and early detection.",
    description: "Our radiology unit provides high-resolution X-ray imaging for chest, skeletal, trauma, and abdominal assessments. Imaging works hand-in-hand with our clinicians 24/7 and supports preventive care through early-detection screening.",
    imageId: "xray",
    features: [
      "Digital X-Ray Radiographs",
      "Trauma & Orthopedic Imaging",
      "Chest & Abdominal Imaging",
      "Preventive Early-Detection Screening Support"
    ],
    available247: true
  },
  {
    id: "hospitalization",
    title: "Hospitalization (Inpatient Ward)",
    category: "Inpatient Care",
    shortDesc: "Clean, comfortable inpatient wards with continuous 24/7 medical supervision and nursing care.",
    description: "When patients require overnight observation or multi-day treatment, our hospitalization ward provides a clean, restful healing environment with constant vitals monitoring, medication administration, and physician ward rounds.",
    imageId: "hospitalization",
    features: [
      "24/7 Dedicated Nursing Care",
      "Daily Physician Ward Rounds",
      "Oxygen & Emergency Support Systems",
      "Hygienic, Patient-Centered Rooms"
    ],
    available247: true
  },
  {
    id: "dental",
    title: "Dental Services",
    category: "Specialized Care",
    shortDesc: "Comprehensive dental consultations, pain relief, extractions, and expanding oral health procedures.",
    description: "Our Dental Clinic is expanding! We offer immediate oral health evaluations and urgent care, with a full suite of upcoming specialized dental procedures currently being rolled out for our Nyagatare community.",
    imageId: "dental",
    features: [
      "Oral Health Exam & Consultations",
      "Emergency Tooth Pain Management",
      "Tooth Extractions & Minor Oral Care",
      "Dental Hygiene Advisory"
    ],
    // Special flag requested by user: "Dental(PLAN TO ADD ITS SERVISES LATER LIKE LISTING THEM)"
    isExpandingList: true,
    plannedServices: [
      { name: "Professional Dental Scaling & Polishing", status: "Coming Soon / Ready to List" },
      { name: "Root Canal Therapy (Endodontics)", status: "Coming Soon / Ready to List" },
      { name: "Aesthetic Dental Fillings (Composite)", status: "Coming Soon / Ready to List" },
      { name: "Pediatric Dentistry & Preventive Flouride", status: "Coming Soon / Ready to List" },
      { name: "Dental Prosthetics & Crown Restoration", status: "Coming Soon / Ready to List" },
      { name: "Orthodontic Consultations", status: "Coming Soon / Ready to List" }
    ],
    available247: true
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy & Rehabilitation",
    category: "Rehabilitation",
    shortDesc: "Physical therapy and rehabilitation to restore movement, strength, and independence after injury or illness.",
    description: "Our physiotherapy service helps patients recover mobility, manage pain, and rebuild strength after trauma, surgery, or chronic conditions. We are currently strengthening this department — a dedicated physiotherapist is joining our team soon, and rehabilitation sessions are available by appointment.",
    imageId: "physiotherapy",
    features: [
      "Musculoskeletal Pain & Injury Therapy",
      "Post-Trauma & Post-Surgery Rehabilitation",
      "Mobility & Exercise Therapy",
      "Assistive Recovery Guidance"
    ],
    available247: false
  }
];

// ============================================================================
// MEDICAL TEAM - names only (no personal phone numbers, as decided by clinic).
// Individual staff reachability is handled through Customer Care / Reception.
// ============================================================================
export const MEDICAL_TEAM = [
  {
    id: "james-ndahigwa",
    name: "Dr. James NDAHIGWA",
    role: "Medical Doctor",
    department: "General Medicine",
    imageId: "doctorJames",
    joiningSoon: false
  },
  {
    id: "gapira-shima-patrick",
    name: "Dr. GAPIRA SHIMA PATRICK",
    role: "Medical Doctor",
    department: "General Medicine",
    imageId: "doctorGapira",
    joiningSoon: false
  },
  {
    id: "dieu-donne",
    name: "Dr. DIEU DONNE",
    role: "Medical Doctor",
    department: "General Medicine",
    imageId: "doctorDieuDonne",
    joiningSoon: false
  },
  {
    id: "kamaseruka-godfrey",
    name: "KAMASERUKA Godfrey",
    role: "Head of Nurses",
    department: "Nursing & Triage",
    imageId: "headOfNurses",
    joiningSoon: false
  },
  {
    id: "teddy-murango",
    name: "Teddy MURANGO",
    role: "Head of Lab Technicians",
    department: "Diagnostic Laboratory",
    imageId: "headOfLab",
    joiningSoon: false
  },
  {
    id: "dr-koloneli",
    name: "Dr. KOLONELI",
    role: "Medical Doctor",
    department: "General Medicine",
    imageId: "doctorKoloneli",
    joiningSoon: true
  },
  {
    id: "dr-theodole",
    name: "Dr. THEODOLE",
    role: "Medical Doctor",
    department: "General Medicine",
    imageId: "doctorTheodole",
    joiningSoon: true
  },
  {
    id: "physiotherapist",
    name: "Physiotherapist",
    role: "Rehabilitation Specialist",
    department: "Physiotherapy",
    imageId: "physiotherapistSlot",
    joiningSoon: true
  }
];

// Patient Flow Chart steps (adapted from the clinic wall chart).
// NEW ORDER as decided by the clinic: TRIAGE COMES FIRST (first-aid mind) -
// vital signs are taken immediately on arrival so critical patients do not
// suffer waiting at reception before registration.
export const FLOWCHART_STEPS = [
  {
    step: 1,
    id: "triage",
    title: "Triage",
    badge: "Step 1 - First Aid Priority",
    color: "bg-yahshua-red text-white",
    borderColor: "border-yahshua-red",
    icon: "Activity",
    description: "Your care begins the moment you arrive. A qualified nurse immediately checks your vital signs — blood pressure, temperature, pulse, and weight — so that critical patients are identified and prioritized right away. First aid comes first at Yahshua: nobody in a serious condition waits at reception.",
    action: "Vital Signs First & Urgency Priority"
  },
  {
    step: 2,
    id: "reception",
    title: "Reception",
    badge: "Step 2 - Welcome & Registration",
    color: "bg-gray-800 text-white",
    borderColor: "border-gray-800",
    icon: "ClipboardList",
    description: "After triage, our receptionists register your details, assist with insurance or file creation, and prepare your electronic patient record for the consultation departments.",
    action: "Patient Registration & File Check-in"
  },
  {
    step: 3,
    id: "consultation",
    title: "Consultation Departments",
    badge: "Step 3 - Doctor Consultation",
    color: "bg-yahshua-blue text-white",
    borderColor: "border-yahshua-blue",
    icon: "Stethoscope",
    description: "You are directed to the appropriate specialized department for a thorough medical examination and diagnosis:",
    departments: [
      { name: "General Medicine", icon: "Stethoscope", desc: "Primary care & general OPD" },
      { name: "Gynecology", icon: "Heart", desc: "Women's health & obstetrics" },
      { name: "Pediatrics", icon: "Baby", desc: "Infants, children & adolescents" },
      { name: "Dental", icon: "Smile", desc: "Oral health & emergency dental" }
    ],
    action: "Diagnosis, Test Requisitions & Prescription"
  },
  {
    step: 4,
    id: "cashier",
    title: "Cashier / Central Desk",
    badge: "Step 4 - Central Verification",
    color: "bg-yahshua-red text-white",
    borderColor: "border-yahshua-red",
    icon: "CreditCard",
    description: "The Cashier desk acts as the central hub of our clinic flow. Here you verify your consultation, laboratory test fees, or treatment prescriptions before proceeding to care delivery.",
    action: "Payment & Service Verification"
  },
  {
    step: 5,
    id: "treatment",
    title: "Treatment & Diagnostic Care",
    badge: "Step 5 - Care Delivery",
    color: "bg-yahshua-green text-white",
    borderColor: "border-yahshua-green",
    icon: "Syringe",
    description: "Depending on your doctor's orders, you proceed to our specialized care rooms:",
    departments: [
      { name: "Laboratory", icon: "TestTube", desc: "Blood, urine & rapid diagnostic testing" },
      { name: "Nursing Service", icon: "HeartHandshake", desc: "Injections, IV therapy & dressings" },
      { name: "Minor Surgery", icon: "Scissors", desc: "Suturing, dressings & surgical procedures" }
    ],
    action: "Laboratory Analysis, Procedures & Recovery"
  }
];

export const RWANDA_CLINIC_FAQ = [
  {
    question: "Is YAHSHUA MEDICAL CLINICS LTD open 24 hours a day?",
    answer: "Yes! We operate 24 hours a day, 7 days a week, including weekends and public holidays. Our emergency triage, general medicine, laboratory, and nursing services are always open."
  },
  {
    question: "Where is the clinic located in Nyagatare?",
    answer: "We are conveniently located at EN 58 ST, Nyagatare, Eastern Province, Rwanda. You can easily reach us or find us on Google Maps via the link on our website."
  },
  {
    question: "How can I contact Customer Care or Reception?",
    answer: "You can reach Customer Care at 0788891012 (+250 788 891 012), our Reception at 0794746337 (+250 794 746 337), or chat with us on WhatsApp at 0788663250 (+250 788 663 250)."
  },
  {
    question: "What dental services are offered, and what is planned for the future?",
    answer: "We currently provide emergency dental examinations, pain management, and tooth extractions. We are actively expanding our Dental department to include professional scaling and polishing, root canals, aesthetic fillings, crown restorations, and orthodontic consultations!"
  },
  {
    question: "How does the Patient Flow work at Yahshua Medical Clinics?",
    answer: "Our patient flow follows 5 streamlined steps, with vital signs taken FIRST: 1) Triage vital signs (first-aid priority) -> 2) Reception registration -> 3) Specialist Consultation (General Medicine, Gynecology, Pediatrics, or Dental) -> 4) Cashier verification -> 5) Laboratory, Nursing Service, or Minor Surgery. Taking vital signs first means critical patients are never left waiting."
  }
];
