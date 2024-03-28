"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const booking_model_1 = require("./models/booking.model");
let BookingService = class BookingService {
    constructor(bookingRepo) {
        this.bookingRepo = bookingRepo;
    }
    create(createBookingDto) {
        return this.bookingRepo.create(createBookingDto);
    }
    findAll() {
        return this.bookingRepo.findAll();
    }
    findOne(id) {
        return this.bookingRepo.findByPk(id);
    }
    async update(id, updateBookingDto) {
        const update = await this.bookingRepo.update(updateBookingDto, {
            where: { id },
            returning: true,
        });
        return update[1][0];
    }
    remove(id) {
        return this.bookingRepo.destroy({ where: { id } });
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(booking_model_1.Booking)),
    __metadata("design:paramtypes", [Object])
], BookingService);
//# sourceMappingURL=booking.service.js.map