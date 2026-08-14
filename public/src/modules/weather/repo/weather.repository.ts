import { Injectable } from "@nestjs/common";
import { createWeatherDto, weatherQueryDto } from "../dto/weather.dto";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class WeatherRepo{
    constructor(private readonly prisma:PrismaService){}

    async createData(data:createWeatherDto){
        return this.prisma.weather.create({
            data
        })
    }

    async getBycity(city:weatherQueryDto){
        return this.prisma.weather.findUnique({
            where:{city:city.city}
        })
    }
}