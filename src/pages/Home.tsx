import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Revolutionizing Solar Panel Cleaning with Smart Robotics
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Our robots keep your solar panels operating at peak efficiency, 
                saving you time, water, and money while maximizing energy production.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/products"
                  className="px-8 py-3 text-base font-medium text-white bg-primary rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Explore Products
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 text-base font-medium text-primary bg-white border border-primary rounded-md shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div className="aspect-w-16 aspect-h-9">
                  <video
                    ref={videoRef}
                    src="/solarrobot.mp4"
                    className="w-full h-full object-cover"
                    controls={isPlaying}
                  />
                </div>
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={handlePlayVideo}
                      className="bg-white bg-opacity-75 rounded-full p-3 shadow-lg hover:bg-opacity-90 transition-all duration-300"
                    >
                      <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" fillRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Smart Features, Exceptional Results
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our robots are designed with cutting-edge technology to deliver superior cleaning performance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-primary mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Efficient</h3>
              <p className="text-gray-600">
                Low power consumption with high-capacity batteries for extended operation between charges.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-primary mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.168 1.168a4 4 0 01-8.092.67L4 10.172a3 3 0 00.879-2.12L6.172 6.172a3 3 0 012-2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Water Saving</h3>
              <p className="text-gray-600">
                Uses minimal water with advanced filtration and recycling systems for eco-friendly operation.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-primary mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Monitoring</h3>
              <p className="text-gray-600">
                Real-time performance tracking and diagnostics through our intuitive mobile app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Innovative Products
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose the perfect solution for your solar panel cleaning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="/automated-robot.png"
                alt="Automated Model"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Automated Model</h3>
                <p className="text-gray-600 mb-4">
                  Fully autonomous cleaning with AI-powered navigation and obstacle avoidance.
                </p>
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

            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src="/remotecontrol.png"
                alt="Remote-Controlled Model"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Remote-Controlled Model</h3>
                <p className="text-gray-600 mb-4">
                  Precision cleaning with intuitive remote control and assisted navigation features.
                </p>
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

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Don't just take our word for it — hear from some of our satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The Robotronics cleaning system has increased our solar farm's efficiency by 15%. The ROI was achieved in less than a year."
              </p>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">Ghalia Baghdadi</div>
                <span className="mx-2 text-gray-500">•</span>
                <div className="text-gray-500">Solar Farm Manager</div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "We've eliminated manual cleaning costs and water usage while maintaining optimal panel performance. Truly revolutionary technology."
              </p>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">Hadi Al Zahabi</div>
                <span className="mx-2 text-gray-500">•</span>
                <div className="text-gray-500">Commercial Property Owner</div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The customer support team is exceptional. They helped us customize the solution for our unique installation and continue to provide great service."
              </p>
              <div className="flex items-center">
                <div className="font-medium text-gray-900">Yamen Qabbane</div>
                <span className="mx-2 text-gray-500">•</span>
                <div className="text-gray-500">Sustainability Director</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
            Ready to maximize your solar investment?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and demonstration of our solar panel cleaning robots.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 text-base font-medium text-primary bg-white rounded-md shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
