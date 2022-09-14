import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { BaseExceptionFilter, HttpAdapterHost } from "@nestjs/core";

@Catch(HttpException)
export class AllExceptionsFilter extends BaseExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
      super.catch(exception, host);
    }
}