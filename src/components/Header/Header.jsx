import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-img.svg'; 
import { HiMenu, HiX } from "react-icons/hi"; 

const Header = () => { 
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {name: 'About', link: '/about'},
    {name: 'Features', link: '/features'},
    {name: 'Pricing', link: '/pricing'},
    {name: 'Testimonials', link: '/testimonials'},
    {name: 'Help', link: '/help'},
  ];


  return (
    <header className="max-w-7xl mx-auto flex items-center justify-between px-6 py-8 font-sans relative">
      <div className="flex items-center z-50">
        <Link to='/'>
          <img src={logo} alt="logo" className="h-10 w-auto" />  
        </Link>
      </div>     
      <nav className="hidden lg:flex items-center gap-10">
        {navItems.map((item, index) => (
          <Link key={index} to={item.link} className="text-gray-600 hover:text-red-500 transition-colors">
            {item.name}
          </Link>
        ))}
      </nav>     
      <div className="hidden lg:flex items-center gap-6">
        <button className="font-medium text-gray-900">Sign In</button>
        <button className="border border-red-500 text-red-500 px-8 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition-all">
          Sign Up
        </button>
      </div>     
      <button 
        className="lg:hidden z-50 text-3xl text-gray-700" 
        onClick={() => setIsOpen(!isOpen)}
      >   
        {isOpen ? <HiX /> : <HiMenu />}
      </button>
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out p-8 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <nav className="flex flex-col gap-6 mt-16">
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.link} 
              onClick={() => setIsOpen(false)}
              className="text-gray-700 text-lg font-medium hover:text-red-500"
            >
              {item.name}
            </Link>
          ))}
          <hr className="border-gray-100" />
          <button className="text-gray-900 font-medium text-left">Sign In</button>
          <button className="bg-red-500 text-white px-6 py-3 rounded-full font-medium text-center">
            Sign Up
          </button>
        </nav>
      </div> 
      {isOpen && (
        <div 
          className="fixed inset-0  z-30 lg:hidden" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Header;