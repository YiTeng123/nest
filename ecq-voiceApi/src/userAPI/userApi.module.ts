  /* user.module.ts */

import { UploadModule } from 'src/upload/upload.module';
import {AuthModule} from 'src/auth/auth.module';
  import { MiddlewareConsumer, Module ,NestModule, RequestMethod } from '@nestjs/common';
  import { UserController } from './userApi.controller';
  import { UserApiService } from './userApi.service';
  import { MongooseModule } from '@nestjs/mongoose';
  import { UserSchema ,User} from './entities/user.entity';
import {Point,PointSchema } from './entities/point.entity'
  import {LoggerMiddleware} from "src/logger/logger.middleware"
  @Module({
     // MongooseModule提供了forFeature()方法来配置模块,即用来关联数据库实体类,包括定义哪些模型应该注册在当前范围中。
     // 如果你还想在另外的模块中使用这个模型，将MongooseModule添加到CatsModule的exports部分并在其他模块中导入CatsModule。
     // 这里的 name:'Users' 为索引inJectModel的名称,与 service 中注入的表名称对应两者不一样会报错
    imports: [MongooseModule.forFeature([
      { name: User.name, schema: UserSchema, collection: 'Users' },
// ecqAPi域名的得分表
      { name:'pointApi', schema: PointSchema, collection: 'pointApi' }
  ]),UploadModule,AuthModule

  ],
    controllers: [UserController],
    providers: [UserApiService],
  })
  // 不知道怎么实现就查询它的类型
  export class UserApiModule  implements NestModule  {
    // 接收一个消费者,调用apply方法来注册这个中间件并指定要作用的路由
    configure(consumer: MiddlewareConsumer) {
      // 三种写法,局部注册中间件
      // consumer.apply(LoggerMiddleware).forRoutes('user')
      // consumer.apply(LoggerMiddleware).forRoutes({path:'user',method:RequestMethod.GET})
      consumer.apply(LoggerMiddleware).forRoutes(UserController)

    }
  }


