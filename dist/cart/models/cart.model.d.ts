import { Model } from "sequelize-typescript";
interface ICartCreationAttr {
    ticketId: number;
    customerId: number;
    fineshedAt: number;
    statusId: number;
}
export declare class Cart extends Model<Cart, ICartCreationAttr> {
    id: number;
    ticketId: number;
    customerId: number;
    fineshedAt: Date;
    statusId: number;
}
export {};
