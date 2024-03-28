import { Injectable } from "@nestjs/common";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Seat } from "./entities/seat.entity";

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatRepo: typeof Seat) {}
  create(createSeatDto: CreateSeatDto) {
    return this.seatRepo.create(createSeatDto);
  }

  findAll() {
    return this.seatRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.seatRepo.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateSeatDto: UpdateSeatDto) {
    const updated = await this.seatRepo.update(updateSeatDto, {
      where: { id },
      returning: true,
    });
    return updated[1][0];
  }

  remove(id: number) {
    return this.seatRepo.destroy({ where: { id } });
  }
}
