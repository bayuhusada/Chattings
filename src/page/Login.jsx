import React from 'react'
import { CameraPlus } from '@phosphor-icons/react'

const Login = () => {
  return (
    <div className='bg-Fourtiary w-screen h-screen flex items-center justify-center mx-0 content-center'>
    <div className='bg-Secondary w-2/3  rounded-xl h-2/6 flex flex-col items-center md:w-[500px]'>
      <span className='font-bold mt-3 text-Fourtiary text-xl'>Mari Chat</span>
      <span className='mt-3 text-Fourtiary text-l'>Login</span>
      <form className='grid grid-cols-1 m-2'>
        <input className='p-4 bg-white m-3 text-primary rounded-2xl outline-none ' type="email" placeholder='Masukan Email...' />
        <input className='p-4 bg-white m-3 text-primary rounded-2xl outline-none ' type="password" placeholder='Masukan Password...' />
        <button className='bg-Fourtiary w-32 h-10 rounded-full ml-32 hover:bg-primary  hover:text-white'>Login</button>
      </form>
      <p className='mt-14'>You don't have account? <b>Register</b></p>
    </div>
  </div>
  )
}

export default Login