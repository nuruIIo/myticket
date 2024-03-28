import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags("Foydalanuvchilar")
@Controller("event")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiOperation({ summary: "Event yaratish" })
  @Post()
  @UseInterceptors(FileInterceptor("photo"))
  create(@Body() createEventDto: CreateEventDto, @UploadedFile() photo: any) {
    return this.eventService.create(createEventDto, photo);
  }

  @ApiOperation({ summary: "Hamma Eventlarni olish" })
  @ApiResponse({
    status: 200,
    description: "List of Users",
    type: [Event],
  })
  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @ApiOperation({ summary: "Eventni id boyicha olish" })
  @ApiResponse({
    status: 200,
    description: "Eventni id boyicha olish",
    type: Event,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventService.remove(+id);
  }
}
