import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import {Schema} from "@/SchemaX";
const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "sqlite", // the provider of your database
        // schema: Schema // the schema of your database        
    }),
    emailAndPassword: {  
        enabled: true
    },
    
});
