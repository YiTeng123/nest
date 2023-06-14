/*
 * @Author: your name
 * @Date: 2022-02-18 16:31:47
 * @LastEditTime: 2022-02-19 08:31:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nest-test\src\common\decorators\public.decorator.ts
 */
import { SetMetadata } from '@nestjs/common';
import { PUBLIC_KEY } from '../contants/decorator.contan';
// 设置不进行 jwt 校验
export const Public = () => SetMetadata(PUBLIC_KEY, true);
