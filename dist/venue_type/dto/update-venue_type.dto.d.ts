import { CreateVenueTypeDto } from './create-venue_type.dto';
declare const UpdateVenueTypeDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateVenueTypeDto>>;
export declare class UpdateVenueTypeDto extends UpdateVenueTypeDto_base {
    name?: string;
}
export {};
