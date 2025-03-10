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
    const response = await auth.api.signInEmail({
        body: body,
        asResposnse :true
    });
    const responseBody = response.user
    const token = response.token

    // redirect("/home")
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
// console.log(`the token is : ${token }`)
// console.log(`The user is data: ${JSON.stringify(user, null, 2)}`);
// console.log(`the user email  is : ${user.email  } and the user name is :${user.name }`)
// console.log("Response Body:", responseBody);
// console.log("Response Status:", response.status);
//      console.log("Response Headers:", response.headers);
//      console.log("Response Body:", response.body);
// console.log(`the user data is ${responseBody}`)
// console.log(`the user email is ${responseBody.email}`)
// console.log(`the user name  is ${responseBody.name }`)
// console.log(`the user id is ${responseBody.id}`)

// console.log(`the token  is ${token }`)