import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#1a161b] text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <div className="text-[#e239e5]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">
                Wema<span className="text-[#e239e5] font-normal">Nexus</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              We build transformational wellness and connectivity to expand bounds everywhere.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Nexus Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nexus Care Partnerships</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nexus Market</a></li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Connect</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Stay periodically in the loop.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-[#2a242b] border border-gray-700 text-white text-sm rounded-lg block w-full p-2.5 focus:ring-[#721073] focus:border-[#721073]"
              />
              <button className="bg-[#721073] hover:bg-[#5a0c5b] text-white p-2.5 rounded-lg transition-colors flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#2a242b] text-xs text-gray-500">
          <p>© 2024 Wema Nexus LLC. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer