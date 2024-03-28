import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IEventTypeCreationAttr {
  name: string;
  parent_event_type_id: number;
}

@Table({ tableName: "event_type" })
export class EventType extends Model<EventType, IEventTypeCreationAttr> {
  @ApiProperty({ example: 1, description: "Foydalanuvchi unkal ID raqami" })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: "event1", description: "Event nomi" })
  @IsString()
  @IsNotEmpty()
  @Column({
    type: DataType.STRING,
  })
  name: string;
  @ApiProperty({ example: 1, description: "Parent-event type id" })
  @IsNumber()
  parent_event_type_id: number;
}
