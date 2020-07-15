import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { Candidate } from '../candidates/candidate.model';
import { Test } from '../testes/test.model';

@Table
export class Candidates_tests extends Model<Candidates_tests> {
  @Column
  hits: number;

  @ForeignKey(() => Candidate)
  @Column
  candidate_id: number;

  @ForeignKey(() => Test)
  @Column
  test_id: number;
}