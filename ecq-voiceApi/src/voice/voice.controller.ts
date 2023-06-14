import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile,UseInterceptors } from '@nestjs/common';
import { VoiceService } from './voice.service';
import {FileInterceptor,FilesInterceptor} from '@nestjs/platform-express'


@Controller('voice')
export class VoiceController {
  constructor(private readonly voiceService: VoiceService) {}
  @Post('exps')
  @UseInterceptors(FileInterceptor('file'))
  async upload (@UploadedFile() file:any) {
    // console.log(file)
    let A = await this.voiceService.uploadAudio(file.path) as Array<string>
    A.push(file.filename)
    return A
  }


}
//  '/mnt/disk2/webapps/UploadFile/health-audio/1675604015202.wav'
// '/mnt/disk2/webapps/UploadFile/health-audio/04MDD07CZH-08_2022-8-10T14:35:13.wav'