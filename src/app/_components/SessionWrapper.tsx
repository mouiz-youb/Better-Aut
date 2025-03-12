"use server"
import { auth } from '@/Lib/auth'
import { headers } from 'next/headers'
import React from 'react'
import Session from './Session'
import { getSession } from 'server/users'
async function SessionWrapper () {
 const sessionData = await getSession()
 const session = sessionData?.session
 return <Session session={session}/>
}
export default SessionWrapper