import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    create(createTicketDto: CreateTicketDto): Promise<import("src/ticket/models/ticket.entity").Ticket>;
    findAll(): Promise<import("src/ticket/models/ticket.entity").Ticket[]>;
    findOne(id: string): Promise<import("src/ticket/models/ticket.entity").Ticket>;
    update(id: string, updateTicketDto: UpdateTicketDto): Promise<import("src/ticket/models/ticket.entity").Ticket>;
    remove(id: string): Promise<number>;
}
