import { hash } from "bcryptjs"

interface RegisterUseCaseRequest {
    name: string,
    email: string,
    password: string
}

export class RegisterUseCase {
    private usersRepository: any
    constructor(usersRepository: any) {
        this.usersRepository = usersRepository
    }

    async execute({
        name,
        email,
        password
    }: RegisterUseCaseRequest) {
        const password_hash = await hash(password, 6)

        const userWithSameEmail = await this.usersRepository.findByEmail(email)

        if (userWithSameEmail) {
            throw new Error('Email already exists')
        }

        await this.usersRepository.create({
            name,
            email,
            password_hash
        })
    }
}