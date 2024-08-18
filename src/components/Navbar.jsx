import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-Fourtiary h-14 items-center content-center justify-between p-6 rounded-tl-2xl'>
      <span className='font-semibold text-primary'>Mari Chat</span>
      <div className='flex gap-2 items-center'>
        <img src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-8 h-8 rounded-full bg-white' alt="" />
        <span className='font-semibold text-Secondary '>Bayu Husada</span>
        <button className='bg-primary rounded-xl w-16'>LogOut</button>
      </div>
    </div>
  )
}

export default Navbar