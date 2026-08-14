import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { PrismaService } from 'src/prisma.service';
import { WeatherRepo } from './repo/weather.repository';

@Module({
    providers:[WeatherService,PrismaService,WeatherRepo],
    controllers:[WeatherController]
})
export class WeatherModule {}
