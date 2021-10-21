import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cats')
@Controller('cats')
export class CatsController {
  @Get()
  getCats() {
    return {
      total: 2,
      cats: ['Black one', 'White one'],
    };
  }
}
