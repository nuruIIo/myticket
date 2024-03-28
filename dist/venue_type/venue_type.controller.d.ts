import { VenueTypeService } from './venue_type.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
export declare class VenueTypeController {
    private readonly venueTypeService;
    constructor(venueTypeService: VenueTypeService);
    create(createVenueTypeDto: CreateVenueTypeDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateVenueTypeDto: UpdateVenueTypeDto): Promise<any>;
    remove(id: string): any;
}
