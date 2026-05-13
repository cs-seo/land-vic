import { useState, useEffect } from 'react'
import { MapPin, Search, Home as HomeIcon, DollarSign, ArrowRight, TrendingUp, Shield, Clock, Users } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'

const Home = () => {
  const navigate = useNavigate()
  const [searchLocation, setSearchLocation] = useState('')
  const [searchType, setSearchType] = useState('all')

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/search?location=${searchLocation}&type=${searchType}`)
  }

  // Sample land listings data
  const featuredListings = [
    {
      id: 1,
      title: 'Premium Residential Block',
      location: 'Point Cook, VIC 3030',
      price: 450000,
      size: 650,
      type: 'residential',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
      featured: true
    },
    {
      id: 2,
      title: 'Rural Acreage with Views',
      location: 'Yarra Valley, VIC 3775',
      price: 890000,
      size: 5000,
      type: 'rural',
      image: 'https://images.unsplash.com/photo-1500076656116-558756a3d2c5?w=800&q=80',
      featured: true
    },
    {
      id: 3,
      title: 'Commercial Development Site',
      location: 'Geelong, VIC 3220',
      price: 1250000,
      size: 2400,
      type: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      featured: true
    },
    {
      id: 4,
      title: 'Suburban Family Block',
      location: 'Clyde North, VIC 3978',
      price: 320000,
      size: 512,
      type: 'residential',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
      featured: false
    },
    {
      id: 5,
      title: 'Mountain View Estate',
      location: 'Healesville, VIC 3777',
      price: 675000,
      size: 4000,
      type: 'rural',
      image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&q=80',
      featured: false
    },
    {
      id: 6,
      title: 'Industrial Land Parcel',
      location: 'Dandenong, VIC 3175',
      price: 980000,
      size: 3200,
      type: 'commercial',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      featured: false
    }
  ]

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Market Insights',
      description: 'Access comprehensive data on land values and market trends across Victoria'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Verified Listings',
      description: 'All properties are verified for zoning, titles, and development potential'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Real-Time Updates',
      description: 'Get instant notifications when new land matching your criteria becomes available'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: 'Our team of land specialists is here to guide you through every step'
    }
  ]

  const regions = [
    { name: 'Melbourne Metro', count: 234, image: 'https://images.unsplash.com/photo-1514395462725-fb4566e1f01e?w=400&q=80' },
    { name: 'Geelong Region', count: 89, image: 'https://images.unsplash.com/photo-1572569028738-411a2963ccd0?w=400&q=80' },
    { name: 'Mornington Peninsula', count: 156, image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&q=80' },
    { name: 'Yarra Valley', count: 67, image: 'https://images.unsplash.com/photo-1558273611-1e2a1a8e8c4a?w=400&q=80' },
    { name: 'Ballarat & Goldfields', count: 112, image: 'https://images.unsplash.com/photo-1506103405669-7ca3fb277edd?w=400&q=80' },
    { name: 'Bendigo District', count: 78, image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&q=80' }
  ]

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Find Your Perfect Piece<br />of Victorian Land
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
              Victoria's premier marketplace for residential, rural, commercial and development land
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-large p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Location (e.g., Melbourne)"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="input-field pl-12 h-14 text-gray-900"
                  />
                </div>
                <div className="relative">
                  <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="input-field h-14 pr-12 appearance-none cursor-pointer text-gray-900"
                  >
                    <option value="all">All Types</option>
                    <option value="residential">Residential</option>
                    <option value="rural">Rural</option>
                    <option value="commercial">Commercial</option>
                    <option value="development">Development</option>
                  </select>
                  <DollarSign className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                <button type="submit" className="btn-primary h-14 flex items-center justify-center space-x-2 text-lg">
                  <Search className="w-6 h-6" />
                  <span>Search Land</span>
                </button>
              </div>
            </form>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">2,500+</div>
              <div className="text-primary-200">Active Listings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">1,200+</div>
              <div className="text-primary-200">Happy Buyers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">$500M+</div>
              <div className="text-primary-200">Land Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-200">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="section-heading">Featured Land Listings</h2>
              <p className="section-subheading">Discover our handpicked selection of premium properties across Victoria</p>
            </div>
            <Link to="/search" className="hidden md:flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200">
              <span>View All Properties</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredListings.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link to="/search" className="btn-primary inline-flex items-center space-x-2">
              <span>View All Properties</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Why Choose Land Victoria?</h2>
            <p className="section-subheading mx-auto">We're dedicated to making your land buying or selling experience seamless and successful</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 text-center group hover:-translate-y-1 transition-transform duration-200">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading">Explore by Region</h2>
            <p className="section-subheading">Find land in Victoria's most sought-after locations</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <Link
                key={index}
                to={`/search?location=${encodeURIComponent(region.name)}`}
                className="card group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{region.name}</h3>
                    <p className="text-sm opacity-90">{region.count} properties available</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Find Your Dream Land?</h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-10">
            Whether you're looking to build your dream home, invest in rural acreage, or develop commercial property, we have the perfect land for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/search" className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-medium">
              Browse All Listings
            </Link>
            <button className="bg-primary-800 hover:bg-primary-900 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 border-2 border-white/20">
              List Your Land
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
