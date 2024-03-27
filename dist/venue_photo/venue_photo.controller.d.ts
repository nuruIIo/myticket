import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
export declare class VenuePhotoController {
    private readonly venuePhotoService;
    constructor(venuePhotoService: VenuePhotoService);
    create(createVenuePhotoDto: CreateVenuePhotoDto): Promise<import("src/venue_photo/entities/venue_photo.entity").VenuePhoto>;
    findAll(): Promise<import("src/venue_photo/entities/venue_photo.entity").VenuePhoto[]>;
    findOne(id: string): Promise<import("src/venue_photo/entities/venue_photo.entity").VenuePhoto>;
    update(id: string, updateVenuePhotoDto: UpdateVenuePhotoDto): Promise<import("src/venue_photo/entities/venue_photo.entity").VenuePhoto>;
    remove(id: string): Promise<number>;
}
