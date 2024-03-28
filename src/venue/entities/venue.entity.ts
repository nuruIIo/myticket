import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { VenueType } from "../../venue_type/entities/venue_type.entity";
import { Venue_Venue_type } from "../../venue_type/entities/venue_venue-type.entity";

interface IVenueInter {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  schema: string;
  regionId: number;
  districtId: number;
}
@Table({ tableName: "Venue" })
export class Venue extends Model<Venue, IVenueInter> {
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

  @Column({
    type: DataType.STRING,
  })
  address: string;

  @Column({
    type: DataType.STRING,
  })
  location: string;

  @Column({
    type: DataType.STRING,
  })
  site: string;

  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @Column({
    type: DataType.INTEGER,
  })
  venue_typeId: number;

  @Column({
    type: DataType.STRING,
  })
  schema: string;

  @Column({
    type: DataType.INTEGER,
  })
  regionId: number;

  @Column({
    type: DataType.INTEGER,
  })
  districtId: number;

  @BelongsToMany(() => VenueType, () => Venue_Venue_type)
  venues: Venue[];
}
