import React from 'react';

import logo from '../../assets/logo-img.svg'; 

import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-44 pb-20 relative">

      <div className="max-w-7xl mx-auto px-6 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">
              Subscribe Now for Get Special Features!
            </h2>
            <p className="mt-4 text-gray-500">
              Let's subscribe with us and find the fun.
            </p>
          </div>
          <button className="bg-red-500 text-white px-12 py-4 rounded-xl font-bold shadow-lg shadow-red-200 hover:scale-105 transition-transform">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
  
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <img src={logo} alt="LaslesVPN" className="w-32" />
          </div>
          <p className="text-gray-500 leading-relaxed">
            <span className="font-bold">LaslesVPN</span> is a private virtual network that has unique features and has high security.
          </p>
          <div className="flex gap-4 mt-8">
            <img src={facebook} alt="FB" className="w-8 h-8 cursor-pointer" />
            <img src={twitter} alt="TW" className="w-8 h-8 cursor-pointer" />
            <img src={instagram} alt="IG" className="w-8 h-8 cursor-pointer" />
          </div>
          <p className="mt-8 text-gray-400 text-sm">©2020LaslesVPN</p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Product</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Download</li>
            <li className="hover:text-red-500 cursor-pointer">Pricing</li>
            <li className="hover:text-red-500 cursor-pointer">Locations</li>
            <li className="hover:text-red-500 cursor-pointer">Server</li>
            <li className="hover:text-red-500 cursor-pointer">Countries</li>
            <li className="hover:text-red-500 cursor-pointer">Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Engage</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li className="hover:text-red-500 cursor-pointer">LaslesVPN ?</li>
            <li className="hover:text-red-500 cursor-pointer">FAQ</li>
            <li className="hover:text-red-500 cursor-pointer">Tutorials</li>
            <li className="hover:text-red-500 cursor-pointer">About Us</li>
            <li className="hover:text-red-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-red-500 cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6">Earn Money</h4>
          <ul className="space-y-4 text-gray-500 text-sm">
            <li className="hover:text-red-500 cursor-pointer">Affiliate</li>
            <li className="hover:text-red-500 cursor-pointer">Become Partner</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;