import { Column, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { Test } from '../testes/test.model';
import { Candidates_tests } from '../candidates-tests/candidates_testes.model';

@Table
export class Candidate extends Model<Candidate> {
  @Column
  name: string;

  @Column
  cpf: string;

  @BelongsToMany(() => Test, () => Candidates_tests)
  tests: Test[];
}