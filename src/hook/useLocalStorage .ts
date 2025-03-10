"use client"
import {useState ,useEffect} from "react"
interface LocalStorageData {
    user :any |null
}
export const useLocalStorage =()=>{
    const [data, setData] = useState<LocalStorageData>({
        user: null
    })  
    useEffect(()=>{
    if (typeof window !== "undefined") {
        const user = JSON.parse(localStorage.getItem("user") || "null");
        setData(user)
    }
    } ,[])
    return data
}

