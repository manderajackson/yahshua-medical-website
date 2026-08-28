import React, { useState } from 'react';
import { 
  Activity, 
  ClipboardList, 
  Heart, 
  Baby, 
  Smile, 
  CreditCard, 
  TestTube, 
  Syringe, 
  Scissors, 
  Clock, 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  Info, 
  Camera, 
  ShieldAlert, 
  Stethoscope 
} from 'lucide-react';
import { CLINIC_INFO, FLOWCHART_STEPS } from '../data/clinicData';
import { getImageUrl, handleImageError } from '../utils/imageRegistry';

export default function FlowChartPage({ 
  onOpenBookingModal, 
  onOpenPhotoManager, 
  customImages 
}) {
  const [activeStepId, setActiveStepId] = useState('triage');

  const activeStep = FLOWCHART_STEPS.find(s => s.id === activeStepId) || FLOWCHART_STEPS[0];

  return (
    <div className="space-y-16 pb-16">
      
      {/* PAGE HEADER */}
      <section className="bg-gradient-to-r from-gray-900 via-yahshua-blue-dark to-yahshua-blue text-white py-14 px-4 sm:px-6 rounded-b-3xl shadow-lg relative overflow-hidden">
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
            <Activity className="w-4 h-4 text-yahshua-green mr-1" />
            <span>24/7 Orderly Clinical Navigation</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Official Patient Flow Chart
          </h1>
          <p className="text-sm sm:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Based on our wall display at YAHSHUA MEDICAL CLINICS LTD in Nyagatare. Our structured 5-step journey ensures every patient receives rapid, coordinated care.
          </p>
        </div>
      </section>

      {/* INTERACTIVE FLOWCHART DIAGRAM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-yahshua-blue bg-yahshua-blue-light px-3 py-1 rounded-full">
            Interactive Visual Guide
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
            How Your Visit Flows at Yahshua
          </h2>
          <p className="text-sm text-gray-600">
            Click on any step or department below to learn what happens during your visit:
          </p>
          <div className="mt-4 inline-flex items-center bg-yahshua-red/10 border border-yahshua-red/30 text-yahshua-red-dark text-xs font-bold px-4 py-2 rounded-full">
            <ShieldAlert className="w-4 h-4 mr-2 text-yahshua-red" />
            Vital Signs First — First Aid Priority: critical patients are triaged immediately on arrival, before registration.
          </div>
        </div>

        {/* 5-Step Interactive Diagram */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-gray-100 space-y-8">
          
          {/* Top Step Pill Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-6 border-b border-gray-100">
            {FLOWCHART_STEPS.map((step) => {
              const isActive = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center ${
                    isActive
                      ? 'bg-yahshua-blue text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center mr-2 font-extrabold ${
                    isActive ? 'bg-white text-yahshua-blue' : 'bg-gray-300 text-gray-700'
                  }`}>
                    {step.step}
                  </span>
                  <span>{step.title}</span>
                </button>
              );
            })}
          </div>

          {/* Flow Visual Tree (Inspired by user's flow chart.JPG) */}
          <div className="max-w-4xl mx-auto py-4">
            <div className="flex flex-col items-center space-y-4">
              
              {/* STEP 1: TRIAGE (VITAL SIGNS FIRST - first aid priority) */}
              <button
                onClick={() => setActiveStepId('triage')}
                className={`w-64 py-3 px-6 rounded-xl text-center font-extrabold text-sm shadow-md transition transform ${
                  activeStepId === 'triage'
                    ? 'bg-yahshua-red text-white ring-4 ring-yahshua-red/30 scale-105'
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                1. TRIAGE (VITAL SIGNS)
              </button>

              <ArrowDown className="w-5 h-5 text-gray-400" />

              {/* STEP 2: RECEPTION */}
              <button
                onClick={() => setActiveStepId('reception')}
                className={`w-64 py-3 px-6 rounded-xl text-center font-extrabold text-sm shadow-md transition transform ${
                  activeStepId === 'reception'
                    ? 'bg-gray-900 text-white ring-4 ring-gray-700/30 scale-105'
                    : 'bg-gray-800 text-white hover:bg-gray-900'
                }`}
              >
                2. RECEPTION
              </button>

              {/* Arrows branching from consultation to departments */}
              <div className="w-full flex justify-center py-2">
                <div className="w-4/5 border-t-2 border-gray-300 relative flex justify-between">
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                </div>
              </div>

              {/* STEP 3: CONSULTATION DEPARTMENTS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                {[
                  { name: "GENERAL MEDICINE", color: "bg-gray-800 text-white" },
                  { name: "CASHIER (CENTER)", color: "bg-yahshua-red text-white font-extrabold" },
                  { name: "GYNECOLOGY", color: "bg-purple-900 text-white" },
                  { name: "PEDIATRICS / DENTAL", color: "bg-yahshua-blue text-white" }
                ].map((dep, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStepId(idx === 1 ? 'cashier' : 'consultation')}
                    className={`py-3 px-3 rounded-xl text-center font-bold text-xs shadow-sm transition hover:scale-105 ${dep.color}`}
                  >
                    {dep.name}
                  </button>
                ))}
              </div>

              <ArrowDown className="w-5 h-5 text-gray-400" />

              {/* STEP 4: CASHIER CENTER HUB */}
              <button
                onClick={() => setActiveStepId('cashier')}
                className={`w-44 h-44 rounded-full flex flex-col items-center justify-center font-extrabold text-white text-base shadow-xl transition transform ${
                  activeStepId === 'cashier'
                    ? 'bg-yahshua-red ring-8 ring-yahshua-red/30 scale-105'
                    : 'bg-yahshua-red hover:bg-yahshua-red-dark'
                }`}
              >
                <CreditCard className="w-6 h-6 mb-1" />
                <span>CASHIER</span>
                <span className="text-[10px] font-normal text-red-100 mt-0.5">Central Hub</span>
              </button>

              {/* Arrows branching down to treatment */}
              <div className="w-full flex justify-center py-2">
                <div className="w-3/5 border-t-2 border-gray-300 relative flex justify-between">
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                  <div className="w-0.5 h-4 bg-gray-300"></div>
                </div>
              </div>

              {/* STEP 5: CARE DELIVERY DEPARTMENTS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
                {[
                  { name: "NURSING SERVICE", color: "bg-yahshua-blue-dark text-white" },
                  { name: "LABORATORY", color: "bg-yahshua-green text-white" },
                  { name: "MINOR SURGERY", color: "bg-cyan-700 text-white" }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStepId('treatment')}
                    className={`py-3 px-4 rounded-xl text-center font-bold text-xs shadow transition hover:scale-105 ${item.color}`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Active Step Details Panel */}
          <div className="bg-yahshua-blue-light/60 border border-yahshua-blue/20 rounded-2xl p-6 sm:p-8 mt-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-yahshua-blue/20">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-yahshua-blue bg-white px-3 py-1 rounded-full shadow-sm">
                  {activeStep.badge}
                </span>
                <h3 className="text-2xl font-extrabold text-gray-900 mt-2">
                  {activeStep.title}
                </h3>
              </div>
              <div className="text-xs font-bold text-yahshua-green bg-white px-3.5 py-1.5 rounded-xl border border-yahshua-green/30 shadow-sm self-start sm:self-auto">
                {activeStep.action}
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {activeStep.description}
            </p>

            {/* If step has sub-departments */}
            {activeStep.departments && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
                {activeStep.departments.map((dep, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-sm text-gray-900">{dep.name}</h4>
                    <p className="text-xs text-gray-600 mt-1">{dep.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* OFFICIAL CLINIC WALL CHART SIGN PHOTO DISPLAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-yahshua-green bg-yahshua-green-light px-3 py-1 rounded-full border border-yahshua-green/30">
                Official Clinic Wall Sign
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Authentic Patient Flow Chart Mounted at Our Clinic
              </h2>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                When you visit YAHSHUA MEDICAL CLINICS LTD in Nyagatare, you will see this exact flowchart mounted in our waiting area. It serves to reassure our patients that every step of care is systematic and accountable.
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-yahshua-green" />
                  <span>Clear arrows showing direct pathways to specialists</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-yahshua-green" />
                  <span>Centralized cashier for transparent billing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-yahshua-green" />
                  <span>Rapid triage for children and emergency patients</span>
                </li>
              </ul>

              <div className="pt-3">
                <button
                  onClick={onOpenPhotoManager}
                  className="inline-flex items-center text-xs font-semibold text-yahshua-blue bg-yahshua-blue-light hover:bg-yahshua-blue-light/80 px-4 py-2.5 rounded-xl border border-yahshua-blue/30 transition"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  <span>Manage / Replace Chart Sign Photo</span>
                </button>
              </div>
            </div>

            {/* Actual Uploaded Flowchart Poster Image */}
            <div className="lg:col-span-6">
              <div className="bg-gray-900 p-3 rounded-3xl shadow-xl border border-gray-800">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-white flex items-center justify-center group">
                  <img
                    src={getImageUrl('flowChart', customImages)}
                    alt="Official Patient Flow Chart Sign"
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition duration-500"
                    onError={(e) => handleImageError(e, 'flowChart')}
                  />
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-lg">
                    24/7 Patient Flow Chart • Nyagatare
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900">
            Frequently Asked Questions About Your Visit
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            Answers to common questions from our Nyagatare community
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Why are vital signs taken before registration at Reception?",
              a: "First aid comes first at Yahshua. A nurse checks your vital signs immediately on arrival so that critical or emergency patients are identified and prioritized without waiting — registration follows right after at Reception."
            },
            {
              q: "Do I need an appointment before arriving?",
              a: "No! Walk-ins are welcome 24/7. You will be received at Triage for vital signs, registered at Reception, and guided to the right department. You can also schedule a specific consultation using our online appointment form or WhatsApp."
            },
            {
              q: "How does the Cashier desk integrate into the flow?",
              a: "After your doctor's consultation, the Cashier desk acts as our central hub to verify laboratory requisitions or treatment prescriptions before care is administered."
            },
            {
              q: "Are emergency patients prioritized at Triage?",
              a: "Yes. Because triage is the very first step of our flow, urgent or critical cases are detected the moment a patient walks in and receive attention without delay."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="font-bold text-gray-900 text-sm">{faq.q}</h4>
              <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
