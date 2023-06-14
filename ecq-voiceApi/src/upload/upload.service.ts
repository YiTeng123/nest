import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { map, Observable } from 'rxjs';
import { Point } from 'src/user/entities/point.entity';
import * as childPro from 'child_process'
// import { CreateUploadDto } from './dto/create-upload.dto';
// import { UpdateUploadDto } from './dto/update-upload.dto';
// nodejs不支持原生实例化表单对象
// import * as FormData from 'form-data'

type predict = {
  [x: string]: string;
  return_code: string
  return_info: string
  result: any

}
@Injectable()
export class UploadService {
  constructor(private readonly httpService: HttpService,
    @InjectModel(Point.name) private pointTest: Model<Point>
  ) {

  }
  // 返回一个promise包裹的一个可观察物件，axios自带一层data，此处的predict用于描述请求结果的数据(此方法的返回值)
  async axiosTest(video_path: string,filename:string){
    //  post接收一个泛型参数，用于描述此次请求的返回结果
    return this.httpService.post<predict>('http://127.0.0.2:1010/predict/gait-emotion', { video_path })
      // 这里修动算法返回的数据还没测试
    .pipe(map(response => {
      // console.log(response);

      if(response.data.result)
      response.data.result.gaiturl= filename
        return response.data
      }));
    // let  a= this.httpService.post<predict>('http://127.0.0.2:1010/predict/gait-emotion', {  video_path }).pipe(map(response => response.data));
    // return this.httpService.post<predict>('http://127.0.0.2:1010/predict/gait-emotion', { video_path })
    // .pipe(map(response => {
    //   response.data.gaiturl = video_path
    //   return response.data
    // }));


  }


  // 向数据库保存用户的步态视频的路径
  async addMp4Url(sid: string, data: string) {
    console.log(sid, data);

    // 如果multi:false，它将只更新第一条符合条件的记录
    const temp = await this.pointTest.updateOne({ "personID": sid }, { $set: { "gaintestMp4": data } }, { multi: true });
    return temp;
  }


  async uploadAudio( audioUrl:string){
  //  console.log('ds');

   const {exec} =  childPro
  //  console.log(spawn("cmd"));
  const p0 = new Promise((resolve, reject)=>{
    let v0 = "i am js"
    resolve(v0)
})
p0.then((value)=>{
  console.log(value)
}).then(()=>{
  let v1 = 'success'
  let v2 = 'test'
  let v3 = 10
  let v4 = 47
  // let cmdStr = 'python py/biai-audio/main.py --viedo_path=C:/必爱/代码们/未命名文件夹/dist/video/1674976713112.mp4'
  let cmdStr = `python /www/src/biai-audio/main.py --video_path=${audioUrl}`
  // let cmdStr = 'python py/test.py' + ' ' + v2 + ' ' + v3 + ' ' + v4    
  // python py/test.py v2 v3 v4 
  console.log(cmdStr);
  
  exec(cmdStr, (err, stdout, stderr)=>{
      if(err){
          console.log(stderr)
      }else{
          console.log(stdout)
      }
  })
  // return v1
}).then((v1)=>{
  setTimeout(()=>{
      console.log(v1)
      // return true
  }, 5000)
}).catch((err)=>{
  console.log(err)
  // return true
}).finally(()=>{
  
})

  }

}
