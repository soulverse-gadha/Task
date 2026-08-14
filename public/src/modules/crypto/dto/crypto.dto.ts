import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class cryptoQueryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim().toUpperCase() : value,
    symbol:string
}

export class createCryptoDto{

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    symbol:string

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    price:number

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    blockchain:string
}