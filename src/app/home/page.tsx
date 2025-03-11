"use client"
import React from 'react'
import { useLocalStorage } from '@/hook/useLocalStorage '
function page() {
  const {user ,token } = useLocalStorage()
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
      <div className='flex justify-center items-center '></div>
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