import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
import { EventType } from "./models/event_type.model";
export declare class EventTypeService {
    private eventTypeRepo;
    constructor(eventTypeRepo: typeof EventType);
    create(createEventTypeDto: CreateEventTypeDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateEventTypeDto: UpdateEventTypeDto): Promise<any>;
    remove(id: number): any;
}
