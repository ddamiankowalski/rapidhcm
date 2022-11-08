import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/entity/user.entity";
import { ColumnType, Repository } from "typeorm";
import { Candidate } from "./entity/candidate.entity";

interface metadata {
    fieldname: string,
    fieldtype: ColumnType,
    required: boolean
}

@Injectable()
export class CandidateService {
    constructor(
        @InjectRepository(Candidate)
        private candidateRepository: Repository<Candidate>,

        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async getAll(): Promise<Candidate[] | undefined> {
        return this.candidateRepository.find();
    }

    async metadata(): Promise<any> | undefined {
        let result: Array<metadata> = [];

        const metadata = this.candidateRepository.manager.connection.getMetadata(Candidate);
        const columns = metadata.columns.map((column) => {
            if (!column.relationMetadata && !column.isPrimary && column.isUpdate) {
                const metadataObj: metadata = {
                    fieldname: column.propertyName,
                    fieldtype: column.type,
                    required: !column.isNullable && !column.default
                }
                result.push(metadataObj)
            }
        });
        return result;
    }

    async create(candidate: any): Promise<any> {
        if(candidate.userId !== undefined) {
            const user = await this.userRepository.findBy({ id: candidate.userId });
            candidate.user = user[0];
        }

        return this.candidateRepository.save(candidate);
    }

    async delete(candidateId: string): Promise<any> {
        const candidate = await this.candidateRepository.findBy({ id: candidateId });
        if(candidate.length !== 0) {
            return this.candidateRepository.remove(candidate);
        } else {
            return {
                'status': 200,
                'message': 'The entity has not been deleted'
            }
        }
    }
}