import React from 'react';

const Technology: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Our Technology</h1>
            <p className="max-w-3xl mx-auto mt-5 text-xl text-gray-600">
              The innovative systems and components that power our solar panel cleaning robots.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <img 
                src="technology1.png" 
                alt="Robotronics Technology" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cutting-Edge Innovation</h2>
              <p className="text-gray-600 mb-4">
                At Robotronics, we've developed proprietary technology that combines advanced robotics, artificial intelligence, and sustainable engineering to create the most efficient solar panel cleaning solutions on the market.
              </p>
              <p className="text-gray-600 mb-4">
                Our systems are designed from the ground up with a focus on water conservation, energy efficiency, and autonomous operation, ensuring that solar installations of all sizes can maintain peak performance with minimal environmental impact.
              </p>
              <p className="text-gray-600">
                Each component of our robots is carefully engineered to work in harmony, creating a seamless cleaning experience that maximizes solar panel output while minimizing resource consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Core Technologies</h2>
            <p className="mt-4 text-xl text-gray-600">
              The key systems that make our robots exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* AI Navigation System */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-primary mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Navigation System</h3>
              <p className="text-gray-600 mb-4">
                Our proprietary AI navigation system uses computer vision and machine learning algorithms to create real-time maps of solar panel arrays, identify optimal cleaning paths, and detect obstacles or damaged panels.
              </p>
              <p className="text-gray-600">
                The system continuously learns from each cleaning operation, improving efficiency and adapting to changes in the installation environment over time.
              </p>
            </div>

            {/* Water Conservation Technology */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-primary mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Water Conservation Technology</h3>
              <p className="text-gray-600 mb-4">
                Our advanced water recycling system captures, filters, and reuses up to 90% of the water used during cleaning operations, dramatically reducing water consumption compared to traditional methods.
              </p>
              <p className="text-gray-600">
                The multi-stage filtration process removes particles as small as 5 microns, ensuring that recycled water maintains optimal cleaning effectiveness without risking damage to solar panels.
              </p>
            </div>

            {/* Adaptive Cleaning System */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-primary mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Adaptive Cleaning System</h3>
              <p className="text-gray-600 mb-4">
                Our robots feature an intelligent cleaning system that adjusts brush pressure, water flow, and movement speed based on the type and level of soiling detected on each panel.
              </p>
              <p className="text-gray-600">
                This adaptive approach ensures thorough cleaning without unnecessary water usage or risk of damage to panel surfaces, extending both the life of the panels and the cleaning efficiency.
              </p>
            </div>

            {/* Energy Management System */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-primary mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Energy Management System</h3>
              <p className="text-gray-600 mb-4">
                Our proprietary battery management system optimizes power consumption during operation, extending runtime while ensuring consistent performance throughout the cleaning cycle.
              </p>
              <p className="text-gray-600">
                The system includes smart charging capabilities that can be integrated with the solar installation itself, allowing the robots to recharge using the very energy they help produce more efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Technical Specifications</h2>
            <p className="mt-4 text-xl text-gray-600">
              The detailed specifications that power our robotic solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Sensors & Detection</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">High-Resolution Cameras</p>
                    <p className="mt-1 text-gray-600">4K resolution with 120° field of view for comprehensive surface analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Infrared Sensors</p>
                    <p className="mt-1 text-gray-600">Precision edge detection with 2mm accuracy for safe navigation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Dirt Detection System</p>
                    <p className="mt-1 text-gray-600">AI-powered analysis identifies dirt concentration and type for optimized cleaning</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Ultrasonic Proximity Sensors</p>
                    <p className="mt-1 text-gray-600">360° obstacle detection with 10cm to 5m range</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cleaning System</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Microfiber Brush System</p>
                    <p className="mt-1 text-gray-600">Soft-touch brushes with variable pressure control (0.1-2.0 kg/cm²)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Water Delivery System</p>
                    <p className="mt-1 text-gray-600">Precision nozzles with adjustable flow rate (0-200 ml/min)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Filtration System</p>
                    <p className="mt-1 text-gray-600">Three-stage filtration with 5-micron final filter for water recycling</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Drying System</p>
                    <p className="mt-1 text-gray-600">Microfiber squeegee with optional air-assist for streak-free results</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Power & Performance</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Battery System</p>
                    <p className="mt-1 text-gray-600">Lithium-ion battery pack (48V, 40Ah) with smart BMS</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Operating Time</p>
                    <p className="mt-1 text-gray-600">6-8 hours continuous operation per charge</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Charging Time</p>
                    <p className="mt-1 text-gray-600">3 hours to 80%, 4.5 hours to 100%</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Motor System</p>
                    <p className="mt-1 text-gray-600">Brushless DC motors with 95% efficiency rating</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connectivity & Control</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Wireless Connectivity</p>
                    <p className="mt-1 text-gray-600">Wi-Fi (802.11ac), Bluetooth 5.0, optional 4G/LTE</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Remote Control Range</p>
                    <p className="mt-1 text-gray-600">Up to 100m direct line of sight, unlimited via cloud connection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Control Interface</p>
                    <p className="mt-1 text-gray-600">Mobile app (iOS/Android), web dashboard, optional physical remote</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-primary">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">Data Collection</p>
                    <p className="mt-1 text-gray-600">Real-time performance metrics, cleaning history, panel condition reports</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Continuous Innovation</h2>
              <p className="text-gray-600 mb-4">
                Our dedicated R&D team is constantly working to improve our robotic systems, with a focus on increasing efficiency, reducing resource consumption, and expanding capabilities.
              </p>
              <p className="text-gray-600 mb-4">
                Current research initiatives include:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Advanced panel damage detection using thermal imaging</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Zero-water cleaning technologies for arid environments</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Multi-robot coordination for large-scale installations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span>Integrated solar performance analytics and predictive maintenance</span>
                </li>
              </ul>
              <p className="text-gray-600">
                We invest over 20% of our annual revenue in R&D to ensure that our technology remains at the forefront of the industry, providing our customers with the most advanced solar panel cleaning solutions available.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <img 
                src="technology2.png" 
                alt="Robotronics R&D Lab" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
            Experience our technology in action
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a demonstration to see how our advanced robotic solutions can transform your solar panel maintenance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="inline-block px-8 py-3 text-base font-medium text-primary bg-white rounded-md shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Request Demo
            </a>
            <a
              href="/products"
              className="inline-block px-8 py-3 text-base font-medium text-white bg-blue-700 rounded-md shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
