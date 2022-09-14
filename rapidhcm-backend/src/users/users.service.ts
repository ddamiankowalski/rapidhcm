import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';

export type UserEntity = {
    userId: number,
    username: string, 
    password: string,
}

@Injectable()
export class UsersService {
    private readonly users: UserEntity[];

    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>
    ) {}

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username)
    }

    async create(userData: any): Promise<any> {
        const salt = await bcrypt.genSalt(10);
        //const hashedPassword = await bcrypt.hash(userData.password, salt);
        const userId = 1;
        const newUser = this.userRepository.create({ username: 'niewiem', userId: userId, password: 'niewiem1' })
        return this.userRepository.save(newUser)
    }
}
