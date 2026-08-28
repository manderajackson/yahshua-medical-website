import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  MessageSquare, 
  Calendar, 
  Camera, 
  ShieldAlert, 
  CheckCircle2 
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { getImageUrl, handleImageError } from '../utils/imageRegistry';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  onOpenPhotoManager, 
  onOpenBookingModal,
  customImages 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'flowchart', label: 'Patient Flow Chart' },
    { id: 'doctors', label: 'Doctors & Team' },
    { id: 'contact', label: 'Contact & Book' }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      {/* Top Emergency & Info Bar */}
      <div className="bg-yahshua-blue text-white text-xs sm:text-sm py-2 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: 24/7 Status & Location */}
          <div className="flex items-center space-x-4">
            <span className="flex items-center font-bold bg-yahshua-red text-white px-2.5 py-0.5 rounded-full text-xs shadow-sm animate-pulse">
              <Clock className="w-3.5 h-3.5 mr-1" />
              24/7 OPEN
            </span>
            <a 
              href={CLINIC_INFO.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center hover:underline text-yahshua-blue-light"
            >
              <MapPin className="w-3.5 h-3.5 mr-1 text-yahshua-green" />
              {CLINIC_INFO.location}
            </a>
          </div>

          {/* Right: Phone Numbers & WhatsApp */}
          <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-xs">
            <a 
              href={`tel:${CLINIC_INFO.contacts.customerCare}`}
              className="flex items-center hover:text-yahshua-green-light transition"
              title="Customer Care Number"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-yahshua-green" />
              <span className="font-semibold">Customer Care:</span>&nbsp;{CLINIC_INFO.contacts.customerCare}
            </a>

            <a 
              href={`tel:${CLINIC_INFO.contacts.reception}`}
              className="hidden md:flex items-center hover:text-yahshua-green-light transition"
              title="Reception Number"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-yahshua-green" />
              <span className="font-semibold">Reception:</span>&nbsp;{CLINIC_INFO.contacts.reception}
            </a>

            <a 
              href={`https://wa.me/250${CLINIC_INFO.contacts.whatsapp.replace(/^0/, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-yahshua-green hover:bg-yahshua-green-dark text-white px-2 py-0.5 rounded font-medium transition shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1" />
              WhatsApp: {CLINIC_INFO.contacts.whatsapp}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo & Clinic Name */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 group text-left focus:outline-none"
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-yahshua-green shadow-md flex-shrink-0 bg-white">
            <img 
              src={getImageUrl('logo', customImages)} 
              alt="YAHSHUA MEDICAL CLINICS LTD Logo" 
              className="w-full h-full object-contain p-0.5 group-hover:scale-105 transition duration-300"
              onError={(e) => handleImageError(e, 'logo')}
            />
          </div>
          <div>
            <h1 className="font-bold text-lg sm:text-xl text-yahshua-blue leading-tight tracking-tight font-sans">
              YAHSHUA MEDICAL CLINICS
            </h1>
            <p className="text-xs text-gray-500 font-medium">
              EST. MAY 2023 • NYAGATARE, RWANDA
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-yahshua-blue text-white shadow-sm'
                    : 'text-gray-700 hover:text-yahshua-blue hover:bg-yahshua-blue-light'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA buttons */}
        <div className="hidden sm:flex items-center space-x-2">
          {/* Photo Manager / Custom Upload Guide Button */}
          <button
            onClick={onOpenPhotoManager}
            className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-2 rounded-lg transition border border-gray-300 shadow-sm"
            title="Manage website photos and test custom image uploads"
          >
            <Camera className="w-4 h-4 mr-1.5 text-yahshua-blue" />
            <span>📸 Photo Manager</span>
          </button>

          {/* Book Appointment CTA */}
          <button
            onClick={onOpenBookingModal}
            className="flex items-center bg-yahshua-green hover:bg-yahshua-green-dark text-white font-semibold text-sm px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            <Calendar className="w-4 h-4 mr-1.5" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center sm:hidden space-x-2">
          <button
            onClick={onOpenPhotoManager}
            className="p-2 text-gray-600 bg-gray-100 rounded-lg"
            title="Photo Manager"
          >
            <Camera className="w-5 h-5 text-yahshua-blue" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-yahshua-blue rounded-lg focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg px-4 pt-3 pb-6 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition ${
                    isActive
                      ? 'bg-yahshua-blue text-white shadow-sm'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full flex items-center justify-center bg-yahshua-green hover:bg-yahshua-green-dark text-white font-semibold text-sm py-3 rounded-lg shadow"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book An Appointment 24/7
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPhotoManager();
              }}
              className="w-full flex items-center justify-center bg-gray-100 text-gray-700 font-semibold text-xs py-2.5 rounded-lg border border-gray-300"
            >
              <Camera className="w-4 h-4 mr-2 text-yahshua-blue" />
              📸 Photo Manager / Upload Guide
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
