import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    create(createCustomerDto: CreateCustomerDto): Promise<import("src/customer/models/customer.models").Customer>;
    findAll(): Promise<import("src/customer/models/customer.models").Customer[]>;
    findOne(id: string): Promise<import("src/customer/models/customer.models").Customer>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<import("src/customer/models/customer.models").Customer>;
    remove(id: string): Promise<number>;
}
