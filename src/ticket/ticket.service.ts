import { Injectable } from "@nestjs/common";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Ticket } from "./models/ticket.entity";

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private ticketRepo: typeof Ticket) {}

  create(createTicketDto: CreateTicketDto) {
    return this.ticketRepo.create(createTicketDto);
  }

  findAll() {
    return this.ticketRepo.findAll();
  }

  findOne(id: number) {
    return this.ticketRepo.findByPk(id);
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    const update = await this.ticketRepo.update(updateTicketDto, {
      where: { id },
      returning: true,
    });
    return update[1][0];
  }

  remove(id: number) {
    return this.ticketRepo.destroy({ where: { id } });
  }
}
