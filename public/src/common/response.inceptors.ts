
import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
  import { Response } from 'express';
  import { map, Observable } from 'rxjs';
import { ResponseDto } from 'src/dto/response.dto';
  
  interface ServiceResponse<T> {
    message?: string;
    data: T;
  }
  
  @Injectable()
  export class ResponseInterceptor<T>
    implements NestInterceptor<ServiceResponse<T>, ResponseDto<T>>
  {
    intercept(
      context: ExecutionContext,
      next: CallHandler<ServiceResponse<T>>,
    ): Observable<ResponseDto<T>> {
      const ctx = context.switchToHttp();
      const response = ctx.getResponse<Response>();
  
      return next.handle().pipe(
        map((serviceResponse) => ({
          statusCode: response.statusCode,
          message: serviceResponse.message ?? 'Request successful',
          data: serviceResponse.data,
        })),
      );
    }
  }
  