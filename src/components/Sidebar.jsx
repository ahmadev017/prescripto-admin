import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { DoctorContext } from '../context/DoctorContext'
const Sidebar = () => {

const {aToken} = useContext(AdminContext)
const {dToken} = useContext(DoctorContext)

  return (
    <div className='min-h-screen bg-white border-lime-50'>
      {
        aToken&&<ul className='text-[#515151] mt-5'>
<NavLink
  to="/admin-dashboard"
  className={({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
      isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-500' : ''
    }`
  }
>
  <img src={assets.home_icon} alt="" />
  <p className='hidden sm:block'>Dashboard</p>
</NavLink>

          <NavLink className={({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 pr-6 md:px-9 md:min-w-72 cursor-pointer ${
      isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-500' : ''
    }`
  } to={'/all-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p className='hidden sm:block'>Appointments</p>
          </NavLink>
          <NavLink className={({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
      isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-500' : ''
    }`
  } to={'/add-doctor'}>
            <img src={assets.add_icon} alt="" />
            <p className='hidden sm:block'>Add Doctor</p>
          </NavLink>
          <NavLink className={({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
      isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-500' : ''
    }`
  } to={'/doctor-list'}>
            <img src={assets.people_icon} alt="" />
            <p className='hidden sm:block'>Doctors List</p>
          </NavLink>
        </ul>
      }

      {
        dToken&&<ul className='text-[#515151] mt-5'>
<NavLink
  to="/doctor-dashboard"
  className={({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
      isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-500' : ''
    }`
  }
>
  <img src={assets.home_icon} alt="" />
  <p className='hidden md:block'>Dashboard</p>
</NavLink>

          <NavLink className={({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
      isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-500' : ''
    }`
  } to={'/doctor-appointments'}>
            <img src={assets.appointment_icon} alt="" />
            <p className='hidden md:block' >Appointments</p>
          </NavLink>

          <NavLink className={({ isActive }) =>
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
      isActive ? 'bg-[#F2F3FF] border-r-4 border-blue-500' : ''
    }`
  } to={'/doctor-profile'}>
            <img src={assets.people_icon} alt="" />
            <p className='hidden md:block'>Profile</p>
          </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar
