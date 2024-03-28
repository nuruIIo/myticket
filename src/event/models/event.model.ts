import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface IEventCreationAttr {
  name: string;
  photo: string;
  start_date: string;
  start_time: string;
  finish_date: string;
  finish_time: string;
  info: string;
  event_type_id: number;
  human_category_id: number;
  venue_id: number;
  lang_id: number;
  release_date: string;
}

@Table({ tableName: "event" })
export class Event extends Model<Event, IEventCreationAttr> {
  @ApiProperty({ example: 1, description: "Event ID raqami" })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Event nomi", description: "Event nomi" })
  @Column({
    type: DataType.STRING,
  })
  name: string;
  
  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @ApiProperty({ example: "2024-03-23", description: "Boshlanish sanasi" })
  @Column({
    type: DataType.STRING,
  })
  start_date: string;

  @ApiProperty({ example: "12:00", description: "Boshlanish vaqti" })
  @Column({
    type: DataType.STRING,
  })
  start_time: string;

  @ApiProperty({ example: "2024-03-24", description: "Tugash sanasi" })
  @Column({
    type: DataType.STRING,
  })
  finish_date: string;

  @ApiProperty({ example: "18:00", description: "Tugash vaqti" })
  @Column({
    type: DataType.STRING,
  })
  finish_time: string;

  @ApiProperty({ example: "Ma'lumotlar", description: "Tafsilotlar" })
  @Column({
    type: DataType.STRING,
  })
  info: string;

  @ApiProperty({ example: 1, description: "Event turi ID raqami" })
  @Column({
    type: DataType.INTEGER,
  })
  event_type_id: number;

  @ApiProperty({ example: 1, description: "Insonlar kategoriyasi ID raqami" })
  @Column({
    type: DataType.INTEGER,
  })
  human_category_id: number;

  @ApiProperty({ example: 1, description: "Maqom ID raqami" })
  @Column({
    type: DataType.INTEGER,
  })
  venue_id: number;

  @ApiProperty({ example: 1, description: "Til ID raqami" })
  @Column({
    type: DataType.INTEGER,
  })
  lang_id: number;

  @ApiProperty({ example: "2024-03-22", description: "E'lon qilingan sana" })
  @Column({
    type: DataType.STRING,
  })
  release_date: string;
}
