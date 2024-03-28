"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const venue_module_1 = require("./venue/venue.module");
const venue_type_module_1 = require("./venue_type/venue_type.module");
const venue_photo_module_1 = require("./venue_photo/venue_photo.module");
const seat_type_module_1 = require("./seat_type/seat_type.module");
const seat_module_1 = require("./seat/seat.module");
const seat_entity_1 = require("./seat/entities/seat.entity");
const seat_type_entity_1 = require("./seat_type/entities/seat_type.entity");
const venue_entity_1 = require("./venue/entities/venue.entity");
const venue_photo_entity_1 = require("./venue_photo/entities/venue_photo.entity");
const venue_type_entity_1 = require("./venue_type/entities/venue_type.entity");
const human_category_module_1 = require("./human_category/human_category.module");
const venue_venue_type_entity_1 = require("./venue_type/entities/venue_venue-type.entity");
const event_type_module_1 = require("./event_type/event_type.module");
const event_type_model_1 = require("./event_type/models/event_type.model");
const event_module_1 = require("./event/event.module");
const event_model_1 = require("./event/models/event.model");
const ticket_module_1 = require("./ticket/ticket.module");
const ticket_entity_1 = require("./ticket/models/ticket.entity");
const customer_module_1 = require("./customer/customer.module");
const customer_card_module_1 = require("./customer_card/customer_card.module");
const customer_address_module_1 = require("./customer_address/customer_address.module");
const customer_models_1 = require("./customer/models/customer.models");
const admin_module_1 = require("./admin/admin.module");
const admin_model_1 = require("./admin/models/admin.model");
const booking_module_1 = require("./booking/booking.module");
const cart_module_1 = require("./cart/cart.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const file_module_1 = require("./file/file.module");
const booking_model_1 = require("./booking/models/booking.model");
const cart_model_1 = require("./cart/models/cart.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, "static"),
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: "postgres",
                host: process.env.HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.USERNAME1,
                password: process.env.PASSWORD,
                database: process.env.DB,
                models: [
                    seat_entity_1.Seat,
                    seat_type_entity_1.SeatType,
                    venue_entity_1.Venue,
                    venue_photo_entity_1.VenuePhoto,
                    venue_type_entity_1.VenueType,
                    venue_venue_type_entity_1.Venue_Venue_type,
                    event_type_model_1.EventType,
                    event_model_1.Event,
                    ticket_entity_1.Ticket,
                    customer_models_1.Customer,
                    admin_model_1.Admin,
                    booking_model_1.Booking,
                    cart_model_1.Cart
                ],
                autoLoadModels: true,
                sync: { alter: true },
                logging: false,
            }),
            venue_module_1.VenueModule,
            venue_type_module_1.VenueTypeModule,
            venue_photo_module_1.VenuePhotoModule,
            seat_type_module_1.SeatTypeModule,
            seat_module_1.SeatModule,
            human_category_module_1.HumanCategoryModule,
            event_type_module_1.EventTypeModule,
            event_module_1.EventModule,
            ticket_module_1.TicketModule,
            customer_module_1.CustomerModule,
            customer_card_module_1.CustomerCardModule,
            customer_address_module_1.CustomerAddressModule,
            admin_module_1.AdminModule,
            booking_module_1.BookingModule,
            cart_module_1.CartModule,
            file_module_1.FileModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map