import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Sidebar = () => {
  return (
    <div className='bg-slate-500 w-[30%] border-r-2 border-primary rounded-l-2xl'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar