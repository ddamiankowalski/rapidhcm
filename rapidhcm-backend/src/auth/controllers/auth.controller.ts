import { Controller, Post, UseGuards, Request, UseFilters } from "@nestjs/common";
import { QueryExceptionFilter } from "src/filters/query-exception.filter";
import { AuthService } from "../auth.service";
import { JwtAuthGuard } from "../jwt-auth.guard";
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