import { Injectable } from "@nestjs/common";
import { createNewsDto, newsbyDto, newsDto } from "../dto/news.dto";
import { PrismaService } from "src/prisma.service";


@Injectable()
export class NewsRepo{
    constructor(private readonly prisma:PrismaService){}

    async createNews(data:createNewsDto){
        return await this.prisma.news.create({
            data,
        })
    }

    async getNewsbyTitle(title:newsbyDto){
        return await this.prisma.news.findUnique({
            where:{title:title.title}
        })
    }

    async getNewsbyCat(category:newsDto){
        return await this.prisma.news.findMany({
            where:{category:category.keyword}
        })
    }

    async getNewslatest(){
        return await this.prisma.news.findMany({
            orderBy:{
                createdAt:'desc',
            },
            take:5
        })
    }
}