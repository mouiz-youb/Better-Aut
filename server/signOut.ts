import { NextApiResponse } from "next";
import { db } from "@/server/db";
export async function Post(req:Request) {
    try {
        // Get the token from the Authorization header
        const token = req.headers.get("Authorization");
    } catch (error) {
        
    }
}