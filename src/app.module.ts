import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidatesModule } from './candidates/candidates.module';
import { TestsModule } from './testes/tests.module';
import { CandidatesTestsModule } from './candidates-tests/candidates-tests.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'Sa_teste1234',
      database: 'testNest',
      autoLoadModels: true,
      synchronize: true,
      dialectOptions: {
        trustServerCertificate: true
      },
      define: {
        timestamps: true
      },
    }),
    CandidatesModule,
    TestsModule,
    CandidatesTestsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
