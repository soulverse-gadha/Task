import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import * as moment from 'moment-timezone';
import { timeQueryDto } from './dto/utils.dto';

@Injectable()
export class UtilsService {

    getTime({region}:timeQueryDto){
        try{
            const result= moment.tz(region).format('YYYY-MM-DD HH:mm:ss')
            if(!result){
                throw new BadRequestException('Cannot be fetched')
            }
            return{
                statusCode:HttpStatus.OK,
                message:'Timezone fetched',
                data:result 
            }
        }catch(error){
            throw error
        }
    }

   getUUID(){
        try{
            const result=crypto.randomUUID()
            if(!result){
                throw new BadRequestException ('UUID is not created')
            }
            return {
                statusCode:HttpStatus.CREATED,
                message:'UUID created',
                data:result
            }
        }catch(error){
            throw error
        }
        
   }
}
