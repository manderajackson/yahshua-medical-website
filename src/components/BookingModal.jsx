import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Activity 
} from 'lucide-react';
import { CLINIC_SERVICES, CLINIC_INFO } from '../data/clinicData';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    serviceId: 'general-medicine',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const selectedService = CLINIC_SERVICES.find(s => s.id === formData.serviceId);

  const getWhatsAppBookingLink = () => {
    const text = `Hello YAHSHUA MEDICAL CLINICS LTD! I would like to book an appointment:%0A` +
      `• *Name*: ${formData.fullName || 'Patient'}%0A` +
      `• *Phone*: ${formData.phone || 'N/A'}%0A` +
      `• *Service*: ${selectedService ? selectedService.title : 'General Consultation'}%0A` +
      `• *Date & Time*: ${formData.preferredDate || 'As soon as possible'} (${formData.preferredTime})%0A` +
      `• *Notes*: ${formData.notes || 'None'}`;
    return `https://wa.me/250${CLINIC_INFO.contacts.whatsapp.replace(/^0/, '')}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-100 animate-fadeIn relative">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-yahshua-blue to-yahshua-blue-dark text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2 text-yahshua-green-light text-xs font-semibold mb-1 uppercase tracking-wider">
            <Activity className="w-4 h-4 text-yahshua-green" />
            <span>24/7 Fast Booking • Nyagatare, Rwanda</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            Book An Appointment
          </h3>
          <p className="text-xs text-blue-100 mt-1">
            Fill out the form below or chat instantly with our Customer Care on WhatsApp.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                  Full Name <span className="text-yahshua-red">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Jean de Dieu M."
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yahshua-blue focus:border-yahshua-blue text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                  Phone / WhatsApp Number <span className="text-yahshua-red">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0788 ... or 0794 ..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yahshua-blue focus:border-yahshua-blue text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                  Specialty / Medical Service
                </label>
                <select
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yahshua-blue focus:border-yahshua-blue text-sm outline-none bg-white font-medium"
                >
                  {CLINIC_SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title} ({srv.category})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yahshua-blue text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yahshua-blue text-sm outline-none bg-white"
                  >
                    <option>Morning (8 AM - 12 PM)</option>
                    <option>Afternoon (12 PM - 5 PM)</option>
                    <option>Evening / Night (24/7 Emergency)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                  Brief Notes or Symptoms (Optional)
                </label>
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="e.g. Tooth extraction consultation, antenatal checkup..."
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yahshua-blue text-sm outline-none"
                ></textarea>
              </div>

              {/* Submit & WhatsApp Buttons */}
              <div className="pt-2 flex flex-col space-y-2.5">
                <button
                  type="submit"
                  className="w-full bg-yahshua-blue hover:bg-yahshua-blue-dark text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition duration-200"
                >
                  Submit Appointment Request
                </button>

                <a
                  href={getWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-yahshua-green hover:bg-yahshua-green-dark text-white font-bold py-3 rounded-xl shadow transition duration-200"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Or Book Directly via WhatsApp
                </a>
              </div>
            </form>
          ) : (
            /* Confirmation State */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-yahshua-green/10 text-yahshua-green rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-xl font-bold text-gray-900">
                Appointment Request Received!
              </h4>

              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>! Our reception team at <span className="font-semibold text-yahshua-blue">YAHSHUA MEDICAL CLINICS LTD</span> will confirm your appointment shortly.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-left text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-gray-500">Service requested:</span>
                  <span className="font-bold text-gray-900">{selectedService ? selectedService.title : 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Phone:</span>
                  <span className="font-bold text-gray-900">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Location:</span>
                  <span className="font-bold text-gray-900">EN 58 ST, Nyagatare</span>
                </div>
              </div>

              <div className="pt-3 flex flex-col space-y-2">
                <a
                  href={getWhatsAppBookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-yahshua-green hover:bg-yahshua-green-dark text-white font-bold py-3 rounded-xl shadow transition"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Send Copy to WhatsApp Customer Care
                </a>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2.5 rounded-xl transition text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Customer Care info */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1 text-yahshua-green" />
              100% Patient Confidentiality
            </span>
            <span>Care Number: <strong className="text-gray-700">{CLINIC_INFO.contacts.customerCare}</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}
