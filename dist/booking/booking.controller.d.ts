import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    create(createBookingDto: CreateBookingDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateBookingDto: UpdateBookingDto): Promise<any>;
    remove(id: string): any;
}
