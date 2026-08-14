import {
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { weathers, forecast } from './data/data';
import {
  createWeatherDto,
  forecastDto,
  weatherQueryDto,
} from './dto/weather.dto';
import { WeatherRepo } from './repo/weather.repository';

@Injectable()
export class WeatherService {
  constructor(private readonly weatherRepo: WeatherRepo) {}

  async createWeather(data: createWeatherDto) {
    try {
      const existingData = await this.weatherRepo.getBycity(data);
      if (existingData) {
        throw new ConflictException('Data for the city already exists');
      }
      const newData = await this.weatherRepo.createData(data);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'UUID created',
        data: newData,
      };
    } catch (error) {
      throw error;
    }
  }

  async findWeather(city: weatherQueryDto) {
    try {
      const data = await this.weatherRepo.getBycity(city);
      if (!data) {
        throw new NotFoundException(`Data for ${city} not found`);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'Data fetched successfully',
        data: data,
      };
    } catch (error) {
      throw error;
    }
  }

  async getMapurl() {
    return await { url: 'https://www.google.com/maps' };
  }

  async getForecast(data: forecastDto) {
    try {
      const { days } = await this.getForecast(data);
      return forecast.slice(0, days);
    } catch (error) {
      throw error;
    }
  }
}
