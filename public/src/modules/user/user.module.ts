import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma.service';
import { userRepository } from './repo/user.repository';

@Module({
  providers: [UserService,userRepository,PrismaService],
  controllers: [UserController]
})
export class UserModule {}
