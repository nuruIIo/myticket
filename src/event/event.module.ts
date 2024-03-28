import { Module } from "@nestjs/common";
import { EventService } from "./event.service";
import { EventController } from "./event.controller";
import { Event } from "./models/event.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { FileModule } from "../file/file.module";

@Module({
  imports: [SequelizeModule.forFeature([Event]), FileModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
