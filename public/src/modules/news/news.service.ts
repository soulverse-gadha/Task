import { BadRequestException, ConflictException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { newsLatest } from './data/dummy-data';
import { createNewsDto, newsDto } from './dto/news.dto';
import { NewsRepo } from './repo/news.repository';

@Injectable()
export class NewsService {
constructor(private readonly newsRepo:NewsRepo){}

    async createNews(data:createNewsDto){
        try{
            const existingNews= await this.newsRepo.getNewsbyTitle(data)
            if(existingNews){
                throw new ConflictException ('News with title exists')
            }

            const newNews= await this.newsRepo.createNews(data)
            return {
                statusCode:HttpStatus.CREATED,
                message:'News added successfully',
                data: newNews
            }
        }catch(error){
            throw error
        }
    }

    async latestNews(){
        try{
            const result=  await this.newsRepo.getNewslatest()
            if(!result){
                throw new NotFoundException('No news can be fetched')
            }
            return {
                statusCode:HttpStatus.OK,
                message:'Lates News fetched',
                data:result
            }
        }catch(error){
            throw error
        }
    }

    async searchNews(keyword:newsDto){

       try{
        const result= await this.newsRepo.getNewsbyCat(keyword)
        if(result.length==0){
            throw new NotFoundException('No news can be fetched to this keyword')
        }
        return {
            statusCode:HttpStatus.OK,
            message:'News fetched',
            data:result
        }
       }catch(error){
        throw error
       }
        
    }
}
