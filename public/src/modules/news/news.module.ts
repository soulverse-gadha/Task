import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { PrismaService } from 'src/prisma.service';
import { NewsRepo } from './repo/news.repository';

@Module({
  controllers: [NewsController],
  providers: [NewsService,PrismaService,NewsRepo]
})
export class NewsModule {}
