import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./admin.css";

const AdminLogin = ({ handleSubmit, log_in }) => {
  const navigate = useNavigate();

  // Redirect if already logged in
  if (log_in) {
    navigate("/admin");
  }

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 text-center">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <i className="fas fa-user-shield text-primary text-4xl mb-4"></i>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Admin Login</h2>
        <p className="text-gray-600 mb-6">
          Please enter your credentials to access the admin dashboard.
        </p>

        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col text-left">
            <label className="font-semibold mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={onChange}
              className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={onChange}
              className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div className="flex flex-col text-left">
            <label className="font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>

          <Link
            to="/"
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors duration-300 flex justify-center"
          >
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
