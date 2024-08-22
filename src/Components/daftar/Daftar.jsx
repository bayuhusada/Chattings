import React from 'react'
import Userinfo from './userInfo/Userinfo'
import Chatlist from './chatList/Chatlist'

const Daftar = () => {
  return (
    <div className='flex-1 flex flex-col'>
      <Userinfo />
      <Chatlist />
    </div>
  )
}

export default Daftar