import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
export declare class VenueController {
    private readonly venueService;
    constructor(venueService: VenueService);
    create(createVenueDto: CreateVenueDto): Promise<any[]>;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateVenueDto: UpdateVenueDto): Promise<any>;
    remove(id: string): any;
}
