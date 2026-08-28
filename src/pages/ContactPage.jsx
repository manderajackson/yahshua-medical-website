import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle, 
  ExternalLink 
} from 'lucide-react';
import { CLINIC_INFO, RWANDA_CLINIC_FAQ } from '../data/clinicData';
import { getImageUrl, handleImageError } from '../utils/imageRegistry';

export default function ContactPage({ 
  onOpenBookingModal, 
  customImages 
}) {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry / Appointment',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppDirectLink = () => {
    const text = `Hello YAHSHUA MEDICAL CLINICS LTD!%0A` +
      `• *Name*: ${contactForm.name || 'Patient'}%0A` +
      `• *Phone*: ${contactForm.phone || 'N/A'}%0A` +
      `• *Subject*: ${contactForm.subject}%0A` +
      `• *Message*: ${contactForm.message || 'I would like to inquire about your services.'}`;
    return `https://wa.me/250${CLINIC_INFO.contacts.whatsapp.replace(/^0/, '')}?text=${text}`;
  };

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
            <Phone className="w-4 h-4 mr-1 text-yahshua-green" />
            <span>We Are Always Open • 24 Hours / 7 Days</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact & Book Appointment
          </h1>
          <p className="text-sm sm:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Reach out to our Customer Care or Reception team anytime. We are located at EN 58 ST, Nyagatare, Eastern Province, Rwanda.
          </p>
        </div>
      </section>

      {/* 24/7 CONTACT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Customer Care */}
          <div className="bg-white p-6 rounded-3xl shadow-card border border-gray-100 flex flex-col justify-between hover:shadow-card-hover transition">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-yahshua-blue-light text-yahshua-blue flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase">Primary Contact</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1">Customer Care</h3>
              <p className="text-xs text-gray-600 mt-1">
                For patient inquiries, appointment scheduling, and feedback.
              </p>
            </div>
            <a 
              href={`tel:${CLINIC_INFO.contacts.customerCare}`}
              className="mt-6 block text-center bg-yahshua-blue hover:bg-yahshua-blue-dark text-white font-bold py-2.5 px-4 rounded-xl text-sm transition shadow-sm"
            >
              {CLINIC_INFO.formattedContacts.customerCare}
            </a>
          </div>

          {/* Reception Desk */}
          <div className="bg-white p-6 rounded-3xl shadow-card border border-gray-100 flex flex-col justify-between hover:shadow-card-hover transition">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-yahshua-green-light text-yahshua-green flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase">24/7 Front Desk</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1">Reception Desk</h3>
              <p className="text-xs text-gray-600 mt-1">
                For emergency triage, file creation, and immediate walk-in care.
              </p>
            </div>
            <a 
              href={`tel:${CLINIC_INFO.contacts.reception}`}
              className="mt-6 block text-center bg-yahshua-green hover:bg-yahshua-green-dark text-white font-bold py-2.5 px-4 rounded-xl text-sm transition shadow-sm"
            >
              {CLINIC_INFO.formattedContacts.reception}
            </a>
          </div>

          {/* WhatsApp Direct */}
          <div className="bg-white p-6 rounded-3xl shadow-card border border-gray-100 flex flex-col justify-between hover:shadow-card-hover transition">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase">Instant Messaging</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1">WhatsApp Chat</h3>
              <p className="text-xs text-gray-600 mt-1">
                Chat with our staff on WhatsApp for fast responses and appointment booking.
              </p>
            </div>
            <a 
              href={`https://wa.me/250${CLINIC_INFO.contacts.whatsapp.replace(/^0/, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded-xl text-sm transition shadow-sm"
            >
              Chat: {CLINIC_INFO.formattedContacts.whatsapp}
            </a>
          </div>

          {/* Email & Location */}
          <div className="bg-white p-6 rounded-3xl shadow-card border border-gray-100 flex flex-col justify-between hover:shadow-card-hover transition">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase">Official Email</span>
              <h3 className="text-lg font-bold text-gray-900 mt-1">Email Support</h3>
              <p className="text-xs text-gray-600 mt-1">
                For administrative inquiries, partnerships, and official correspondence.
              </p>
            </div>
            <a 
              href={`mailto:${CLINIC_INFO.contacts.email}`}
              className="mt-6 block text-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition shadow-sm truncate"
            >
              {CLINIC_INFO.contacts.email}
            </a>
          </div>

        </div>
      </section>

      {/* MESSAGE FORM & MAPS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact / Appointment Request Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-gray-100">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-yahshua-blue bg-yahshua-blue-light px-3 py-1 rounded-full">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
                Send Us A Message or Appointment Request
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Fill out the form below or use the button to send directly to our WhatsApp Customer Care.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                      Full Name <span className="text-yahshua-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={contactForm.name}
                      onChange={handleChange}
                      placeholder="e.g. Jean de Dieu M."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yahshua-blue text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                      Phone Number <span className="text-yahshua-red">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={contactForm.phone}
                      onChange={handleChange}
                      placeholder="0788 ... or 0794 ..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yahshua-blue text-sm outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yahshua-blue text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                      Subject / Service
                    </label>
                    <select
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yahshua-blue text-sm outline-none bg-white"
                    >
                      <option>General Inquiry / Appointment</option>
                      <option>General Medicine / Surgery Consultation</option>
                      <option>Gynecology / Obstetrics OPD</option>
                      <option>Dental Clinic Inquiry</option>
                      <option>Laboratory / Diagnostic Test</option>
                      <option>Pediatrics & Child Health</option>
                      <option>Feedback & Appreciation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-600 mb-1">
                    Your Message / Notes
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={contactForm.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yahshua-blue text-sm outline-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-yahshua-blue hover:bg-yahshua-blue-dark text-white font-bold py-3 px-6 rounded-xl shadow transition duration-200"
                  >
                    Send Message
                  </button>

                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-yahshua-green hover:bg-yahshua-green-dark text-white font-bold py-3 px-6 rounded-xl shadow transition duration-200"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-yahshua-green/10 text-yahshua-green rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Message Received!</h4>
                <p className="text-sm text-gray-600 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-gray-900">{contactForm.name}</span>. Our team at YAHSHUA MEDICAL CLINICS LTD will get back to you shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-yahshua-blue underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: Location Card & Google Map Link */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-800 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-yahshua-green bg-yahshua-green-light/20 px-3 py-1 rounded-full">
                Visit Our Facility
              </span>

              <h3 className="text-xl font-extrabold">
                EN 58 ST, Nyagatare, Rwanda
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                We are conveniently located in Nyagatare, Eastern Province. Whether you are coming from within Nyagatare town or surrounding sectors, our clinic is open 24 hours a day, 7 days a week.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center text-gray-300">
                  <Clock className="w-4 h-4 mr-2.5 text-yahshua-green flex-shrink-0" />
                  <span><strong>Working Hours:</strong> 24/7 (24 Hours / 7 Days a Week)</span>
                </div>

                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2.5 text-yahshua-red flex-shrink-0" />
                  <span><strong>Address:</strong> EN 58 ST, Nyagatare, Eastern Province</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={CLINIC_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center bg-yahshua-green hover:bg-yahshua-green-dark text-white font-bold py-3 px-6 rounded-xl shadow transition group"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Open Google Maps Directions</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition" />
                </a>
              </div>
            </div>

            {/* Quick emergency card */}
            <div className="bg-yahshua-blue-light border border-yahshua-blue/20 rounded-3xl p-6 space-y-3">
              <div className="flex items-center space-x-2 text-yahshua-blue font-bold">
                <ShieldCheck className="w-5 h-5 text-yahshua-green" />
                <span>Urgent Emergency Notice</span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                If you have a severe medical emergency, do not wait for an email reply. Call our Customer Care number directly at <strong className="text-gray-900">{CLINIC_INFO.contacts.customerCare}</strong> or come immediately to our Nyagatare triage room.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-yahshua-blue bg-yahshua-blue-light px-3 py-1 rounded-full">
            Helpful Information
          </span>
          <h3 className="text-2xl font-bold text-gray-900 mt-2">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RWANDA_CLINIC_FAQ.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-gray-900 text-sm flex items-start">
                  <HelpCircle className="w-4 h-4 text-yahshua-blue mr-2 mt-0.5 flex-shrink-0" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
