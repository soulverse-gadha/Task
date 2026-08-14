import { Module } from '@nestjs/common';
import { JokesService } from './jokes.service';
import { JokesController } from './jokes.controller';
import { JokeRepository } from './repo/joke.respository';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [JokesService,JokeRepository,PrismaService],
  controllers: [JokesController]
})
export class JokesModule {}
