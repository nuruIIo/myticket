import { Model } from "sequelize-typescript";
interface ITicketCreationAttr {
    event_id: number;
    seat_id: number;
    price: number;
    service_fee: string;
    status_id: number;
    ticket_type: string;
}
export declare class Ticket extends Model<Ticket, ITicketCreationAttr> {
    event_id: number;
    seat_id: number;
    price: number;
    service_fee: string;
    status_id: number;
    ticket_type: string;
}
export {};
