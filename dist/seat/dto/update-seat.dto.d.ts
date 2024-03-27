import { CreateSeatDto } from './create-seat.dto';
declare const UpdateSeatDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSeatDto>>;
export declare class UpdateSeatDto extends UpdateSeatDto_base {
    sector?: number;
    row_number?: number;
    venueId?: number;
    number?: number;
    seat_typeId?: number;
    location_in_schema?: string;
}
export {};
