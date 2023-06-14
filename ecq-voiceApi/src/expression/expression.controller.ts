import { ExpressionService } from './expression.service';
import { Controller, Get, Post, Body, Patch, Param, Delete,UseInterceptors,UploadedFile, Query } from '@nestjs/common';
import {FileInterceptor,FilesInterceptor} from '@nestjs/platform-express'



type Res = {
  return_code:string,
  return_info:string,
  result:{emotion:string
    energy:string
    fatigue:string
    attention:string
    motivation:string
    overall:string 
  } | null,

}
@Controller('expression')
export class ExpressionController {
  constructor(private readonly expressionService: ExpressionService) {}
  @Post('exps')
  @UseInterceptors(FileInterceptor('file'))
  async upload (@UploadedFile() file:any) {
    
    console.log(file)
   return await this.expressionService.httpExpression<Res>(file.path,file.filename)
    
 
  }


}
