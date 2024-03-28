import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IBookingCreationAttr {
  cartId: number;
  createdAt: string;
  fineshed: string;
  paymentMethodId: number;
  deliveryMethodId: number;
  discountCouponId: number;
  statusId: number;
}

@Table({ tableName: "booking", createdAt: false, updatedAt: false })
export class Booking extends Model<Booking, IBookingCreationAttr> {
  @ApiProperty({ example: 1, description: "Foydalanuvchi unkal ID raqami" })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 1, description: "Card unkal ID raqami" })
  @Column({
    type: DataType.INTEGER,
  })
  cartId: number;
  @ApiProperty({ example: "1999-12-12", description: "Yaratilgan sanasi" })
  @Column({
    type: DataType.DATE,
  })
  createdAt: string;
  @ApiProperty({ example: "1999-12-12", description: "Tugash sanasi" })
  @Column({
    type: DataType.DATE,
  })
  fineshed: string;
  @ApiProperty({ example: 1, description: "PaymentMethod unkal ID raqami" })
  @Column({
    type: DataType.INTEGER,
  })
  paymentMethodId: number;
  @ApiProperty({ example: 1, description: "DeliveryMethod unkal ID raqami" })
  @Column({
    type: DataType.INTEGER,
  })
  deliveryMethodId: number;
  @ApiProperty({ example: 1, description: "DeliveryMethod unkal ID raqami" })
  @Column({
    type: DataType.INTEGER,
  })
  discountCouponId: number;
  @ApiProperty({ example: 1, description: "Status unkal ID raqami" })
  @Column({
    type: DataType.INTEGER,
  })
  statusId: number;
}
