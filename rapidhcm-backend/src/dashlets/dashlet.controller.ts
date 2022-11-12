import { Controller, Get, Post, Request, UseFilters, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { QueryExceptionFilter } from "src/filters/query-exception.filter";
import { DashletService } from "./dashlet.service";

@Controller()
export class DashletController {
    constructor(
        public dashlet: DashletService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post('dashlet/addfavourite')
    @UseFilters(new QueryExceptionFilter())
    async setFavourite(@Request() req) {
        return this.dashlet.setFavourite(req.body.isFavourite, req.body.dashletId)
    }

    @UseGuards(JwtAuthGuard)
    @Post('dashlet/assigndashlet')
    @UseFilters(new QueryExceptionFilter())
    async assignDashlet(@Request() req) {
        return this.dashlet.assignDashlet(req.user.username, req.body);
    }

    @UseGuards(JwtAuthGuard)
    @Get('dashlet/configuration')
    @UseFilters(new QueryExceptionFilter())
    async getConfiguration(@Request() req) {
        return this.dashlet.getDashletConfiguration(req.user);
    }
}