import React from 'react';
import featuresImg from '../../../assets/features-section-img.png';

const Features = () => {
  const points = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits."
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10 md:gap-20">
      <div className="flex-1">
             <img 
          src={featuresImg} 
          alt="Features illustration" 
          className="w-full h-auto" 
        />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight text-left">
          We Provide Many Features You Can Use
        </h2>
        <p className="mt-4 text-gray-500 text-left">
          You can explore the features that we provide with fun and have their own functions each feature.
        </p>
        <ul className="mt-8 space-y-4">
          {points.map((point, index) => (
            <li key={index} className="flex items-center gap-3 text-sm text-slate-700">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.99545 13.4139C6.6047 13.024 6.60391 12.3912 6.99369 12.0003C7.38371 11.6092 8.01701 11.6085 8.40793 11.9987L9.999 13.587L14.586 9C14.9765 8.60953 15.6095 8.60953 16 9C16.3905 9.39047 16.3905 10.0235 16 10.414L10.001 16.413Z" fill="#2FAB73"/>
                 </svg>
              </div>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;