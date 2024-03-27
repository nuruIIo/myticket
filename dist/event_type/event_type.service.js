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
exports.EventTypeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const event_type_model_1 = require("./models/event_type.model");
let EventTypeService = class EventTypeService {
    constructor(eventTypeRepo) {
        this.eventTypeRepo = eventTypeRepo;
    }
    create(createEventTypeDto) {
        return this.eventTypeRepo.create(createEventTypeDto);
    }
    findAll() {
        return this.eventTypeRepo.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.eventTypeRepo.findByPk(id);
    }
    async update(id, updateEventTypeDto) {
        const updateEvent = await this.eventTypeRepo.update(updateEventTypeDto, {
            where: { id },
            returning: true,
        });
        return updateEvent[1][0];
    }
    remove(id) {
        return this.eventTypeRepo.destroy({ where: { id } });
    }
};
exports.EventTypeService = EventTypeService;
exports.EventTypeService = EventTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(event_type_model_1.EventType)),
    __metadata("design:paramtypes", [Object])
], EventTypeService);
//# sourceMappingURL=event_type.service.js.map