"use server"
import React from 'react'
import Session from './Session'
import { auth } from '@/Lib/auth'
import { headers } from 'next/headers'
async function SessionWrapper () {
 const session = await auth.api.getSession({
          headers :await headers()
    })
    console.log(session) 
 return <Session session={session}/>
}
export default SessionWrapper