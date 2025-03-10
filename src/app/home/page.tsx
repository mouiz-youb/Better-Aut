import React from 'react'
import { useLocalStorage } from '@/hook/useLocalStorage '
function page() {
  const {user} = useLocalStorage()
  return (
    <div className='flex justify-center items-center flex-col gap-5 w-screen  '>
      <div className='flex justify-center items-center flex-col gap-5 '>
        {user?
          <div>
            <p>The username is : {user.name} </p>
            <p>The email is : {user.email} </p>
          </div>
          :<div>the user data is not find </div>}
      </div>
      <div className='flex justify-center items-center '></div>
    </div>
  )
}

export default page