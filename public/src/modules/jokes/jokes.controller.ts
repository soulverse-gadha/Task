import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { JokesService } from './jokes.service';
import { getJokeDto, jokeDto } from './dto/jokes.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('Jokes')
@Controller('jokes')
export class JokesController {
  constructor(private readonly jokeService: JokesService) {}

  @Post('submit')
  @ApiOperation({
    summary: 'Add a new Joke',
    description: 'This endpoint adds a new joke in the system.',
  })
  async createJoke(@Res() res: Response, @Body() data: jokeDto) {
    const result = await this.jokeService.createJoke(data);
    return res.status(result.statusCode).json(result);
  }

  @Get('email')
  @ApiOperation({
    summary: 'Get a Joke by the email id',
    description: 'This endpoint get a joke from the system.',
  })
  async getJoke(@Res() res: Response, @Query() email: getJokeDto) {
    const result = await this.jokeService.getJoke(email);
    return res.status(result.statusCode).json(result);
  }

  @Get('random')
  @ApiOperation({
    summary: 'Get random joke',
    description: 'This endpoint gets joke from the system.',
  })
  async randomJoke(@Res() res: Response) {
    const result = await this.jokeService.randomJoke();
    return res.status(result.statusCode).json(result);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update joke',
    description: 'This updates joke',
  })
  @ApiBody({ type: jokeDto })
  async updateJoke(
    @Res() res: Response,
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<jokeDto>,
  ) {
    const result = await this.jokeService.updateJoke(id, data);
    return res.status(result.statusCode).json(result);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'delete joke',
  })
  async deleteJoke(
    @Res() res: Response,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const result = await this.jokeService.deleteJoke(id);
    return res.status(result.statusCode).json(result);
  }
}
