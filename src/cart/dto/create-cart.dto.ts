import { IsNotEmpty, IsNumber, IsDate } from "class-validator";

export class CreateCartDto {
  @IsNotEmpty()
  @IsNumber()
  ticketId: number;

  @IsNotEmpty()
  @IsNumber()
  customerId: number;

  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @IsNotEmpty()
  @IsDate()
  finishedAt: Date;

  @IsNotEmpty()
  @IsNumber()
  statusId: number;
}
