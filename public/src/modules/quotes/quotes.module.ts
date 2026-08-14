import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { PrismaService } from 'src/prisma.service';
import { QuoteRepo } from './repo/quote.repository';

@Module({
  providers: [QuotesService,PrismaService,QuoteRepo],
  controllers: [QuotesController]
})
export class QuotesModule {}
