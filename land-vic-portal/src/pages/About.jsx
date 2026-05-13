import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">About Land Victoria</h1>
          <p className="text-xl text-gray-600 mb-8">
            Victoria's premier marketplace for land sales, connecting buyers and sellers across the state since 2024.
          </p>
          
          <div className="card p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Land Victoria, we're dedicated to making land transactions simple, transparent, and successful. 
              We specialize exclusively in land sales across Victoria, providing expert knowledge and comprehensive 
              resources for anyone looking to buy or sell residential, rural, commercial, or development land.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our platform brings together verified listings, market insights, and expert support to ensure you make 
              informed decisions every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">For Buyers</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Access to thousands of verified land listings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Detailed property information and zoning data</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Expert guidance throughout your purchase journey</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Market insights and valuation tools</span>
                </li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">For Sellers</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Maximum exposure to qualified buyers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Professional listing presentation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Competitive marketing strategies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 mt-1">✓</span>
                  <span>Dedicated support from listing to settlement</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Land Victoria?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong className="text-gray-900">Specialized Expertise:</strong> Unlike general real estate platforms, 
                we focus exclusively on land. This specialization means deeper market knowledge, better tools, and 
                more targeted marketing for land properties.
              </p>
              <p>
                <strong className="text-gray-900">Statewide Coverage:</strong> From Melbourne's growing suburbs to 
                Victoria's picturesque rural regions, we cover all areas of the state with comprehensive listings 
                and local expertise.
              </p>
              <p>
                <strong className="text-gray-900">Verified Listings:</strong> Every property on our platform is 
                verified for accuracy, ensuring you have reliable information about zoning, titles, and development 
                potential.
              </p>
              <p>
                <strong className="text-gray-900">Technology-Driven:</strong> Our platform leverages the latest 
                technology to provide seamless search experiences, detailed analytics, and efficient communication 
                between buyers and sellers.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/search" className="btn-primary inline-block">
              Browse Available Land
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
