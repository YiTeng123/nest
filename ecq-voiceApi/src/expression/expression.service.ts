import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class ExpressionService {
  constructor(private readonly httpService: HttpService,
   
  ) { }

  async httpExpression<T>(video_path: string,filename:string): Promise<Observable<T>> {
    //  post接收一个泛型参数，用于描述此次请求的返回结果
    return this.httpService.post('http://127.0.0.2:1010/predict/face-emotion', { video_path })
      // 这里修动算法返回的数据还没测试
    // .pipe(map(response => response.data));
    .pipe(map(response=>{
      if(response.data?.result)
      response.data.result.expurl=filename
      return response.data
    }))
  }

}

