import React, { useContext } from 'react'
import './App.css'
import Loginn from './pages/Loginn'
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import { Routes,Route } from 'react-router-dom';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointment from './pages/Doctor/DoctorAppointment';
import DoctorProfile from './pages/Doctor/DoctorProfile';
const App = () => {

     const {aToken} = useContext(AdminContext)
     const {dToken} = useContext(DoctorContext)

  return aToken || dToken?(
    <div className='bg-[#F8F9FD]'>
      <ToastContainer/>
      <Navbar/>
      <div className='flex items-start'>
              <Sidebar/>
              <Routes>


                //Admin Route


                <Route path='/' element={<Dashboard/>}></Route> // or a Home page

                <Route path='/admin-dashboard' element={<Dashboard/>}></Route>
                <Route path='/all-appointments' element={<AllAppointments/>}></Route>
                <Route path='/add-doctor' element={<AddDoctor/>}></Route>
                <Route path='/doctor-list' element={<DoctorsList/>}></Route>

                //Doctor Route


                <Route path='/doctor-dashboard' element={<DoctorDashboard/>}></Route>
                <Route path='/doctor-appointments' element={<DoctorAppointment/>}></Route>
                <Route path='/doctor-profile' element={<DoctorProfile/>}></Route>
              </Routes>
      </div>

    </div>
  ):(
    <>
          <Loginn/>
          <ToastContainer/>
    </>
  )
}

export default App

