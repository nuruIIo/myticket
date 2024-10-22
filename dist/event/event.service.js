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
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const event_model_1 = require("./models/event.model");
const file_service_1 = require("../file/file.service");
let EventService = class EventService {
    constructor(eventRepo, fileService) {
        this.eventRepo = eventRepo;
        this.fileService = fileService;
    }
    async create(createEventDto, photo) {
        const fileName = await this.fileService.saveFile(photo);
        const post = await this.eventRepo.create({
            ...createEventDto,
            photo: fileName,
        });
        return post;
    }
    findAll() {
        return this.eventRepo.findAll();
    }
    findOne(id) {
        return this.eventRepo.findByPk(id);
    }
    async update(id, updateEventDto) {
        const update = await this.eventRepo.update(updateEventDto, {
            where: { id },
            returning: true,
        });
        return update[1][0];
    }
    remove(id) {
        return this.eventRepo.destroy({ where: { id } });
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(event_model_1.Event)),
    __metadata("design:paramtypes", [Object, file_service_1.FileService])
], EventService);
//# sourceMappingURL=event.service.js.map