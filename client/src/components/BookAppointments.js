import React, { useState, useMemo } from "react";
import httpsClient from "./httpsClient";

function BookAppointments() {
  // Original state (unchanged for API)
  const [Appointment, setAppointment] = useState({
    patient_id: "",
    doctor_id: "",
    date: "",
  });

  // Extra UI-only state (NOT sent to your current API)
  const [selectedTime, setSelectedTime] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  
  // New state for calendar navigation
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // ---- ORIGINAL FUNCTIONS (kept) ----
  const create_appointment = async () => {
    try {
      const resp = await httpsClient.post("http://127.0.0.1:5555/appointments", {
        patient_id: Appointment.patient_id,
        doctor_id: Appointment.doctor_id,
        date: Appointment.date, // unchanged payload
      });
      alert("Appointment created successfully!");
      console.log(resp);
    } catch (error) {
      if (error && error.response && error.response.status === 401) {
        alert("Invalid Credentials");
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can optionally include selectedTime/specialRequests in the POST later if your API supports it.
    create_appointment();
  };

  const onChange = (e) =>
    setAppointment({ ...Appointment, [e.target.name]: e.target.value });

  const HandleDate = (e) => {
    let chosendate = new Date(e.target.value);
    let today = new Date();
    // zero out time for fair comparison
    chosendate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    if (chosendate > today) {
      return onChange(e);
    } else {
      return alert("Please enter a future date");
    }
  };

  const Home = () => {
    window.location.href = "http://localhost:3000/patientview";
  };

  // Calendar navigation functions
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Check if we can go to previous month (don't allow past months from today)
  const canGoPrevious = () => {
    const today = new Date();
    const currentDisplayMonth = new Date(currentYear, currentMonth, 1);
    const currentRealMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    return currentDisplayMonth > currentRealMonth;
  };

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const availableTimes = [
    "9:00 AM","10:00 AM","11:00 AM","2:00 PM","3:00 PM","4:00 PM"
  ];

  const toYYYYMMDD = (year, monthIndexZero, day) => {
    const m = (monthIndexZero + 1).toString().padStart(2, "0");
    const d = day.toString().padStart(2, "0");
    return `${year}-${m}-${d}`;
  };

  const onDayClick = (year, monthIndexZero, day) => {
    const value = toYYYYMMDD(year, monthIndexZero, day);
    // Reuse your future-date validator + state setter
    HandleDate({ target: { name: "date", value } });
  };

  const isSameDay = (yyyyMmDd, year, monthIndexZero, day) => {
    if (!yyyyMmDd) return false;
    const [y, m, d] = yyyyMmDd.split("-").map(Number);
    return y === year && m === monthIndexZero + 1 && d === day;
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Book Your Appointment</h1>
          <p className="text-lg text-gray-600">
            Choose your preferred date, time, and add any special requests
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* IDs Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Doctor ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="doctor_id">
                  Doctor's ID *
                </label>
                <input
                  type="number"
                  name="doctor_id"
                  id="doctor_id"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  placeholder="Enter doctor's id"
                  value={Appointment.doctor_id}
                  onChange={onChange}
                  min={1}
                  required
                />
              </div>

              {/* Patient ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="patient_id">
                  Patient ID *
                </label>
                <input
                  type="number"
                  name="patient_id"
                  id="patient_id"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  placeholder="Enter your patient ID"
                  value={Appointment.patient_id}
                  onChange={onChange}
                  min={1}
                  required
                />
              </div>
            </div>

            {/* Calendar */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Select Date *</label>
              <div className="bg-gray-50 rounded-lg p-6">
                {/* Calendar Header with Navigation */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    type="button"
                    onClick={goToPreviousMonth}
                    disabled={!canGoPrevious()}
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      canGoPrevious()
                        ? "hover:bg-gray-200 text-gray-700"
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <h3 className="text-xl font-bold text-gray-900">
                    {monthNames[currentMonth]} {currentYear}
                  </h3>
                  
                  <button
                    type="button"
                    onClick={goToNextMonth}
                    className="p-2 rounded-lg hover:bg-gray-200 text-gray-700 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Weekdays */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
                    <div key={d} className="text-center font-semibold text-gray-600 py-2">
                      {d}
                    </div>
                  ))}
                </div>

                {/* Days grid */}
                <div className="grid grid-cols-7 gap-2">
                  {/* Empty cells before the 1st */}
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}

                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const dateObj = new Date(currentYear, currentMonth, day);
                    dateObj.setHours(0, 0, 0, 0);
                    const isPast = dateObj <= today;
                    const isWeekend = dateObj.getDay() === 0 || dateObj.getDay() === 6;
                    const selected = isSameDay(
                      Appointment.date,
                      currentYear,
                      currentMonth,
                      day
                    );

                    let classes =
                      "text-center py-3 rounded-lg cursor-pointer transition-colors duration-300";

                    if (isPast) {
                      classes += " text-gray-400 cursor-not-allowed";
                    } else if (isWeekend) {
                      classes += " text-gray-500 cursor-not-allowed";
                    } else {
                      classes += " text-gray-900 hover:bg-primary hover:text-white";
                    }

                    if (selected) {
                      classes += " bg-primary text-white";
                    }

                    return (
                      <button
                        type="button"
                        key={day}
                        className={classes}
                        disabled={isPast || isWeekend}
                        onClick={() => onDayClick(currentYear, currentMonth, day)}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Keep the original date input (hidden) so your HandleDate + state still exist */}
              <input
                type="date"
                name="date"
                id="date"
                value={Appointment.date}
                onChange={HandleDate}
                className="hidden"
                required
              />
            </div>

            {/* Time Slots */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Available Times
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableTimes.map((t) => {
                  const active = selectedTime === t;
                  return (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={[
                        "px-4 py-3 border-2 rounded-lg transition-colors duration-300 font-medium",
                        active
                          ? "border-primary bg-blue-50 text-primary"
                          : "border-gray-200 hover:border-primary hover:bg-blue-50",
                      ].join(" ")}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests or Notes
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                placeholder="Any specific concerns or requests..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Book Now
              </button>
              <button
                type="button"
                onClick={Home}
                className="bg-blue-600 border-2 border-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookAppointments;