import React, { useState } from 'react';
import { MessageSquare, Phone, Clock, X, HelpCircle, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { getImageUrl, handleImageError } from '../utils/imageRegistry';

export default function FloatingWatermark({ customImages, onOpenBookingModal }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {/* 1. Subtle Global Background Watermark - Present on every page */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden opacity-[0.035] select-none"
        aria-hidden="true"
      >
        <img 
          src={getImageUrl('logo', customImages)} 
          alt="" 
          className="w-[85vw] max-w-[800px] object-contain rotate-[-10deg] filter grayscale"
          onError={(e) => handleImageError(e, 'logo')}
        />
      </div>

      {/* 2. Floating Bottom-Left Official Brand Emblem & Watermark Badge */}
      <div className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center bg-white/95 backdrop-blur-md border border-yahshua-blue/20 shadow-lg rounded-full py-1.5 px-3 space-x-2 transition-all duration-300 hover:scale-105 group">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-yahshua-green flex-shrink-0 bg-white">
          <img 
            src={getImageUrl('logo', customImages)} 
            alt="Yahshua Logo Watermark" 
            className="w-full h-full object-contain p-0.5"
            onError={(e) => handleImageError(e, 'logo')}
          />
        </div>
        <div className="text-left">
          <div className="text-[10px] uppercase font-extrabold tracking-wider text-yahshua-blue leading-none">
            Yahshua Medical Clinics
          </div>
          <div className="text-[9px] font-semibold text-yahshua-green flex items-center mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-yahshua-red animate-ping inline-block mr-1"></span>
            24/7 OPEN • NYAGATARE
          </div>
        </div>
      </div>

      {/* 3. Floating Bottom-Right WhatsApp & Quick Booking Action */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end space-y-2">
        {showTooltip && (
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 max-w-xs text-xs space-y-2 mb-2 animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <span className="font-bold text-yahshua-blue flex items-center">
                <ShieldCheck className="w-4 h-4 mr-1 text-yahshua-green" />
                24/7 Patient Care
              </span>
              <button 
                onClick={() => setShowTooltip(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-600">
              Need immediate assistance or want to book an appointment at our Nyagatare clinic?
            </p>
            <div className="grid grid-cols-1 gap-1.5 pt-1">
              <a 
                href={`https://wa.me/250${CLINIC_INFO.contacts.whatsapp.replace(/^0/, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-yahshua-green hover:bg-yahshua-green-dark text-white py-1.5 px-3 rounded-lg font-semibold transition"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                WhatsApp: {CLINIC_INFO.contacts.whatsapp}
              </a>
              <a 
                href={`tel:${CLINIC_INFO.contacts.customerCare}`}
                className="flex items-center justify-center bg-yahshua-blue hover:bg-yahshua-blue-dark text-white py-1.5 px-3 rounded-lg font-semibold transition"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                Call Care: {CLINIC_INFO.contacts.customerCare}
              </a>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-2">
          {/* Toggle Help Card Button */}
          <button 
            onClick={() => setShowTooltip(!showTooltip)}
            className="w-11 h-11 bg-white hover:bg-gray-50 text-yahshua-blue rounded-full shadow-lg border border-gray-200 flex items-center justify-center transition-transform hover:scale-110"
            title="Need Help? View contacts"
            aria-label="Need Help? View contacts"
          >
            <HelpCircle className="w-6 h-6" />
          </button>

          {/* Instant WhatsApp Floating Button */}
          <a
            href={`https://wa.me/250${CLINIC_INFO.contacts.whatsapp.replace(/^0/, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-yahshua-green hover:bg-yahshua-green-dark text-white font-bold py-3 px-4 rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-0.5 group"
            title="Chat on WhatsApp 24/7"
          >
            <MessageSquare className="w-5 h-5 sm:mr-2 animate-bounce" />
            <span className="hidden sm:inline text-sm">WhatsApp 24/7</span>
          </a>
        </div>
      </div>
    </>
  );
}
