import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { Booking } from "./models/booking.model";
export declare class BookingService {
    private bookingRepo;
    constructor(bookingRepo: typeof Booking);
    create(createBookingDto: CreateBookingDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateBookingDto: UpdateBookingDto): Promise<any>;
    remove(id: number): any;
}
