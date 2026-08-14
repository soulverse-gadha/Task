import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { NewsService } from './news.service';
import { createNewsDto, newsDto } from './dto/news.dto';
import { apiResponse } from 'src/common/response';
import { Response } from 'express';
import { ApiOperation } from '@nestjs/swagger';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService:NewsService){}


    @ApiOperation({
        summary:'Add a news'
    })
    @Post('Submit')
    async createNews(@Res() res:Response,@Body()data:createNewsDto){

        const result= await this.newsService.createNews(data)
        return res.status(result.statusCode).json(result)

    }

    @ApiOperation({
        summary:'Get 5 latest news'
    })
    @Get('latest')
    async latestNews(@Res() res:Response){
        const result=await this.newsService.latestNews()
        return res.status(result.statusCode).json(result)
    }


    @ApiOperation({
        summary:'Get news to the keyword'
    })
    @Get('search')
    async searchNews(@Res() res:Response,@Query()keyword:newsDto){
        const result= await this.newsService.searchNews(keyword)
        return res.status(result.statusCode).json(result)
    }
}
