import React from 'react';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Our Products</h1>
            <p className="max-w-3xl mx-auto mt-5 text-xl text-gray-600">
              Advanced robotic solutions designed to keep your solar panels operating at peak efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Solar Panel Cleaning Robots</h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose the perfect solution for your solar installation needs.
            </p>
          </div>

          {/* Automated Model */}
          <div className="mb-24">
            <div className="lg:flex items-center">
              <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
                <img 
                  src="/product1.png" 
                  alt="Automated Model" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="lg:w-1/2 lg:pl-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Automated Model (AI + Camera)</h3>
                <p className="text-gray-600 mb-6">
                  Our flagship model combines advanced AI with precision camera systems to deliver fully autonomous cleaning operations with minimal human intervention.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>AI-powered navigation and obstacle detection</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>High-resolution cameras for dirt detection and cleaning verification</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Waterproof design with IP67 rating</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Advanced water recycling system (90% efficiency)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Real-time performance monitoring via mobile app</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/contact"
                    className="px-6 py-3 text-base font-medium text-white bg-primary rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Request Quote
                  </Link>
                  <button
                    className="px-6 py-3 text-base font-medium text-primary bg-white border border-primary rounded-md shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Download Specs
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Remote-Controlled Model */}
          <div>
            <div className="lg:flex items-center flex-row-reverse">
              <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pl-10">
                <img 
                  src="/product2.png" 
                  alt="Remote-Controlled Model" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="lg:w-1/2 lg:pr-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Remote-Controlled Model</h3>
                <p className="text-gray-600 mb-6">
                  Our cost-effective solution offers precision cleaning with intuitive remote control and assisted navigation features, perfect for smaller installations or specific cleaning needs.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Intuitive remote control with 100m range</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Assisted navigation with proximity sensors</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Waterproof design with IP65 rating</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Efficient water usage with 70% recycling capability</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Battery level monitoring and low-power alerts</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/contact"
                    className="px-6 py-3 text-base font-medium text-white bg-primary rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Request Quote
                  </Link>
                  <button
                    className="px-6 py-3 text-base font-medium text-primary bg-white border border-primary rounded-md shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Download Specs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Common Features</h2>
            <p className="mt-4 text-xl text-gray-600">
              All Robotronics cleaning robots include these essential features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Waterproof Design</h3>
              <p className="text-gray-600">
                Fully waterproof construction allows operation in all weather conditions without damage to internal components.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rugged Construction</h3>
              <p className="text-gray-600">
                Durable materials and reinforced design ensure longevity even in harsh environmental conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">IR Sensors</h3>
              <p className="text-gray-600">
                Infrared sensors detect obstacles and panel edges to prevent damage and ensure complete coverage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Battery Monitoring</h3>
              <p className="text-gray-600">
                Advanced battery management system with real-time monitoring and automatic low-power return functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Product Comparison</h2>
            <p className="mt-4 text-xl text-gray-600">
              Find the right solution for your needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Feature
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Automated Model
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Remote-Controlled Model
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Navigation
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Fully autonomous with AI
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Remote control with assisted navigation
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Water Recycling
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    90% efficiency
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    70% efficiency
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Battery Life
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    8 hours
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    6 hours
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Cleaning Speed
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    100 m²/hour
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    80 m²/hour
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Waterproof Rating
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    IP67
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    IP65
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Remote Monitoring
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Yes, with performance analytics
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Basic monitoring
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Ideal For
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Large commercial installations
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Residential and small commercial
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
            Ready to boost your solar panel efficiency?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our team today for a personalized quote and product demonstration.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 text-base font-medium text-primary bg-white rounded-md shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
