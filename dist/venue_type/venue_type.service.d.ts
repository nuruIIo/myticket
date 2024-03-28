import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { VenueType } from "./entities/venue_type.entity";
export declare class VenueTypeService {
    private venueTypeRepo;
    constructor(venueTypeRepo: typeof VenueType);
    create(createVenueTypeDto: CreateVenueTypeDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateVenueTypeDto: UpdateVenueTypeDto): Promise<any>;
    remove(id: number): any;
}
