import React from 'react'; 
import { 
  Stethoscope, 
  Award, 
  HeartHandshake, 
  Calendar, 
  ShieldCheck, 
  Camera, 
  CheckCircle, 
  Phone, 
  UserCheck,
  Users,
  Clock,
  BadgeCheck
} from 'lucide-react';
import { CLINIC_INFO, MEDICAL_TEAM } from '../data/clinicData';
import { getImageUrl, handleImageError } from '../utils/imageRegistry';

export default function DoctorsPage({ 
  onOpenBookingModal, 
  onOpenPhotoManager, 
  customImages 
}) {
  const departments = [
    {
      id: "dept-general",
      title: "General Medicine Department",
      role: "Primary Care Physician Team",
      desc: "Our resident physicians provide 24/7 diagnoses, general check-ups, and chronic disease (NCDs) care.",
      imageId: "generalMedicine",
      available247: true
    },
    {
      id: "dept-imaging",
      title: "Imaging & X-Ray Department",
      role: "Radiology & Diagnostic Imaging Team",
      desc: "Digital X-ray imaging for trauma, orthopedic, chest, and abdominal assessments around the clock.",
      imageId: "xray",
      available247: true
    },
    {
      id: "dept-gyn",
      title: "Gynecology & Obstetrics Department",
      role: "Women's Health Specialist Team",
      desc: "Dedicated to maternal safety, antenatal screening, and respectful gynecological OPD consultations.",
      imageId: "gynecology",
      available247: true
    },
    {
      id: "dept-peds",
      title: "Pediatrics & Child Care Department",
      role: "Child Health Clinical Team",
      desc: "Warm, gentle care for infants, toddlers, and children with fevers, infections, or nutritional needs.",
      imageId: "pediatrics",
      available247: true
    },
    {
      id: "dept-dental",
      title: "Dental Care & Oral Health Team",
      role: "Dental Specialist Team (Expanding)",
      desc: "Offering emergency pain relief, extractions, and rolling out root canal, scaling, and orthodontic procedures.",
      imageId: "dental",
      available247: true
    },
    {
      id: "dept-lab",
      title: "24/7 Diagnostic Laboratory Team",
      role: "Lab Technicians & Paramedicals",
      desc: "Around-the-clock hematology, parasitology, and biochemistry analysis with rapid turnarounds.",
      imageId: "laboratory",
      available247: true
    },
    {
      id: "dept-nursing",
      title: "Nursing & Emergency Care Team",
      role: "Registered Nurses, Triage & Paramedical Staff",
      desc: "Ensuring vital-signs triage comes first, comfortable hospitalization, and compassionate bedside care.",
      imageId: "triage",
      available247: true
    },
    {
      id: "dept-physio",
      title: "Physiotherapy & Rehabilitation",
      role: "Rehabilitation Team (Growing)",
      desc: "Restoring movement and strength after injury or surgery — our dedicated physiotherapist is joining soon.",
      imageId: "physiotherapy",
      available247: false
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-yahshua-blue-dark via-yahshua-blue to-yahshua-blue text-white py-14 px-4 sm:px-6 rounded-b-3xl shadow-lg relative overflow-hidden">
        {/* Background watermark */}
        <div 
          className="absolute right-0 top-0 w-96 h-96 opacity-10 pointer-events-none select-none"
          aria-hidden="true"
        >
          <img 
            src={getImageUrl('logo', customImages)} 
            alt="" 
            className="w-full h-full object-contain filter grayscale"
            onError={(e) => handleImageError(e, 'logo')}
          />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <span className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-yahshua-green-light">
            <UserCheck className="w-4 h-4 mr-1 text-yahshua-green" />
            <span>Experienced Rwandan Healthcare Professionals</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Doctors & Medical Team
          </h1>
          <p className="text-sm sm:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            At YAHSHUA MEDICAL CLINICS LTD, our doctors, nurses, lab technicians and paramedicals work 24/7 in Nyagatare to deliver patient-centered excellence.
          </p>
        </div>
      </section>

      {/* MEET OUR MEDICAL TEAM - REAL PHOTOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-yahshua-green bg-yahshua-green-light px-3 py-1 rounded-full border border-yahshua-green/30">
            The Faces of Yahshua
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
            Meet Our Medical Team
          </h2>
          <p className="text-sm text-gray-600">
            Professional, compassionate, and on duty for you — day and night.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEDICAL_TEAM.map((member) => (
            <div
              key={member.id}
              className={`rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition duration-300 group flex flex-col ${
                member.joiningSoon
                  ? 'bg-white border-2 border-dashed border-yahshua-blue/40'
                  : 'bg-white border border-gray-100'
              }`}
            >
              {/* Photo */}
              <div className="relative h-72 bg-gray-100 overflow-hidden">
                <img
                  src={getImageUrl(member.imageId, customImages)}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                  onError={(e) => handleImageError(e, member.imageId)}
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-yahshua-blue text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {member.department}
                </div>
                {member.joiningSoon && (
                  <div className="absolute bottom-3 left-3 bg-yahshua-blue text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow uppercase tracking-wider">
                    Joining Soon
                  </div>
                )}
              </div>

              {/* Details — names & roles only, no personal phone numbers */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-sm leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs text-yahshua-green font-semibold mt-1">
                    {member.role}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center text-[11px] text-gray-500">
                  <BadgeCheck className="w-3.5 h-3.5 mr-1.5 text-yahshua-blue flex-shrink-0" />
                  <span>Reachable via Customer Care: {CLINIC_INFO.contacts.customerCare}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 mt-6 max-w-2xl mx-auto">
          To protect our staff's privacy, personal doctor phone numbers are not published. 
          Please call Customer Care at <strong className="text-yahshua-blue">{CLINIC_INFO.formattedContacts.customerCare}</strong> or Reception at <strong className="text-yahshua-green-dark">{CLINIC_INFO.formattedContacts.reception}</strong> to reach any member of the team.
        </p>
      </section>

      {/* ADMIN NOTE / PHOTO UPLOAD BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-yahshua-green-light/70 border border-yahshua-green/30 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start space-x-3">
            <Camera className="w-6 h-6 text-yahshua-green mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-gray-900 text-sm">
                How to Upload & Replace Team / Department Photos
              </h4>
              <p className="text-xs text-gray-600 mt-0.5">
                Team photos live in <code className="bg-white px-1.5 py-0.5 rounded border border-yahshua-green/30">public/images/team/</code> and department photos in <code className="bg-white px-1.5 py-0.5 rounded border border-yahshua-green/30">public/images/</code> — or test them live using our Photo Manager!
              </p>
            </div>
          </div>
          <button
            onClick={onOpenPhotoManager}
            className="bg-yahshua-green hover:bg-yahshua-green-dark text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow flex items-center flex-shrink-0"
          >
            <Camera className="w-4 h-4 mr-1.5" />
            <span>Open Photo Manager</span>
          </button>
        </div>
      </section>

      {/* DEPARTMENT CLINICAL TEAMS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-yahshua-blue bg-yahshua-blue-light px-3 py-1 rounded-full">
            Specialized Departments
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
            Dedicated Clinical Teams
          </h2>
          <p className="text-sm text-gray-600">
            Each department is led by qualified professionals committed to our core values:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-card hover:shadow-card-hover transition duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Header Image */}
                <div className="relative h-52 bg-gray-100 overflow-hidden">
                  <img
                    src={getImageUrl(dept.imageId, customImages)}
                    alt={dept.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => handleImageError(e, dept.imageId)}
                  />
                  <div className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm ${dept.available247 ? 'bg-white/90 text-yahshua-blue' : 'bg-yahshua-blue'}`}>
                    {dept.available247 ? '24/7 Department' : 'By Appointment'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-bold text-yahshua-green uppercase tracking-wider">
                    {dept.role}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 group-hover:text-yahshua-blue transition">
                    {dept.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {dept.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs text-gray-700">
                    <CheckCircle className="w-4 h-4 mr-2 text-yahshua-green flex-shrink-0" />
                    <span>Compassionate, patient-centered expertise</span>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-gray-500">
                  Nyagatare Clinic
                </span>
                <button
                  onClick={onOpenBookingModal}
                  className="bg-yahshua-blue hover:bg-yahshua-blue-dark text-white font-bold text-xs px-4 py-2 rounded-xl shadow-sm transition"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY OUR TEAM STANDS OUT */}
      <section className="bg-yahshua-blue-light/40 py-16 border-y border-yahshua-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-yahshua-blue-light text-yahshua-blue mx-auto flex items-center justify-center font-bold">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 text-base">Continuous Medical Training</h4>
              <p className="text-xs text-gray-600">
                Our physicians, nurses and lab technicians adhere to evidence-based medical guidelines and preventive protocols.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-yahshua-green-light text-yahshua-green mx-auto flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 text-base">Empathy & Respect</h4>
              <p className="text-xs text-gray-600">
                Inspired by our core values, our team listens carefully and treats every patient like family.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-yahshua-red mx-auto flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 text-base">24/7 Emergency Ready</h4>
              <p className="text-xs text-gray-600">
                Whether day or night, a qualified medical doctor and nurse are always present on duty.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
