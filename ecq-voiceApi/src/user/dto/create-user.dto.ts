
// dto管道验证
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

class Eegres {
    // 这个地方是到处给@type回调函数的类型约束,必须显示声明不为空
    @IsNotEmpty()
    public mood: string;
    @IsNotEmpty()
    public presure: string;
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

    cliAdvice?:object
    gaintestMp4?: string
    expresstionMp4: string
    voiceWav: string

    gamesPoint?: Array<{
        name: string
        score: number
        time: number
    }>
    eegPath
    organ?: string
}

export class createPerson {

    age: string

    identifier: string

    name: string

    nation: string

    grade: string

    schemeNum: string

    organ: string

    sex: number
}



