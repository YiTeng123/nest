import { PartialType } from '@nestjs/mapped-types';
import { CreatePointDto } from './create-user.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreatePointDto) {

    @IsNotEmpty()
    @IsString()
    public eyePath: string
}
