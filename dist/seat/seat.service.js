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
exports.SeatService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const seat_entity_1 = require("./entities/seat.entity");
let SeatService = class SeatService {
    constructor(seatRepo) {
        this.seatRepo = seatRepo;
    }
    create(createSeatDto) {
        return this.seatRepo.create(createSeatDto);
    }
    findAll() {
        return this.seatRepo.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.seatRepo.findByPk(id, { include: { all: true } });
    }
    async update(id, updateSeatDto) {
        const updated = await this.seatRepo.update(updateSeatDto, {
            where: { id },
            returning: true,
        });
        return updated[1][0];
    }
    remove(id) {
        return this.seatRepo.destroy({ where: { id } });
    }
};
exports.SeatService = SeatService;
exports.SeatService = SeatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(seat_entity_1.Seat)),
    __metadata("design:paramtypes", [Object])
], SeatService);
//# sourceMappingURL=seat.service.js.map