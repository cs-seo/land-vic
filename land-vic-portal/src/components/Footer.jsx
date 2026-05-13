import { Home as HomeIcon, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <HomeIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Land Victoria</h3>
                <p className="text-xs text-secondary-300">Victoria's Land Marketplace</p>
              </div>
            </div>
            <p className="text-secondary-300 text-sm mb-4">
              Your trusted platform for buying and selling land across Victoria. 
              From residential blocks to rural properties, we connect you with the perfect piece of land.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/search?type=residential" className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm">
                  Residential Land
                </Link>
              </li>
              <li>
                <Link to="/search?type=rural" className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm">
                  Rural Properties
                </Link>
              </li>
              <li>
                <Link to="/search?type=commercial" className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm">
                  Commercial Land
                </Link>
              </li>
              <li>
                <Link to="/search?type=development" className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm">
                  Development Sites
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Popular Locations</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/search?location=Melbourne" className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm">
                  Melbourne
                </Link>
              </li>
              <li>
                <Link to="/search?location=Geelong" className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm">
                  Geelong
                </Link>
              </li>
              <li>
                <Link to="/search?location=Ballarat" className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm">
                  Ballarat
                </Link>
              </li>
              <li>
                <Link to="/search?location=Bendigo" className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm">
                  Bendigo
                </Link>
              </li>
              <li>
                <Link to="/search?location=Mornington%20Peninsula" className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm">
                  Mornington Peninsula
                </Link>
              </li>
              <li>
                <Link to="/search?location=Yarra%20Valley" className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm">
                  Yarra Valley
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-secondary-300 text-sm">
                  Level 12, 123 Collins Street<br />
                  Melbourne VIC 3000<br />
                  Australia
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-secondary-300 text-sm">1300 LAND VIC</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <span className="text-secondary-300 text-sm">info@landvictoria.com.au</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © {currentYear} Land Victoria. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-secondary-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="#" className="text-secondary-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="#" className="text-secondary-400 hover:text-white text-sm transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
