import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'

const Home = () => {
  return (
  <>
  <DashboardLayout>
    <div className='Container pt-8'>
       <div className='flex justify-between items-center'>
         <div>
           <h1 className='font-extrabold text-black text-2xl'>Onyekachi Smile</h1>
           <span className='text-gray-600 text-sm'>Hello, Welcome back 🖐</span>
         </div>

         <i className="ri-user-line text-xl bg-primary h-10 w-10 flex justify-center items-center rounded-full text-white cursor-pointer hover:shadow-lg"></i>
       </div>
    </div>
  </DashboardLayout>
  </>
  )
}

export default Home