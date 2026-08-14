/* eslint-disable no-useless-catch */
import {
  ConflictException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
// import { jokes } from './data/data';
import { getJokeByIdDto, getJokeDto, jokeDto } from './dto/jokes.dto';
import { JokeRepository } from './repo/joke.respository';

@Injectable()
export class JokesService {
  constructor(private readonly jokeRepository: JokeRepository) {}

  async createJoke(data: jokeDto) {
    try {
      const joke = await this.jokeRepository.getJokebyEmail(data);
      if (joke) {
        throw new ConflictException(
          `Joke with email ${data.email} already exsits`,
        );
      }
      const newJoke = await this.jokeRepository.createJoke(data);
      if (!newJoke) {
        throw new InternalServerErrorException('Error adding Jokes');
      }
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Joke created successfully',
        data: newJoke,
      };
    } catch (error) {
      throw error;
    }
  }

  async getJoke(data: getJokeDto) {
    try {
      const joke = await this.jokeRepository.getJokebyEmail(data);
      if (!joke) {
        throw new ConflictException(
          `Joke with email ${data.email} doesn't exsits`,
        );
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'Joke fetched',
        data: joke,
      };
    } catch (error) {
      throw error;
    }
  }

  async randomJoke() {
    try {
      const data = await this.jokeRepository.getAll();
      if (data.length == 0) {
        throw new NotFoundException('No jokes found');
      }
      const index = Math.floor(Math.random() * data.length);

      return {
        statusCode: HttpStatus.OK,
        message: 'Joke selected randomly',
        data: data[index],
      };
    } catch (error) {
      throw error;
    }
  }

  async updateJoke(id: getJokeByIdDto, data: Partial<jokeDto>) {
    try {
      const Joke = await this.jokeRepository.getJokebyId(id);
      if (!Joke) {
        throw new NotFoundException('Joke not found');
      }

      const updatedJoke = await this.jokeRepository.updateJoke(id, data);
      return {
        statusCode: HttpStatus.OK,
        message: 'Joke updated',
        data: updatedJoke,
      };
    } catch (error) {
      throw error;
    }
  }

  async deleteJoke(id: getJokeByIdDto) {
    try {
      const Joke = await this.jokeRepository.deleteJoke(id);
      if (!Joke) {
        throw new NotFoundException('Joke not found');
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'Joke deleted',
      };
    } catch (error) {
      throw error;
    }
  }
}
