import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { Event } from "./models/event.model";
import { FileService } from "../file/file.service";
export declare class EventService {
    private eventRepo;
    private readonly fileService;
    constructor(eventRepo: typeof Event, fileService: FileService);
    create(createEventDto: CreateEventDto, photo: any): Promise<any>;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateEventDto: UpdateEventDto): Promise<any>;
    remove(id: number): any;
}
