"use client"
import React from 'react'
import Link from 'next/link'
import SessionWrapper from '../_components/SessionWrapper'
import { auth } from '@/Lib/auth'
import toast from 'react-hot-toast'
 function page() {
  const signout = async ()=>{
   try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }
    const response = await auth.api.signOut({
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    if(response.success === true){
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      toast.success(`You are sign out seccessefuly`)
    }else{
      toast.error(`You are sign out failed`)
    }
   } catch (error) {
    console.error(error);
    toast.error(String(error))
   }
  }
  return (
    <div className='flex justify-center items-center flex-col gap-5 w-screen  '>
      <div className='flex justify-center items-center flex-col gap-5 '>
      {/* <SessionWrapper/> */}
      <div className='flex justify-center items-center  gap-5'>
      <Link className='p-3 shadow-xl rounded-xl bg-blue-900 text-white'  href="/">Signup</Link>
      <Link className='p-3 shadow-xl rounded-xl bg-blue-900 text-white'  href="/signin">Sign in</Link>
      {/* <button className='p-3 shadow-xl rounded-xl bg-blue-900 text-white' onClick={signout} >Sign out</button> */}
      </div>
      </div>
    </div>
  )
}

export default page
// try {
//   const token = localStorage.getItem("token")
//   if(!token ){
//     return toast.error("You are not logged in")
//   }
//   const response = await auth.api.signOut({
//     headers: {
//       'Authorization': `Bearer ${token}`,
//     }
//   })
//   console.log("Sign-out response:", response);
//   if(response.success === true ){
//     // romove token and user data form the local storage
//     localStorage.removeItem('user')
//     localStorage.removeItem('token')
//     router.push('/signin')
    
//   toast.success("Signed out successfully!");
//   } else {
//     throw new Error("Sign-out failed");
//   }
// } catch (error) {
//   console.error("Error during sign-out:", error);
//   toast.error("Failed to sign out. Please try again.");
// }