import { EventTypeService } from './event_type.service';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { EventType } from './models/event_type.model';
export declare class EventTypeController {
    private readonly eventTypeService;
    constructor(eventTypeService: EventTypeService);
    create(createEventTypeDto: CreateEventTypeDto): Promise<EventType>;
    findAll(): Promise<EventType[]>;
    findOne(id: string): Promise<EventType>;
    update(id: string, updateEventTypeDto: UpdateEventTypeDto): Promise<EventType>;
    remove(id: string): Promise<number>;
}
