import { Module } from "@nestjs/common";
import { VenueService } from "./venue.service";
import { VenueController } from "./venue.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Venue } from "./entities/venue.entity";
import { Venue_Venue_type } from "../venue_type/entities/venue_venue-type.entity";
import { VenueTypeModule } from "../venue_type/venue_type.module";

@Module({
  imports: [SequelizeModule.forFeature([Venue]), VenueTypeModule],
  controllers: [VenueController],
  providers: [VenueService],
})
export class VenueModule {}
