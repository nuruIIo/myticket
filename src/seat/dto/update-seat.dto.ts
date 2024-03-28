import { PartialType } from '@nestjs/mapped-types';
import { CreateSeatDto } from './create-seat.dto';

export class UpdateSeatDto extends PartialType(CreateSeatDto) {
  sector?: number;
  row_number?: number;
  venueId?: number;
  number?: number;
  seat_typeId?: number;
  location_in_schema?: string;
}
