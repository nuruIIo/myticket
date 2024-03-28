import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
export declare class SeatController {
    private readonly seatService;
    constructor(seatService: SeatService);
    create(createSeatDto: CreateSeatDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateSeatDto: UpdateSeatDto): Promise<any>;
    remove(id: string): any;
}
