import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
import { EventType } from "./models/event_type.model";
export declare class EventTypeService {
    private eventTypeRepo;
    constructor(eventTypeRepo: typeof EventType);
    create(createEventTypeDto: CreateEventTypeDto): Promise<EventType>;
    findAll(): Promise<EventType[]>;
    findOne(id: number): Promise<EventType>;
    update(id: number, updateEventTypeDto: UpdateEventTypeDto): Promise<EventType>;
    remove(id: number): Promise<number>;
}
