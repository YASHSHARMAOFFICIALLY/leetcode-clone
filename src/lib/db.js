import { PrismaClient } from "@prisma/client";
const globalforprisma = globalThis
export const db =
    globalforprisma.prisma || new PrismaClient();

if(process.env.NODE_ENV !== 'production')globalforprisma.prisma =db;