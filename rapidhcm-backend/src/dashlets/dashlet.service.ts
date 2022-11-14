import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/entity/user.entity";
import { Repository } from "typeorm";
import { Dashlet } from "./entity/dashlet.entity";

@Injectable()
export class DashletService {
    constructor(
        @InjectRepository(Dashlet)
        private dashletRepository: Repository<Dashlet>,

        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {
    }

    async assignDashlet(username: any, dashlet: any) {
        const user = await this.userRepository.findOneBy({ username });
        dashlet.user = user;
        await this.dashletRepository.save(dashlet);
    }

    async getDashletConfiguration({ username }) {
        const user = await this.userRepository.findOneBy({ username });
        const dashlets = await this.dashletRepository.find(
            {
                relations: {
                    user: true
                },
                where: {
                    user: {
                        id: user.id
                    }
                }
            }
        );

        return dashlets;
    }

    async setFavourite(isFavourite: any, dashletId: string) {
        console.log(isFavourite, dashletId)
        return this.dashletRepository.save({ id: dashletId, isFavourite })
    }
}