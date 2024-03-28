import { IsNumber, IsString, IsNotEmpty, IsDate } from "class-validator";

export class CreateBookingDto {
  @IsNotEmpty()
  @IsNumber()
  cartId: number;

  @IsNotEmpty()
  @IsDate()
  createdAt: string;

  @IsNotEmpty()
  @IsDate()
  finished: string;

  @IsNotEmpty()
  @IsNumber()
  paymentMethodId: number;

  @IsNotEmpty()
  @IsNumber()
  deliveryMethodId: number;

  @IsNotEmpty()
  @IsNumber()
  discountCouponId: number;

  @IsNotEmpty()
  @IsNumber()
  statusId: number;
}
