import { Injectable } from "@nestjs/common";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenuePhoto } from "./entities/venue_photo.entity";
import { FileService } from "../file/file.service";

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto) private venuePhotoRepo: typeof VenuePhoto,
    private readonly fileService: FileService
  ) {}

  // Create a new venue photo
  async create(createVenuePhotoDto: CreateVenuePhotoDto, url: any) {
    // Save the file using the file service
    const fileName = await this.fileService.saveFile(url);

    // Create a new venue photo record in the database
    const venuePhoto = await this.venuePhotoRepo.create({
      ...createVenuePhotoDto,
      url: fileName, // Set the file name as the URL for the venue photo
    });

    return venuePhoto; // Return the newly created venue photo
  }

  // Retrieve all venue photos
  findAll() {
    // Retrieve all venue photos from the database, including associated entities
    return this.venuePhotoRepo.findAll({ include: { all: true } });
  }

  // Retrieve a single venue photo by ID
  findOne(id: number) {
    // Find a venue photo by its primary key (ID), including associated entities
    return this.venuePhotoRepo.findByPk(id, { include: { all: true } });
  }

  // Update a venue photo by ID
  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    // Update the venue photo record in the database
    const [updatedCount, [updatedVenuePhoto]] = await this.venuePhotoRepo.update(updateVenuePhotoDto, {
      where: { id }, // Specify the venue photo ID to update
      returning: true, // Return the updated record(s)
    });

    return updatedVenuePhoto; // Return the updated venue photo
  }

  // Remove a venue photo by ID
  async remove(id: number) {
    // Delete the venue photo record from the database
    const deletedCount = await this.venuePhotoRepo.destroy({ where: { id } });

    return { deletedCount }; // Return the count of deleted records
  }
}
