import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                    {/* <!-- Hero Section --> */}
                    <div class="bg-gradient-to-br from-blue-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
                        <div class="max-w-7xl mx-auto">
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div class="text-center lg:text-left">
                                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                        Your Journey to 
                                        <span class="text-primary">Mental Wellness</span>
                                        Starts Here
                                    </h1>
                                    <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                                        Professional, compassionate therapy services designed to help you navigate life's challenges and discover your inner strength.
                                    </p>
                                    <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                        <button class="nav-link bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg" data-page="booking">
                                            Book Your Session
                                        </button>
                                        <button class="nav-link bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300" data-page="prediagnosis">
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
            </div>
        );
    }
}

export default Home;






