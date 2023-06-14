
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, Logger } from '@nestjs/common';
import * as moment from 'moment';
import { Request, Response } from 'express';
// @Catch(HttpException)
// export class HttpExceptionFilter implements ExceptionFilter {
//   catch(exception: HttpException, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const response = ctx.getResponse<Response>();
//     const request = ctx.getRequest<Request>();
//     const status = exception.getStatus();
//     // 获取全部的错误信息及 code
//     const { message, code } = exception.getResponse() as any;
//     Logger.log('全局异常过滤', message);
//     response.status(status).json({
//       code: code || status,
//       timestamp: moment().format('yyyy-MM-DD HH:mm:ss'),
//       path: request.url,
//       error: 'Bad Request',
//       message,
//     });
//   }
// }

 
@Catch(HttpException)
export class HttpFilter implements ExceptionFilter {
    // 接收的第一个参数是异常类,第二个参数是主机上下文
    catch(exception:HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const request = ctx.getRequest<Request>()
        const response = ctx.getResponse<Response>()
 
        const status = exception.getStatus()
 
        response.status(status).json({
           data:exception,
           time:new Date().getTime(),
           success:false,
           path:request.url,
           status
        })
    }
}
// Nest的默认异常筛选器将任何不是HttpException（Nest中的错误类）实例的错误视为Internal Server Error，并仅发回500。
// 为了解决这个问题，您可以使用HttpException子类（比如BadRequestException），也可以创建自己的异常过滤器来读取错误并发送相应的响应