import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from 'src/database/entities/user.provider';
import { UsersService } from './users.service';

@Module({
  providers: [
    UsersService,
    ...userProviders
  ],
  exports: [UsersService],
  imports: [DatabaseModule]
})
export class UsersModule {}
