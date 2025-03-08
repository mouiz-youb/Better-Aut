"use server"
import { auth } from "@/Lib/auth"
// import { signUp } from 'server/users';
export const signIn =async()=>{
    await auth.api.signInEmail({
        body:{
            email:"a_youb@estin.dz",
            password:"password123"
        } 
    })
}
export const signUp =async ()=>{
    await auth.api.signUpEmail({
        body:{
            email:"a_youb@estin.dz",
            password:"password123",
            name:"a_youb"
        }
    })
}