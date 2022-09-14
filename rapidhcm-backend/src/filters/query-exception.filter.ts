import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { QueryFailedError } from "typeorm";
import { Request, Response } from "express";

@Catch(QueryFailedError)
export class QueryExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const message = (exception as any).message;

        response
            .status(500)
            .json({
                statusCode: 500,
                timestamp: new Date().toISOString(),
                path: request.url,
                message: message
            });
    }
}