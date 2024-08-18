import React from 'react'

const Message = () => {
  return (
    <div className='flex gap-3 items-center mb-5' id='owner'>
      <div>
      <img src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-12 h-12 rounded-full bg-white' alt="" />
      <span className='font-thin text-Tertiary'>Just Now</span>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-36 rounded' alt="" />
        <p className='font-semibold bg-Fourtiary p-3 rounded-tl-xl mt-1' >halo bang</p>
      </div>
    </div>
  )
}

export default Message