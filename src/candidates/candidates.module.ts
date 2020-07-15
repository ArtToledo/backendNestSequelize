import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Candidate } from './candidate.model';

import { CandidatesController } from './candidates.controller';
import { CandidatesService } from './candidates.service';

@Module({
  imports: [SequelizeModule.forFeature([Candidate])],
  controllers: [CandidatesController],
  providers: [CandidatesService],
})
export class CandidatesModule {}
