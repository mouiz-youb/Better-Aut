"use client"
import React from 'react'
import { auth } from '@/Lib/auth'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import SessionWrapper from '../_components/SessionWrapper'
function page() {
    const router = useRouter()
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
         console.log(`the response from the signout ${response}`)
         if(response.success === true){
           localStorage.removeItem("token");
           localStorage.removeItem("user");
           toast.success(`You are sign out seccessefuly`)
           router.push("/home")
         }else{
           toast.error(`You are sign out failed`)
         }
        } catch (error) {
         console.error(error);
         toast.error(String(error))
        }
       }
  return (
    <div className='flex justify-center items-center flex-col gap-5 '>
        {/* <SessionWrapper/> */}
        <button onClick={signout} className='p-3 shadow-xl rounded-xl bg-blue-900 text-white'>Sign out</button>
    </div>
  )
}

export default page