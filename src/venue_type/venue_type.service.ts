import { Injectable } from "@nestjs/common";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenueType } from "./entities/venue_type.entity";

@Injectable()
export class VenueTypeService {
  constructor(
    @InjectModel(VenueType) private venueTypeRepo: typeof VenueType
  ) {}
  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeRepo.create(createVenueTypeDto);
  }

  findAll() {
    return this.venueTypeRepo.findAll();
  }

  findOne(id: number) {
    return this.venueTypeRepo.findByPk(id);
  }

  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    const updated = await this.venueTypeRepo.update(updateVenueTypeDto, {
      where: { id },
      returning: true,
    });
    return updated[1][0];
  }

  remove(id: number) {
    return this.venueTypeRepo.destroy({where: {id  }});
  }
}
