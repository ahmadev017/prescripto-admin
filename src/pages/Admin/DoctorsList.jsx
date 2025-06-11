import React from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useContext,useEffect } from 'react'

const DoctorsList = () => {

const {doctors, aToken, getAllDoctors ,changeAvailability} = useContext(AdminContext)

useEffect(()=>{
if(aToken){
  getAllDoctors()
}
},[aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll w-80 sm:w-full'>
      <h1 className='text-lg font-medium'>All Doctors</h1>
      <div className='w-full flex flex-wrap gap-2 pt-5 gap-y-6'>
        {
          doctors.map((item,index)=>(
          <div className='border  border-indigo-200 rounded-xl w-35 sm:w-full max-w-56 overflow-hidden cursor-pointer group' key={index}>
            <img className='bg-indigo-50 group-hover:bg-blue-500 transition' src={item.image} alt="" />
            <div className=' flex flex-col p-4'>
              <p className='text-neutral-800 text-sm sm:text-lg font-medium '>{item.name}</p>
              <p className='text-zinc-600 text-xs sm:text-sm'>{item.speciality}</p>
              <div className='mt-2 flex items-center gap-1 text-sm'>
                <input onChange={()=>changeAvailability(item._id)} type="checkbox"checked={item.available}/>
                <p className='text-xs sm:text-sm'>Available</p>
              </div>
            </div>
          </div>  
          ))
        }
      </div>
    </div>
  )
}

export default DoctorsList
