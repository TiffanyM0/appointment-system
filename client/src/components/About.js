import React, {Component} from "react";
import { Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
             <div class="items-center h-screen bg-gradient-to-br from-blue-50 to-green-50 py-16">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16">
                        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About AfyaLink</h1>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            We're dedicated to providing compassionate, professional mental health services 
                            to help you navigate life's challenges and achieve lasting wellness.
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p class="text-gray-600 mb-4">
                                At AfyaLink, we believe that mental health is just as important as physical health. 
                                Our mission is to provide accessible, high-quality therapy services that empower 
                                individuals to overcome challenges and thrive.
                            </p>
                            <p class="text-gray-600">
                                We offer a safe, non-judgmental space where you can explore your thoughts, 
                                feelings, and experiences with trained professionals who genuinely care about your wellbeing.
                            </p>
                        </div>
                        <div class="bg-white rounded-lg p-8 shadow-lg">
                            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
                            <ul class="space-y-3">
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                                    <span class="text-gray-600">Evidence-based therapeutic techniques</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                                    <span class="text-gray-600">Personalized treatment plans</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                                    <span class="text-gray-600">Culturally sensitive care</span>
                                </li>
                                <li class="flex items-start">
                                    <i class="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                                    <span class="text-gray-600">Flexible scheduling options</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;