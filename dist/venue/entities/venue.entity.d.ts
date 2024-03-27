import { Model } from "sequelize-typescript";
interface IVenueInter {
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    schema: string;
    regionId: number;
    districtId: number;
}
export declare class Venue extends Model<Venue, IVenueInter> {
    id: number;
    name: string;
    address: string;
    location: string;
    site: string;
    phone: string;
    venue_typeId: number;
    schema: string;
    regionId: number;
    districtId: number;
    venues: Venue[];
}
export {};
