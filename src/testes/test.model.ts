import { Column, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { Candidate } from '../candidates/candidate.model'; 
import { Candidates_tests } from '../candidates-tests/candidates_testes.model';

@Table
export class Test extends Model<Test> {
  @Column
  name: string;
  
  @BelongsToMany(() => Candidate, () => Candidates_tests)
  candidates: Candidate[];
}