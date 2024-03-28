import { PartialType } from '@nestjs/mapped-types';
import { CreateVenueTypeDto } from './create-venue_type.dto';

export class UpdateVenueTypeDto extends PartialType(CreateVenueTypeDto) {
  name?: string;
}
