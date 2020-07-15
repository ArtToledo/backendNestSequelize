import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Candidates_tests } from './candidates_testes.model';

@Module({
  imports: [SequelizeModule.forFeature([Candidates_tests])],
})
export class CandidatesTestsModule {}
