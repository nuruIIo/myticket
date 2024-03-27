import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { SeatType } from "./entities/seat_type.entity";
export declare class SeatTypeService {
    private seatTypeRepo;
    constructor(seatTypeRepo: typeof SeatType);
    create(createSeatTypeDto: CreateSeatTypeDto): Promise<SeatType>;
    findAll(): Promise<SeatType[]>;
    findOne(id: number): Promise<SeatType>;
    update(id: number, updateSeatTypeDto: UpdateSeatTypeDto): Promise<SeatType>;
    remove(id: number): Promise<number>;
}
