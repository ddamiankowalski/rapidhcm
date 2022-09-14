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
        return this.userRepository.findOneBy({ username: username });
    }

    async create(user: UserEntity): Promise<any> {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);

        return this.userRepository.save(user);
    }
    async delete(id: string): Promise<any> {
        // delete a user
    }
}
