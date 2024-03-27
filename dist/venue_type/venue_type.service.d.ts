import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { VenueType } from "./entities/venue_type.entity";
export declare class VenueTypeService {
    private venueTypeRepo;
    constructor(venueTypeRepo: typeof VenueType);
    create(createVenueTypeDto: CreateVenueTypeDto): Promise<VenueType>;
    findAll(): Promise<VenueType[]>;
    findOne(id: number): Promise<VenueType>;
    update(id: number, updateVenueTypeDto: UpdateVenueTypeDto): Promise<VenueType>;
    remove(id: number): Promise<number>;
}
