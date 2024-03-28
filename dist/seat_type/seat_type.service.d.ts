import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { SeatType } from "./entities/seat_type.entity";
export declare class SeatTypeService {
    private seatTypeRepo;
    constructor(seatTypeRepo: typeof SeatType);
    create(createSeatTypeDto: CreateSeatTypeDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateSeatTypeDto: UpdateSeatTypeDto): Promise<any>;
    remove(id: number): any;
}
