import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { Venue } from "./entities/venue.entity";
export declare class VenueService {
    private venueRepo;
    constructor(venueRepo: typeof Venue);
    create(createVenueDto: CreateVenueDto): Promise<Venue[]>;
    findAll(): Promise<Venue[]>;
    findOne(id: number): Promise<Venue>;
    update(id: number, updateVenueDto: UpdateVenueDto): Promise<Venue>;
    remove(id: number): Promise<number>;
}
