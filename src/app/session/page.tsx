import React from 'react'
import { auth } from '@/Lib/auth'
import { headers } from 'next/headers'
 export default async function page() {
    const session = await auth.api.getSession({
          headers :await headers()
    })
    console.log(session)
  return (
    <div>
        {!session ? (
        <p>The user is not authenticated</p>
      ) : (
        <p>{session.user.name}</p>
      )}
    </div>
  )
}
