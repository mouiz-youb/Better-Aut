"use client"
import React ,{useState} from 'react'

function page() {
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password , setPassword] = useState("")
  return (
    <div className='w-screen  h-screen  flex justify-center items-center'>
      <form action="" className='flex justify-between items-center flex-col gap-5 border-2 rounded-xl  w-1/2 h-1/2 p-5'>
      <h1>Sign up</h1>
     <div className='flex flex-col justify-center items-center gap-5 '>
     <input onChange={(e)=>setUserName(e.target.value)} className='p-2 shadow-xl rounded-xl' type="text" placeholder='Enter The Username ' />
      <input onChange={(e)=>setEmail(e.target.value)} className='p-2 shadow-xl rounded-xl' type="email" placeholder='Enter The Email ' />
      <input onChange={(e)=>setPassword(e.target.value)} className='p-2 shadow-xl rounded-xl' type="password " placeholder='Enter The Password  ' />
     </div>
     <button type='submit' className='bg-blue-500 text-white pb-2 pt-2 pl-5 pr-5 rounded-md'>
        Sign Up
     </button>
      </form>
    </div>
  )
}

export default page