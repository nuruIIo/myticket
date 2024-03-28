import { Injectable } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Event } from "./models/event.model";
import { FileService } from "../file/file.service";

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event) private eventRepo: typeof Event, // Inject the Event model
    private readonly fileService: FileService // Inject the FileService
  ) {}

  // Create a new event
  async create(createEventDto: CreateEventDto, photo: any) {
    // Save the photo using the file service
    const fileName = await this.fileService.saveFile(photo);

    // Create a new event record in the database
    const event = await this.eventRepo.create({
      ...createEventDto,
      photo: fileName, // Set the photo file name
    });
    
    return event; // Return the newly created event
  }

  // Retrieve all events
  findAll() {
    return this.eventRepo.findAll(); // Retrieve all events from the database
  }

  // Retrieve a single event by ID
  findOne(id: number) {
    return this.eventRepo.findByPk(id); // Find an event by its primary key (ID)
  }

  // Update an event by ID
  async update(id: number, updateEventDto: UpdateEventDto) {
    // Update the event record in the database
    const [updatedCount, [updatedEvent]] = await this.eventRepo.update(updateEventDto, {
      where: { id }, // Specify the event ID to update
      returning: true, // Return the updated record(s)
    });

    return updatedEvent; // Return the updated event
  }

  // Remove an event by ID
  async remove(id: number) {
    // Delete the event record from the database
    const deletedCount = await this.eventRepo.destroy({ where: { id } });

    return { deletedCount }; // Return the count of deleted records
  }
}
