import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { createQuoteDto, quoteDto } from './dto/quotes.dto';
import { apiResponse } from 'src/common/response';
import { ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';

@Controller('quotes')
export class QuotesController {
    constructor(private readonly quotesService:QuotesService){}


    @ApiOperation({
        summary:'Add a new quote'
    })
    @Post('submit')
    async createQuote(@Res()res:Response, @Body()data:createQuoteDto){
        const result = await this.quotesService.createQuote(data)
        return res.status(result.statusCode).json(result)
    }

    @ApiOperation({
        summary:'Get random joke'
    })
    @Get('random')
    async randomJoke(@Res()res:Response){
        const result= await this.quotesService.randomQuote()
        return res.status(result.statusCode).json(result)
    }

    @ApiOperation({
        summary:'Get a joke by author'
    })
    @Get('by-author')
    async getbyAuthor(@Res()res:Response,@Query()data:quoteDto){
        const result= await this.quotesService.getbyAuthor(data.author)
        return res.status(result.statusCode).json(result)
    }
}
