
// dto管道验证
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { TreeLike } from '../userApi.service';

class Eegres {
    // 这个地方是到处给@type回调函数的类型约束,必须显示声明不为空
    @IsNotEmpty()
   public mood: string;
    @IsNotEmpty()
    public  presure: string;
    @IsNotEmpty()
    public relax: string
    @IsNotEmpty()
    public concentrate: string
    @IsNotEmpty()
    public tired: string
}
export class CreatePointDto {
    // @IsNotEmpty()

    gaintestPoint: string

    looktestPoint: string

    viocetsetPoint: string

    // @ValidateNested({each:true})
    // @Type(()=>Eegres)
    // eegResult:Eegres
    // 校验联合类型过于复杂
    eegResult
    totalityTestPoint: string

    gameReview?: string

    // 要求显式声明不为空,controlller层才能接收到
    @IsNotEmpty()
    personID: string

    Addvice?: string
    
    gaintestMp4?: string
    expresstionMp4: string
    voiceWav: string

    gamesPoint?: Array<{
        name: string
        score: number
        time: number
    }>
    eegPath:object
    cliAdvice:object
    tree:string
    // organ?:string
}

export class createPerson {

    age: string
    @IsNotEmpty()
    identifier: string
    personID: string

    name: string

    nation: string

    grade: string

    schemeNum: string

    organ: string

    sex: number
    gradeApi:string
    classApi:string
    time:string
    tree:string

}
export class Tree{
    // 好一个管道验证
    // dto出现的字段前端参数如果没携带会挂请求,我不理解
    personID: string
    tree:string
}



