import { Injectable } from "@nestjs/common";
import { createQuoteDto, quoteByDto, quoteDto } from "../dto/quotes.dto";
import { PrismaService } from "src/prisma.service";


@Injectable()
export class QuoteRepo{
constructor(private readonly prisma:PrismaService){}

    async createQuote(data:createQuoteDto){
        return this.prisma.quotes.create({
            data,
        })
    }

    async getQuote(quote:quoteByDto){
        return this.prisma.quotes.findUnique({
            where:{quote:quote.quote}
        })
    }

    async getQuoteByAuthor(author:quoteDto){
        return this.prisma.quotes.findMany({
            where:{author:author.author}
        })
    }

    async getAll(){
        return this.prisma.quotes.findMany()
    }
}