import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
    render() {
        // therapists to be coded from the database
        // For now, we will use a static array of objects to represent therapists
        // In a real application, this data would be fetched from an API or database
        // This is a mockup of the therapists data
        const therapists = [
            {
                id: 1,
                name: "Dr. Sarah Johnson",
                education: "Ph.D. in Clinical Psychology, Harvard University",
                specialization: "Anxiety, Depression, Trauma Therapy",
                experience: "12 years",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
            },
            {
                id: 2,
                name: "Dr. Michael Chen",
                education: "M.D. Psychiatry, Stanford University School of Medicine",
                specialization: "Cognitive Behavioral Therapy, PTSD",
                experience: "15 years",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
            },
            {
                id: 3,
                name: "Dr. Emily Rodriguez",
                education: "Psy.D. Clinical Psychology, University of California",
                specialization: "Family Therapy, Relationship Counseling",
                experience: "10 years",
                image: "https://images.unsplash.com/photo-1594824609647-e81b7702dcd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
            },
            {
                id: 4,
                name: "Dr. James Wilson",
                education: "Ph.D. in Counseling Psychology, Yale University",
                specialization: "Addiction Recovery, Group Therapy",
                experience: "18 years",
                image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
            },
            {
                id: 5,
                name: "Dr. Lisa Thompson",
                education: "M.S. Marriage & Family Therapy, Northwestern University",
                specialization: "Child Psychology, Behavioral Therapy",
                experience: "8 years",
                image: ""
            },
            {
                id: 6,
                name: "Dr. Robert Martinez",
                education: "Ph.D. Clinical Psychology, University of Michigan",
                specialization: "Geriatric Psychology, Mindfulness Therapy",
                experience: "14 years",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
            }
        ];

        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 py-16 pt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About AfyaLink</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            AfyaLink is a digital bridge to hope, connecting individuals with trusted mental health professionals when they need it most. 
                            By breaking stigma and streamlining referrals, we make access to care faster, simpler, and more affordable for everyone.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-gray-600 mb-4">
                                At AfyaLink, we believe that mental health is just as important as physical health. 
                                Our mission is to provide accessible, high-quality therapy services that empower 
                                individuals to overcome challenges and thrive.
                            </p>
                            <p className="text-gray-600">
                                We offer a safe, non-judgmental space where you can explore your thoughts, 
                                feelings, and experiences with trained professionals who genuinely care about your wellbeing.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-600">Evidence-based therapeutic techniques</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-600">Personalized treatment plans</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-600">Culturally sensitive care</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-600">Flexible scheduling options</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Therapist Section */}
                    <div className="mt-20">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Therapists</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Meet our team of experienced, licensed professionals who are here to support your journey to wellness.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {therapists.map((therapist) => (
                                <div key={therapist.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                                    <div className="relative">
                                        <img
                                            src={therapist.image}
                                            alt={therapist.name}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {therapist.experience}
                                        </div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{therapist.name}</h3>
                                        
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-green-600 mb-1">Education</h4>
                                            <p className="text-sm text-gray-600">{therapist.education}</p>
                                        </div>
                                        
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-green-600 mb-1">Specializations</h4>
                                            <p className="text-sm text-gray-600">{therapist.specialization}</p>
                                        </div>
                                        
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Experience: {therapist.experience}
                                            </div>
                                            <Link to="/bookappointments" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                                                Book Session
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-12">
                            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
                                <p className="text-gray-600 mb-6">
                                    Take the first step towards better mental health. Our team is here to support you every step of the way.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        to="/bookappointments"
                                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                                    >
                                        Schedule Appointment
                                    </Link>
                                    <Link
                                        to="contact"
                                        className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;