import { MapPin, DollarSign, Maximize, Link as LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const PropertyCard = ({ property }) => {
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

  const getTypeColor = (type) => {
    const colors = {
      residential: 'bg-blue-100 text-blue-700',
      rural: 'bg-green-100 text-green-700',
      commercial: 'bg-purple-100 text-purple-700',
      development: 'bg-orange-100 text-orange-700'
    }
    return colors[type] || 'bg-gray-100 text-gray-700'
  }

  return (
    <Link to={`/property/${property.id}`} className="card group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        {property.featured && (
          <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        <div className={`absolute top-4 right-4 ${getTypeColor(property.type)} px-3 py-1 rounded-full text-sm font-semibold`}>
          {getTypeLabel(property.type)}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{property.location}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
          {property.title}
        </h3>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-primary-600">
            <DollarSign className="w-5 h-5" />
            <span className="text-2xl font-bold">{formatPrice(property.price)}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-6 text-gray-600 text-sm border-t border-gray-200 pt-4">
          <div className="flex items-center space-x-2">
            <Maximize className="w-4 h-4" />
            <span>{property.size.toLocaleString()} m²</span>
          </div>
          <div className="flex items-center space-x-2">
            <LinkIcon className="w-4 h-4" />
            <span>Land Only</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PropertyCard
