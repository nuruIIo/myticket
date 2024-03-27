import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
export declare class CustomerCardService {
    create(createCustomerCardDto: CreateCustomerCardDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCustomerCardDto: UpdateCustomerCardDto): string;
    remove(id: number): string;
}
