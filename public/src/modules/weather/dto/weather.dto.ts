
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class weatherQueryDto{
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    city:string

}

export class forecastDto{
    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    days:number
}

export class createWeatherDto{

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    city:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    temperature:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    humidity:string
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    condition:string
}