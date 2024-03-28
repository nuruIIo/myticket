import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Venue } from "../../venue/entities/venue.entity";
import { SeatType } from "../../seat_type/entities/seat_type.entity";

interface ISEatINter {
  sector: number;
  row_number: number;
  venueId: number;
  number: number;
  seat_typeId: number;
  location_in_schema: string;
}
@Table({ tableName: "Seat" })
export class Seat extends Model<Seat, ISEatINter> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
  })
  sector: number;

  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
  })
  venueId: number;

  @Column({
    type: DataType.INTEGER,
  })
  number: number;

  @ForeignKey(() => SeatType)
  @Column({
    type: DataType.INTEGER,
  })
  seat_typeId: number;

  @Column({
    type: DataType.STRING,
  })
  location_in_schema: string;

  @BelongsTo(() => Venue)
  venues: Venue;

  @BelongsTo(() => SeatType)
  seat_types: SeatType;
}
