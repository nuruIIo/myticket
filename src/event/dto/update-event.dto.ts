import { PartialType } from '@nestjs/swagger';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(CreateEventDto) {
  name?: string;
  start_date?: string;
  start_time?: string;
  finish_date?: string;
  finish_time?: string;
  info?: string;
  event_type_id?: number;
  human_category_id?: number;
  venue_id?: number;
  lang_id?: number;
  release_date?: string;
}
