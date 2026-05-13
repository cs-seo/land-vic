import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { MapPin, DollarSign, Maximize, Share2, Heart, Phone, Mail, ChevronLeft } from 'lucide-react'

const PropertyDetail = () => {
  const { id } = useParams()
  
  // Sample property data - in production this would come from an API
  const property = {
    id: parseInt(id),
    title: 'Premium Residential Block',
    location: 'Point Cook, VIC 3030',
    price: 450000,
    size: 650,
    type: 'residential',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
    featured: true,
    description: 'This premium residential block offers the perfect opportunity to build your dream home in one of Point Cook\'s most sought-after locations. With level terrain and excellent soil conditions, this land is ready for construction.',
    features: [
      'Level terrain',
      'Ready to build',
      'All services available',
      'Close to schools',
      'Near shopping centers',
      'Easy freeway access'
    ],
    zoning: 'Residential 1 Zone',
    dimensions: '20m x 32.5m',
    agent: {
      name: 'Sarah Mitchell',
      phone: '0412 345 678',
      email: 'sarah.mitchell@landvictoria.com.au',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80'
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      maximumFractionDigits: 0
    }).format(price)
  }

  const getTypeLabel = (type) => {
    const labels = {
      residential: 'Residential',
      rural: 'Rural',
      commercial: 'Commercial',
      development: 'Development'
    }
    return labels[type] || type
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/search" className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium mb-6">
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Search</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="card overflow-hidden">
              <div className="relative h-96">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-accent-500 text-white px-4 py-2 rounded-full font-semibold">
                    Featured Listing
                  </div>
                )}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white/90 hover:bg-white p-3 rounded-full shadow-medium transition-colors duration-200">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="bg-white/90 hover:bg-white p-3 rounded-full shadow-medium transition-colors duration-200">
                    <Share2 className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="card p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 bg-blue-100 text-blue-700`}>
                    {getTypeLabel(property.type)}
                  </div>
                  <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">{property.title}</h1>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-primary-600 justify-end">
                    <DollarSign className="w-6 h-6" />
                    <span className="text-4xl font-bold">{formatPrice(property.price)}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Maximize className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{property.size.toLocaleString()} m²</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{property.dimensions}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{property.zoning}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar - Agent Contact */}
          <div className="space-y-6">
            <div className="card p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Contact Agent</h2>
              
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{property.agent.name}</h3>
                  <p className="text-sm text-gray-600">Land Specialist</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <a href={`tel:${property.agent.phone}`} className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors duration-200">
                  <Phone className="w-5 h-5" />
                  <span>{property.agent.phone}</span>
                </a>
                <a href={`mailto:${property.agent.email}`} className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors duration-200">
                  <Mail className="w-5 h-5" />
                  <span>{property.agent.email}</span>
                </a>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input-field"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input-field"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="input-field"
                />
                <textarea
                  placeholder="I'm interested in this property..."
                  rows={4}
                  className="input-field resize-none"
                ></textarea>
                <button type="submit" className="btn-primary w-full">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetail
