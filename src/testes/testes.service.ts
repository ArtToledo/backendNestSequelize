import { Injectable, NotFoundException, NotAcceptableException, Options } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Test } from './test.model';
import { Candidate } from '../candidates/candidate.model';
import { where } from 'sequelize';

@Injectable()
export class TestesService {
  constructor(
    @InjectModel(Test)
    private testModel: typeof Test,
    @InjectModel(Candidate)
    private candidateModel: typeof Candidate,
  ) {}

  async findTestfromCandidate(idCandidate: number): Promise<Candidate> {
    const candidate = await this.candidateModel.findByPk(idCandidate, {
      include: [{ association: 'tests' }]
    })

    return candidate;
  }

  async create(idCandidate: number, nameTest: string) {
    const candidate = await this.candidateModel.findByPk(idCandidate);

    if (!candidate)
      throw new NotFoundException('Candidate not found!');

    const [test] = await this.testModel.findOrCreate({
      where: { name: nameTest },
    });

    const existOneTest = await candidate.$get('tests', {
        where: { name: nameTest }
    });

    if (existOneTest.length !== 0)
      throw new NotAcceptableException('Candidate already did the test!');
    
    const userfromtests = await candidate.$add('test', test, { through: { hits: 20 } });
    
    return userfromtests;
  }
}
