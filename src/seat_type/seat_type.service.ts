import { Injectable } from "@nestjs/common";
import { CreateSeatTypeDto } from "./dto/create-seat_type.dto";
import { UpdateSeatTypeDto } from "./dto/update-seat_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { SeatType } from "./entities/seat_type.entity";

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType) private seatTypeRepo: typeof SeatType) {}
  create(createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeRepo.create(createSeatTypeDto);
  }

  findAll() {
    return this.seatTypeRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.seatTypeRepo.findByPk(id, { include: { all: true } });
  }

  async update(id: number, updateSeatTypeDto: UpdateSeatTypeDto) {
    const updated = await this.seatTypeRepo.update(updateSeatTypeDto, {
      where: { id },
      returning: true,
    });
    return updated[1][0];
  }

  remove(id: number) {
    return this.seatTypeRepo.destroy({ where: { id } });
  }
}
