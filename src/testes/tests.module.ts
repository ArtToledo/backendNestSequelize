import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Test } from './test.model';
import { Candidate } from '../candidates/candidate.model';

import { TestesController } from './testes.controller';
import { TestesService } from './testes.service';

@Module({
  imports: [SequelizeModule.forFeature([Test , Candidate])],
  controllers: [TestesController],
  providers: [TestesService]
})
export class TestsModule {}
