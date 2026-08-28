import React, { useState } from 'react';
import { 
  X, 
  Camera, 
  Upload, 
  RefreshCw, 
  CheckCircle, 
  Image as ImageIcon, 
  HelpCircle, 
  FolderDown,
  Info 
} from 'lucide-react';
import { IMAGE_SLOTS, getImageUrl, handleImageError } from '../utils/imageRegistry';

export default function PhotoManagerModal({ isOpen, onClose, customImages, onUpdateCustomImage, onResetCustomImages }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedPath, setCopiedPath] = useState(null);

  if (!isOpen) return null;

  const categories = ['all', 'Branding', 'Facility', 'Services', 'Our Team', 'Clinic Display', 'Partners', 'Video'];

  const filteredSlots = selectedCategory === 'all'
    ? IMAGE_SLOTS
    : IMAGE_SLOTS.filter(item => item.category === selectedCategory);

  const handleFileUpload = (e, slotId) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      onUpdateCustomImage(slotId, event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const copyPathToClipboard = (path) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden border border-gray-100 flex flex-col max-h-[90vh] animate-fadeIn">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 via-yahshua-blue-dark to-yahshua-blue text-white p-6 relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2 text-yahshua-green-light text-xs font-semibold mb-1 uppercase tracking-wider">
            <Camera className="w-4 h-4 text-yahshua-green" />
            <span>Developer & Owner Utility</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            📸 Website Photo Manager & Upload Guide
          </h3>
          <p className="text-xs sm:text-sm text-gray-200 mt-1 max-w-2xl">
            You can test uploading custom photos in your current session to see how they look live, or follow the directory guide below to permanently place your photos in the <code className="bg-white/20 px-1.5 py-0.5 rounded text-yellow-300">/public/images/</code> folder!
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-yahshua-blue-light border-b border-yahshua-blue/20 p-4 text-xs text-yahshua-blue-dark flex items-start space-x-3 flex-shrink-0">
          <Info className="w-5 h-5 text-yahshua-blue flex-shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">How Permanent Photo Replacement Works:</strong>
            <p className="mt-0.5 text-gray-700">
              Every photo slot has a dedicated filename in <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-yahshua-blue/30">/home/user/yahshua-clinic-website/public/images/</code>. Simply copy your real clinic photos into that folder using the matching filenames below (e.g. <code className="font-mono bg-white px-1.5 py-0.5 rounded">reception.jpg</code>, <code className="font-mono bg-white px-1.5 py-0.5 rounded">dental.jpg</code>), and the website will automatically display them!
            </p>
          </div>
        </div>

        {/* Category Filters & Reset Bar */}
        <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2 flex-shrink-0">
          <div className="flex items-center space-x-1 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition ${
                  selectedCategory === cat
                    ? 'bg-yahshua-blue text-white shadow-sm'
                    : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat === 'all' ? `All Slots (${IMAGE_SLOTS.length})` : cat}
              </button>
            ))}
          </div>

          <button
            onClick={onResetCustomImages}
            className="flex items-center text-xs font-semibold text-gray-600 hover:text-yahshua-red bg-white px-3 py-1.5 rounded-lg border border-gray-200 transition shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
            Reset Session Overrides
          </button>
        </div>

        {/* Scrollable Slots Grid */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSlots.map((slot) => {
            const hasCustom = Boolean(customImages && customImages[slot.id]);
            const currentUrl = getImageUrl(slot.id, customImages);

            return (
              <div 
                key={slot.id} 
                className={`border rounded-xl p-4 transition-all duration-200 flex flex-col justify-between ${
                  hasCustom ? 'border-yahshua-green bg-yahshua-green-light/30 shadow-md' : 'border-gray-200 bg-white hover:shadow'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-yahshua-blue bg-yahshua-blue-light px-2 py-0.5 rounded-full">
                        {slot.category}
                      </span>
                      <h4 className="font-bold text-sm text-gray-900 mt-1">
                        {slot.title}
                      </h4>
                    </div>
                    {hasCustom && (
                      <span className="inline-flex items-center text-[10px] font-bold text-yahshua-green bg-yahshua-green/10 px-2 py-0.5 rounded-full border border-yahshua-green/30">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Custom Upload Active
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                    {slot.description}
                  </p>

                  {/* Image Preview Card */}
                  <div className="relative w-full h-40 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 mb-3 flex items-center justify-center group">
                    <img
                      src={currentUrl}
                      alt={slot.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      onError={(e) => handleImageError(e, slot.id)}
                    />
                    <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-1 rounded">
                      {slot.path}
                    </div>
                  </div>
                </div>

                {/* Footer Controls: Copy Path & Live Session Test Upload */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => copyPathToClipboard(slot.path)}
                    className="text-[11px] text-gray-600 hover:text-yahshua-blue font-mono bg-gray-100 hover:bg-gray-200 px-2.5 py-1.5 rounded transition flex items-center"
                    title="Click to copy filename path"
                  >
                    <FolderDown className="w-3.5 h-3.5 mr-1 text-gray-500" />
                    {copiedPath === slot.path ? 'Copied!' : slot.path}
                  </button>

                  <label className="cursor-pointer bg-yahshua-blue hover:bg-yahshua-blue-dark text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition inline-flex items-center">
                    <Upload className="w-3.5 h-3.5 mr-1.5" />
                    <span>Test Upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, slot.id)}
                    />
                  </label>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between flex-shrink-0 text-xs">
          <span className="text-gray-500">
            Total image slots configured: <strong className="text-gray-700">{IMAGE_SLOTS.length}</strong>
          </span>
          <button
            onClick={onClose}
            className="bg-gray-900 hover:bg-black text-white font-semibold px-5 py-2 rounded-lg transition"
          >
            Done & Close
          </button>
        </div>
      </div>
    </div>
  );
}
