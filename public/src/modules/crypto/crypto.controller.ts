import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { createCryptoDto, cryptoQueryDto } from './dto/crypto.dto';
import { Response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Crypto')
@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @ApiOperation({
    summary: 'Add a new crypto',
  })
  @Post('submit')
  async createCrypto(@Res() res: Response, @Body() data: createCryptoDto) {
    const result = await this.cryptoService.createCrypto(data);
    return res.status(result.statusCode).json(result);
  }

  @ApiOperation({
    summary: 'Get the price of crypto',
  })
  @Get('price')
  async getPrice(@Res() res: Response, @Query() data: cryptoQueryDto) {
    const result = await this.cryptoService.getPrice(data);
    return res.status(result.statusCode).json(result.data);
  }

  @ApiOperation({
    summary: 'Get the info of crypto',
  })
  @Get('info')
  async getInfo(@Res() res: Response, @Query() data: cryptoQueryDto) {
    const result = await this.cryptoService.getInfo(data);
    return res.status(result.statusCode).json(result.data);
  }
}
