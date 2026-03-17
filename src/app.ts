import fastify from "fastify";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const app = fastify();
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})
const prisma = new PrismaClient({ adapter });

prisma.user.create({
    data: {
        name: "Guilherme",
        email: "guilherme@email.com"
    }
})
export { app };