import { Model } from "sequelize-typescript";
import { Venue } from "../../venue/entities/venue.entity";
interface IVenuePHotoInter {
    venueId: number;
    url: string;
}
export declare class VenuePhoto extends Model<VenuePhoto, IVenuePHotoInter> {
    id: number;
    venueId: number;
    url: string;
    venues: Venue;
}
export {};
