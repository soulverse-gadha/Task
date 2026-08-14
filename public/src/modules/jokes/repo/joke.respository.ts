import { PrismaService } from 'src/prisma.service';
import { getJokeByIdDto, getJokeDto, jokeDto } from '../dto/jokes.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JokeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createJoke(data: jokeDto) {
    return await this.prisma.joke.create({
      data,
    });
  }

  async getJokebyEmail(data: getJokeDto) {
    return await this.prisma.joke.findUnique({
      where: { email: data.email },
    });
  }

  async getJokebyId(data: getJokeByIdDto) {
    return await this.prisma.joke.findUnique({
      where: { id: data.id },
    });
  }

  async getAll() {
    return await this.prisma.joke.findMany();
  }

  async updateJoke(para: getJokeByIdDto, data: Partial<jokeDto>) {
    return await this.prisma.joke.update({
      where: { id: para.id },
      data,
    });
  }

  async deleteJoke(para: getJokeByIdDto) {
    return await this.prisma.joke.delete({
      where: { id: para.id },
    });
  }
}
