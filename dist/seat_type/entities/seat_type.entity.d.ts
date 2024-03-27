import { Model } from "sequelize-typescript";
interface ISeatTypeInter {
    name: string;
}
export declare class SeatType extends Model<SeatType, ISeatTypeInter> {
    id: number;
    name: string;
}
export {};
