import React, { useState, useEffect} from "react";
import "./PatientsView.css";
import UpcomingAppointment from "./UpcomingAppointment";

function PatientsView() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // user & appointments state
  const [user, setUser] = useState({});

  // fetch user info
  const UserInfo = async () => {
    try {
      let response = await fetch("http://127.0.0.1:5555/@me");
      let data = await response.json();
      setUser(data);
    } catch (err) {
      console.error("Error fetching user info:", err);
    }
  };

  useEffect(() => {
    UserInfo();
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const upcomingAppointment = {
    therapist: "Dr. Jane Smith",
    date: "Oct 10, 2023",
    time: "3:00 PM",
    type: "Telehealth Session",
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div className="lg:ml-64">
        
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="ml-4 lg:ml-0 text-2xl font-semibold text-gray-900">
                  Welcome back, {user?.name?.split(" ")[0] || "Friend"}
                </h1>
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-row">
          <div className={`flex w-64 bg-white shadow-lg p-4 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
            <div className="flex flex-col h-full">
              {/* Patient Profile */}
              <div className="p-6 bg-gradient-to-r from-blue-50 to-green-50 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {user?.name ? user.name.split(" ").map(n => n[0]).join("") : "U"}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{user?.name || "Tiffany"}</h3>
                    <p className="text-sm text-gray-600">Patient</p>
                  </div>
                </div>
              </div>
          
              {/* Logout */}
              <div className="p-4 border-t border-gray-100">
                <button
                  onClick={() => (window.location.href = "/")}
                  className="flex items-center w-full px-3 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-700 transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          
          {/* Main Content Area */}

          <main className="p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Upcoming Appointment */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold text-gray-900">Upcoming Appointment</h2>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-700">
                        <span>{upcomingAppointment.therapist}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <span>{upcomingAppointment.date} • {upcomingAppointment.time}</span>
                      </div>
                      <p className="text-gray-600">{upcomingAppointment.type}</p>
                    </div>

                    <div className="flex space-x-3 mt-6">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                        Join Session
                      </button>
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                        Reschedule
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 p-6 flex flex-col space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Quick Actions</h2>
                  <button
                    className="bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition"
                    onClick={() => (window.location.href = "/bookappointments")}
                  >
                    Book Appointments
                  </button>
                  <button
                    className="bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 transition"
                    onClick={() => (window.location.href = "/patientappointments")}
                  >
                    View Appointments
                  </button>
                </div>
              </div>
            </div>
          </main>

        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-600">
                  © 2025 AfyaLink. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Your mental health journey, supported every step of the way.
                </p>
              </div>
              
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default PatientsView;
