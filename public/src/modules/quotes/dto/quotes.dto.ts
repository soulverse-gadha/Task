import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class quoteDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    author:string
}

export class quoteByDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    quote:string
}

export class createQuoteDto{

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    quote:string


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    author:string

}