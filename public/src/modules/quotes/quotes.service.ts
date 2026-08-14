import { ConflictException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { quotes } from './data/data';
import { createQuoteDto } from './dto/quotes.dto';
import { QuoteRepo } from './repo/quote.repository';

@Injectable()
export class QuotesService {
    constructor(private readonly quoteRepo:QuoteRepo){}

    async createQuote(data:createQuoteDto){
        try{
            const existing= await this.quoteRepo.getQuote(data.quote)
            if(existing){
                throw new ConflictException('Quote already exists')
            }

            const newQuote= await this.quoteRepo.createQuote(data)
            return {
                statusCode:HttpStatus.CREATED,
                message:'Quote added successfully',
                data:newQuote
            }
        }catch(error){
            throw error
        }
    }

    async randomQuote(){
        try{
            const quotes= await this.quoteRepo.getAll()
            if(!quotes){
                throw new NotFoundException('No quotes found')
            }

            const index=Math.floor(Math.random()*quotes.length)
            return {
                statusCode:HttpStatus.OK,
                message:'Random quotes',
                data:quotes[index]
            }

        }catch(error){
            throw error
        }
              
    }

    async getbyAuthor(author:string){
        try{
            const result= await this.quoteRepo.getQuoteByAuthor(author)
            if(result.length==0){
                throw new NotFoundException('Quote for this author not found')
            }

            return {
                statusCode:HttpStatus.OK,
                message:'Quote for the author',
                data:result
            }
        }catch(error){
            throw error
        }
        
    }
}
