import React from 'react';
import pricingImg from '../../../assets/box-img.png'; 

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      features: ["Unlimited Bandwidth", "Encrypted Connection", "No Traffic Logs", "Works on All Devices"],
      price: "Free",
      buttonText: "Select"
    },
    {
      name: "Standard Plan",
      features: ["Unlimited Bandwidth", "Encrypted Connection", "No Traffic Logs", "Works on All Devices", "Connect Anyware"],
      price: "$9 / mo",
      buttonText: "Select"
    },
    {
      name: "Premium Plan",
      features: ["Unlimited Bandwidth", "Encrypted Connection", "No Traffic Logs", "Works on All Devices", "Connect Anyware", "Get New Features"],
      price: "$12 / mo",
      buttonText: "Select"
    }
  ];
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Choose Your Plan</h2>
        <p className="mt-4 text-gray-500 max-w-lg mx-auto">
          Let's choose the package that is best for you and explore it happily and cheerfully.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-gray-200 rounded-xl p-10 flex flex-col items-center hover:border-red-500 transition-all cursor-pointer"
            >
              <img src={pricingImg} alt="Plan" className="w-36 mb-8" />
              <h3 className="text-xl font-bold mb-8">{plan.name}</h3>
              <ul className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                    <span className="text-green-500 text-lg">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <button className="px-10 py-2 border-2 border-red-500 text-red-500 font-bold rounded-full hover:bg-red-500 hover:text-white transition-all">
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;