import { Test, TestingModule } from '@nestjs/testing';
import { CustomerAddressController } from './customer_address.controller';
import { CustomerAddressService } from './customer_address.service';

describe('CustomerAddressController', () => {
  let controller: CustomerAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerAddressController],
      providers: [CustomerAddressService],
    }).compile();

    controller = module.get<CustomerAddressController>(CustomerAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
