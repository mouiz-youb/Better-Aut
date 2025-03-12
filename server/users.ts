"use server"
import { auth } from "@/Lib/auth"
import { redirect  } from "next/navigation";
import { db } from "@/server/db";
// import { signUp } from 'server/users';
import { headers } from 'next/headers';
import toast from "react-hot-toast";
// export const signIn =async()=>{
//     await auth.api.signInEmail({
//         body:{
//             email:"a_youb@estin.dz",
//             password:"password123"
//         } 
//     })
// }

// export const signUp =async ()=>{
//     await auth.api.signUpEmail({
//         body:{
//             email:"a_houssem@estin.dz",
//             password:"password123",
//             name:"y_houssem"
//         }
//     })
// }
interface SignInBody {
    email: string;
    password: string;
}

export const signIn = async (email: string, password: string): Promise<{token:any , user :any}> => {
    const body: SignInBody = {
        email: email,
        password: password
    };
   try {
    const response = await auth.api.signInEmail({
        body: body,
        asResposnse :true,
        headers: await headers()
    });
    
    const responseBody = response.user
    // response.
    const token = response.token
    return {token , user:responseBody};
   } catch (error) {
    console.log(`Sign In error ${error }`)
    throw error 
   }
};
interface  SignUpBody{
    email: string;
    password: string;
    name: string;
}
export const signUp =async (email:string  ,password:string  ,name:string   ):Promise<{token :any ,user:any} >=>{
    const body:SignUpBody={
        email:email,
        password:password,
        name:name,
    }
    try {
        const response  = await auth.api.signUpEmail({
            body:body,
            asResponse: true,
            // callbackURL: "/home" 
        })
         // Parse the response body as JSON
        const responseBody = await response.json(); // Parse the ReadableStream
        const token = responseBody.token 
        const user = responseBody.user
        console.log(responseBody)
        return {
            token:token,
            user:user
        }
    } catch (error) {
        console.log(`Sign up error ${error}`)
        throw error
    }
}
export const getSession =async  ():Promise <{session:any} | undefined>=>{
  try {
    const response = await auth.api.getSession({
        headers: await headers() //some endpoint might require headers
    })
    const session = response?.session
    return {session}
  } catch (error) {
    console.log(error)
    return undefined
  }

}