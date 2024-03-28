import { Model } from "sequelize-typescript";
interface IBookingCreationAttr {
    cartId: number;
    createdAt: string;
    fineshed: string;
    paymentMethodId: number;
    deliveryMethodId: number;
    discountCouponId: number;
    statusId: number;
}
export declare class Booking extends Model<Booking, IBookingCreationAttr> {
    id: number;
    cartId: number;
    createdAt: string;
    fineshed: string;
    paymentMethodId: number;
    deliveryMethodId: number;
    discountCouponId: number;
    statusId: number;
}
export {};
