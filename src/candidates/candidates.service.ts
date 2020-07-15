import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Candidate } from './candidate.model';

@Injectable()
export class CandidatesService {
  constructor(
    @InjectModel(Candidate) 
    private candidateModel: typeof Candidate,
  ) {}

  findAll(): Promise<Candidate[]> {
    return this.candidateModel.findAll();
  }

  create(name: string, cpf: string): Promise<Candidate> {
    let user = { name, cpf }
    return this.candidateModel.create(user);
  } 
}
