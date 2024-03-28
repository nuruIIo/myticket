import { Injectable } from "@nestjs/common";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Booking } from "./models/booking.model";
import { ApiTags, ApiOperation, ApiParam } from "@nestjs/swagger";

@Injectable()
@ApiTags('Booking') // Tagging the controller with 'Booking' for Swagger
export class BookingService {
  constructor(@InjectModel(Booking) private bookingRepo: typeof Booking) {}

  @ApiOperation({ summary: 'Create a new booking record' }) // Swagger operation description
  create(createBookingDto: CreateBookingDto) {
    return this.bookingRepo.create(createBookingDto);
  }

  @ApiOperation({ summary: 'Retrieve all booking records' }) // Swagger operation description
  findAll() {
    return this.bookingRepo.findAll();
  }

  @ApiOperation({ summary: 'Retrieve a single booking record by ID' }) // Swagger operation description
  @ApiParam({ name: 'id', description: 'Booking ID' }) // Swagger parameter description
  findOne(id: number) {
    return this.bookingRepo.findByPk(id);
  }

  @ApiOperation({ summary: 'Update a booking record by ID' }) // Swagger operation description
  @ApiParam({ name: 'id', description: 'Booking ID' }) // Swagger parameter description
  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const update = await this.bookingRepo.update(updateBookingDto, {
      where: { id },
      returning: true,
    });
    return update[1][0]; // Return the updated booking record
  }

  @ApiOperation({ summary: 'Remove a booking record by ID' }) // Swagger operation description
  @ApiParam({ name: 'id', description: 'Booking ID' }) // Swagger parameter description
  remove(id: number) {
    return this.bookingRepo.destroy({ where: { id } });
  }
}
