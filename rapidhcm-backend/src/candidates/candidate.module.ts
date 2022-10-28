import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/entity/user.entity";
import { CandidateController } from "./candidate.controller";
import { CandidateService } from "./candidate.service";
import { Candidate } from "./entity/candidate.entity";

@Module({
    exports: [],
    imports: [
        TypeOrmModule.forFeature([Candidate, User])
    ],
    providers: [
        CandidateService
    ],
    controllers: [
        CandidateController
    ]
})
export class CandidateModule {}