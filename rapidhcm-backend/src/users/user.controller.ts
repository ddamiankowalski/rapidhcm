import { Controller, UseGuards, Request, UseFilters, Get } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { QueryExceptionFilter } from "src/filters/query-exception.filter";
import { UsersService } from "./users.service";

@Controller()
export class UserController {
    constructor(public usersService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @Get('getuserinfo')
    @UseFilters(new QueryExceptionFilter())
    async getUserInfo(@Request() req) {
        return this.usersService.findOne(req.user.username);
    }
}