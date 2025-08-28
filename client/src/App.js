import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Contact from './components/Contact'
import Navigation from "./components/nav";
import About from "./components/About";
import DoctorLogin from './components/DoctorLogin';
import AdminLogin from './components/AdminLogin';
import PatientLogin from './components/PatientLogin';
import RegisterPatient from './components/RegisterPatient';
import PatientsView from './components/PatientsView';
import Appointment from './components/Appointment';
import BookAppointments from './components/BookAppointments'
import DoctorView from './components/DoctorView'
import DoctorUpdate from './components/DoctorUpdate'
import DoctorReg from './components/DoctorReg';
import Admin from './components/Admin'
import RegisteredPatients from './components/RegisteredPatients'
import RegisteredDoctors from './components/RegisteredDoctors'
import Appointments from './components/AdminApppoint'
import ArticleGrid from './components/Articles';
import Payment from './components/PaymentForm';
import './App.css'
import UserProvider from './components/UserProvider';
import { useUser } from './components/UserProvider';
import PreDiagnosis from './components/Prediagnosis';

// Create a separate component that uses the context INSIDE UserProvider
function AppContent() {
  const [Log_in, setLog_in] = useState(false);
  const { user, setUser } = useUser(); // This now works because it's inside UserProvider

  const handleSubmit = async (event, roleId) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      email: formData.get('email'),
      role_id: roleId,
    };
    console.log(data);

    try {
      const response = await fetch('http://127.0.0.1:5555/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json(); 
      console.log(responseData);  
      setUser(responseData);

      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        console.log('Login successful');
        setLog_in(true);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <Navigation /> 
      <Routes>
        <Route path='/' element={<Home user={user} />}></Route>
        <Route path='/contact' element={<Contact user={user} />} ></Route>
        <Route path='/about' element={<About user={user} />} ></Route>
        <Route path="/articles" element={<ArticleGrid user={user} />}></Route>"
        <Route path='/doctor_login'
          element={<DoctorLogin
            handleSubmit={(e) => handleSubmit(e, 2)}
            log_in={Log_in}
            user={user}
          />}>
        </Route>
        <Route path='/patient_login' 
          element={<PatientLogin 
            handleSubmit={(e) => handleSubmit(e, 1)} 
            log_in={Log_in} 
            user={user}
          />}>
        </Route>
        <Route path='/admin_login' 
          element={<AdminLogin 
            handleSubmit={(e) => handleSubmit(e, 3)} 
            log_in={Log_in}
            user={user}
          />}>
        </Route>
        <Route path='/register_patient' element={<RegisterPatient user={user} />}></Route>
        <Route path="/prediagnosis" element={<PreDiagnosis user={user} />}></Route>
        <Route path="/doctor_view" element={<DoctorView user={user} />}></Route>
        <Route path="/doctor_registration" element={<DoctorReg user={user} />}></Route>
        <Route path="/doctor_update" element={<DoctorUpdate user={user} />}></Route>
        <Route path="/patientview" element={<PatientsView user={user} />}></Route>
        <Route path="/patientappointments" element={<Appointment user={user} />}></Route>
        <Route path="/bookappointments" element={<BookAppointments user={user} />}></Route>
        <Route path="/RegisteredDoctors" element={<RegisteredDoctors user={user} />} />
        <Route path="/Appointments" element={<Appointment user={user} />} />
        <Route path="/RegisteredPatients" element={<RegisteredPatients user={user} />} />
        <Route path="/admin" element={<Admin user={user} />} />
        <Route path="/payment" element={<Payment user={user} />} />
        </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppContent /> {/*  Context is now available here */}
      </UserProvider>
    </BrowserRouter>
  )
}

export default App;