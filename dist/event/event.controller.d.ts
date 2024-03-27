import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(createEventDto: CreateEventDto): Promise<import("src/event/models/event.model").Event>;
    findAll(): Promise<import("src/event/models/event.model").Event[]>;
    findOne(id: string): Promise<import("src/event/models/event.model").Event>;
    update(id: string, updateEventDto: UpdateEventDto): Promise<import("src/event/models/event.model").Event>;
    remove(id: string): Promise<number>;
}
