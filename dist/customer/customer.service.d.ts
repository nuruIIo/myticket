import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { Customer } from "./models/customer.models";
export declare class CustomerService {
    private customerRepo;
    constructor(customerRepo: typeof Customer);
    create(createCustomerDto: CreateCustomerDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<any>;
    remove(id: number): any;
}
