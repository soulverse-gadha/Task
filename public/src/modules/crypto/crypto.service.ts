/* eslint-disable no-useless-catch */
import {
  ConflictException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { createCryptoDto, cryptoQueryDto } from './dto/crypto.dto';
import { CryptoRepository } from './repo/crypto.repository';

@Injectable()
export class CryptoService {
  constructor(private readonly cryptoRepo: CryptoRepository) {}

  async createCrypto(data: createCryptoDto) {
    // eslint-disable-next-line no-useless-catch
    try {
      const existingData = await this.cryptoRepo.getCrypto(data);
      if (existingData) {
        throw new ConflictException(
          `Crypto with ${data.symbol} already exists`,
        );
      }
      const newCrypto = await this.cryptoRepo.createCrypto(data);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Crypto data added successfully',
        data: newCrypto,
      };
    } catch (error) {
      throw error;
    }
  }

  async getPrice(data: cryptoQueryDto) {
    try {
      const result = await this.cryptoRepo.getCrypto(data);
      if (!result) {
        throw new NotFoundException(`Price for ${data.symbol} not found`);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'Price for the symbol fetched',
        data: result.price,
      };
    } catch (error) {
      throw error;
    }
  }

  async getInfo(data: cryptoQueryDto) {
    try {
      const result = await this.cryptoRepo.getCrypto(data);
      if (!result) {
        throw new NotFoundException(`Info for ${data.symbol} not found`);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'Price for the symbol fetched',
        data: result,
      };
    } catch (error) {
      throw error;
    }
  }
}
