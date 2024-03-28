import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
export declare class VenuePhotoController {
    private readonly venuePhotoService;
    constructor(venuePhotoService: VenuePhotoService);
    create(createVenuePhotoDto: CreateVenuePhotoDto, url: any): Promise<any>;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateVenuePhotoDto: UpdateVenuePhotoDto): Promise<any>;
    remove(id: string): any;
}
