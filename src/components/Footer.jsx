import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  MessageSquare, 
  Heart, 
  ArrowRight, 
  ShieldCheck, 
  Camera 
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_SERVICES } from '../data/clinicData';
import { getImageUrl, handleImageError } from '../utils/imageRegistry';

export default function Footer({ 
  setActiveTab, 
  onOpenPhotoManager, 
  onOpenBookingModal,
  customImages 
}) {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 relative overflow-hidden">
      {/* Background Subtle Logo Watermark */}
      <div 
        className="absolute -right-20 -bottom-20 w-96 h-96 opacity-5 pointer-events-none select-none"
        aria-hidden="true"
      >
        <img 
          src={getImageUrl('logo', customImages)} 
          alt="" 
          className="w-full h-full object-contain"
          onError={(e) => handleImageError(e, 'logo')}
        />
      </div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 border-2 border-yahshua-green">
                <img 
                  src={getImageUrl('logo', customImages)} 
                  alt="YAHSHUA MEDICAL CLINICS LTD Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => handleImageError(e, 'logo')}
                />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-lg leading-tight">
                  YAHSHUA MEDICAL CLINICS LTD
                </h3>
                <span className="text-xs text-yahshua-green font-semibold">
                  ESTABLISHED MAY 2023
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              {CLINIC_INFO.aboutUs}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center bg-yahshua-blue/20 text-yahshua-blue-light border border-yahshua-blue/40 px-3 py-1.5 rounded-full text-xs font-semibold">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-yahshua-red animate-pulse" />
                We Work 24/7 (24 Hours, 7 Days a Week)
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links & Flow Chart */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-l-4 border-yahshua-green pl-2">
              Navigation & Guide
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => { setActiveTab('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                  className="hover:text-yahshua-green transition flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-yahshua-green" />
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('about'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                  className="hover:text-yahshua-green transition flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-yahshua-green" />
                  About Our Clinic
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('services'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                  className="hover:text-yahshua-green transition flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-yahshua-green" />
                  All Specialized Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('flowchart'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                  className="hover:text-yahshua-green transition flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-yahshua-green" />
                  Patient Flow Chart & Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('doctors'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                  className="hover:text-yahshua-green transition flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-yahshua-green" />
                  Doctors & Specialists
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('contact'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                  className="hover:text-yahshua-green transition flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-yahshua-green" />
                  Contact & Directions
                </button>
              </li>
              <li className="pt-2">
                <button 
                  onClick={onOpenPhotoManager}
                  className="inline-flex items-center text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 py-1.5 px-3 rounded-lg border border-gray-700"
                >
                  <Camera className="w-3.5 h-3.5 mr-1.5 text-yahshua-green" />
                  📸 Replace / Manage Photos
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialized Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-l-4 border-yahshua-blue pl-2">
              Healthcare Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {CLINIC_SERVICES.slice(0, 6).map((srv) => (
                <li key={srv.id} className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-yahshua-blue mr-2"></span>
                  <button 
                    onClick={() => {
                      setActiveTab('services');
                      window.scrollTo({top: 0, behavior: 'smooth'});
                    }}
                    className="hover:text-white transition text-left"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button 
                  onClick={() => {
                    setActiveTab('services');
                    window.scrollTo({top: 0, behavior: 'smooth'});
                  }}
                  className="text-yahshua-green font-semibold hover:underline text-xs"
                >
                  + View All 13 Specialized Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts & Address */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-l-4 border-yahshua-red pl-2">
              24/7 Contact Numbers
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-3 text-yahshua-green mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-400">Customer Care Number:</div>
                  <a 
                    href={`tel:${CLINIC_INFO.contacts.customerCare}`}
                    className="text-white font-semibold hover:text-yahshua-green"
                  >
                    {CLINIC_INFO.formattedContacts.customerCare}
                  </a>
                </div>
              </li>

              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-3 text-yahshua-blue mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-400">Reception Desk:</div>
                  <a 
                    href={`tel:${CLINIC_INFO.contacts.reception}`}
                    className="text-white font-semibold hover:text-yahshua-blue-light"
                  >
                    {CLINIC_INFO.formattedContacts.reception}
                  </a>
                </div>
              </li>

              <li className="flex items-start">
                <MessageSquare className="w-4 h-4 mr-3 text-yahshua-green mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-400">WhatsApp Official:</div>
                  <a 
                    href={`https://wa.me/250${CLINIC_INFO.contacts.whatsapp.replace(/^0/, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-yahshua-green"
                  >
                    {CLINIC_INFO.formattedContacts.whatsapp}
                  </a>
                </div>
              </li>

              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-3 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-400">Email Contact:</div>
                  <a 
                    href={`mailto:${CLINIC_INFO.contacts.email}`}
                    className="text-white font-semibold hover:underline text-xs"
                  >
                    {CLINIC_INFO.contacts.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start pt-2">
                <MapPin className="w-4 h-4 mr-3 text-yahshua-red mt-1 flex-shrink-0" />
                <div>
                  <div className="text-xs text-gray-400">Location:</div>
                  <a 
                    href={CLINIC_INFO.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:underline"
                  >
                    {CLINIC_INFO.location}
                  </a>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Watermark Notice */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} YAHSHUA MEDICAL CLINICS LTD. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Operating in Nyagatare, Rwanda since May 2023.</span>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={onOpenPhotoManager} 
              className="hover:text-yahshua-green transition underline"
            >
              How to Upload Custom Photos
            </button>
            <span>•</span>
            <span className="text-yahshua-green font-semibold">24/7 Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
