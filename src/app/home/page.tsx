import React from 'react'
import Link from 'next/link'
import { auth } from '@/Lib/auth'
import { headers } from 'next/headers'
import {getSession} from "server/users"
import SessionWrapper from '../_components/SessionWrapper'
 function page() {
  const session = getSession()
  console.log(`the session from home ${session}`)
  return (
    <div className='flex justify-center items-center flex-col gap-5 w-screen  '>
      <div className='flex justify-center items-center flex-col gap-5 '>
      <SessionWrapper/>
      <div className='flex justify-center items-center  gap-5'>
      <Link className='p-3 shadow-xl rounded-xl bg-blue-900 text-white'  href="/">Signup</Link>
      <Link className='p-3 shadow-xl rounded-xl bg-blue-900 text-white'  href="/signin">Sign in</Link>
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