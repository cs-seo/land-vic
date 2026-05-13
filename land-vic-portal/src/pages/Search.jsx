import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MapPin, Search as SearchIcon, DollarSign, Maximize, Filter, Grid, List } from 'lucide-react'
import PropertyCard from '../components/PropertyCard'

const Search = () => {
  const [searchParams] = useSearchParams()
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('newest')
  
  const initialLocation = searchParams.get('location') || ''
  const initialType = searchParams.get('type') || 'all'
  
  const [filters, setFilters] = useState({
    location: initialLocation,
    type: initialType,
    minPrice: '',
    maxPrice: '',
    minSize: '',
    maxSize: ''
  })

  // Sample listings - in production this would come from an API
  const allListings = [
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
    },
    {
      id: 7,
      title: 'Coastal Residential Lot',
      location: 'Torquay, VIC 3228',
      price: 525000,
      size: 580,
      type: 'residential',
      image: 'https://images.unsplash.com/photo-1576016770956-debb63d92084?w=800&q=80',
      featured: false
    },
    {
      id: 8,
      title: 'Farmland with Water Rights',
      location: 'Shepparton, VIC 3630',
      price: 1450000,
      size: 20000,
      type: 'rural',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
      featured: false
    }
  ]

  const [filteredListings, setFilteredListings] = useState(allListings)

  useEffect(() => {
    let results = [...allListings]

    // Apply filters
    if (filters.location) {
      results = results.filter(listing =>
        listing.location.toLowerCase().includes(filters.location.toLowerCase())
      )
    }

    if (filters.type && filters.type !== 'all') {
      results = results.filter(listing => listing.type === filters.type)
    }

    if (filters.minPrice) {
      results = results.filter(listing => listing.price >= parseInt(filters.minPrice))
    }

    if (filters.maxPrice) {
      results = results.filter(listing => listing.price <= parseInt(filters.maxPrice))
    }

    if (filters.minSize) {
      results = results.filter(listing => listing.size >= parseInt(filters.minSize))
    }

    if (filters.maxSize) {
      results = results.filter(listing => listing.size <= parseInt(filters.maxSize))
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        results.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        results.sort((a, b) => b.price - a.price)
        break
      case 'size-asc':
        results.sort((a, b) => a.size - b.size)
        break
      case 'size-desc':
        results.sort((a, b) => b.size - a.size)
        break
      default:
        // newest - keep original order
        break
    }

    setFilteredListings(results)
  }, [filters, sortBy])

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Search Land</h1>
          <p className="text-gray-600">Find your perfect piece of Victorian land</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="card p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="w-5 h-5 text-primary-600" />
                <h2 className="text-lg font-semibold">Filters</h2>
              </div>

              <form className="space-y-4">
                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      value={filters.location}
                      onChange={handleFilterChange}
                      placeholder="Enter location"
                      className="input-field pl-10 text-sm"
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    name="type"
                    value={filters.type}
                    onChange={handleFilterChange}
                    className="input-field text-sm"
                  >
                    <option value="all">All Types</option>
                    <option value="residential">Residential</option>
                    <option value="rural">Rural</option>
                    <option value="commercial">Commercial</option>
                    <option value="development">Development</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="number"
                        name="minPrice"
                        value={filters.minPrice}
                        onChange={handleFilterChange}
                        placeholder="Min"
                        className="input-field pl-8 text-sm"
                      />
                    </div>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="number"
                        name="maxPrice"
                        value={filters.maxPrice}
                        onChange={handleFilterChange}
                        placeholder="Max"
                        className="input-field pl-8 text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Size Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size (m²)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      name="minSize"
                      value={filters.minSize}
                      onChange={handleFilterChange}
                      placeholder="Min"
                      className="input-field text-sm"
                    />
                    <input
                      type="number"
                      name="maxSize"
                      value={filters.maxSize}
                      onChange={handleFilterChange}
                      placeholder="Max"
                      className="input-field text-sm"
                    />
                  </div>
                </div>

                <button type="button" className="btn-primary w-full">
                  Apply Filters
                </button>
              </form>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="card p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="text-gray-600">
                  <span className="font-semibold">{filteredListings.length}</span> properties found
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <label className="text-sm text-gray-600">Sort by:</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="input-field text-sm py-2"
                    >
                      <option value="newest">Newest</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="size-asc">Size: Small to Large</option>
                      <option value="size-desc">Size: Large to Small</option>
                    </select>
                  </div>
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'bg-white text-gray-400 hover:text-gray-600'}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'bg-white text-gray-400 hover:text-gray-600'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Listings Grid */}
            {filteredListings.length > 0 ? (
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {filteredListings.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="card p-12 text-center">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters to see more results</p>
                <button
                  onClick={() => setFilters({ location: '', type: 'all', minPrice: '', maxPrice: '', minSize: '', maxSize: '' })}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
