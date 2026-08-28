import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  Phone, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  Zap, 
  Smile, 
  Users, 
  CheckCircle, 
  Activity, 
  Stethoscope, 
  Heart, 
  Baby, 
  TestTube, 
  Camera,
  Play,
  Video as VideoIcon,
  Upload,
  Handshake
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_VALUES, CLINIC_SERVICES, FLOWCHART_STEPS } from '../data/clinicData';
import { getImageUrl, handleImageError } from '../utils/imageRegistry';

export default function Home({ 
  setActiveTab, 
  onOpenBookingModal, 
  onOpenPhotoManager, 
  customImages 
}) {
  const [ceremonyVideoUrl, setCeremonyVideoUrl] = useState(null);
  const [ceremonyVideoMissing, setCeremonyVideoMissing] = useState(false);

  const handleCeremonyVideoTest = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (ceremonyVideoUrl) URL.revokeObjectURL(ceremonyVideoUrl);
    const url = URL.createObjectURL(file);
    setCeremonyVideoUrl(url);
    setCeremonyVideoMissing(false);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-yahshua-blue-dark via-yahshua-blue to-yahshua-blue text-white overflow-hidden rounded-b-3xl sm:rounded-b-[40px] shadow-xl">
        {/* Subtle watermark in hero background */}
        <div 
          className="absolute -right-24 -top-24 w-96 h-96 opacity-10 pointer-events-none select-none"
          aria-hidden="true"
        >
          <img 
            src={getImageUrl('logo', customImages)} 
            alt="" 
            className="w-full h-full object-contain filter grayscale"
            onError={(e) => handleImageError(e, 'logo')}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headline & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-yahshua-green-light">
                <span className="w-2 h-2 rounded-full bg-yahshua-green animate-ping"></span>
                <span>24/7 Service • Est. May 2023 • Nyagatare, Rwanda</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Modern, Compassionate <br className="hidden sm:inline" />
                <span className="text-yahshua-green-light">24/7 Healthcare</span> in Nyagatare.
              </h1>

              <p className="text-sm sm:text-lg text-blue-100 max-w-2xl leading-relaxed">
                <strong className="text-white">YAHSHUA MEDICAL CLINICS LTD</strong> aims to provide the highest quality of care in preventive, diagnostic and curative medicine—thereby creating healthy and happy neighborhoods.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenBookingModal}
                  className="bg-yahshua-green hover:bg-yahshua-green-dark text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition duration-200 flex items-center group"
                >
                  <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition" />
                  <span>Book An Appointment</span>
                </button>

                <button
                  onClick={() => {
                    setActiveTab('flowchart');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white/15 hover:bg-white/25 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/30 transition flex items-center"
                >
                  <Activity className="w-5 h-5 mr-2 text-yahshua-green-light" />
                  <span>Patient Flow Chart</span>
                </button>

                <a
                  href={`tel:${CLINIC_INFO.contacts.customerCare}`}
                  className="bg-yahshua-red hover:bg-yahshua-red-dark text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow transition flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2 animate-bounce" />
                  <span>Call Emergency</span>
                </a>
              </div>

              {/* Trust badges */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-blue-100">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1.5 text-yahshua-green-light" />
                  <span>13 Specialized Services</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1.5 text-yahshua-green-light" />
                  <span>No Appointment Required for Emergencies</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1.5 text-yahshua-green-light" />
                  <span>On-Site 24/7 Laboratory</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card + Photo Preview */}
            <div className="lg:col-span-5">
              <div className="relative bg-white text-gray-800 rounded-3xl shadow-2xl p-6 border border-gray-100 overflow-hidden group">
                {/* Top badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yahshua-green p-0.5 bg-white">
                      <img 
                        src={getImageUrl('logo', customImages)} 
                        alt="Yahshua Logo" 
                        className="w-full h-full object-contain"
                        onError={(e) => handleImageError(e, 'logo')}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm leading-tight">
                        YAHSHUA MEDICAL CLINICS LTD
                      </h4>
                      <span className="text-xs text-yahshua-green font-semibold">
                        Eastern Province • Nyagatare
                      </span>
                    </div>
                  </div>
                  <span className="bg-yahshua-green/10 text-yahshua-green font-bold text-xs px-2.5 py-1 rounded-full border border-yahshua-green/30">
                    24/7 OPEN
                  </span>
                </div>

                {/* Main Hero Clinic Exterior Photo */}
                <div className="relative h-56 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 mb-4">
                  <img
                    src={getImageUrl('clinicExterior', customImages)}
                    alt="Yahshua Medical Clinics Ltd Facility"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => handleImageError(e, 'clinicExterior')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white">
                      <span className="text-[10px] uppercase font-extrabold bg-yahshua-blue px-2 py-0.5 rounded text-white">
                        Our Facility
                      </span>
                      <p className="text-xs font-semibold mt-1">
                        Located at {CLINIC_INFO.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Numbers */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <a
                    href={`tel:${CLINIC_INFO.contacts.customerCare}`}
                    className="bg-yahshua-blue-light/50 hover:bg-yahshua-blue-light p-3 rounded-xl border border-yahshua-blue/20 transition text-center"
                  >
                    <span className="text-gray-500 block">Customer Care:</span>
                    <strong className="text-yahshua-blue font-bold text-sm block mt-0.5">
                      {CLINIC_INFO.formattedContacts.customerCare}
                    </strong>
                  </a>

                  <a
                    href={`tel:${CLINIC_INFO.contacts.reception}`}
                    className="bg-yahshua-green-light hover:bg-yahshua-green/20 p-3 rounded-xl border border-yahshua-green/30 transition text-center"
                  >
                    <span className="text-gray-500 block">Reception Desk:</span>
                    <strong className="text-yahshua-green-dark font-bold text-sm block mt-0.5">
                      {CLINIC_INFO.formattedContacts.reception}
                    </strong>
                  </a>
                </div>

                {/* Photo Manager Prompt */}
                <div className="mt-3 text-center">
                  <button
                    onClick={onOpenPhotoManager}
                    className="inline-flex items-center text-xs text-gray-500 hover:text-yahshua-blue transition underline"
                  >
                    <Camera className="w-3.5 h-3.5 mr-1 text-yahshua-blue" />
                    Replace this photo with your real clinic exterior
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* QUICK STATS / HIGHLIGHTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-100 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-yahshua-blue-light text-yahshua-blue flex items-center justify-center flex-shrink-0 font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-gray-900">24/7</div>
              <div className="text-xs text-gray-500 font-medium">Hours / 7 Days a Week</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-100 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-yahshua-green-light text-yahshua-green flex items-center justify-center flex-shrink-0 font-bold">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-gray-900">May 2023</div>
              <div className="text-xs text-gray-500 font-medium">Serving Nyagatare Since</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-100 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 font-bold">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-gray-900">13+</div>
              <div className="text-xs text-gray-500 font-medium">Specialized Health Services</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-card border border-gray-100 flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-yahshua-red flex items-center justify-center flex-shrink-0 font-bold">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-gray-900">100%</div>
              <div className="text-xs text-gray-500 font-medium">Patient-Centered Care</div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE YAHSHUA - CORE VALUES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-yahshua-blue bg-yahshua-blue-light px-3 py-1 rounded-full">
            Our Inspiration
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
            Inspired by Core Values for Healthy & Happy Neighborhoods
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            At <strong className="text-yahshua-blue">YAHSHUA MEDICAL CLINICS LTD</strong>, every consultation, diagnostic test, and procedure is guided by our eight foundational principles:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CLINIC_VALUES.map((val) => (
            <div
              key={val.id}
              className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-yahshua-blue-light text-yahshua-blue group-hover:bg-yahshua-blue group-hover:text-white flex items-center justify-center mb-3 transition duration-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-base group-hover:text-yahshua-blue transition">
                {val.title}
              </h3>
              <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED HEALTHCARE SERVICES GRID */}
      <section className="bg-gray-100/70 py-16 border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-yahshua-green bg-yahshua-green-light px-3 py-1 rounded-full border border-yahshua-green/30">
                What We Offer 24/7
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                Our Healthcare Services
              </h2>
              <p className="text-sm text-gray-600 mt-1 max-w-xl">
                YAHSHUA MEDICAL CLINICS LTD prides a wide range of preventive, diagnostic and curative healthcare services.
              </p>
            </div>

            <button
              onClick={() => {
                setActiveTab('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center bg-yahshua-blue hover:bg-yahshua-blue-dark text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition shadow-sm self-start sm:self-auto"
            >
              <span>Explore All 13 Services</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLINIC_SERVICES.slice(0, 6).map((srv) => (
              <div 
                key={srv.id} 
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition duration-300 overflow-hidden border border-gray-100 flex flex-col group"
              >
                {/* Image header */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={getImageUrl(srv.imageId, customImages)}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => handleImageError(e, srv.imageId)}
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-yahshua-blue text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {srv.category}
                  </div>
                  {srv.isExpandingList && (
                    <div className="absolute top-3 right-3 bg-yahshua-green text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                      Expanding List
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-yahshua-blue transition">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      {srv.shortDesc}
                    </p>

                    {/* Features bullet list */}
                    <ul className="mt-4 space-y-1.5 text-xs text-gray-700">
                      {srv.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-yahshua-green mr-2 flex-shrink-0"></span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA link */}
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className={`text-[11px] font-semibold flex items-center ${srv.available247 === false ? 'text-yahshua-blue' : 'text-yahshua-green'}`}>
                      {srv.available247 === false ? (
                        <>
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          By Appointment
                        </>
                      ) : (
                        <>
                          <Clock className="w-3.5 h-3.5 mr-1" />
                          24/7 Available
                        </>
                      )}
                    </span>
                    <button
                      onClick={() => {
                        setActiveTab('services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-xs font-bold text-yahshua-blue hover:text-yahshua-blue-dark flex items-center group-hover:translate-x-0.5 transition"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PATIENT FLOW CHART BANNER PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-yahshua-blue-dark text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-700 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-extrabold uppercase bg-yahshua-red text-white px-3 py-1 rounded-full">
                Step-By-Step Patient Guide
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Know Your Visit Journey at Yahshua Medical Clinics
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                We believe in transparent, orderly patient flow with a first-aid mind: your <strong className="text-white">vital signs are taken first at Triage</strong>, followed by registration at <strong className="text-white">Reception</strong>, then specialized <strong className="text-white">General Medicine, Gynecology, Pediatrics, or Dental</strong> consultations — so critical patients are never left waiting.
              </p>

              {/* Step pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {FLOWCHART_STEPS.map((step) => (
                  <div 
                    key={step.step}
                    className="bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center"
                  >
                    <span className="w-5 h-5 rounded-full bg-yahshua-green text-white flex items-center justify-center text-[10px] font-bold mr-2">
                      {step.step}
                    </span>
                    <span>{step.title}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setActiveTab('flowchart');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-yahshua-green hover:bg-yahshua-green-dark text-white font-bold text-sm px-6 py-3 rounded-xl shadow transition inline-flex items-center"
                >
                  <Activity className="w-4 h-4 mr-2" />
                  <span>View Full Interactive Flowchart & Sign Photo</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Right: Flowchart Sign Photo Preview */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 p-3 rounded-2xl border border-white/10 shadow-lg">
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-gray-900 border border-gray-700">
                  <img
                    src={getImageUrl('flowChart', customImages)}
                    alt="Official Yahshua Patient Flow Chart Sign"
                    className="w-full h-full object-contain p-2 hover:scale-105 transition duration-500"
                    onError={(e) => handleImageError(e, 'flowChart')}
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded">
                    Official Wall Display • Nyagatare
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OPENING CEREMONY VIDEO SPACE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            
            {/* Left: Video Player Space */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-lg aspect-video group">
                {!ceremonyVideoMissing || ceremonyVideoUrl ? (
                  <video
                    key={ceremonyVideoUrl || 'default'}
                    controls
                    preload="metadata"
                    poster={getImageUrl('videoPoster', customImages)}
                    className="w-full h-full object-cover"
                    onError={() => setCeremonyVideoMissing(true)}
                  >
                    <source src={ceremonyVideoUrl || "/videos/opening-ceremony.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-yahshua-blue-dark to-yahshua-blue">
                    <img
                      src={getImageUrl('videoPoster', customImages)}
                      alt="Opening Ceremony Video Coming Soon"
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                      onError={(e) => handleImageError(e, 'videoPoster')}
                    />
                    <div className="relative z-10 space-y-3">
                      <div className="w-16 h-16 rounded-full bg-white/20 border border-white/40 flex items-center justify-center mx-auto backdrop-blur-sm">
                        <Play className="w-7 h-7 text-white ml-1" />
                      </div>
                      <p className="text-white font-bold text-sm sm:text-base">
                        Official Opening Ceremony Video
                      </p>
                      <p className="text-blue-100 text-xs">
                        Video space is ready — the ceremony film will be published here soon.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Description + Upload Panel */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-yahshua-red bg-red-50 px-3 py-1 rounded-full border border-yahshua-red/20">
                <VideoIcon className="w-3.5 h-3.5 mr-1.5" />
                Watch Our Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                The Official Opening Ceremony of YAHSHUA MEDICAL CLINICS LTD
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Relive the day our doors opened in Nyagatare — the ceremonies, the community, and the beginning of our 24/7 mission for healthy and happy neighborhoods.
              </p>

              {/* Owner upload panel */}
              <div className="bg-yahshua-blue-light/60 border border-yahshua-blue/20 rounded-2xl p-4 space-y-2.5">
                <div className="flex items-start space-x-2.5">
                  <Upload className="w-4 h-4 text-yahshua-blue mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Clinic owner — upload space:</strong> name your video 
                    <code className="mx-1 bg-white px-1.5 py-0.5 rounded border border-yahshua-blue/30 font-mono text-[11px]">opening-ceremony.mp4</code> 
                    and place it in <code className="bg-white px-1.5 py-0.5 rounded border border-yahshua-blue/30 font-mono text-[11px]">public/videos/</code>, then republish. It plays here automatically.
                  </p>
                </div>
                <label className="inline-flex items-center bg-yahshua-blue hover:bg-yahshua-blue-dark text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-sm transition cursor-pointer">
                  <Upload className="w-3.5 h-3.5 mr-1.5" />
                  <span>{ceremonyVideoUrl ? 'Video Loaded — Playing Above' : 'Test-Preview My Video Now (Session Only)'}</span>
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={handleCeremonyVideoTest}
                  />
                </label>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PARTNERS WE WORK WITH */}
      <section className="bg-gray-100/70 py-16 border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-yahshua-blue bg-yahshua-blue-light px-3 py-1 rounded-full">
              Collaboration
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 flex items-center justify-center gap-3">
              <Handshake className="w-7 h-7 text-yahshua-green" />
              Partners We Work With
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              YAHSHUA MEDICAL CLINICS LTD works hand-in-hand with trusted health partners — insurance schemes, health programs, and community organizations — so our patients receive seamless, affordable care.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {['partner1', 'partner2', 'partner3', 'partner4'].map((pid) => (
              <div
                key={pid}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition group"
              >
                <div className="relative h-36 bg-gray-50 overflow-hidden">
                  <img
                    src={getImageUrl(pid, customImages)}
                    alt="Yahshua Medical Clinics partner"
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition duration-500"
                    onError={(e) => handleImageError(e, pid)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenPhotoManager}
              className="inline-flex items-center text-xs font-semibold text-yahshua-blue bg-white hover:bg-yahshua-blue-light px-4 py-2.5 rounded-xl border border-yahshua-blue/30 transition shadow-sm"
            >
              <Camera className="w-4 h-4 mr-2" />
              <span>Replace Partner Logos via Photo Manager</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center text-xs font-semibold text-white bg-yahshua-green hover:bg-yahshua-green-dark px-4 py-2.5 rounded-xl transition shadow-sm"
            >
              <Handshake className="w-4 h-4 mr-2" />
              <span>Become Our Partner</span>
            </button>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION & APPOINTMENT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-yahshua-blue-light border border-yahshua-blue/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider bg-yahshua-blue text-white px-3 py-1 rounded-full">
              We Work 24/7
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-yahshua-blue">
              Need Consultations, Minor Surgery, or Emergency Care?
            </h2>
            <p className="text-sm sm:text-base text-gray-700">
              Visit <strong className="text-gray-900">YAHSHUA MEDICAL CLINICS LTD</strong> at EN 58 ST, Nyagatare, Eastern Province, or contact our Customer Care team anytime.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenBookingModal}
                className="bg-yahshua-green hover:bg-yahshua-green-dark text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition"
              >
                Book An Appointment
              </button>

              <a
                href={`tel:${CLINIC_INFO.contacts.customerCare}`}
                className="bg-yahshua-blue hover:bg-yahshua-blue-dark text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow transition flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Call Care: {CLINIC_INFO.contacts.customerCare}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
