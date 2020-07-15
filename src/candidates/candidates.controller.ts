import { Controller, Get, Post, Body } from '@nestjs/common';

import { CandidatesService } from './candidates.service';

@Controller('candidates')
export class CandidatesController {

  constructor(private candidatesService: CandidatesService) {}

  @Get()
  index() {
    return this.candidatesService.findAll();
  }

  @Post()
  async store(@Body() body) {
    return this.candidatesService.create(body.name, body.cpf);
  }
}
