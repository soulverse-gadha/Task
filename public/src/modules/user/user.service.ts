import { ConflictException, HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { createUserDto, getByunameDto } from './dto/user.dto';
import { userRepository } from './repo/user.repository';


@Injectable()
export class UserService {
    constructor(private readonly UserRepository: userRepository){}

    async createUser(data:createUserDto){
        try{
            const existingUser= await this.UserRepository.getUserbyUname(data)
            if(existingUser){
                throw new ConflictException(`User with ${data.username} already exists`)
            }

            const newUser= await this.UserRepository.createUser(data)
            if(!newUser){
                throw new InternalServerErrorException('Error adding the user')
            }

            return {
                statusCode:HttpStatus.CREATED,
                message:'User created successfully',
                data:newUser
            }
        }catch(error){
            throw error
        }
    }

    async getUserbyUname(username:getByunameDto){
        try{
            const user=await this.UserRepository.getUserbyUname(username)
            if(!user){
                throw new NotFoundException('User doesnot exist')
            }
            return{
                statusCode:HttpStatus.OK,
                message:'User fetched successfully',
                data:user
            }
        }catch(error){
            throw error
        }
    }
}
