import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller("venue-photo")
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @Post()
  @UseInterceptors(FileInterceptor("url"))
  create(
    @Body() createVenuePhotoDto: CreateVenuePhotoDto,
    @UploadedFile() url: any
  ) {
    return this.venuePhotoService.create(createVenuePhotoDto, url);
  }

  @Get()
  findAll() {
    return this.venuePhotoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venuePhotoService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateVenuePhotoDto: UpdateVenuePhotoDto
  ) {
    return this.venuePhotoService.update(+id, updateVenuePhotoDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venuePhotoService.remove(+id);
  }
}
