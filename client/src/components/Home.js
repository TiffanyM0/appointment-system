import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="flex flex-col">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-100 to-green-100 h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Our solution for creating mental wellness in Africa
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Connect with licensed therapists through secure, convenient online sessions. Take the first step towards better mental health with personalized care that fits your life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to={"/bookappointments"}
                    className="nav-link bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                    data-page="booking"
                  >
                    Book Your Session
                  </Link>
                  <Link
                    to={"/prediagnosis"}
                    className="nav-link bg-blue-600 text-white border-2 border-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-300"
                    data-page="prediagnosis"
                  >
                    Start Assessment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of mental health services tailored to your unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <i className="fas fa-user text-primary text-3xl mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Individual Therapy</h3>
                <p className="text-gray-600 mb-4">One-on-one sessions focused on your personal growth and healing journey.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Anxiety & Depression</li>
                  <li>• Trauma Recovery</li>
                  <li>• Life Transitions</li>
                </ul>
              </div>

              {/* <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <i className="fas fa-users text-secondary text-3xl mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Couples Counseling</h3>
                <p className="text-gray-600 mb-4">Strengthen your relationship with professional guidance and support.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Communication Skills</li>
                  <li>• Conflict Resolution</li>
                  <li>• Intimacy Building</li>
                </ul>
              </div> */}

              {/* <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <i className="fas fa-laptop text-purple-600 text-3xl mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Online Therapy</h3>
                <p className="text-gray-600 mb-4">Convenient, secure virtual sessions from the comfort of your home.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Flexible Scheduling</li>
                  <li>• Secure Platform</li>
                  <li>• Same Quality Care</li>
                </ul>
              </div> */}

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <i className="fas fa-user text-primary text-3xl mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Wellness Programs</h3>
                <p className="text-gray-600 mb-4">Tailored sessions focused on bringing the team together.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Team building</li>
                  <li>• Seminars</li>
                  <li>• Webinars</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <i className="fas fa-user text-primary text-3xl mb-4"></i>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Student-focused Therapy</h3>
                <p className="text-gray-600 mb-4">One-on-one sessions or group sessions focused on addressing the issues often faced by students.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• On-campus Counseling</li>
                  <li>• Online group and Individual sessions</li>
                  <li>• Tailored webinars</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your Mental Wellness Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Take the first step towards a healthier, happier you. Our compassionate therapists are here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="nav-link bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300" data-page="booking">
                Book Your First Session
              </button>
              <button className="nav-link bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300" data-page="contact">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
