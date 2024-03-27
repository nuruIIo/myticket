import { Model } from "sequelize-typescript";
interface IEventTypeCreationAttr {
    name: string;
    parent_event_type_id: number;
}
export declare class EventType extends Model<EventType, IEventTypeCreationAttr> {
    id: number;
    name: string;
    parent_event_type_id: number;
}
export {};
