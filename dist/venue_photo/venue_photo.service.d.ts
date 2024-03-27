import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { VenuePhoto } from "./entities/venue_photo.entity";
export declare class VenuePhotoService {
    private venuePhotoRepo;
    constructor(venuePhotoRepo: typeof VenuePhoto);
    create(createVenuePhotoDto: CreateVenuePhotoDto): Promise<VenuePhoto>;
    findAll(): Promise<VenuePhoto[]>;
    findOne(id: number): Promise<VenuePhoto>;
    update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto): Promise<VenuePhoto>;
    remove(id: number): Promise<number>;
}
