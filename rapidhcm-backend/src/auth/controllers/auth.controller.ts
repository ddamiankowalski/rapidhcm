import { Controller, Post, UseGuards, Request, Catch } from "@nestjs/common";
import { EntityNotFoundError, QueryFailedError } from "typeorm";
import { AuthService } from "../auth.service";
import { LocalAuthGuard } from "../local-auth.guard";

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('auth/register')
    async register(@Request() req) {
        return this.authService.register(req.body);
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Post('auth/logout')
    async logout() {
        return true;
    }
}