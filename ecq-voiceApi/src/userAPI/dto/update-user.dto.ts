import { PartialType } from '@nestjs/mapped-types';
import { CreatePointDto } from './create-user.dto';
// dto管道验证
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
// `PartialType` 将指定类的所有属性转化为可选属性，可以方便地定义更新模型。 
export class UpdateUserDto extends PartialType(CreatePointDto) { }

export class AddUpdate {
    @IsNotEmpty()
    @IsString()
    public _id: string
    @IsNotEmpty()
    @IsString()
    public gradeApi: string
    @IsNotEmpty()
    @IsString()
    public classApi: string
}