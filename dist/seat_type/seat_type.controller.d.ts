import { SeatTypeService } from './seat_type.service';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
export declare class SeatTypeController {
    private readonly seatTypeService;
    constructor(seatTypeService: SeatTypeService);
    create(createSeatTypeDto: CreateSeatTypeDto): Promise<import("src/seat_type/entities/seat_type.entity").SeatType>;
    findAll(): Promise<import("src/seat_type/entities/seat_type.entity").SeatType[]>;
    findOne(id: string): Promise<import("src/seat_type/entities/seat_type.entity").SeatType>;
    update(id: string, updateSeatTypeDto: UpdateSeatTypeDto): Promise<import("src/seat_type/entities/seat_type.entity").SeatType>;
    remove(id: string): Promise<number>;
}
