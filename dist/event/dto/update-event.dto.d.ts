import { CreateEventDto } from './create-event.dto';
declare const UpdateEventDto_base: import("@nestjs/common").Type<Partial<CreateEventDto>>;
export declare class UpdateEventDto extends UpdateEventDto_base {
    name?: string;
    photo?: string;
    start_date?: string;
    start_time?: string;
    finish_date?: string;
    finish_time?: string;
    info?: string;
    event_type_id?: number;
    human_category_id?: number;
    venue_id?: number;
    lang_id?: number;
    release_date?: string;
}
export {};
