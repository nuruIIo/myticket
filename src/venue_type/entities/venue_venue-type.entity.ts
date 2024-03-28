import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/entities/venue.entity";
import { VenueType } from "./venue_type.entity";

interface IVenue_venueTypeInter {
  venueId: number;
  venue_typeId: number;
}

@Table({ tableName: "venue_VenueType", createdAt: false, updatedAt: false })
export class Venue_Venue_type extends Model<Venue_Venue_type, IVenue_venueTypeInter> {
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;

  @ForeignKey(() => VenueType)
  @Column({
    type: DataType.INTEGER,
  })
  venue_typeId: number;
}
