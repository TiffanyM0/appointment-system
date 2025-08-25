import React from "react";

const UpcomingAppointment = ({ appointment }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Upcoming Appointment</h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-700">
            <span>{appointment.therapist}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <span>{appointment.date} • {appointment.time}</span>
          </div>
          <p className="text-gray-600">{appointment.type}</p>
        </div>

        <div className="flex space-x-3 mt-6">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center transition-colors duration-200">
            Join Session
          </button>
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200">
            Reschedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointment;
