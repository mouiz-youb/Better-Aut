"use client"
import React from 'react'
import { auth } from '@/Lib/auth'
import { useRouter } from 'next/navigation'
import { useLocalStorage } from '@/hook/useLocalStorage '
import {toast} from "react-hot-toast"
function page() {
  const {user ,token } = useLocalStorage()
  const router = useRouter()
  const signOut =async ()=>{
    try {
       const response = await auth.api.signOut({
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      console.log("Sign-out response:", response);
      if(response.success === true ){
        // romove token and user data form the local storage
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        router.push('/signin')
        
      toast.success("Signed out successfully!");
      } else {
        throw new Error("Sign-out failed");
      }
    } catch (error) {
      console.error("Error during sign-out:", error);
      toast.error("Failed to sign out. Please try again.");
    }
  }
  return (
    <div className='flex justify-center items-center flex-col gap-5 w-screen  '>
      <div className='flex justify-center items-center flex-col gap-5 '>
      {token && user ? (
        <div>
          <p>Hello, {user.name}!</p>
          <p>Your token: {token}</p>
        </div>
      ) : (
        <p>Please log in to access the home page.</p>
      )}
      </div>
      <div className='flex justify-center items-center '>
        <button onClick={signOut}>Sign out</button>
      </div>
    </div>
  )
}

export default page
// {user?
//   <div>
//     <p>The username is :  </p>
//     <p>The email is :  </p>
//   </div>
//   :<div>the user data is not find </div>}