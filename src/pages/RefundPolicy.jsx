import {  Calendar, RefreshCw, AlertCircle, Shield, Mail, Phone, Globe, Clock } from 'lucide-react';
import { FaRupeeSign } from 'react-icons/fa';

function RefundPolicy() {
  return (
    <div className="refund-policy-page">
      <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Return & Refund Policy</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Thank you for choosing BoomOnTrip. We aim to provide smooth and memorable travel experiences. If your plans change, please review our Return and Refund Policy carefully.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This policy applies to all bookings made on our website <a href="https://www.boomontrip.com" className="text-blue-600 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">https://www.boomontrip.com</a> or through our official booking channels.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Interpretation and Definitions</h2>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-purple-500">
              <h3 className="font-bold text-gray-800 mb-2">Company</h3>
              <p className="text-gray-700">BoomOnTrip, Near Pro4 Socio, Spice Garden Layout, Marathahalli, Bangalore – 560037 (referred to as "We", "Us", or "Our")</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="font-bold text-gray-800 mb-2">Service</h3>
              <p className="text-gray-700">Refers to travel-related services including tours, trips, and experiences offered by BoomOnTrip.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-orange-500">
              <h3 className="font-bold text-gray-800 mb-2">Booking / Order</h3>
              <p className="text-gray-700">Means a confirmed request made by You to purchase a trip or travel service from BoomOnTrip.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-gray-800 mb-2">Website</h3>
              <p className="text-gray-700">Refers to <a href="https://www.boomontrip.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.boomontrip.com</a></p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="font-bold text-gray-800 mb-2">You</h3>
              <p className="text-gray-700">Means the individual or legal entity using our Service.</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 rounded-full p-2 mr-3">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Cancellation & Refund Rights</h2>
          </div>
          <p className="text-gray-700 ml-12">
            You may request cancellation of your booking subject to the refund schedule mentioned below. All cancellation requests must be made within the applicable time limits before the trip departure date.
          </p>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-6">
            <div className="bg-green-600 rounded-full p-2 mr-3">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Refund Schedule</h2>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-2 gap-px bg-gray-300">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 font-bold">
                Time Before Departure
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 font-bold">
                Refund Amount
              </div>
              
              <div className="bg-white p-4">More than 7 days before departure</div>
              <div className="bg-green-100 p-4 font-bold text-green-700">100% Refund</div>
              
              <div className="bg-white p-4">3 to 6 days before departure</div>
              <div className="bg-blue-100 p-4 font-bold text-blue-700">50% Refund</div>
              
              <div className="bg-white p-4">1 to 3 days before departure</div>
              <div className="bg-yellow-100 p-4 font-bold text-yellow-700">25% Refund</div>
              
              <div className="bg-white p-4">4 to 24 hours before departure</div>
              <div className="bg-orange-100 p-4 font-bold text-orange-700">10% Refund</div>
              
              <div className="bg-white p-4">Less than 4 hours before departure</div>
              <div className="bg-red-100 p-4 font-bold text-red-700">No Refund</div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-purple-600 rounded-full p-2 mr-3">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">How to Cancel a Booking</h2>
          </div>
          <p className="text-gray-700 ml-12 mb-4">
            To cancel your booking, please inform us through any one of the following methods:
          </p>
          <div className="ml-12 space-y-3 text-gray-700">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-blue-600" />
              <span>Email: <a href="mailto:info@boomontrip.com" className="text-blue-600 font-semibold hover:underline">info@boomontrip.com</a></span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-green-600" />
              <span>Phone / WhatsApp: <a href="tel:+919922117866" className="text-blue-600 font-semibold hover:underline">+91-9922117866</a></span>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-3 text-purple-600" />
              <span>Website: <a href="https://www.boomontrip.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">https://www.boomontrip.com</a></span>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-600 rounded-full p-2 mr-3">
              <FaRupeeSign className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Refund Processing</h2>
          </div>
          <ul className="space-y-3 text-gray-700 ml-12">
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>Approved refunds will be processed within 7–14 business days.</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>Refunds will be credited to the original payment method used during booking.</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span>Payment gateway or bank processing charges (if applicable) may be deducted.</span>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-red-600 rounded-full p-2 mr-3">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Non-Refundable Situations</h2>
          </div>
          <ul className="space-y-3 text-gray-700 ml-12">
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>No-shows on the day of departure</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Partial trip usage</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Last-minute cancellations beyond the refund timeline</span>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-500 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Trip Cancellation by BoomOnTrip</h2>
            </div>
            <p className="text-gray-700 mb-4">
              If BoomOnTrip cancels a trip due to weather conditions, safety concerns, low participation, or other unavoidable circumstances, you will receive:
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center bg-white p-4 rounded-lg shadow flex-1">
                <span className="text-green-600 font-bold text-xl mr-2">✔</span>
                <span className="font-semibold text-gray-800">A full refund</span>
              </div>
              <div className="text-center font-bold text-gray-600">OR</div>
              <div className="flex items-center bg-white p-4 rounded-lg shadow flex-1">
                <span className="text-green-600 font-bold text-xl mr-2">✔</span>
                <span className="font-semibold text-gray-800">An option to reschedule for a future trip at no additional cost</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <div className="flex items-center mb-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-800">Special Circumstances – Weather & Safety</h2>
            </div>
            <p className="text-gray-700">
              Customer safety is our top priority. In case of severe weather or unsafe conditions, BoomOnTrip reserves the right to cancel or reschedule trips. In such cases, eligible refunds or rescheduling options will be provided.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 rounded-lg p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <p className="mb-4">If you have any questions regarding this policy, please contact us:</p>
          <div className="space-y-3">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3" />
              <span>Email: <a href="mailto:info@boomontrip.com" className="underline hover:text-blue-100">info@boomontrip.com</a></span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3" />
              <span>Phone / WhatsApp: <a href="tel:+919922117866" className="underline hover:text-blue-100">+91-9922117866</a></span>
            </div>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-3" />
              <span>Website: <a href="https://www.boomontrip.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-100">www.boomontrip.com</a></span>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 text-center">
          <p className="text-gray-700">
            <strong>Note:</strong> This policy is effective from the date of booking. BoomOnTrip reserves the right to update or modify this policy at any time. Changes will be communicated via our website.
          </p>
        </div>

    
      </div>
    </div>
  );
}

export default RefundPolicy;