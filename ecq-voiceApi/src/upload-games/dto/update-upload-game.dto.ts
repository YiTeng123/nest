import { PartialType } from '@nestjs/mapped-types';
import { CreateUploadGameDto } from './create-upload-game.dto';

export class UpdateUploadGameDto extends PartialType(CreateUploadGameDto) {}
