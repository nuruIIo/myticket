import { PartialType } from "@nestjs/mapped-types";
import { CreateSeatTypeDto } from "./create-seat_type.dto";

export class UpdateSeatTypeDto extends PartialType(CreateSeatTypeDto) {
  name?: string;
}
