import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { createWeatherDto, forecastDto, weatherQueryDto } from './dto/weather.dto';
import { apiResponse } from 'src/common/response';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Weather')
@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {} 

    @ApiOperation({
        summary:'Add a weather data'
    })
    @Post('submit')
    async createWeather(@Res()res:Response, @Body()data:createWeatherDto){

        const result = await this.weatherService.createWeather(data)
        return res.status(result.statusCode).json(result)

    }

    @ApiOperation({
        summary:'Get current weather of a city'
    })
    @Get('current')
    async findWeather(@Res()res:Response, @Query() data: string) {

            const result = await this.weatherService.findWeather(data);
            return res.status(result.statusCode).json(result)

    }

    @Get('map')
    getMapurl() {
        try {
            const result = this.weatherService.getMapurl();
            return apiResponse.success('Weather map URL fetched successfully', result);
        } catch (error) {
            return apiResponse.error('Failed to fetch weather map URL', error);
        }
    }

    @Get('forecast')
    getForecast(@Query() data: forecastDto) {
        try {
            const result = this.weatherService.getForecast(data);
            return apiResponse.success('Weather forecast fetched successfully', result);
        } catch (error) {
            return apiResponse.error('Failed to fetch weather forecast', error);
        }
    }
}
