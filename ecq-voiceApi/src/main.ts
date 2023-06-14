// 守卫:在中间件之后,在拦截器,管道之前,可以做些鉴权,token判断的业务逻辑

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Response, TransformInterceptor } from 'src/common/response'
import { HttpExceptionFilter } from 'src/common/error/http-exception.filter'
import { AllExceptionFilter } from './common/error/all-exception.filter';
import { ValidationPipe } from '@nestjs/common'

import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path'
import { LogInterceptor } from './log/log.interceptor';
import { ReportLogger } from './log/ReportLogger';

import * as bodyParser from 'body-parser';

const whiteList = ['/list']

// 全局中间件
function middleWareAll(req, res, next) {

  console.log(req.originalUrl, '我是main.ts的全局中间件,这是你的req访问路径')
  //  if(whiteList.includes(req.originalUrl)){
  //      next()
  //  }else{
  //      res.send('小黑子露出鸡脚了吧')
  //  }
  next()
}

async function bootstrap() {
  const reportLogger = new ReportLogger();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(middleWareAll)

  app.enableCors(
    {
      "origin": "*",
      "credentials": true,

      // "allowedHeaders":['Authorization','content-type'],

      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",

      "preflightContinue": false,

      "optionsSuccessStatus": 204

    }

  );
  // 注册全局管道验证
  app.useGlobalPipes(new ValidationPipe({
    // whitelist: true, // 启用白名单,DTO中没有声明的属性自动过滤
    transform: true, // 自动类型转换
  }),)
  // 注册全局响应拦截器
  app.useGlobalInterceptors(new LogInterceptor(reportLogger),new TransformInterceptor(),)
  // 注册全局异常拦截器
  // app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalFilters(new HttpExceptionFilter(), new AllExceptionFilter());
  // 注册静态资源运行外网访问,静态资源可以配置多个
  
  app.useStaticAssets(join(__dirname, 'videos'), {
    // prefix:"/xiaoman"
  })
  app.useStaticAssets(join(__dirname,'auth'))
  app.useStaticAssets(join(__dirname,'voice'))
  app.useStaticAssets('/mnt/disk2/webapps/UploadFile/health-pose')
  app.useStaticAssets('/mnt/disk2/webapps/UploadFile/health-audio')
  app.useStaticAssets('/mnt/disk2/webapps/UploadFile/health2020')
  app.useStaticAssets('/mnt/disk2/webapps/UploadFile/health-games')
  app.useStaticAssets('/mnt/disk2/webapps/UploadFile/health-egg')

  app.useStaticAssets(join(__dirname,'../games'))

  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

  await app.listen(3002);
}
bootstrap();
