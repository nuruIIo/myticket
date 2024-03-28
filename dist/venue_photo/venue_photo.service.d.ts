import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { VenuePhoto } from "./entities/venue_photo.entity";
import { FileService } from "../file/file.service";
export declare class VenuePhotoService {
    private venuePhotoRepo;
    private readonly fileService;
    constructor(venuePhotoRepo: typeof VenuePhoto, fileService: FileService);
    create(createVenuePhotoDto: CreateVenuePhotoDto, url: any): Promise<any>;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto): Promise<any>;
    remove(id: number): any;
}
