import { CustomerCardService } from './customer_card.service';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
export declare class CustomerCardController {
    private readonly customerCardService;
    constructor(customerCardService: CustomerCardService);
    create(createCustomerCardDto: CreateCustomerCardDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCustomerCardDto: UpdateCustomerCardDto): string;
    remove(id: string): string;
}
