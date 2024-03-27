import { Model } from "sequelize-typescript";
interface IHumanCategoryINter {
    name: string;
    startAge: number;
    finishAge: number;
    gender: string;
}
export declare class HumanCategory extends Model<HumanCategory, IHumanCategoryINter> {
    id: number;
    name: string;
    finishAge: number;
    startAge: number;
    gender: string;
}
export {};
