import { CreateEventTypeDto } from './create-event_type.dto';
declare const UpdateEventTypeDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateEventTypeDto>>;
export declare class UpdateEventTypeDto extends UpdateEventTypeDto_base {
    name?: string;
    parent_event_type_id?: number;
}
export {};
