import { Controller, Post, UseGuards, Request, UseFilters, Get, Param } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { LocalAuthGuard } from "src/auth/local-auth.guard";
import { QueryExceptionFilter } from "src/filters/query-exception.filter";
import { UsersService } from "./users.service";

@Controller()
export class UserController {
    constructor(public usersService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @Get('getuserinfo')
    @UseFilters(new QueryExceptionFilter())
    async getUserInfo(@Request() req) {
        return this.usersService.findOne(req.user);
    }
}