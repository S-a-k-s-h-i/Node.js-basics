import { ExceptionFilter, ArgumentsHost, Catch } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidationException } from 'src/filters/validation-exception.filter';

@Catch(ValidationException)
export class ValidationFilter implements ExceptionFilter{
  catch(exception: ValidationException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
    
        response
          .status(status)
          .json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            description:'Bad Request',
            validationErrors:exception.validationErrors
          });
      }
}