import React from 'react';
import { Target, Globe, MessageCircle, Users } from 'lucide-react';

function About() {
  return (
    <div className="about-page">
      <div className="relative bg-gradient-to-b from-blue-500 to-blue-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">About BoomOnTrip</h1>
          <p className="text-xl text-blue-100 animate-fade-in-delay">
            Where Every Journey Becomes a Story
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              BoomOnTrip is a travel experiences brand created for people who believe travel is more than just visiting places. We focus on journeys that feel personal, comfortable, and meaningful — journeys where every traveler can truly find magic in travel.
            </p>
            <p>
              Based in Bangalore, BoomOnTrip specializes in city tours and weekend trips designed for friends, solo travelers, and working professionals. Our experiences are thoughtfully planned with clear pricing, smooth coordination, and a friendly approach so travelers can relax and enjoy every moment.
            </p>
            <p className="font-semibold text-blue-600">
              At BoomOnTrip, we don't treat travelers as customers — we treat them as guests. From planning to execution, our goal is to make every trip simple, safe, and memorable.
            </p>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-3 mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To create hassle-free, well-planned travel experiences that help people explore new places, connect with others, and enjoy journeys filled with comfort, care, and memorable moments.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-purple-600 rounded-full p-3 mr-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To build BoomOnTrip as a trusted travel experiences brand known for thoughtful journeys, warm hospitality, and meaningful exploration — where every trip helps people slow down, explore deeply, and find magic in travel.
            </p>
          </div>
        </div>

        {/* Founder's Note */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 rounded-lg shadow-xl p-8 md:p-12 mb-12 text-white">
          <div className="flex items-center mb-6">
            <div className="bg-white/20 rounded-full p-3 mr-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold">Founder's Note</h3>
          </div>
          <blockquote className="text-xl md:text-2xl italic mb-4 font-light">
            "Travel is not about places, it's about the magic you feel along the way."
          </blockquote>
          <p className="text-lg mb-4 opacity-90">— Vivek Kumar Yadav, Founder</p>
          <p className="leading-relaxed text-blue-50">
            BoomOnTrip was founded by Vivek Kumar Yadav, with a simple belief that travel should feel human, personal, and joyful. His vision is to create a travel brand that values people and experiences over mass tourism, and where every journey feels thoughtfully crafted.
          </p>
        </div>

        {/* Our Team */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="flex items-center mb-6">
            <div className="bg-blue-600 rounded-full p-3 mr-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">Our Team</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            Behind BoomOnTrip is a passionate team of planners, coordinators, and local experts who work together to deliver smooth and enjoyable travel experiences. Our team focuses on safety, coordination, and guest comfort to ensure every journey runs seamlessly from start to finish.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Experience the Magic?</h3>
        <p className="text-xl mb-8 text-blue-100">Join us on your next adventure and discover why travel is truly magical.</p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition transform hover:scale-105 shadow-lg">
          Explore Our Trips
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default About;