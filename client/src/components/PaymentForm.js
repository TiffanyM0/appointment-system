import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// If you don’t want lucide-react, replace with FontAwesome or your own icons
import { ArrowLeft, Check, CreditCard, Shield, Star } from 'lucide-react';

function PaymentForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    alert('Payment processing would happen here!');
  };

  const features = [
    "Unlimited access to all premium articles",
    "New content published weekly",
    "Expert insights and industry reports",
    "Download articles for offline reading",
    "Priority customer support",
    "Cancel anytime, no commitment"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 mb-8 transition-colors duration-300"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Articles</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Subscription Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-4">
                <Star className="h-5 w-5 text-blue-600" />
                <span className="text-blue-800 font-semibold">Premium Access</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Unlock Premium Content
              </h1>
              <p className="text-gray-600">
                Get unlimited access to expert articles and insights
              </p>
            </div>

            <div className="text-center mb-8">
              <div className="inline-block">
                <span className="text-5xl font-bold text-gray-900">$5</span>
                <span className="text-xl text-gray-600 ml-2">USD/month</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Billed monthly • Cancel anytime</p>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <Shield className="h-5 w-5 text-green-600" />
              <span>Secure payment • 30-day money-back guarantee</span>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center space-x-2 mb-6">
              <CreditCard className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Payment Details</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Start Premium Subscription - $5/month
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                By clicking "Start Premium Subscription", you agree to our Terms of Service and Privacy Policy. 
                Your subscription will automatically renew monthly until cancelled.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
