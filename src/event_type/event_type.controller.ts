import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EventType } from './models/event_type.model';

@ApiTags("Event types")
@Controller("event-type")
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @ApiOperation({ summary: "Event-type yaratish" })
  @Post()
  create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @ApiOperation({ summary: "Event-type yaratish" })
  @ApiResponse({
    status: 200,
    description: "List of Event-type",
    type: [EventType],
  })
  @ApiOperation({ summary: "Barcha event-type larni Korish" })
  @Get()
  findAll() {
    return this.eventTypeService.findAll();
  }

  @ApiOperation({ summary: "Event-type yaratish" })
  @ApiResponse({
    status: 200,
    description: "Event-type Id boyicha chiqrish",
    type: EventType,
  })
  @ApiOperation({ summary: "Event-type Id boyicha chiqrish" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventTypeService.findOne(+id);
  }

  @ApiOperation({ summary: "Event-type Id boyicha yanilash" })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateEventTypeDto: UpdateEventTypeDto
  ) {
    return this.eventTypeService.update(+id, updateEventTypeDto);
  }

  @ApiOperation({ summary: "Event-type Id boyicha ochirish" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventTypeService.remove(+id);
  }
}
