import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class getUserDto{

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    id:number
}

export class createUserDto{

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    username:string

    @ApiProperty()
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email:string
}

export class getByunameDto{
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    username:string
}
