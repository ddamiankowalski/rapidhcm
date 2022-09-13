import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type User = {
    userId: number,
    username: string, 
    password: string,
}

@Injectable()
export class UsersService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                userId: 1,
                username: "Damian",
                password: "t4jn3h4slo"
            }
        ]
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }

    async create(userData: any): Promise<any> {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);
        const userId = Date.now();

        this.users.push({
            userId: userId,
            username: userData.username,
            password: hashedPassword
        })

        return true;
    }
}
