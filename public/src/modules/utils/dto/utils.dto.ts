import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class createDto{

    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsNumber()
    @IsNotEmpty()
    age:number
}

export class timeQueryDto{

    @ApiProperty()
    @IsString()
    region:string
}

