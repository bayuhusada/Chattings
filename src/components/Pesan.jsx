import { DotsThreeOutline, UserCirclePlus, VideoCamera } from '@phosphor-icons/react'
import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Pesan = () => {
  return (
    <div className=' w-[70%] rounded-r-2xl '>
      <div className=' flex justify-between items-center bg-Fourtiary h-14'>
      <div className='m-4'>
        <span className='font-semibold text-primary text-xl'>Bay</span>
      </div>
      <div className='flex gap-6 m-4'>
        <VideoCamera size={25} color='#D6589F'/>
        <UserCirclePlus size={25} color='#D6589F'/>
        <DotsThreeOutline size={25} color='#D6589F'/>
      </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Pesan