import { Test, TestingModule } from '@nestjs/testing';
import { CustomerAddressService } from './customer_address.service';

describe('CustomerAddressService', () => {
  let service: CustomerAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerAddressService],
    }).compile();

    service = module.get<CustomerAddressService>(CustomerAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
