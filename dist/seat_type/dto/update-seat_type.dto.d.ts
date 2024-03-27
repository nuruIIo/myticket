import { CreateSeatTypeDto } from "./create-seat_type.dto";
declare const UpdateSeatTypeDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSeatTypeDto>>;
export declare class UpdateSeatTypeDto extends UpdateSeatTypeDto_base {
    name?: string;
}
export {};
