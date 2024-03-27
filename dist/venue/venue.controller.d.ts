import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
export declare class VenueController {
    private readonly venueService;
    constructor(venueService: VenueService);
    create(createVenueDto: CreateVenueDto): Promise<import("src/venue/entities/venue.entity").Venue[]>;
    findAll(): Promise<import("src/venue/entities/venue.entity").Venue[]>;
    findOne(id: string): Promise<import("src/venue/entities/venue.entity").Venue>;
    update(id: string, updateVenueDto: UpdateVenueDto): Promise<import("src/venue/entities/venue.entity").Venue>;
    remove(id: string): Promise<number>;
}
