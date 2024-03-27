import { CustomerAddressService } from './customer_address.service';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
export declare class CustomerAddressController {
    private readonly customerAddressService;
    constructor(customerAddressService: CustomerAddressService);
    create(createCustomerAddressDto: CreateCustomerAddressDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCustomerAddressDto: UpdateCustomerAddressDto): string;
    remove(id: string): string;
}
