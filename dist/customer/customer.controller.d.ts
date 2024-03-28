import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    create(createCustomerDto: CreateCustomerDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<any>;
    remove(id: string): any;
}
