import { PartialType } from '@nestjs/swagger';
import { CreateTicketDto } from './create-ticket.dto';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
    event_id?: number;
    seat_id?: number;
    price?: number;
    service_fee?: string;
    status_id?: number;
    ticket_type?: string;
}
