import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';
import { UsersService } from './users.service';

@Module({
  providers: [
    UsersService
  ],
  exports: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController]
})
export class UsersModule {}
