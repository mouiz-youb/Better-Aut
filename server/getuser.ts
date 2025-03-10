import { db } from "@/server/db";
 export const getuser = async (id:string)=>{
    try {
        const user = await db.user.findUnique({
            where:{id}
        })
        if(!user){
            throw new Error('User not found')
        }
        return user
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
}
