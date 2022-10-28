import { Controller, Get, UseFilters, UseGuards, Request, Post, Param, Delete, Query } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { QueryExceptionFilter } from "src/filters/query-exception.filter";
import { CandidateService } from "./candidate.service";

@Controller()
export class CandidateController {
    constructor(public candidateService: CandidateService) {}

    @UseGuards(JwtAuthGuard)
    @Get('candidates')
    @UseFilters(new QueryExceptionFilter())
    async getCandidates() {
        return this.candidateService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post('candidate')
    @UseFilters(new QueryExceptionFilter())
    async addCandidate(@Request() req) {
        return this.candidateService.create(req.body);
    }

    @UseGuards(JwtAuthGuard)
    @Post('candidate/delete')
    @UseFilters(new QueryExceptionFilter())
    async deleteCandidate(@Query('id') id: string) {
        return this.candidateService.delete(id);
    }
}