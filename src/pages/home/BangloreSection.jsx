import React from 'react';
import { ArrowRight } from 'lucide-react';

function BangloreSection() {
  return (
    <div className="relative bg-gradient-to-b from-purple-100 via-purple-50 to-white py-20 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">

        <div className="inline-flex items-center bg-[#fff] text-white px-3  py-2 rounded-full text-sm font-medium mb-8">
          <span className="mr-2 bg-dark text-white rounded-[8px] px-2">New</span>
          <span className="text-dark">Revolutionize your design workflow</span>
        </div>

        {/* Main Heading */}
        <h1 style={{ fontFamily: '' }} className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
          Bangalore City Tour!
        </h1>

        {/* Description */}
        <p className="text-md md:text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-">
          Discover Bangalore's history, culture, and modern charm in a single day. From peaceful gardens to iconic city landmarks, this tour is designed for easy travel, clear planning, and memorable moments.
        </p>

        <button className="group relative inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-[14px] rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
          <span className="mr-2">Book Now</span>
          <div className='bg-white rounded-full py-1 px-1'>
            <ArrowRight color='#000' className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity -z-10"></div>
        </button>
      </div>


    </div>
  );
}

export default BangloreSection;