import React, { useState } from "react";

export default function PreDiagnosis() {
  const [impact, setImpact] = useState(5);
  const [showResults, setShowResults] = useState(false);
  const [assessmentAnswers, setAssessmentAnswers] = useState({});
  const [assessmentResults, setAssessmentResults] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    currentStruggles: '',
    duration: '',
    previousTreatment: '',
    treatmentHistory: '',
    medications: '',
    goals: '',
    preferredFormat: '',
    consentTreatment: false,
    consentData: false,
    consentContact: false
  });

  // PHQ-9 Questions
  const questions = [
    { id: 1, text: "Over the last 2 weeks, how often have you been bothered by feeling nervous, anxious, or on edge?" },
    { id: 2, text: "Over the last 2 weeks, how often have you had little interest or pleasure in doing things?" },
    { id: 3, text: "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?" },
    { id: 4, text: "Over the last 2 weeks, how often have you had trouble falling asleep, staying asleep, or sleeping too much?" },
    { id: 5, text: "Over the last 2 weeks, how often have you felt tired or had little energy?" },
    { id: 6, text: "Over the last 2 weeks, how often have you had poor appetite or overeating?" },
    { id: 7, text: "Over the last 2 weeks, how often have you felt bad about yourself — or that you are a failure or have let yourself or your family down?" },
    { id: 8, text: "Over the last 2 weeks, how often have you had trouble concentrating on things, such as reading the newspaper or watching television?" },
    { id: 9, text: "Over the last 2 weeks, how often have you been so restless that it's hard to sit still?" },
    { id: 10, text: "Over the last 2 weeks, how often have you had thoughts that you would be better off dead, or of hurting yourself in some way?" },
  ];

  const options = [
    { value: 0, label: "Not at all" },
    { value: 1, label: "Several days" },
    { value: 2, label: "More than half the days" },
    { value: 3, label: "Nearly every day" },
  ];

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAnswerChange = (questionId, value) => {
    setAssessmentAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const calculateScore = () => {
    const totalScore = Object.values(assessmentAnswers).reduce((sum, value) => sum + value, 0);
    
    let severity = "";
    let recommendation = "";
    let colorClass = "";
    
    if (totalScore <= 4) {
      severity = "Minimal";
      recommendation = "Your responses suggest minimal symptoms. Continue with self-care and maintain healthy habits.";
      colorClass = "bg-green-50 border-green-200 text-green-800";
    } else if (totalScore <= 9) {
      severity = "Mild";
      recommendation = "Your responses suggest mild symptoms. Consider lifestyle changes and monitor your wellbeing.";
      colorClass = "bg-yellow-50 border-yellow-200 text-yellow-800";
    } else if (totalScore <= 14) {
      severity = "Moderate";
      recommendation = "Your responses suggest moderate symptoms. Consider speaking with a mental health professional.";
      colorClass = "bg-orange-50 border-orange-200 text-orange-800";
    } else if (totalScore <= 19) {
      severity = "Moderately Severe";
      recommendation = "Your responses suggest moderately severe symptoms. We recommend seeking professional help.";
      colorClass = "bg-red-50 border-red-200 text-red-800";
    } else {
      severity = "Severe";
      recommendation = "Your responses suggest severe symptoms. Please seek immediate professional help.";
      colorClass = "bg-red-100 border-red-300 text-red-900";
    }
    
    return { totalScore, severity, recommendation, colorClass };
  };

  const validateForm = () => {
    const requiredFields = ['currentStruggles', 'duration'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
      return false;
    }

    if (!formData.consentTreatment || !formData.consentData) {
      alert('Please accept the required consent agreements to proceed.');
      return false;
    }

    if (Object.keys(assessmentAnswers).length < 10) {
      alert('Please answer all assessment questions.');
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const results = calculateScore();

    const assessmentData = {
      ...formData,
      impactScale: impact,
      phq9Answers: assessmentAnswers,
      results: results,
      assessmentId: "AS" + Date.now(),
      submittedAt: new Date().toISOString(),
      status: "completed",
    };

    setAssessmentResults(assessmentData);
    setShowResults(true);
    console.log("Assessment completed:", assessmentData);
  };

  if (showResults && assessmentResults) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Assessment Results</h1>
              <p className="text-gray-600">Thank you for completing the mental health assessment{assessmentResults.fullName ? ', ' + assessmentResults.fullName : ''}.</p>
            </div>

            <div className="space-y-6">
              <div className={`${assessmentResults.results.colorClass} rounded-lg p-6 border`}>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Your Score</h2>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-blue-600">
                    {assessmentResults.results.totalScore}/30
                  </div>
                  <div>
                    <p className="text-lg font-medium">
                      Severity Level: <span className="font-bold">{assessmentResults.results.severity}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">📋 Assessment Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Assessment ID:</strong> {assessmentResults.assessmentId}</p>
                    <p><strong>Date Completed:</strong> {new Date(assessmentResults.submittedAt).toLocaleDateString()}</p>
                    <p><strong>Impact Scale:</strong> {assessmentResults.impactScale}/10</p>
                  </div>
                  <div>
                    {assessmentResults.gender && <p><strong>Gender:</strong> {assessmentResults.gender}</p>}
                    <p><strong>Duration of Concerns:</strong> {assessmentResults.duration}</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">💡 Recommendation</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {assessmentResults.results.recommendation}
                </p>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">📝 Next Steps</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Save or screenshot these results for your records</li>
                  <li>Share this information with a healthcare provider if seeking treatment</li>
                  <li>Continue monitoring your mental health regularly</li>
                  <li>Reach out for support when needed</li>
                  {assessmentResults.results.totalScore > 9 && (
                    <li className="font-medium text-orange-700">Consider scheduling an appointment with a mental health professional</li>
                  )}
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-red-800 mb-3">⚠️ Important Note</h2>
                <p className="text-red-700">
                  This assessment is for informational purposes only and does not replace professional medical advice, diagnosis, or treatment. 
                  If you're experiencing thoughts of self-harm, please contact a crisis helpline immediately or go to your nearest emergency room.
                </p>
                <p className="text-red-700 mt-2">
                  <strong>Crisis Line: 988</strong> (Suicide & Crisis Lifeline)
                </p>
              </div>

              <div className="text-center space-x-4">
                <button
                  onClick={() => {
                    setShowResults(false);
                    setAssessmentAnswers({});
                    setImpact(5);
                    setFormData({
                      fullName: '',
                      gender: '',
                      currentStruggles: '',
                      duration: '',
                      previousTreatment: '',
                      treatmentHistory: '',
                      medications: '',
                      goals: '',
                      preferredFormat: '',
                      consentTreatment: false,
                      consentData: false,
                      consentContact: false
                    });
                  }}
                  className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Take Assessment Again
                </button>
                <button
                  onClick={() => window.print()}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Print Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-8">
            {/* Personal Information */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Current Concerns */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Concerns</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What specific mental health challenges are you currently facing? *
                  </label>
                  <textarea
                    value={formData.currentStruggles}
                    onChange={(e) => handleInputChange('currentStruggles', e.target.value)}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your current struggles, symptoms, or concerns..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How long have you been experiencing these concerns? *
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select duration</option>
                    <option value="less-than-month">Less than a month</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="more-than-year">More than a year</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    On a scale of 1-10, how much are these concerns impacting your daily life? *
                  </label>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">1 (Minimal impact)</span>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={impact}
                      onChange={(e) => setImpact(parseInt(e.target.value))}
                      className="flex-1"
                    />
                    <span className="text-sm text-gray-500">10 (Severe impact)</span>
                    <span className="text-lg font-semibold text-blue-600 min-w-8">{impact}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Self-Assessment Questions */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Self-Assessment Questions
              </h2>
              <p className="text-gray-600 mb-6">
                Please answer each question based on how you have been feeling over the past 2 weeks.
              </p>
              <div className="space-y-6">
                {questions.map((q) => (
                  <div key={q.id} className="border rounded-lg p-4 bg-gray-50">
                    <p className="mb-4 font-medium text-gray-800">{q.text}</p>
                    <div className="space-y-2">
                      {options.map((opt) => (
                        <label
                          key={opt.value}
                          className="flex items-center cursor-pointer hover:bg-white rounded p-2 transition-colors"
                        >
                          <input
                            type="radio"
                            name={`q-${q.id}`}
                            value={opt.value}
                            checked={assessmentAnswers[q.id] === opt.value}
                            onChange={() => handleAnswerChange(q.id, opt.value)}
                            className="mr-3 text-blue-600"
                          />
                          <span className="text-gray-700">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment History */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Treatment History</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Have you previously received mental health treatment?
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="previousTreatment"
                        value="yes"
                        checked={formData.previousTreatment === "yes"}
                        onChange={(e) => handleInputChange('previousTreatment', e.target.value)}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="previousTreatment"
                        value="no"
                        checked={formData.previousTreatment === "no"}
                        onChange={(e) => handleInputChange('previousTreatment', e.target.value)}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    If yes, please describe your previous treatment experience:
                  </label>
                  <textarea
                    value={formData.treatmentHistory}
                    onChange={(e) => handleInputChange('treatmentHistory', e.target.value)}
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe any previous therapy, counseling, or psychiatric treatment..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Are you currently taking any medications for mental health?
                  </label>
                  <textarea
                    value={formData.medications}
                    onChange={(e) => handleInputChange('medications', e.target.value)}
                    rows="2"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="List any current medications, dosages, and prescribing doctor..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What are your goals for treatment?
                  </label>
                  <textarea
                    value={formData.goals}
                    onChange={(e) => handleInputChange('goals', e.target.value)}
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What would you like to achieve through mental health treatment?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred treatment format:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredFormat"
                        value="in-person"
                        checked={formData.preferredFormat === "in-person"}
                        onChange={(e) => handleInputChange('preferredFormat', e.target.value)}
                        className="mr-2"
                      />
                      In-person sessions
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredFormat"
                        value="virtual"
                        checked={formData.preferredFormat === "virtual"}
                        onChange={(e) => handleInputChange('preferredFormat', e.target.value)}
                        className="mr-2"
                      />
                      Virtual/online sessions
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredFormat"
                        value="both"
                        checked={formData.preferredFormat === "both"}
                        onChange={(e) => handleInputChange('preferredFormat', e.target.value)}
                        className="mr-2"
                      />
                      Both options
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Consent */}
            <div className="pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Consent and Agreement</h2>
              <div className="space-y-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.consentTreatment}
                    onChange={(e) => handleInputChange('consentTreatment', e.target.checked)}
                    className="mr-3 mt-1 text-blue-600"
                  />
                  <span className="text-gray-700">
                    I consent to receive mental health assessment and treatment services. I understand that this assessment is for informational purposes and does not replace professional medical advice. *
                  </span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.consentData}
                    onChange={(e) => handleInputChange('consentData', e.target.checked)}
                    className="mr-3 mt-1 text-blue-600"
                  />
                  <span className="text-gray-700">
                    I consent to the collection, use, and storage of my personal health information for the purposes of providing mental health services, in accordance with applicable privacy laws. *
                  </span>
                </label>
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.consentContact}
                    onChange={(e) => handleInputChange('consentContact', e.target.checked)}
                    className="mr-3 mt-1 text-blue-600"
                  />
                  <span className="text-gray-700">
                    I consent to be contacted regarding my assessment results and potential treatment options.
                  </span>
                </label>
              </div>
            </div>

            <div className="text-center pt-8">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Submit Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}