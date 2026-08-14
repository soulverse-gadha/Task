import { PrismaService } from "src/prisma.service";
import { createUserDto, getByunameDto, getUserDto } from "../dto/user.dto";

export class userRepository{
    constructor (private readonly prisma: PrismaService){}

    async createUser(data:createUserDto){
        return await this.prisma.user.create({
            data
        })
    }

    async getUserbyUname(username:getByunameDto){
        return await this.prisma.user.findUnique({
            where:{username:username.username}
        })
    }

    async getUserbyId(id:getUserDto){
        return await this.prisma.user.findUnique({
            where:id
        })
    }
}