import { Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Logout from './pages/Logout';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Myprofile from './pages/Myprofile';
import MyAppointment from './pages/MyAppointment';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Footer from './components/Footer';
const App = () => {
  
  const { i18n } = useTranslation();

    useEffect(() => {
    // يشتغل أول ما الصفحة تحمل أو اللغة تتغير
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);


  return (
    <div className='mx-4 sm:mx-[10%]'>
 
  <Navbar />
  <Routes>
    
        <Route path="/" element={<Home/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/doctor/:speciality" element={<Doctors/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/my-profile" element={<Myprofile/>} />
        <Route path="/my-appointments" element={<MyAppointment/>} />
        <Route path="/appointment/:docId" element={<Appointment/>} />
        <Route path="/Logout" element={<Logout/>} />
</Routes>
<Footer/>
</div>
  )
}

export default App
