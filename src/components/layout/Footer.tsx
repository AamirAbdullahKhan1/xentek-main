import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-xentek-dark tracking-tight">Xen<span className="text-xentek-accent">Tek</span>.</span>
            </Link>
            <p className="text-sm text-gray-500 mb-6 max-w-xs">
              Engineering the future with technical precision and design excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/_.xentek._?igsh=MWM0dDgwdXI2eHIxYw==" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-xentek-accent hover:border-xentek-accent transition-colors" target='_blank'>
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/xentek-in/" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-xentek-accent hover:border-xentek-accent transition-colors" target='_blank'>
                <IoLogoLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-gray-500 hover:text-xentek-accent transition-colors">About Our Story</Link></li>
              <li><Link to="/services" className="text-sm text-gray-500 hover:text-xentek-accent transition-colors">Service Offerings</Link></li>
              <li><Link to="/solutions" className="text-sm text-gray-500 hover:text-xentek-accent transition-colors">Digital Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-gray-500 hover:text-xentek-accent transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-sm text-gray-500 hover:text-xentek-accent transition-colors">Our Portfolio</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-500 hover:text-xentek-accent transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-500 hover:text-xentek-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-sm text-gray-500 hover:text-xentek-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-500 hover:text-xentek-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-sm text-gray-500 hover:text-xentek-accent transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} XenTek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
