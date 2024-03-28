import { IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  start_date: string;
  @IsString()
  @IsNotEmpty()
  start_time: string;
  @IsString()
  @IsNotEmpty()
  finish_date: string;
  @IsString()
  @IsNotEmpty()
  finish_time: string;
  @IsString()
  info: string;
  event_type_id: number;
  human_category_id: number;
  venue_id: number;
  lang_id: number;
  @IsString()
  @IsNotEmpty()
  release_date: string;
}
