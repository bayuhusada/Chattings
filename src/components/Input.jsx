import { CameraPlus, Paperclip } from '@phosphor-icons/react'
import React from 'react'

const Input = () => {
  return (
    <div className='bg-Fourtiary h-[12%]'>
      <div className='flex justify-between'>
        <div className='w-full'>
            <input className=' bg-Fourtiary w-[100%] h-[100%] p-4 rounded-r-2xl outline-none' type="text" placeholder='Tulis Pesan...' />
        </div>
      <div className='flex items-center'>
        <input type="file" id="file" style={{display:"none"}} />
        <label className='flex gap-4' htmlFor="file">
          <Paperclip size={25} color='#D6589F'/>
          <CameraPlus size={25} color='#D6589F'/>
        </label>
        <button className='bg-primary w-32 h-10 rounded-full ml-4 hover:bg-Fourtiary  hover:text-primary'>Kirim</button>
      </div>
      </div>
    </div>
  )
}

export default Input