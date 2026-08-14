import { Module } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { CryptoController } from './crypto.controller';
import { PrismaService } from 'src/prisma.service';
import { CryptoRepository } from './repo/crypto.repository';

@Module({
  providers: [CryptoService,PrismaService,CryptoRepository],
  controllers: [CryptoController]
})
export class CryptoModule {}
