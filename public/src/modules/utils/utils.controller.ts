import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { createDto, timeQueryDto } from './dto/utils.dto';
import { apiResponse } from 'src/common/response';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';


@ApiTags('Utils')
@Controller('utils')
export class UtilsController {
    constructor(private readonly utilsService: UtilsService) {}

    @ApiOperation({
        summary:'Return echo of body'
    })
    @Post('echo')
    create(@Body() data: createDto) {
        try {
            return apiResponse.success('Success', data);
        } catch (error) {
            return apiResponse.error('Failed to echo data', error);
        }
    }

    @ApiOperation({
        summary:'Timezone of a region'
    })
    @Get('timezone')
    getTime(@Res()res:Response,@Query() region: timeQueryDto) {

        const result = this.utilsService.getTime(region);
        return res.status(result.statusCode).json(result)
    }

    @ApiOperation({
        summary:'Get UUID'
    })
    @Get('uuid')
    getUUID(@Res()res:Response) {
        
        const result = this.utilsService.getUUID();
        return res.status(result.statusCode).json(result)
    }

    @ApiOperation({
        summary:'Get a message'
    })
    @Get('ping')
    getMessage() {
        try {
            return { message: 'pong' };
        } catch (error) {
            return apiResponse.error('Ping failed', error);
        }
    }
}
