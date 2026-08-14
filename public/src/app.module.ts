import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptoModule } from './modules/crypto/crypto.module';
import { JokesModule } from './modules/jokes/jokes.module';
import { NewsModule } from './modules/news/news.module';
import { QuotesModule } from './modules/quotes/quotes.module';
import { UtilsModule } from './modules/utils/utils.module';
import { WeatherModule } from './modules/weather/weather.module';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [CryptoModule,
            JokesModule,
            NewsModule,
            QuotesModule,
            UtilsModule,
            WeatherModule,
          ConfigModule.forRoot(),
          UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
