import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
