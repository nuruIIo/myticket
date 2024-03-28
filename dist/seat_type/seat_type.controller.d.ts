import { SeatTypeService } from './seat_type.service';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
export declare class SeatTypeController {
    private readonly seatTypeService;
    constructor(seatTypeService: SeatTypeService);
    create(createSeatTypeDto: CreateSeatTypeDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateSeatTypeDto: UpdateSeatTypeDto): Promise<any>;
    remove(id: string): any;
}
