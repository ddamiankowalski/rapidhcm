import { Controller, Post, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { LocalAuthGuard } from "src/auth/local-auth.guard";

@Controller()
export class UserController {
    constructor() {}

}