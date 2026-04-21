import React from 'react';
import heroImg from '../../../assets/hero-img.png';


const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 items-center gap-10">
      <div className="order-2 md:order-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
          Want anything to be easy with <span className="font-extrabold">LaslesVPN.</span>
        </h1>
        <p className="mt-6 text-gray-600 leading-relaxed text-lg max-w-md mx-auto md:mx-0">
          Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
        </p>
        <button className="mt-12 bg-red-500 text-white px-12 py-4 rounded-xl font-bold shadow-2xl shadow-red-200 hover:bg-red-600 hover:-translate-y-1 transition-all duration-300">
          Get Started
        </button>
      </div>
      <div className="order-1 md:order-2 flex justify-center">
        <img src={heroImg} alt="hero-img" className="w-full max-w-xl h-auto" />
      </div>
    </section>
  );
};

export default Hero;