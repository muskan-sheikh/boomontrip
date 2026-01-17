import React from 'react';
import { Shield, Lock, Database, Share2, Cookie, Link, CheckCircle, Mail, Phone, Globe } from 'lucide-react';

function Privacy() {
  return (
    <div className="privacy-policy-page">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-500 to-blue-700 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
          <p className="text-gray-700 leading-relaxed">
            At BoomOnTrip, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website or services.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 rounded-full p-2 mr-3">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
          </div>
          <p className="text-gray-700 ml-12 mb-4">
            We may collect the following information when you book a trip or contact us:
          </p>
          <ul className="space-y-3 text-gray-700 ml-12">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Name, phone number, and email address</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Booking and travel details</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Payment confirmation details (processed securely via payment gateways)</span>
            </li>
          </ul>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 ml-12 mt-4 rounded-r-lg">
            <p className="text-green-800 font-semibold flex items-center">
              <Lock className="w-5 h-5 mr-2" />
              We do not store sensitive payment information such as card numbers or UPI PINs.
            </p>
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-purple-600 rounded-full p-2 mr-3">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">How We Use Your Information</h2>
          </div>
          <p className="text-gray-700 ml-12 mb-4">
            Your information is used to:
          </p>
          <div className="ml-12 space-y-3">
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
              <p className="text-gray-700">✓ Confirm and manage bookings</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
              <p className="text-gray-700">✓ Share trip updates and important notifications</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
              <p className="text-gray-700">✓ Provide customer support</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
              <p className="text-gray-700">✓ Improve our services and user experience</p>
            </div>
          </div>
        </div>

        {/* Information Sharing */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-orange-600 rounded-full p-2 mr-3">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Information Sharing</h2>
          </div>
          <div className="ml-12">
            <p className="text-gray-700 mb-3">
              <strong className="text-orange-600">BoomOnTrip does not sell or rent your personal data.</strong> We may share limited information only with trusted partners (such as transport or accommodation providers) when necessary to complete your booking, or when required by law.
            </p>
          </div>
        </div>

        {/* Data Security */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-green-600 rounded-full p-2 mr-3">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Data Security</h2>
          </div>
          <div className="ml-12 bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-500">
            <p className="text-gray-700">
              We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure. Payments are processed through secure and trusted payment gateways.
            </p>
          </div>
        </div>

        {/* Cookies */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-600 rounded-full p-2 mr-3">
              <Cookie className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Cookies</h2>
          </div>
          <p className="text-gray-700 ml-12">
            Our website may use cookies to enhance browsing experience and understand website traffic. You can control cookie settings through your browser.
          </p>
        </div>

        {/* Third-Party Links */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-600 rounded-full p-2 mr-3">
              <Link className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Third-Party Links</h2>
          </div>
          <p className="text-gray-700 ml-12">
            Our website may contain links to third-party websites. BoomOnTrip is not responsible for the privacy practices of those sites.
          </p>
        </div>

        {/* Your Consent */}
        <div className="mb-10">
          <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-800">Your Consent</h2>
            </div>
            <p className="text-gray-700">
              By using our website or services, you consent to this Privacy Policy.
            </p>
          </div>
        </div>

        {/* Policy Updates */}
        <div className="mb-10">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Policy Updates</h2>
            <p className="text-gray-700">
              BoomOnTrip reserves the right to update this Privacy Policy at any time. Changes will be posted on this page.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 rounded-lg p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
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

        <div className="text-center">
          <div className="inline-flex items-center bg-gray-100 px-6 py-3 rounded-full border border-gray-300">
            <Shield className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-gray-700 font-semibold">Your privacy is important to us</span>
          </div>
        </div>

   
      </div>
    </div>
  );
}

export default Privacy;