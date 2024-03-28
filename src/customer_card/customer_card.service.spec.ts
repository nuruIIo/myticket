import { Test, TestingModule } from '@nestjs/testing';
import { CustomerCardService } from './customer_card.service';

describe('CustomerCardService', () => {
  let service: CustomerCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerCardService],
    }).compile();

    service = module.get<CustomerCardService>(CustomerCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
