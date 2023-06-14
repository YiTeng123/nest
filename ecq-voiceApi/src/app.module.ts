/* app.module.ts */
import { Module, Options } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
// 引入 Mongoose 
import { MongooseModule } from '@nestjs/mongoose';
import { UploadModule } from './upload/upload.module';
import { ExpressionModule } from './expression/expression.module';
import { VoiceModule } from './voice/voice.module';
import { AuthModule } from './auth/auth.module';

import { LogModule } from './log/log.module';
import { UserApiModule } from './userAPI/userApi.module';
import { TestModule } from './test/test.module';
import { UploadGamesModule } from './upload-games/upload-games.module';

@Module({
  //  用 forRoot 方法连接数据库AddressBook
  // imports: [UserModule, MongooseModule.forRoot(
  //   UploadModule, ExpressionModule, VoiceModule, AuthModule, LogModule, UserApiModule, TestModule],
  imports: [UserModule, MongooseModule.forRoot('mongodb://ue'
  ),
    UploadModule, ExpressionModule, VoiceModule, AuthModule, LogModule, UserApiModule, TestModule, UploadGamesModule],


  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
