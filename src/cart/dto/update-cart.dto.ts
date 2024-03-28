import { PartialType } from '@nestjs/swagger';
import { CreateCartDto } from './create-cart.dto';
import { IsNotEmpty, IsNumber, IsDate } from "class-validator";

export class UpdateCartDto extends PartialType(CreateCartDto) {
  @IsNotEmpty()
  @IsNumber()
  ticketId?: number;

  @IsNotEmpty()
  @IsNumber()
  customerId?: number;

  @IsNotEmpty()
  @IsDate()
  createdAt?: Date;

  @IsNotEmpty()
  @IsDate()
  finishedAt?: Date;

  @IsNotEmpty()
  @IsNumber()
  statusId?: number;
}
