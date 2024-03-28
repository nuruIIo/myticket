import { Module } from "@nestjs/common";
import { SeatTypeService } from "./seat_type.service";
import { SeatTypeController } from "./seat_type.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { SeatType } from "./entities/seat_type.entity";

@Module({
  imports: [SequelizeModule.forFeature([SeatType])],
  controllers: [SeatTypeController],
  providers: [SeatTypeService],
})
export class SeatTypeModule {}
