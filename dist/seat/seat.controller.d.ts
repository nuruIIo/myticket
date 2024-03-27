import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
export declare class SeatController {
    private readonly seatService;
    constructor(seatService: SeatService);
    create(createSeatDto: CreateSeatDto): Promise<import("src/seat/entities/seat.entity").Seat>;
    findAll(): Promise<import("src/seat/entities/seat.entity").Seat[]>;
    findOne(id: string): Promise<import("src/seat/entities/seat.entity").Seat>;
    update(id: string, updateSeatDto: UpdateSeatDto): Promise<import("src/seat/entities/seat.entity").Seat>;
    remove(id: string): Promise<number>;
}
