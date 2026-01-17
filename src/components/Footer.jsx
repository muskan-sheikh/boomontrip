import { MapPin, Phone, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Footer() {

  const navigate = useNavigate();

  return (
    <div>
      <footer className="bg-dark text-white text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  {/* <p className="font-semibold mb-2">Hustlehub Tech Park, 36/5,</p> */}
                  <p className="text-purple-100">
                    Near Pro4 Socio, Spice Garden Layout, Marathahalli, Bangalore, Karnataka, 560037
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-200 hover:text-white underline mt-2 inline-block"
                  >
                    Click to open in Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+919922117866" className="hover:text-purple-200 transition">
                  +91-9922117866
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:support@boomontrip.in" className="hover:text-purple-200 transition">
                  support@boomontrip.in
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li className='text-purple-100 cursor-pointer hover:text-white transition' onClick={() => navigate('/about')}>
                  About Us
                </li>
                <li className='text-purple-100 cursor-pointer hover:text-white transition' onClick={() => navigate('/refund-policy')}>
                  Return & Refund Policy
                </li>
                <li className='text-purple-100 cursor-pointer hover:text-white transition' onClick={() => navigate('/careers')}>
                  <a href="/careers" className="text-purple-100 hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li className='text-purple-100 cursor-pointer hover:text-white transition' onClick={() => navigate('/contact')}>
                  < >
                    Contact Us
                  </>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/help" className="text-purple-100 hover:text-white transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-purple-100 hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-purple-100 hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/cancellation" className="text-purple-100 hover:text-white transition">
                    Cancellation Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Trip Types</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/trips/all" className="text-purple-100 hover:text-white transition">
                    All Trips
                  </a>
                </li>
                <li>
                  <a href="/trips/2-days" className="text-purple-100 hover:text-white transition">
                    2 Days
                  </a>
                </li>
                <li>
                  <a href="/trips/1-day" className="text-purple-100 hover:text-white transition">
                    1 Day
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-400/30 py-4">
          <div className="container mx-auto px-6 text-center">
            <p className="text-purple-100">
              © 2026 BoomOnTrip All rights reserved.
            </p>
          </div>
        </div>

        {/* <div className="fixed bottom-6 right-6 flex flex-col space-y-3">
          <a
            href="https://wa.me/9922117866"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition transform hover:scale-110"
            aria-label="Contact on WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>

          <a
            href="tel:+919922117866"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition transform hover:scale-110"
            aria-label="Call us"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div> */}
      </footer>
    </div>
  )
}

export default Footer