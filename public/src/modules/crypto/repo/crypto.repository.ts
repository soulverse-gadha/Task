import { Injectable } from '@nestjs/common';
import { createCryptoDto, cryptoQueryDto } from '../dto/crypto.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CryptoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createCrypto(data: createCryptoDto) {
    return this.prisma.crypto.create({ data });
  }

  async getCrypto(data: cryptoQueryDto) {
    return this.prisma.crypto.findUnique({ where: { symbol: data.symbol } });
  }
}
