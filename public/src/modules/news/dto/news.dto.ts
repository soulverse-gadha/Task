import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class newsDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    keyword:string
}

export class newsbyDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    title:string
}

export class createNewsDto{

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    category:string
}