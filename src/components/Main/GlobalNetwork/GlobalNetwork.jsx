import React from 'react';

import mapImg from '../../../assets/worldmap-img.png'; 
import sponsoredImg from '../../../assets/sponsored-img.png'; 

const GlobalNetwork = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Huge Global Network of Fast VPN
          </h2>
          <p className="mt-4 text-gray-500">
            See LaslesVPN everywhere to make it easier for you when you move locations.
          </p>
        </div>
       
        <div className="flex justify-center mb-20">
          <img 
            src={mapImg} 
            alt="Global Map" 
            className="w-full h-auto max-w-5xl" 
          />
        </div>

        <div className="flex justify-center">
          <img 
            src={sponsoredImg} 
            alt="Sponsored Companies" 
            className="w-full max-w-4xl h-auto opacity-60 hover:opacity-100 transition-opacity" 
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;