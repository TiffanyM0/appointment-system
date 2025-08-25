import React, { useState } from "react";

export default function PreDiagnosis() {
  const [impact, setImpact] = useState(5);
  const [previousTreatment, setPreviousTreatment] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const symptoms = [];
    e.target.querySelectorAll('input[name="symptoms"]:checked').forEach((c) =>
      symptoms.push(c.value)
    );

    const assessmentData = {
      fullName: formData.get("fullName"),
      age: formData.get("age"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      gender: formData.get("gender"),
      emergencyContact: formData.get("emergencyContact"),
      currentStruggles: formData.get("currentStruggles"),
      duration: formData.get("duration"),
      impactScale: impact,
      symptoms,
      previousTreatment: formData.get("previousTreatment"),
      treatmentHistory: formData.get("treatmentHistory"),
      medications: formData.get("medications"),
      goals: formData.get("goals"),
      preferredFormat: formData.get("preferredFormat"),
      consentTreatment: formData.get("consentTreatment") === "on",
      consentData: formData.get("consentData") === "on",
      consentContact: formData.get("consentContact") === "on",
      assessmentId: "AS" + Date.now(),
      submittedAt: new Date().toISOString(),
      status: "pending_review",
    };

    const assessments = JSON.parse(localStorage.getItem("assessments") || "[]");
    assessments.push(assessmentData);
    localStorage.setItem("assessments", JSON.stringify(assessments));

    setShowSuccessModal(true);
    console.log("Assessment saved:", assessmentData);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mental Health Assessment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This confidential assessment helps us understand your current mental
            health status and tailor our services to your specific needs. All
            information is kept strictly confidential.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    min="18"
                    max="100"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Current Concerns */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Current Concerns
              </h2>
              <textarea
                name="currentStruggles"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                rows={5}
              ></textarea>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  On a scale of 1-10, impact on your daily life:
                </label>
                <div className="flex items-center space-x-4">
                  <span>1</span>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={impact}
                    onChange={(e) => setImpact(e.target.value)}
                    className="flex-1"
                  />
                  <span>10</span>
                  <span className="font-bold">{impact}</span>
                </div>
              </div>
            </div>

            {/* Previous Treatment */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Treatment History
              </h2>
              <div>
                <label className="block mb-2">Have you had treatment before?</label>
                <div>
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="previousTreatment"
                      value="yes"
                      onChange={(e) => setPreviousTreatment(e.target.value)}
                    />{" "}
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="previousTreatment"
                      value="no"
                      onChange={(e) => setPreviousTreatment(e.target.value)}
                    />{" "}
                    No
                  </label>
                </div>
              </div>

              {previousTreatment === "yes" && (
                <div className="mt-4">
                  <label className="block text-sm mb-2">
                    Please describe your previous treatment:
                  </label>
                  <textarea
                    name="treatmentHistory"
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  ></textarea>
                </div>
              )}
            </div>

            {/* Consent */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Consent & Privacy
              </h2>
              <label className="flex items-center mb-2">
                <input type="checkbox" name="consentTreatment" required />{" "}
                <span className="ml-2">
                  I consent to receive mental health treatment *
                </span>
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" name="consentData" required />{" "}
                <span className="ml-2">
                  I consent to my data being collected for treatment *
                </span>
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" name="consentContact" />{" "}
                <span className="ml-2">
                  I consent to being contacted for appointments
                </span>
              </label>
            </div>

            <div className="text-center pt-8">
              <button
                type="submit"
                className="bg-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700"
              >
                Submit Assessment
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Assessment Submitted!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for completing the assessment. Our team will review your
              information and contact you soon.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
