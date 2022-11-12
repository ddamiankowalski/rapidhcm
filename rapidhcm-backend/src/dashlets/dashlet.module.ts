import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/entity/user.entity";
import { DashletController } from "./dashlet.controller";
import { DashletService } from "./dashlet.service";
import { Dashlet } from "./entity/dashlet.entity";

@Module({
    exports: [],
    imports: [
        TypeOrmModule.forFeature([Dashlet, User])
    ],
    providers: [
        DashletService
    ],
    controllers: [
        DashletController
    ]
})
export class DashletModule {}