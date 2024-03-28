import { Injectable } from '@nestjs/common';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';

@Injectable()
export class CustomerCardService {
  create(createCustomerCardDto: CreateCustomerCardDto) {
    return 'This action adds a new customerCard';
  }

  findAll() {
    return `This action returns all customerCard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerCard`;
  }

  update(id: number, updateCustomerCardDto: UpdateCustomerCardDto) {
    return `This action updates a #${id} customerCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerCard`;
  }
}
