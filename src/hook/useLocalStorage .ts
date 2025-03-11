"use client"
import {useState ,useEffect} from "react"
interface LocalStorageData {
    user :any |null
    token :string|null
}
export const useLocalStorage =()=>{
    const [data, setData] = useState<LocalStorageData>({
        user: null,
        token: null
    })  
    useEffect(()=>{
    if (typeof window !== "undefined") {
        const token = localStorage.getItem("token")
        const user = JSON.parse(localStorage.getItem("user") || "null");
        setData({user , token})
    }
    } ,[])
    return data
}
// export const signUp =async (email:string  ,password:string  ,name:string   ):Promise<{token :any ,user:any} >=>{
//     const body:SignUpBody={
//         email:email,
//         password:password,
//         name:name,
//     }
//     try {
//         const response  = await auth.api.signUpEmail({
//             body:body,
//             asResponse: true,
//             // callbackURL: "/home" 
//         })
//          // Parse the response body as JSON
//         const responseBody = await response.json(); // Parse the ReadableStream
//         const token = responseBody.token 
//         const user = responseBody.user
//         console.log(responseBody)
//         return {
//             token:token,
//             user:user
//         }
//     } catch (error) {
//         console.log(`Sign up error ${error}`)
//         throw error
//     }
// }
