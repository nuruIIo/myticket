import { EventTypeService } from './event_type.service';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
export declare class EventTypeController {
    private readonly eventTypeService;
    constructor(eventTypeService: EventTypeService);
    create(createEventTypeDto: CreateEventTypeDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateEventTypeDto: UpdateEventTypeDto): Promise<any>;
    remove(id: string): any;
}
