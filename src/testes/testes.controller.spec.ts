import { Test, TestingModule } from '@nestjs/testing';
import { TestesController } from './testes.controller';

describe('Testes Controller', () => {
  let controller: TestesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestesController],
    }).compile();

    controller = module.get<TestesController>(TestesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
