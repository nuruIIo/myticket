import { Model } from "sequelize-typescript";
interface ICustomerCreationAttr {
    first_name: string;
    last_name: string;
    phone: string;
    hashed_password: string;
    email: string;
    birth_date: string;
    gender: string;
    lang_id: string;
    hashed_refresh_token: string;
}
export declare class Customer extends Model<Customer, ICustomerCreationAttr> {
    first_name: string;
    last_name: string;
    phone: string;
    hashed_password: string;
    email: string;
    birth_date: string;
    gender: string;
    lang_id: string;
    hashed_refresh_token: string;
}
export {};
