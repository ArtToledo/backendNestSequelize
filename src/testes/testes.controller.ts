import { Controller, Get, Post, Query, Body } from '@nestjs/common';

import { TestesService } from './testes.service';

@Controller('testes')
export class TestesController {
  constructor(private testesService: TestesService) {}

  @Get()
  index(@Query() query) {
    return this.testesService.findTestfromCandidate(query.id);
  }

  @Post()
  store(@Query() query, @Body() body) {
    return this.testesService.create(query.id, body.nameTest);
  }
}
