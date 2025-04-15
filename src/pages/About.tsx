import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">About Robotronics</h1>
            <p className="max-w-3xl mx-auto mt-5 text-xl text-gray-600">
              Pioneering the future of solar panel maintenance with innovative robotic solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                At Robotronics, our mission is to revolutionize solar panel maintenance through innovative robotic solutions that maximize energy efficiency, reduce water consumption, and lower operational costs for solar installations of all sizes.
              </p>
              <p className="text-gray-600 mt-4">
                We are committed to advancing renewable energy adoption by removing maintenance barriers and ensuring optimal performance of solar energy systems worldwide.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                We envision a world where clean energy production is maximized through intelligent, autonomous maintenance systems that operate with minimal human intervention and environmental impact.
              </p>
              <p className="text-gray-600 mt-4">
                By 2030, we aim to service over 1 million solar installations globally, contributing to a significant reduction in carbon emissions and water usage in the renewable energy sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Robotronics founding team" 
                className="rounded-lg shadow-md"
              />
            </div>
            
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                Robotronics was founded in 2020 by a team of engineers and renewable energy experts who recognized a critical challenge in the solar industry: the inefficient and resource-intensive process of panel cleaning.
              </p>
              <p className="text-gray-600 mb-4">
                After witnessing solar farms operating at reduced capacity due to dust and debris accumulation, our founders set out to develop an automated solution that would maintain optimal panel performance without the high costs and environmental impact of traditional cleaning methods.
              </p>
              <p className="text-gray-600 mb-4">
                Through extensive research and development, we created our first prototype in 2021, which demonstrated a 30% reduction in water usage and a 40% increase in cleaning efficiency compared to manual methods.
              </p>
              <p className="text-gray-600">
                Today, Robotronics has grown into a leading provider of robotic cleaning solutions for the solar industry, with installations across residential, commercial, and utility-scale solar projects worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Leadership Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              Meet the experts behind our innovative robotic solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <img 
                src="/profile1.png" 
                alt="CEO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">David Chen</h3>
                <p className="text-primary font-medium">CEO & Co-Founder</p>
                <p className="mt-3 text-gray-600">
                  Former renewable energy consultant with 15+ years of experience in solar technology innovation.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <img 
                src="/profile2.png" 
                alt="CTO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Sophia Rodriguez</h3>
                <p className="text-primary font-medium">CTO & Co-Founder</p>
                <p className="mt-3 text-gray-600">
                  Robotics engineer with background in AI and machine learning from MIT.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <img 
                src="/profile3.png" 
                alt="COO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Michael Johnson</h3>
                <p className="text-primary font-medium">COO</p>
                <p className="mt-3 text-gray-600">
                  Operations expert with experience scaling hardware startups globally.
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <img 
                src="/profile4.png" 
                alt="Head of Engineering" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">Emma Patel</h3>
                <p className="text-primary font-medium">Head of Engineering</p>
                <p className="mt-3 text-gray-600">
                  Mechanical engineer specializing in sustainable design and water conservation systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-xl text-gray-600">
              The principles that guide everything we do at Robotronics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border-l-4 border-primary bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously push the boundaries of what's possible in robotic technology and sustainable solutions.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-primary bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We design our products with minimal environmental impact, focusing on water conservation and energy efficiency.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-primary bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600">
                We build robust solutions that perform consistently in diverse environmental conditions.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-primary bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                We listen to our customers' needs and continuously improve our products based on their feedback.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-primary bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600">
                We strive to make advanced robotic solutions accessible to solar installations of all sizes.
              </p>
            </div>
            
            <div className="p-6 border-l-4 border-primary bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with transparency and honesty in all our business practices and relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
