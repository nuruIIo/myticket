import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsNotEmpty } from "class-validator";

interface ITicketCreationAttr {
  event_id: number;
  seat_id: number;
  price: number;
  service_fee: string;
  status_id: number;
  ticket_type: string;
}

@Table({ tableName: "ticket" })
export class Ticket extends Model<Ticket, ITicketCreationAttr> {
  @ApiProperty({ example: 1, description: "Event ID raqami" })
  @IsNumber()
  @Column({
    type: DataType.INTEGER,
  })
  event_id: number;

  @ApiProperty({ example: 1, description: "Seat ID raqami" })
  @IsNumber()
  @Column({
    type: DataType.INTEGER,
  })
  seat_id: number;

  @ApiProperty({ example: 50.5, description: "Bilet narxi" })
  @IsNumber()
  @Column({
    type: DataType.FLOAT,
  })
  price: number;

  @ApiProperty({ example: "5", description: "Xizmat uchun to'lov" })
  @IsString()
  @IsNotEmpty()
  @Column({
    type: DataType.STRING,
  })
  service_fee: string;

  @ApiProperty({ example: 1, description: "Holat ID raqami" })
  @IsNumber()
  @Column({
    type: DataType.INTEGER,
  })
  status_id: number;

  @ApiProperty({ example: "VIP", description: "Bilet turi" })
  @IsString()
  @IsNotEmpty()
  @Column({
    type: DataType.STRING,
  })
  ticket_type: string;
}
