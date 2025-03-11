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

