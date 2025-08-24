import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';

class PatientLogin extends Component {
    render() {
        const { handleSubmit, log_in } = this.props;

        if (log_in) {
            return <Navigate to='/patientview' />
        }

        return (
            <div className="max-w-2xl mx-auto py-16 px-4 text-center">
                <div className="bg-white rounded-xl shadow-lg p-8">
                    {/* Icon */}
                    <i className="fas fa-user text-blue-500 text-4xl mb-4"></i>
                    
                    {/* Heading */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Patient Login</h2>
                    <p className="text-gray-600 mb-6">Please log in to access your account and appointments.</p>

                    {/* Login Form */}
                    <form 
                        onSubmit={handleSubmit} 
                        className="flex flex-col space-y-4 text-left"
                    >
                        {/* Username */}
                        <div>
                            <label className="font-semibold block mb-1">Username</label>
                            <input 
                                type="text" 
                                name="username" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="font-semibold block mb-1">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="font-semibold block mb-1">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center">
                            <input 
                                type="checkbox" 
                                name="remember_me" 
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label className="ml-2 text-gray-700">Remember Me</label>
                        </div>

                        {/* New patient link */}
                        <div className="flex justify-center text-sm">
                            <p className="mr-1">New Patient?</p>
                            <Link to='/register_patient' className="text-blue-600 font-semibold hover:underline">
                                Create an account
                            </Link>
                        </div>

                        {/* Buttons */}
                        <button 
                            type="submit" 
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 w-full"
                        >
                            Login
                        </button>
                        <Link 
                            to="/" 
                            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300 w-full text-center"
                        >
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default PatientLogin;
