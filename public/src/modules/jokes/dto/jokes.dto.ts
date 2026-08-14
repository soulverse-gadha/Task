import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class jokeDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  setup: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  punchline: string;
}

export class getJokeDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class getJokeByIdDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
