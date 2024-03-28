import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Venue } from "../../venue/entities/venue.entity";
import { Venue_Venue_type } from "./venue_venue-type.entity";

interface IVenueTypeInter {
  name: string;
}
@Table({ tableName: "Venue_Type" })
export class VenueType extends Model<VenueType, IVenueTypeInter> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @BelongsToMany(() => Venue, () => Venue_Venue_type)
  venues: Venue[];
}
