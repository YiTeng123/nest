import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { test } from './Inject';

@Module({
  controllers: [TestController],
  providers: [TestService,test]
})
export class TestModule {}
