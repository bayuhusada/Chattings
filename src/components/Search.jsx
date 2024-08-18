import React from 'react'

const Search = () => {
  return (
    <div >
      <div className='mt-3'>
        <input className='bg-transparent outline outline-primary outline-1 p-1 rounded-xl' type="text" name="" id="" placeholder='Cari Orang' />
      </div>
      <div className='mt-5 border-b-2 border-Fourtiary flex gap-3 items-center m-1'>
      <img src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-12 h-12 rounded-full bg-white' alt="" />
        <div>
          <span className='text-white font-semibold'>Bay</span>
        </div>
      </div>
    </div>
  )
}

export default Search