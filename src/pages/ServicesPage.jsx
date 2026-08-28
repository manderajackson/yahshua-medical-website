import React, { useState } from 'react';
import { 
  Clock, 
  CheckCircle, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Camera, 
  Search, 
  Smile, 
  Sparkles, 
  PlusCircle,
  HeartPulse
} from 'lucide-react';
import { CLINIC_SERVICES, CLINIC_INFO } from '../data/clinicData';
import { getImageUrl, handleImageError } from '../utils/imageRegistry';

export default function ServicesPage({ 
  onOpenBookingModal, 
  onOpenPhotoManager, 
  customImages 
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Primary Care', 'Chronic Care', 'Child Health', 'Surgical Care', 'Diagnostics', 'Preventive Care', 'Specialized Care', 'Inpatient Care', 'Rehabilitation'];

  const filteredServices = CLINIC_SERVICES.filter(srv => {
    const matchesCategory = selectedCategory === 'All' || srv.category === selectedCategory;
    const matchesSearch = srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <span>Our 13 Specialized Healthcare Services</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Comprehensive Healthcare Services
          </h1>
          <p className="text-sm sm:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            YAHSHUA MEDICAL CLINICS LTD prides a wide range of preventive, diagnostic, and curative services operating 24 hours a day, 7 days a week.
          </p>
        </div>
      </section>

      {/* COMPLETE CARE IN ONE CLINIC HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-yahshua-blue-dark via-yahshua-blue to-yahshua-green-dark text-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden">
          <div className="flex items-center space-x-5 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0">
              <HeartPulse className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Complete Care in One Clinic
              </h2>
              <p className="text-sm text-blue-50/90 mt-1 max-w-2xl">
                Doctors, nurses, lab technicians and paramedicals — one coordinated team in Nyagatare, ready for you 24/7.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 relative z-10 flex-shrink-0">
            <span className="bg-white/15 border border-white/25 text-white text-xs font-bold px-3 py-1.5 rounded-full">Triage First</span>
            <span className="bg-white/15 border border-white/25 text-white text-xs font-bold px-3 py-1.5 rounded-full">On-Site Lab & X-Ray</span>
            <span className="bg-yahshua-green text-white text-xs font-bold px-3 py-1.5 rounded-full">24/7 Open</span>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-card border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-yahshua-blue text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search services (e.g. X-Ray, Dental...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-yahshua-blue focus:border-yahshua-blue text-sm outline-none"
            />
          </div>

        </div>
      </section>

      {/* SERVICES LISTING GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((srv) => (
            <div 
              key={srv.id} 
              className="bg-white rounded-3xl shadow-card hover:shadow-card-hover border border-gray-100 overflow-hidden flex flex-col sm:flex-row transition duration-300 group"
            >
              {/* Left Column: Image Card */}
              <div className="sm:w-2/5 relative h-56 sm:h-auto bg-gray-100 overflow-hidden flex-shrink-0">
                <img
                  src={getImageUrl(srv.imageId, customImages)}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => handleImageError(e, srv.imageId)}
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-yahshua-blue text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  {srv.category}
                </div>

                <div className={`absolute bottom-3 left-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow flex items-center ${srv.available247 === false ? 'bg-yahshua-blue' : 'bg-yahshua-green'}`}>
                  {srv.available247 === false ? (
                    <>
                      <Calendar className="w-3 h-3 mr-1" />
                      By Appointment
                    </>
                  ) : (
                    <>
                      <Clock className="w-3 h-3 mr-1" />
                      24/7 Available
                    </>
                  )}
                </div>
              </div>

              {/* Right Column: Detailed Info & Dental Expanding Plan */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-yahshua-blue transition">
                      {srv.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Feature list */}
                  <div className="mt-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Key Capabilities:
                    </div>
                    <ul className="space-y-1.5 text-xs text-gray-700">
                      {srv.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-3.5 h-3.5 mr-2 text-yahshua-green flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SPECIAL SECTION FOR DENTAL AS REQUESTED BY USER */}
                  {srv.isExpandingList && (
                    <div className="mt-4 bg-yahshua-green-light border border-yahshua-green/30 rounded-xl p-3 text-xs">
                      <div className="flex items-center text-yahshua-green-dark font-bold mb-1">
                        <Sparkles className="w-4 h-4 mr-1.5 text-yahshua-green" />
                        <span>Planned & Upcoming Specialized Dental Services:</span>
                      </div>
                      <p className="text-gray-600 text-[11px] mb-2">
                        We are expanding our dental department in Nyagatare to list and offer these comprehensive procedures:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {srv.plannedServices.map((item, index) => (
                          <div key={index} className="flex items-center text-[11px] text-gray-700 bg-white/70 px-2 py-1 rounded border border-yahshua-green/20">
                            <PlusCircle className="w-3 h-3 mr-1 text-yahshua-green flex-shrink-0" />
                            <span className="font-semibold">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer action */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={onOpenPhotoManager}
                    className="text-[11px] text-gray-400 hover:text-yahshua-blue transition underline inline-flex items-center"
                    title="Replace this photo"
                  >
                    <Camera className="w-3.5 h-3.5 mr-1" />
                    Replace Photo
                  </button>

                  <button
                    onClick={onOpenBookingModal}
                    className="bg-yahshua-green hover:bg-yahshua-green-dark text-white font-bold text-xs px-4 py-2 rounded-xl shadow transition flex items-center"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 24/7 EMERGENCY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-700 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider bg-yahshua-red text-white px-3 py-1 rounded-full">
              Urgent Medical Need?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              No Appointment Needed for Walk-In Emergencies
            </h3>
            <p className="text-sm text-gray-300">
              Our Nyagatare clinic triage and emergency room are staffed 24 hours a day. Simply walk in or call our reception team.
            </p>
          </div>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <button
              onClick={onOpenBookingModal}
              className="bg-yahshua-green hover:bg-yahshua-green-dark text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow transition"
            >
              Book Regular Appointment
            </button>
            <a
              href={`tel:${CLINIC_INFO.contacts.customerCare}`}
              className="bg-yahshua-blue hover:bg-yahshua-blue-dark text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow transition"
            >
              Call: {CLINIC_INFO.contacts.customerCare}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
