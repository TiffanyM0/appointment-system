import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="flex flex-col ">
                    {/* <!-- Hero Section --> */}
                    <div class="bg-gradient-to-br from-blue-50 to-green-50 h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8">
                        <div class="max-w-7xl mx-auto">
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div class="text-center lg:text-left">
                                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                        Our solution to <br/>
                                        creating Mental Wellness<br/>
                                        in Africa
                                    </h1>
                                    <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                                        Connect with licensed therapists through secure, convenient online sessions. Take the first step towards better mental health with personalized care that fits your life.
                                    </p>
                                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                        <button class="nav-link bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg" data-page="booking">
                                            Book Your Session
                                        </button>
                                        <button class="nav-link bg-blue-600 text-white border-2 border-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-300" data-page="prediagnosis">
                                            Start Assessment
                                        </button>
                                    </div>
                                </div>

                                <div class="relative">
                                    <div class="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                                        <div class="flex items-center space-x-2">
                                            <i class="fas fa-star text-yellow-400"></i>
                                            <span class="font-semibold">4.9/5</span>
                                            <span class="text-gray-600">from 200+ reviews</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Services Section --> */}
                    <div class="py-16 bg-white">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div class="text-center mb-16">
                                <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                                    We offer a comprehensive range of mental health services tailored to your unique needs.
                                </p>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                                    <i class="fas fa-user text-primary text-3xl mb-4"></i>
                                    <h3 class="text-xl font-bold text-gray-900 mb-3">Individual Therapy</h3>
                                    <p class="text-gray-600 mb-4">One-on-one sessions focused on your personal growth and healing journey.</p>
                                    <ul class="text-sm text-gray-500 space-y-1">
                                        <li>• Anxiety & Depression</li>
                                        <li>• Trauma Recovery</li>
                                        <li>• Life Transitions</li>
                                    </ul>
                                </div>
                                
                                <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                                    <i class="fas fa-users text-secondary text-3xl mb-4"></i>
                                    <h3 class="text-xl font-bold text-gray-900 mb-3">Couples Counseling</h3>
                                    <p class="text-gray-600 mb-4">Strengthen your relationship with professional guidance and support.</p>
                                    <ul class="text-sm text-gray-500 space-y-1">
                                        <li>• Communication Skills</li>
                                        <li>• Conflict Resolution</li>
                                        <li>• Intimacy Building</li>
                                    </ul>
                                </div>
                                
                                <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                                    <i class="fas fa-laptop text-purple-600 text-3xl mb-4"></i>
                                    <h3 class="text-xl font-bold text-gray-900 mb-3">Online Therapy</h3>
                                    <p class="text-gray-600 mb-4">Convenient, secure virtual sessions from the comfort of your home.</p>
                                    <ul class="text-sm text-gray-500 space-y-1">
                                        <li>• Flexible Scheduling</li>
                                        <li>• Secure Platform</li>
                                        <li>• Same Quality Care</li>
                                    </ul>
                                </div>

                                <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                                    <i class="fas fa-user text-primary text-3xl mb-4"></i>
                                    <h3 class="text-xl font-bold text-gray-900 mb-3">Corporate Wellness Programs</h3>
                                    <p class="text-gray-600 mb-4">Tailored sessions focused on bringing the team together.</p>
                                    <ul class="text-sm text-gray-500 space-y-1">
                                        <li>• Team building</li>
                                        <li>• Seminars</li>
                                        <li>• Webinars</li>
                                    </ul>
                                </div>

                                <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                                    <i class="fas fa-user text-primary text-3xl mb-4"></i>
                                    <h3 class="text-xl font-bold text-gray-900 mb-3">Student-focused Therapy</h3>
                                    <p class="text-gray-600 mb-4">One-on-one sessions or group sessions focused on addressing the issues often faced by students.</p>
                                    <ul class="text-sm text-gray-500 space-y-1">
                                        <li>• On-campus Counseling</li>
                                        <li>• Online group and Individual sessions</li>
                                        <li>• Tailored webinars</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- CTA Section --> */}
                    <div class="bg-blue-600 py-16">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Ready to Start Your Mental Wellness Journey?
                            </h2>
                            <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                                Take the first step towards a healthier, happier you. Our compassionate therapists are here to support you every step of the way.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                                <button class="nav-link bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300" data-page="booking">
                                    Book Your First Session
                                </button>
                                <button class="nav-link bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300" data-page="contact">
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






