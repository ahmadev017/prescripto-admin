import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { AdminContext } from '../../context/AdminContext'
import {toast} from 'react-toastify'

const AddDoctor = () => {
const [docImg,setDocImg] = useState(false)
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [experience,setExperience]=useState('1 Year')
const [fees,setFees]=useState('')
const [about,setAbout]=useState('')
const [speciality,setSpeciality]=useState('General physician')
const [degree,setDegree]=useState('')
const [address1,setAddress1]=useState('')
const [address2,setAddress2]=useState('')

const {backendUrl, aToken} =useContext(AdminContext)



const onSubmitHandler = async (event) =>{
  event.preventDefault()
  try{
     if(!docImg){
        return toast.error('Image not selected')
     }

     const formData = new FormData()
     formData.append('image',docImg)
     formData.append('name',name)
     formData.append('email',email)
     formData.append('password',password)
     formData.append('experience',experience)
     formData.append('fees',Number(fees))
     formData.append('about',about)
     formData.append('speciality',speciality)
     formData.append('degree',degree)
     formData.append('address',JSON.stringify({line1:address1,line2:address2}))

     formData.forEach((value,key) => {
      console.log(`${key}:${value}`)
     });

     const {data} = await axios.post(backendUrl + '/api/admin/add-doctor',formData, {headers:{aToken}})
     if (data.success){
      toast.success(data.message)
      setDocImg(false)
      setName('')
      setPassword('')
      setEmail('')
      setAddress1('')
      setAddress2('')
      setDegree('')
      setAbout('')

     }else{
      toast.error(data.message)
     }
  }catch(error){
     toast.error(error.message)
     console.log(error)
  }
}

  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-80 sm:w-full'>
      <p className='mb-3 text-lg font-medium'>Add Doctor</p>
      <div className='bg-white px-8 py-8 border rounded  max-h-[80vh] max-w-[140vh] overflow-y-scroll border-lime-50'>
          <div className='flex items-center gap-4 mb-8 text-gray-500'>
              <label htmlFor="doc-img">
                 <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg? URL.createObjectURL(docImg):assets.upload_area} alt="" />
                </label>
                  <input onChange={(e)=>setDocImg(e.target.files[0])} type="file" id='doc-img' hidden/>
                  <p>Upload doctor <br /> picture </p>
           </div>


           <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>



              <div className='w-full lg:flex-1 flex flex-col gap-4'>
                <div className='flex-1 flex flex-col gap-1'>
                  <p>Doctor name</p>
                   <input onChange={(e)=> setName(e.target.value)} value={name} className='px-0.5 py-0.5' type="text" placeholder='name' required/>
                </div>

                <div className='flex-1 flex flex-col gap-1'>
                  <p>Doctor Email</p>
                  <input onChange={(e)=> setEmail(e.target.value)} value={email} className='px-0.5 py-0.5' type="email" placeholder='Email' required/>
              </div>

                <div className='flex-1 flex flex-col gap-1'>
                  <p>Doctor password</p>
                  <input onChange={(e)=> setPassword(e.target.value)} value={password} className='px-0.5 py-0.5' type="password" placeholder='password' required/>
                </div>
                <div className='flex-1 flex flex-col gap-1'>
      <p>Experience</p>
        <select onChange={(e)=> setExperience(e.target.value)} value={experience} name="" id="">
          <option value="1 year">1 Year</option>
          <option value="2 year">2 Year</option>
          <option value="3 year">3 Year</option>
          <option value="4 year">4 Year</option>
          <option value="5 year">5 Year</option>
          <option value="6 year">6 Year</option>
          <option value="7 year">7 Year</option>
          <option value="8 year">8 Year</option>
          <option value="9 year">9 Year</option>
          <option value="10 year">10 Year</option>
        </select>
    </div>

    <div className='flex-1 flex flex-col gap-1'>
      <p>Fees</p>
      <input onChange={(e)=> setFees(e.target.value)} value={fees} className='px-0.5 py-0.5' type="number" placeholder='Fees' required/>
    </div>
              </div>


            <div className='w-full lg:flex-1 flex flex-col gap-4'>

    <div className='flex-1 flex flex-col gap-1'>
    <p>speciality</p>
    <select onChange={(e)=> setSpeciality(e.target.value)} value={speciality} name="" id="">
      <option value="General physician">General physician</option>
      <option value="Gynecologist">Gynecologist</option>
      <option value="Dermatologist">Dermatologist</option>
      <option value="Pediatricians">Pediatricians</option>
      <option value="Neurologist">Neurologist</option>
      <option value="Gastoenterologist">Gastroentrologist</option>
      
    </select>
    </div>
    <div className='flex-1 flex flex-col gap-1'>
    <p>Education</p>
    <input onChange={(e)=> setDegree(e.target.value)} value={degree} className='px-0.5 py-0.5' type="text" placeholder='Education' required />
  </div>
  <div className='flex-1 flex flex-col gap-1'>
    <p>Address</p>
    <input onChange={(e)=> setAddress1(e.target.value)} value={address1} className='px-0.5 py-0.5' type="text" placeholder='address 1' required/>
    <input onChange={(e)=> setAddress2(e.target.value)} value={address2} className='px-0.5 py-0.5' type="text" placeholder='address 2' required/>
  </div>
                 
            </div>



            </div>

            <p className='mt-4 mb-2'>About Doctor</p>
            <textarea onChange={(e)=> setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded border-gray-300' name="" id="" placeholder='write about doctor' rows={5}></textarea>
         <button type='submit' className='bg-blue-500 px-10 py-3 mt-4 text-white rounded-full cursor-pointer
         '>Add doctor</button>

        </div>   

</form>
  )
}

export default AddDoctor