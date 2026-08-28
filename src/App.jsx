import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWatermark from './components/FloatingWatermark';
import BookingModal from './components/BookingModal';
import PhotoManagerModal from './components/PhotoManagerModal';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ServicesPage from './pages/ServicesPage';
import FlowChartPage from './pages/FlowChartPage';
import DoctorsPage from './pages/DoctorsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isPhotoManagerOpen, setIsPhotoManagerOpen] = useState(false);
  const [customImages, setCustomImages] = useState({});

  // Load custom image overrides from localStorage if any exist
  useEffect(() => {
    try {
      const saved = localStorage.getItem('yahshua_custom_images');
      if (saved) {
        setCustomImages(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Could not load custom images from localStorage:", e);
    }
  }, []);

  const handleUpdateCustomImage = (slotId, dataUrl) => {
    const updated = { ...customImages, [slotId]: dataUrl };
    setCustomImages(updated);
    try {
      localStorage.setItem('yahshua_custom_images', JSON.stringify(updated));
    } catch (e) {
      console.warn("Could not save custom images to localStorage:", e);
    }
  };

  const handleResetCustomImages = () => {
    setCustomImages({});
    try {
      localStorage.removeItem('yahshua_custom_images');
    } catch (e) {
      console.warn("Could not remove custom images from localStorage:", e);
    }
  };

  const renderActivePage = () => {
    const pageProps = {
      setActiveTab,
      onOpenBookingModal: () => setIsBookingModalOpen(true),
      onOpenPhotoManager: () => setIsPhotoManagerOpen(true),
      customImages
    };

    switch (activeTab) {
      case 'home':
        return <Home {...pageProps} />;
      case 'about':
        return <AboutUs {...pageProps} />;
      case 'services':
        return <ServicesPage {...pageProps} />;
      case 'flowchart':
        return <FlowChartPage {...pageProps} />;
      case 'doctors':
        return <DoctorsPage {...pageProps} />;
      case 'contact':
        return <ContactPage {...pageProps} />;
      default:
        return <Home {...pageProps} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative selection:bg-yahshua-green selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
        customImages={customImages}
      />

      {/* 2. Main Page Content */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* 3. Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
        customImages={customImages}
      />

      {/* 4. Floating Watermark & WhatsApp Widget */}
      <FloatingWatermark
        customImages={customImages}
        onOpenBookingModal={() => setIsBookingModalOpen(true)}
      />

      {/* 5. Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      <PhotoManagerModal
        isOpen={isPhotoManagerOpen}
        onClose={() => setIsPhotoManagerOpen(false)}
        customImages={customImages}
        onUpdateCustomImage={handleUpdateCustomImage}
        onResetCustomImages={handleResetCustomImages}
      />
    </div>
  );
}
