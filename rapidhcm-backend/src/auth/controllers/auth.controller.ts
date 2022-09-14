import { Controller, Post, UseGuards, Request, Catch, UseFilters } from "@nestjs/common";
import { QueryExceptionFilter } from "src/filters/query-exception.filter";
import { EntityNotFoundError, QueryFailedError } from "typeorm";
import { AuthService } from "../auth.service";
import { LocalAuthGuard } from "../local-auth.guard";

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('auth/register')
    @UseFilters(new QueryExceptionFilter())
    async register(@Request() req) {
        return this.authService.register(req.body);
    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    @UseFilters(new QueryExceptionFilter())
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Post('auth/logout')
    async logout() {
        return true;
    }
}