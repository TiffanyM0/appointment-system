import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div class="flex justify-center items-center bg-gradient-to-br from-green-100 to-green-300">
                <div class=" py-16">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-16">
                            <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
                            <p class="text-xl text-gray-600">
                                Ready to start your journey? We're here to help.
                            </p>
                        </div>
                        
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h2 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                                <div class="space-y-6">
                                    <div class="flex items-start">
                                        <i class="fas fa-phone text-primary text-xl mt-1 mr-4"></i>
                                        <div>
                                            <h3 class="font-semibold text-gray-900">Phone</h3>
                                            <p class="text-gray-600">(555) 123-4567</p>
                                            <p class="text-sm text-gray-500">Mon-Fri 9AM-6PM</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start">
                                        <i class="fas fa-envelope text-primary text-xl mt-1 mr-4"></i>
                                        <div>
                                            <h3 class="font-semibold text-gray-900">Email</h3>
                                            <p class="text-gray-600">info@mindcare.com</p>
                                            <p class="text-sm text-gray-500">We'll respond within 24 hours</p>
                                        </div>
                                    </div>
                                    <div class="flex items-start">
                                        <i class="fas fa-map-marker-alt text-primary text-xl mt-1 mr-4"></i>
                                        <div>
                                            <h3 class="font-semibold text-gray-900">Address</h3>
                                            <p class="text-gray-600">123 Wellness Street Suite 200our City, State 12345</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bg-white rounded-lg p-8 shadow-lg">
                                <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                                <form class="space-y-4">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"/>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"/>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                        <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"/>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                                    </div>
                                    <button type="submit" class="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-semibold">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
export default Contact;