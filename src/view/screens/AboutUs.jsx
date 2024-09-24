import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800">
            About <span className="text-blue-600">Us</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Empowering businesses to build stronger relationships and grow through customer-focused CRM solutions.
          </p>
        </div>

        {/* Our Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At <span className="font-semibold">[Your CRM Name]</span>, our mission is to help businesses build meaningful connections with their customers. 
              We provide cutting-edge tools that streamline processes, increase engagement, and drive sustainable growth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/500"
              alt="CRM illustration"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Customer-Centric</h3>
              <p className="text-gray-600">
                Everything we do is designed with the customer in mind. We create solutions that cater to their needs and help businesses thrive.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and continuously improve our platform to ensure our clients stay ahead of the curve.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with the highest ethical standards, ensuring transparency, honesty, and trust in everything we do.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center bg-blue-600 py-12 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Grow Your Business?</h2>
          <p className="text-white max-w-xl mx-auto mb-8">
            Let’s work together to enhance your customer relationships and accelerate your business growth with our CRM solutions.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
