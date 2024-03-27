import { VenueTypeService } from './venue_type.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
export declare class VenueTypeController {
    private readonly venueTypeService;
    constructor(venueTypeService: VenueTypeService);
    create(createVenueTypeDto: CreateVenueTypeDto): Promise<import("src/venue_type/entities/venue_type.entity").VenueType>;
    findAll(): Promise<import("src/venue_type/entities/venue_type.entity").VenueType[]>;
    findOne(id: string): Promise<import("src/venue_type/entities/venue_type.entity").VenueType>;
    update(id: string, updateVenueTypeDto: UpdateVenueTypeDto): Promise<import("src/venue_type/entities/venue_type.entity").VenueType>;
    remove(id: string): Promise<number>;
}
