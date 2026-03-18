import { Prisma, User } from "generated/prisma/client"
interface UserRepository {
    create(data: any): Promise<User>
    findByEmail(email: string): Promise<User | null>
}

export { UserRepository }