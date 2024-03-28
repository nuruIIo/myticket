import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Customer } from "./models/customer.models";

@Injectable()
export class CustomerService {
  constructor(@InjectModel(Customer) private customerRepo: typeof Customer) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.customerRepo.create(createCustomerDto);
  }

  findAll() {
    return this.customerRepo.findAll();
  }

  findOne(id: number) {
    return this.customerRepo.findByPk(id);
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const update = await this.customerRepo.update(updateCustomerDto, {
      where: { id },
      returning: true,
    });
    return update[1][0];
  }

  remove(id: number) {
    return this.customerRepo.destroy({ where: { id } });
  }
}
