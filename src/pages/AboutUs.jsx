import React from 'react';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  Zap, 
  Smile, 
  Users, 
  Target, 
  Activity, 
  CheckCircle, 
  MapPin, 
  Clock, 
  Camera, 
  Calendar 
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_VALUES } from '../data/clinicData';
import { getImageUrl, handleImageError } from '../utils/imageRegistry';

export default function AboutUs({ 
  onOpenBookingModal, 
  onOpenPhotoManager, 
  customImages 
}) {
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
            <span>About YAHSHUA MEDICAL CLINICS LTD</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Creating Healthy and Happy Neighborhoods
          </h1>
          <p className="text-sm sm:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Operating in Nyagatare, Eastern Province since May 2023, we provide 24/7 preventive, diagnostic, and curative healthcare to our community.
          </p>
        </div>
      </section>

      {/* WHO WE ARE & OUR STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-yahshua-blue bg-yahshua-blue-light px-3 py-1 rounded-full">
              Our Identity
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              A Trusted Partner for Health in Nyagatare, Eastern Province
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              <strong className="text-yahshua-blue">YAHSHUA MEDICAL CLINICS LTD</strong> has aims of providing the highest quality of care in preventive, diagnostic and curative medicine thereby creating healthy and happy neighborhoods.
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We have been operating since <strong>May 2023</strong> and are located at <strong>EN 58 ST, Nyagatare, Eastern Province</strong>. We are actively expanding our facilities and services—including our dental procedures and outpatient specialties—to ensure that every patient receives prompt, dignified, and affordable care 24 hours a day, 7 days a week.
            </p>

            {/* Quick check points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-gray-800">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-yahshua-green flex-shrink-0" />
                <span>We Work 24/7 (365 Days a Year)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-yahshua-green flex-shrink-0" />
                <span>Patient-Centered Clinical Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-yahshua-green flex-shrink-0" />
                <span>Modern Diagnostic & X-Ray Technology</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-yahshua-green flex-shrink-0" />
                <span>Experienced Rwandan Medical Specialists</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBookingModal}
                className="bg-yahshua-green hover:bg-yahshua-green-dark text-white font-bold text-sm px-6 py-3 rounded-xl shadow transition"
              >
                Book An Appointment
              </button>
              <a
                href={CLINIC_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-sm px-5 py-3 rounded-xl border border-gray-300 transition flex items-center"
              >
                <MapPin className="w-4 h-4 mr-2 text-yahshua-red" />
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Reception & Logo preview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-4 rounded-3xl shadow-card border border-gray-100">
              <div className="relative h-64 rounded-2xl overflow-hidden bg-gray-100 mb-3 group">
                <img
                  src={getImageUrl('reception', customImages)}
                  alt="Yahshua 24/7 Reception Desk"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => handleImageError(e, 'reception')}
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-yahshua-blue text-xs font-bold px-3 py-1 rounded-full shadow">
                  24/7 Reception Desk • Step 2
                </div>
              </div>
              <p className="text-xs text-gray-500 text-center">
                After triage vital signs, our welcoming reception ensures rapid registration and assistance.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* MISSION, VISION & AIMS CARDS */}
      <section className="bg-yahshua-blue-light/50 py-16 border-y border-yahshua-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Aim */}
            <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 space-y-4 relative overflow-hidden group hover:shadow-card-hover transition">
              <div className="w-14 h-14 rounded-2xl bg-yahshua-blue text-white flex items-center justify-center font-bold">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Our Aim
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                YAHSHUA MEDICAL CLINICS LTD has aims of providing the highest quality of care in preventive, diagnostic and curative medicine thereby creating healthy and happy neighborhoods.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 space-y-4 relative overflow-hidden group hover:shadow-card-hover transition">
              <div className="w-14 h-14 rounded-2xl bg-yahshua-green text-white flex items-center justify-center font-bold">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                YAHSHUA MEDICAL CLINICS LTD is committed in providing affordable quality healthcare.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 space-y-4 relative overflow-hidden group hover:shadow-card-hover transition">
              <div className="w-14 h-14 rounded-2xl bg-yahshua-blue-dark text-white flex items-center justify-center font-bold">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Our Vision
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                YAHSHUA MEDICAL CLINICS LTD is committed to providing patient centered healthcare with excellence in quality and access.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES DETAIL SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-yahshua-green bg-yahshua-green-light px-3 py-1 rounded-full border border-yahshua-green/30">
            What Defines Us
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
            Our Core Values
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            At YAHSHUA MEDICAL CLINICS LTD, our entire clinical team is inspired by these eight principles:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINIC_VALUES.map((val, idx) => (
            <div
              key={val.id}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-extrabold text-yahshua-blue bg-yahshua-blue-light px-2.5 py-1 rounded-full">
                    #0{idx + 1}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-yahshua-green-light text-yahshua-green flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-yahshua-blue transition">
                  {val.title}
                </h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-[11px] text-gray-500 font-medium">
                <span>Inspired by Yahshua Medical Clinics</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FACILITY & PHOTO GALLERY PREVIEW */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-yahshua-blue bg-yahshua-blue-light px-3 py-1 rounded-full">
                Our Medical Center
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                Designed for Safety, Comfort & Speed
              </h2>
              <p className="text-sm text-gray-600 mt-1 max-w-xl">
                Take a look at our clinical departments in Nyagatare. You can replace these images at any time using our built-in Photo Manager.
              </p>
            </div>

            <button
              onClick={onOpenPhotoManager}
              className="inline-flex items-center bg-gray-900 hover:bg-black text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition shadow-sm self-start sm:self-auto"
            >
              <Camera className="w-4 h-4 mr-2 text-yahshua-green" />
              <span>📸 Manage / Upload Custom Photos</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 group">
              <div className="relative h-48 bg-gray-100">
                <img
                  src={getImageUrl('triage', customImages)}
                  alt="Triage Room"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => handleImageError(e, 'triage')}
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  Triage & Vitals • Step 1
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900 text-sm">Triage & Assessment</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Rapid vital-signs prioritization for emergency and regular patients.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 group">
              <div className="relative h-48 bg-gray-100">
                <img
                  src={getImageUrl('generalMedicine', customImages)}
                  alt="General Medicine Room"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => handleImageError(e, 'generalMedicine')}
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  Doctor Consultation
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900 text-sm">General Medicine Consultations</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Private doctor consultation rooms for thorough examinations and general check-ups.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 group">
              <div className="relative h-48 bg-gray-100">
                <img
                  src={getImageUrl('laboratory', customImages)}
                  alt="24/7 Laboratory"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => handleImageError(e, 'laboratory')}
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  Diagnostic Lab
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900 text-sm">24/7 Diagnostic Lab</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Fast blood work, hematology, and parasitology reports on site.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 group">
              <div className="relative h-48 bg-gray-100">
                <img
                  src={getImageUrl('xray', customImages)}
                  alt="X-Ray Radiology"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => handleImageError(e, 'xray')}
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  Radiology & X-Ray
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900 text-sm">Imaging & X-Ray Services</h4>
                <p className="text-xs text-gray-500 mt-1">
                  High-resolution digital X-ray imaging for trauma and diagnostics.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 group">
              <div className="relative h-48 bg-gray-100">
                <img
                  src={getImageUrl('flowChart', customImages)}
                  alt="Official Patient Flow Chart"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => handleImageError(e, 'flowChart')}
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  Patient Flow Chart
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900 text-sm">Official Patient Flow Chart</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Vital signs first at triage, then registration — our first-aid patient journey.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 group">
              <div className="relative h-48 bg-gray-100">
                <img
                  src={getImageUrl('dental', customImages)}
                  alt="Dental Clinic"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => handleImageError(e, 'dental')}
                />
                <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  Dental Clinic • Expanding
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900 text-sm">Dental Services</h4>
                <p className="text-xs text-gray-500 mt-1">
                  Oral health care today, with a full specialized dental rollout coming soon.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
