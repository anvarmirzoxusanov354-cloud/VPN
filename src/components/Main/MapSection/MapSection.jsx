import React from 'react';
import mapImg from '../../assets/map-img.png';

const MapSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Huge Global Network of Fast VPN
          </h2>
          <p className="mt-4 text-gray-500">
            See LaslesVPN everywhere to make it easier for you when you move locations.
          </p>
        </div>
        <div className="flex justify-center">
          <img 
            src={map-img} 
            alt="Global Map" 
            className="w-full h-auto max-w-5xl" 
          />
        </div>
        <div className="mt-20 flex flex-wrap justify-center items-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all">
        </div>
      </div>
    </section>
  );
};

export default MapSection;