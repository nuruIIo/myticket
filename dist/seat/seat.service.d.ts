import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { Seat } from "./entities/seat.entity";
export declare class SeatService {
    private seatRepo;
    constructor(seatRepo: typeof Seat);
    create(createSeatDto: CreateSeatDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateSeatDto: UpdateSeatDto): Promise<any>;
    remove(id: number): any;
}
