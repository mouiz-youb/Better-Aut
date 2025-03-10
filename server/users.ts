"use server"
import { auth } from "@/Lib/auth"
import { redirect  } from "next/navigation";
import { db } from "@/server/db";
// import { signUp } from 'server/users';
import { headers } from 'next/headers';
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

export const signIn = async (email: string, password: string): Promise<void> => {
    const body: SignInBody = {
        email: email,
        password: password
    };
    await auth.api.signInEmail({
        body: body
    });
    redirect("/home")
};
interface  SignUpBody{
    email: string;
    password: string;
    name: string;
}
export const signUp =async (email:string  ,password:string  ,name:string   ):Promise<void>=>{
    const body:SignUpBody={
        email:email,
        password:password,
        name:name,
    }
    const response  = await auth.api.signUpEmail({
        // returnHeaders: true,
        body:body,
        asResponse: true
    })
     // Log the response
     console.log("Response Status:", response.status);
     console.log("Response Headers:", response.headers);
     console.log("Response Body:", response.body);
     // Parse the response body as JSON
    const responseBody = await response.json(); // Parse the ReadableStream
    console.log("Response Body:", responseBody);
    // redirect("/home")
}
