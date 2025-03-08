import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const Schema = {
    user :prisma.user,
    session:prisma.session,
    account :prisma.account,
    verification:prisma.verification,
}