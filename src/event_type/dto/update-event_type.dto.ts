import { PartialType } from '@nestjs/mapped-types';
import { CreateEventTypeDto } from './create-event_type.dto';

export class UpdateEventTypeDto extends PartialType(CreateEventTypeDto) {
  name?: string;
  parent_event_type_id?: number;
}
