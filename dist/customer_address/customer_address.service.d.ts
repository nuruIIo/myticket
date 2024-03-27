import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
export declare class CustomerAddressService {
    create(createCustomerAddressDto: CreateCustomerAddressDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCustomerAddressDto: UpdateCustomerAddressDto): string;
    remove(id: number): string;
}
