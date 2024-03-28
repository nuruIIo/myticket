import { Injectable } from "@nestjs/common";
import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { EventType } from "./models/event_type.model";

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType) private eventTypeRepo: typeof EventType
  ) {}

  create(createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeRepo.create(createEventTypeDto);
  }

  findAll() {
    return this.eventTypeRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.eventTypeRepo.findByPk(id);
  }

  async update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    const updateEvent = await this.eventTypeRepo.update(updateEventTypeDto, {
      where: { id },
      returning: true,
    });
    return updateEvent[1][0];
  }

  remove(id: number) {
    return this.eventTypeRepo.destroy({ where: { id } });
  }
}
