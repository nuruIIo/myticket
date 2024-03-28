import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(createEventDto: CreateEventDto, photo: any): Promise<any>;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateEventDto: UpdateEventDto): Promise<any>;
    remove(id: string): any;
}
