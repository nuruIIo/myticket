import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICartCreationAttr {
  ticketId: number;
  customerId: number;
  fineshedAt: number;
  statusId: number;
}

@Table({ tableName: "cart", updatedAt: false })
export class Cart extends Model<Cart, ICartCreationAttr> {
  @ApiProperty({ example: 1, description: "Foydalanuvchi unkal ID raqami" })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: "Tiket ID raqami" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ticketId: number;

  @ApiProperty({ example: 1, description: "Foydalanuvchi ID raqami" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customerId: number;

  @ApiProperty({ example: 1648146000000, description: "Cart yaratilgan vaqt" })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  fineshedAt: Date;

  @ApiProperty({ example: 1, description: "Status ID raqami" })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  statusId: number;
}
