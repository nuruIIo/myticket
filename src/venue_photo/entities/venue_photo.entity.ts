import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/entities/venue.entity";

interface IVenuePHotoInter {
  venueId: number;
  url: string;
}
@Table({ tableName: "Venue_Photo" })
export class VenuePhoto extends Model<VenuePhoto, IVenuePHotoInter> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;

  @Column({
    type: DataType.STRING,
  })
  url: string;

  @BelongsTo(() => Venue)
  venues: Venue;
}
