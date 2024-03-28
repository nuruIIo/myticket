import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { Venue } from "./entities/venue.entity";
export declare class VenueService {
    private venueRepo;
    constructor(venueRepo: typeof Venue);
    create(createVenueDto: CreateVenueDto): Promise<any[]>;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateVenueDto: UpdateVenueDto): Promise<any>;
    remove(id: number): any;
}
