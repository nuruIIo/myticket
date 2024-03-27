import { Model } from "sequelize-typescript";
import { Venue } from "../../venue/entities/venue.entity";
interface IVenueTypeInter {
    name: string;
}
export declare class VenueType extends Model<VenueType, IVenueTypeInter> {
    id: number;
    name: string;
    venues: Venue[];
}
export {};
