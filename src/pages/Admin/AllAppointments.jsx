import React from "react";
import { useEffect, useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments, cancelAppointment } =
    useContext(AdminContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  return (
    <div className=" max-w-6xl w-80 sm:w-full m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>
      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll border-gray-100">
        <div className="grid grid-cols-[2fr_2fr_1fr_1fr] sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b border-gray-100">
          <p className="hidden sm:block">#</p>
          <p className="">Patient</p>
          <p className="hidden sm:block">Age</p>
          <p className="hidden sm:block">Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>
        {appointments.map((item, index) => (
          <div
            className="grid grid-cols-[2fr_2fr_1fr_1fr] sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b border-gray-100"
            key={item._id}
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center gap-2">
              <img
                className="w-6 sm:w-8 rounded-full object-cover"
                src={item.userData.image}
                alt=""
              />
              <p className="sm:pr-3 text-xs sm:text-sm">{item.userData.name}</p>
            </div>
            <p className="max-sm:hidden">{calculateAge(item.userData.dob)}</p>
            <p className="hidden sm:block">
              {slotDateFormat(item.slotDate)} , {item.slotTime}
            </p> 
            <div className="flex item-center gap-2">
             
                <img
                className="w-6 sm:w-8  bg-gray-200 rounded-full"
                src={item.docData.image}
                alt=""
              />
              
             
              <p className="text-xs sm:text-sm">{item.docData.name}</p>
              
            </div>
            <p className="text-xs sm:text-sm">
              {currency}
              {item.amount}
            </p>
            {item.cancelled ? (
              <p className="text-red-400 text-xs font-sm">Cancelled</p>
            ) : item.isCompleted ? (
              <p className="text-green-500 text-xs font-medium">Completed</p>
            ) : (
              <img
                onClick={() => cancelAppointment(item._id)}
                className="w-10 cursor-pointer"
                src={assets.cancel_icon}
                alt=""
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;
