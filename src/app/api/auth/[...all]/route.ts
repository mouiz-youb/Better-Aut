// import { auth } from "@/lib/auth";
import {auth } from  "../../../../../Lib/Auth"
import { toNextJsHandler } from "better-auth/next-js";
 
export const { GET, POST } = toNextJsHandler(auth.handler);