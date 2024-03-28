import { Test, TestingModule } from '@nestjs/testing';
import { CustomerCardController } from './customer_card.controller';
import { CustomerCardService } from './customer_card.service';

describe('CustomerCardController', () => {
  let controller: CustomerCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerCardController],
      providers: [CustomerCardService],
    }).compile();

    controller = module.get<CustomerCardController>(CustomerCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
