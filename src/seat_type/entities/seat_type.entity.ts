import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ISeatTypeInter {
  name: string;
}
@Table({ tableName: "Seat_type" })
export class SeatType extends Model<SeatType, ISeatTypeInter> {
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
}
