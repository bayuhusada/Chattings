import React from 'react'
import Sidebar from '../components/Sidebar'
import Pesan from '../components/Pesan'

const Home = () => {
  return (
    <div className='bg-Secondary h-screen flex items-center content-center justify-center'> 
      <div className=' w-[65%] h-[80%] rounded-xl flex'>
        <Sidebar />
        <Pesan />
      </div>
    </div>
  )
}

export default Home