import { Model } from "sequelize-typescript";
interface IAdminCreationAttr {
    name: string;
    login: string;
    hashed_password: string;
    is_active: boolean;
    is_creator: boolean;
    hashed_refresh_token: string;
}
export declare class Admin extends Model<Admin, IAdminCreationAttr> {
    id: number;
    name: string;
    login: string;
    hashed_password: string;
    is_active: boolean;
    is_creator: boolean;
    hashed_refresh_token: string;
}
export {};
