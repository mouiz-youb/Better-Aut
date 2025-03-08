"use server"
import { auth } from "@/Lib/auth"
export const signIn = async ()=>{
    await auth.api.signInEmail({
       body:{
        email: "a_youb@estin.dz",
        password: "abdemouiz12345678",
       }
    })
}
export const signUp = async ()=>{
    await auth.api.signUpEmail({
       body:{
        email: "a_youb@estin.dz",
        password: "abdemouiz12345678",
        name: "Abdelmouiz",
       }
    })
}