import React from 'react';


import { HiUser, HiLocationMarker, HiServer } from "react-icons/hi";

const Stats = () => {
  const statsData = [
    {
      id: 1,
      label: "Users",
      count: "90+",
      icon: <HiUser className="text-red-500 text-2xl" />,
    },
    {
      id: 2,
      label: "Locations",
      count: "30+",
      icon: <HiLocationMarker className="text-red-500 text-2xl" />,
    },
    {
      id: 3,
      label: "Servers",
      count: "50+",
      icon: <HiServer className="text-red-500 text-2xl" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
      <div className="bg-white rounded-xl shadow-2xl shadow-gray-200/50 py-9 flex flex-col md:flex-row justify-around items-center border border-gray-100">
        {statsData.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center gap-6 w-full justify-center py-6 md:py-0 ${
              index !== statsData.length - 1 ? "md:border-r border-gray-200" : ""
            }`}
          >
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">{item.count}</h3>
              <p className="text-gray-500">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Stats;