import { Body, ConflictException, Controller, Get, InternalServerErrorException, Param, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/user.dto';
import { Response } from 'express';
import { apiResponse } from 'src/common/response';
import { ApiOperation } from '@nestjs/swagger';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Post()
    @ApiOperation({
            summary: 'Add a new User',
            description: 'This endpoint adds a new user in the system.',
          })
    async createUser(@Res() res:Response,@Body()data:createUserDto){
    
            const result= await this.userService.createUser(data)
            return res.status(result.statusCode).json(result)
        
    }
    

    @Get('username')
    @ApiOperation({
        summary: 'Fetch user by username',
        description: 'This endpoint fetch user data from the system.',
      })
    async getUser(@Res() res:Response,@Param('username')userName:string){
        
            const result= await this.userService.getUserbyUname(userName)
            return res.status(result.statusCode).json(result)
       
    }
    
}
