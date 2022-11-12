import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/user.entity';
import { UsersModule } from './users/users.module';
import { Candidate } from './candidates/entity/candidate.entity';
import { CandidateModule } from './candidates/candidate.module';
import { Dashlet } from './dashlets/entity/dashlet.entity';
import { DashletModule } from './dashlets/dashlet.module';
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'app'),
      exclude: ['/api*'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 't4jn3h4slo',
      database: 'rapidhcm',
      entities: [
        User,
        Candidate,
        Dashlet
      ],
      synchronize: true,
      dropSchema: false
    }),
    AuthModule,
    UsersModule,
    CandidateModule,
    DashletModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
