import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { VenueModule } from "./venue/venue.module";
import { VenueTypeModule } from "./venue_type/venue_type.module";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { SeatModule } from "./seat/seat.module";
import { Seat } from "./seat/entities/seat.entity";
import { SeatType } from "./seat_type/entities/seat_type.entity";
import { Venue } from "./venue/entities/venue.entity";
import { VenuePhoto } from "./venue_photo/entities/venue_photo.entity";
import { VenueType } from "./venue_type/entities/venue_type.entity";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { Venue_Venue_type } from "./venue_type/entities/venue_venue-type.entity";
import { EventTypeModule } from "./event_type/event_type.module";
import { EventType } from "./event_type/models/event_type.model";
import { EventModule } from "./event/event.module";
import { Event } from "./event/models/event.model";
import { TicketModule } from "./ticket/ticket.module";
import { Ticket } from "./ticket/models/ticket.entity";
import { CustomerModule } from "./customer/customer.module";
import { CustomerCardModule } from "./customer_card/customer_card.module";
import { CustomerAddressModule } from "./customer_address/customer_address.module";
import { Customer } from "./customer/models/customer.models";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/models/admin.model";
import { BookingModule } from './booking/booking.module';
import { CartModule } from './cart/cart.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { FileModule } from "./file/file.module";
import { Booking } from "./booking/models/booking.model";
import { Cart } from "./cart/models/cart.model";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.USERNAME1,
      password: process.env.PASSWORD,
      database: process.env.DB,
      models: [
        Seat,
        SeatType,
        Venue,
        VenuePhoto,
        VenueType,
        Venue_Venue_type,
        EventType,
        Event,
        Ticket,
        Customer,
        Admin,
        Booking,
        Cart
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    VenueModule,
    VenueTypeModule,
    VenuePhotoModule,
    SeatTypeModule,
    SeatModule,
    HumanCategoryModule,
    EventTypeModule,
    EventModule,
    TicketModule,
    CustomerModule,
    CustomerCardModule,
    CustomerAddressModule,
    AdminModule,
    BookingModule,
    CartModule,
    FileModule,
  ],
})
export class AppModule {}
