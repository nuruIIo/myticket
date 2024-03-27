import { Model } from "sequelize-typescript";
import { Venue } from "../../venue/entities/venue.entity";
import { SeatType } from "../../seat_type/entities/seat_type.entity";
interface ISEatINter {
    sector: number;
    row_number: number;
    venueId: number;
    number: number;
    seat_typeId: number;
    location_in_schema: string;
}
export declare class Seat extends Model<Seat, ISEatINter> {
    id: number;
    sector: number;
    venueId: number;
    number: number;
    seat_typeId: number;
    location_in_schema: string;
    venues: Venue;
    seat_types: SeatType;
}
export {};
