import React, { useState } from 'react'
import { CameraPlus } from "@phosphor-icons/react";
import { createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth, db, storage} from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";


const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

   try{
     const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, username);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on( 
        (error) => {
          setErr(true)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            await updateProfile(res.user,{
              displayName: username,
              photoURL:downloadURL
            })
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              username,
              email,
              photoURL:downloadURL
            });
          });
        }
      );
   } catch (err){
    setErr(true);
    console.log(err);
   }

  }

  return (
    <div className='bg-Fourtiary w-screen h-screen flex items-center justify-center mx-0 content-center'>
      <div className='bg-Secondary w-2/3  rounded-xl h-3/6 flex flex-col items-center md:w-[500px]'>
        <span className='font-bold mt-3 text-Fourtiary text-2xl'>Mari Chat</span>
        <span className='font-semibold text-Fourtiary underline'>register</span>
        <form onSubmit={handleSubmit} className='grid grid-cols-1 m-2'>
          <input className='p-4 bg-white m-3 text-primary rounded-2xl outline-none ' type="text" placeholder='Masukan Username...' />
          <input className='p-4 bg-white m-3 text-primary rounded-2xl outline-none ' type="email" placeholder='Masukan Email...' />
          <input className='p-4 bg-white m-3 text-primary rounded-2xl outline-none ' type="password" placeholder='Masukan Password...' />
          <input className='p-4 bg-white m-3 text-primary rounded-2xl outline-none ' style={{display:"none"}} type="file" id='file' />
          <label className='flex items-center ml-3 mb-5 cursor-pointer' htmlFor="file">
          <CameraPlus size={28} color="#C4E4FF" weight="fill" />
          <span>Tambahkan Avatar</span>
          </label>
          <button className='bg-Fourtiary w-32 h-10 rounded-full ml-32 hover:bg-primary  hover:text-white'>Register</button>
          {err && <span className='text-white'>Something went wrong</span>}
        </form>
        <p className='mt-14'>you have account? <b>Login</b></p>
      </div>
    </div>
  )
}

export default Register