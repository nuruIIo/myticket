import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    create(createTicketDto: CreateTicketDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateTicketDto: UpdateTicketDto): Promise<any>;
    remove(id: string): any;
}
