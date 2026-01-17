import React, { useState } from 'react';
import { Shield, Users, FileText, DollarSign, AlertTriangle, Scale, Mail, Phone, Globe } from 'lucide-react';

function TermsPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="terms-page">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-blue-100">
            Please read these guidelines carefully before booking or using our services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to BoomOnTrip. By accessing our website, booking a trip, or using any of our services, you agree to follow the terms mentioned below. These guidelines are created to ensure a smooth, safe, and enjoyable travel experience for everyone.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold">
            BoomOnTrip reserves the right to update or modify these terms at any time. Continued use of our services means you accept the updated terms.
          </p>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 rounded-full p-2 mr-3">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Who Can Travel With Us</h2>
          </div>
          <ul className="space-y-3 text-gray-700 ml-12">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>You must be 18 years or older to book a trip.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>You should be legally capable of entering into an agreement under Indian law.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Providing false or misleading information may result in cancellation without refund.</span>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-purple-600 rounded-full p-2 mr-3">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Booking & Account Information</h2>
          </div>
          <ul className="space-y-3 text-gray-700 ml-12">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>Trips can be viewed without an account, but booking requires valid personal details.</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>All bookings are confirmed only after payment is received.</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>BoomOnTrip may cancel or refuse bookings at its discretion for safety or operational reasons.</span>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-green-600 rounded-full p-2 mr-3">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">How We Communicate With You</h2>
          </div>
          <p className="text-gray-700 ml-12">
            By using our services, you agree to receive booking updates, trip details, and important notices via WhatsApp, phone calls, email, or website notifications.
          </p>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-orange-600 rounded-full p-2 mr-3">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Trip Details & Pricing Information</h2>
          </div>
          <ul className="space-y-3 text-gray-700 ml-12">
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              <span>Trip itineraries, timings, and prices may change due to weather, traffic, or other unavoidable factors.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              <span>Any incorrect pricing or information displayed unintentionally may be corrected, even after booking, with suitable resolution.</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              <span>All trips shown on the website are an invitation to book, not a guaranteed service until confirmed.</span>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-red-600 rounded-full p-2 mr-3">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Responsible Travel & Community Rules</h2>
          </div>
          <ul className="space-y-3 text-gray-700 ml-12">
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Travelers must follow instructions given by trip coordinators.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Any misbehavior, unsafe activity, or disturbance may lead to removal from the trip without refund.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Alcohol, drugs, or illegal activities are strictly prohibited during trips.</span>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-600 rounded-full p-2 mr-3">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Changes, Cancellations & Refunds</h2>
          </div>
          <p className="text-gray-700 ml-12">
            All cancellations and refunds are governed by our <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Refund & Cancellation Policy</span>. BoomOnTrip is not responsible for payments made outside official booking channels.
          </p>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-600 rounded-full p-2 mr-3">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Travel Risks & Responsibilities</h2>
          </div>
          <ul className="space-y-3 text-gray-700 ml-12">
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>Travel involves certain risks. By joining our trips, you agree to travel at your own discretion.</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              <span>BoomOnTrip is not responsible for loss of personal belongings, injuries, delays, or disruptions caused by third-party services or natural events.</span>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-gray-700 rounded-full p-2 mr-3">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Legal Jurisdiction</h2>
          </div>
          <p className="text-gray-700 ml-12">
            These terms are governed by the laws of India, and any disputes shall be subject to the jurisdiction of Bangalore, Karnataka courts only.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 rounded-lg p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3" />
              <span>Email: <a href="mailto:info@boomontrip.com" className="underline hover:text-blue-100">info@boomontrip.com</a></span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3" />
              <span>Phone / WhatsApp: <a href="tel:9922117866" className="underline hover:text-blue-100">9922117866</a></span>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-3" />
              <span>Website: <a href="https://www.boomontrip.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-100">www.boomontrip.com</a></span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 mr-3 w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
            />
            <span className="text-gray-700 font-medium">
              I have read and agree to the Terms & Conditions of BoomOnTrip.
            </span>
          </label>
          {agreed && (
            <div className="mt-4 text-green-600 font-semibold flex items-center">
              <span className="mr-2">✓</span>
              Thank you for accepting our terms!
            </div>
          )}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Last Updated: January 2026
        </p>
      </div>
    </div>
  );
}

export default TermsPage;