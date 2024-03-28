import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { Ticket } from "./models/ticket.entity";
export declare class TicketService {
    private ticketRepo;
    constructor(ticketRepo: typeof Ticket);
    create(createTicketDto: CreateTicketDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateTicketDto: UpdateTicketDto): Promise<any>;
    remove(id: number): any;
}
