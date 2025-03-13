import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { nextCookies } from "better-auth/next-js";
const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider:"sqlite",
        // schema :Schema
    }),
    emailAndPassword: {  
        enabled: true
    },
    plugins:[nextCookies()]
});
// provider: "sqlite", // the provider of your database
