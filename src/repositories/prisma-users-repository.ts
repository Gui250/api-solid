import { prisma } from "@/lib/prisma"
import { Prisma, User } from "@prisma/client"
import { UserRepository } from "./users-repositories";

export class PrismaUsersRepository implements UserRepository {
    async create(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({
            data
        })

        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        const userWithSameEmail = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (userWithSameEmail) {
            throw new Error('Email already exists')
        }

        return userWithSameEmail
    }
}