import { Injectable } from '@nestjs/common';
import { CreateVoiceDto } from './dto/create-voice.dto';
import { UpdateVoiceDto } from './dto/update-voice.dto';
// import { Options } from ''
import * as childPro from 'child_process'
import * as Python from 'python-shell'
// var PythonShell = require('python-shell')

import { execSync ,spawn,execFile,exec } from 'child_process';
@Injectable()
export class VoiceService {
  
  async uploadAudio( audioUrl:string){
    const options={
      mode:'text',
      // scriptPath:'../',
      // pythonOptions:
      // pythonOptions: [`--audio_path`],
      // args: ['test',10,47],
      args: [ `--audio_path=${audioUrl}`],

    }     
    // console.log(options.args);
    
    const resultAsync =await new Promise((resolve,reject)=>{
      Python.PythonShell.run("main.py",options as any,(err,results)=>{
          if (err) return reject(err)
          return resolve(results)

      })
    })
    return resultAsync



  }

}
