import { useState, useEffect } from 'react'
import { MapPin, Search, Home, DollarSign, Menu, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [searchLocation, setSearchLocation] = useState('')
  const [searchType, setSearchType] = useState('all')

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/search?location=${searchLocation}&type=${searchType}`)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-medium py-3' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <HomeIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-gray-900">Land Victoria</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Victoria's Land Marketplace</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Browse Land
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
              Contact
            </Link>
            <button className="btn-primary">
              List Your Land
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:block mt-4 pt-4 border-t border-gray-200">
          <form onSubmit={handleSearch} className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by location (e.g., Melbourne, Geelong, Ballarat)"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <div className="relative">
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="input-field pr-10 appearance-none cursor-pointer"
              >
                <option value="all">All Types</option>
                <option value="residential">Residential</option>
                <option value="rural">Rural</option>
                <option value="commercial">Commercial</option>
                <option value="development">Development</option>
              </select>
              <DollarSign className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
            <button type="submit" className="btn-primary flex items-center space-x-2">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-large border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <Link
              to="/search"
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Land
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-primary-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="btn-primary w-full">
              List Your Land
            </button>
            
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="space-y-3 pt-4 border-t border-gray-200">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search location..."
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="input-field pl-10"
                />
              </div>
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="input-field"
              >
                <option value="all">All Types</option>
                <option value="residential">Residential</option>
                <option value="rural">Rural</option>
                <option value="commercial">Commercial</option>
                <option value="development">Development</option>
              </select>
              <button type="submit" className="btn-primary w-full flex items-center justify-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
