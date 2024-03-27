import { Model } from "sequelize-typescript";
interface IVenue_venueTypeInter {
    venueId: number;
    venue_typeId: number;
}
export declare class Venue_Venue_type extends Model<Venue_Venue_type, IVenue_venueTypeInter> {
    venueId: number;
    venue_typeId: number;
}
export {};
