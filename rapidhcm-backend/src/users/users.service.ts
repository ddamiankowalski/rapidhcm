import { Catch, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { UserEntity } from './types/userentity.type';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async findOne(username: string): Promise<User | undefined> {
        const user = this.userRepository.findOneBy({ username: username });
        console.log(user)
        if(!user) {
            throw new NotFoundException();
        }
        return user;
    }

    async create(user: UserEntity): Promise<any> {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        let newUser;

        try {
            newUser = this.userRepository.save(user);
        } catch (error) {
            throw new NotFoundException();
        }

        return newUser;
    }

    async delete(id: string): Promise<any> {
        // delete a user
    }
}
