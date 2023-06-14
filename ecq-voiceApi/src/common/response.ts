import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common'
import { map } from 'rxjs/operators'
import {Observable} from 'rxjs'
// 全局响应拦截器 

    // 可以使用Exclude装饰器： @Exclude() 排除返回字段，例：password(密码)
    export interface Response<T> {
        data: T;
      }
      
      export class TransformInterceptor<T>
        implements NestInterceptor<T, Response<T>>
      {
        intercept(context: ExecutionContext, next: CallHandler<T>) {
          return next.handle().pipe(
            map((data) => ({
              retcode: 200,
              msg: 'OK',
              data,
            })),
          );
        }
      }