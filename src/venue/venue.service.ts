import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Venue } from "./entities/venue.entity";

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venueRepo: typeof Venue) {}
  async create(createVenueDto: CreateVenueDto) {
    const newVenue = await this.venueRepo.create(createVenueDto);
    
    await newVenue.$set("venues", [createVenueDto.venue_typeId]);
    await newVenue.save();
    // newVenue.venues = [newVenue];

    return (newVenue.venues = [newVenue]);
  }

  findAll() {
    return this.venueRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.venueRepo.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {
    const updated = await this.venueRepo.update(updateVenueDto, {
      where: { id },
      returning: true,
    });
    return updated[1][0];
  }

  remove(id: number) {
    return this.venueRepo.destroy({ where: { id } });
  }
}
