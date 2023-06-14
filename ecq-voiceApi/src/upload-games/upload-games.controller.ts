import { UploadGamesService } from './upload-games.service';
import { CreateUploadGameDto } from './dto/create-upload-game.dto';
import { UpdateUploadGameDto } from './dto/update-upload-game.dto';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor, } from '@nestjs/platform-express'
import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Query, UploadedFiles } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
@Controller('uploadGames')
export class UploadGamesController {
  constructor(
    private readonly httpService: HttpService,
    private readonly uploadGamesService: UploadGamesService) { }


  @Post('albumGame')
  @UseInterceptors(FileInterceptor('file'))
  async uploadAlbumGame(@UploadedFile() file:any , @Body() formData: {_idString:string}) {
  // console.log(file)
   return await file.originalname
  }







  @Patch(':id')
  update(@Param('id') id: string ,@Body() eyeObj:Record<'realGame'|'vitualGame'|'clcAdvice' ,Array<any>> ) {
    console.log(id,eyeObj)
    return  this.uploadGamesService.setEyeObject(id,eyeObj)
  }



}
