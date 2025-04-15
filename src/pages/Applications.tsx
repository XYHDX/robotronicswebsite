import React from 'react';
import { Link } from 'react-router-dom';

const Applications: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Applications</h1>
            <p className="max-w-3xl mx-auto mt-5 text-xl text-gray-600">
              Discover how our solar panel cleaning robots are transforming maintenance across various sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Where Our Robots Excel</h2>
            <p className="mt-4 text-xl text-gray-600">
              From residential rooftops to utility-scale solar farms, our robots are designed to meet the unique challenges of every installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="application1.png"
                alt="Residential solar installation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Residential</h3>
                <p className="text-gray-600 mb-4">
                  Keep home solar installations operating at peak efficiency with minimal maintenance effort and water usage.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Safe for all roof types and angles</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Quiet operation for residential areas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Simple smartphone control</span>
                  </li>
                </ul>
                <Link
                  to="/products"
                  className="text-primary font-medium hover:text-blue-700 flex items-center"
                >
                  Learn more
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Commercial */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="application2.png"
                alt="Commercial solar installation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Commercial</h3>
                <p className="text-gray-600 mb-4">
                  Optimize energy production for businesses while reducing maintenance costs and resource consumption.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Scheduled automated cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Performance reporting for ROI tracking</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reduced labor and insurance costs</span>
                  </li>
                </ul>
                <Link
                  to="/products"
                  className="text-primary font-medium hover:text-blue-700 flex items-center"
                >
                  Learn more
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Utility-Scale */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="application3.png"
                alt="Utility-scale solar farm"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Utility-Scale</h3>
                <p className="text-gray-600 mb-4">
                  Maintain optimal performance across large solar farms with our fleet management solutions.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multi-robot coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced analytics and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Significant water conservation</span>
                  </li>
                </ul>
                <Link
                  to="/products"
                  className="text-primary font-medium hover:text-blue-700 flex items-center"
                >
                  Learn more
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Case Studies</h2>
            <p className="mt-4 text-xl text-gray-600">
              Real-world examples of how our robots are making a difference.
            </p>
          </div>

          {/* Case Study 1 */}
          <div className="mb-16">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src="application4.png"
                    alt="Desert solar farm"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Desert Solar Farm Optimization</h3>
                  <p className="text-gray-600 mb-4">
                    A 50MW solar farm in Arizona faced significant efficiency losses due to dust accumulation in the arid environment. Manual cleaning was costly and water-intensive.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 mb-2">
                      Deployment of 10 Robotronics Automated Models with enhanced water recycling systems, operating on a coordinated schedule.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Results</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>12% increase in annual energy production</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>85% reduction in water consumption</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>ROI achieved in 14 months</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Corporate headquarters"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Corporate Campus Sustainability</h3>
                  <p className="text-gray-600 mb-4">
                    A tech company's headquarters with 2MW rooftop solar installation struggled with maintaining cleaning schedules and ensuring worker safety at height.
                  </p>
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600 mb-2">
                      Implementation of 4 Remote-Controlled Models with scheduled operation and integration with the building management system.
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Results</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>8% improvement in energy yield</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>100% elimination of safety risks from manual cleaning</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Featured in company's sustainability report</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Industry Applications</h2>
            <p className="mt-4 text-xl text-gray-600">
              How different sectors benefit from our robotic cleaning solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2H4v-1h16v1h-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Data Centers</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Data centers with on-site solar generation require consistent power output to support critical operations. Our robots ensure maximum energy production while meeting strict water conservation requirements.
              </p>
              <p className="text-gray-600">
                Key benefits include scheduled maintenance that doesn't interfere with operations, detailed performance reporting, and integration with facility management systems.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Educational Institutions</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Schools and universities with solar installations benefit from our robots' quiet operation, scheduled cleaning during off-hours, and educational value for sustainability programs.
              </p>
              <p className="text-gray-600">
                Many institutions incorporate our technology into their curriculum, using the robots as practical examples of automation, renewable energy, and water conservation principles.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Agricultural Installations</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Solar installations on farms and agricultural facilities face unique challenges from dust, pollen, and organic matter. Our robots are designed to handle these specific conditions with specialized cleaning solutions.
              </p>
              <p className="text-gray-600">
                The water conservation features are particularly valuable in agricultural settings where water resources are already carefully managed.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-primary rounded-full p-3 mr-4">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Government & Municipal</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Government buildings and municipal installations with solar arrays benefit from our robots' ability to maintain consistent energy production while demonstrating commitment to innovative sustainability practices.
              </p>
              <p className="text-gray-600">
                The detailed reporting features help satisfy public accountability requirements and document resource conservation efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
            Find the perfect solution for your application
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our team of experts will help you select and customize the right robotic system for your specific needs.
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

export default Applications;
