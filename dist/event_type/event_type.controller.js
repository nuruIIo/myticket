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
exports.EventTypeController = void 0;
const common_1 = require("@nestjs/common");
const event_type_service_1 = require("./event_type.service");
const create_event_type_dto_1 = require("./dto/create-event_type.dto");
const update_event_type_dto_1 = require("./dto/update-event_type.dto");
const swagger_1 = require("@nestjs/swagger");
const event_type_model_1 = require("./models/event_type.model");
let EventTypeController = class EventTypeController {
    constructor(eventTypeService) {
        this.eventTypeService = eventTypeService;
    }
    create(createEventTypeDto) {
        return this.eventTypeService.create(createEventTypeDto);
    }
    findAll() {
        return this.eventTypeService.findAll();
    }
    findOne(id) {
        return this.eventTypeService.findOne(+id);
    }
    update(id, updateEventTypeDto) {
        return this.eventTypeService.update(+id, updateEventTypeDto);
    }
    remove(id) {
        return this.eventTypeService.remove(+id);
    }
};
exports.EventTypeController = EventTypeController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Event-type yaratish" }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_event_type_dto_1.CreateEventTypeDto]),
    __metadata("design:returntype", void 0)
], EventTypeController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Event-type yaratish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "List of Event-type",
        type: [event_type_model_1.EventType],
    }),
    (0, swagger_1.ApiOperation)({ summary: "Barcha event-type larni Korish" }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventTypeController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Event-type yaratish" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Event-type Id boyicha chiqrish",
        type: event_type_model_1.EventType,
    }),
    (0, swagger_1.ApiOperation)({ summary: "Event-type Id boyicha chiqrish" }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventTypeController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Event-type Id boyicha yanilash" }),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_event_type_dto_1.UpdateEventTypeDto]),
    __metadata("design:returntype", void 0)
], EventTypeController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Event-type Id boyicha ochirish" }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventTypeController.prototype, "remove", null);
exports.EventTypeController = EventTypeController = __decorate([
    (0, swagger_1.ApiTags)("Event types"),
    (0, common_1.Controller)("event-type"),
    __metadata("design:paramtypes", [event_type_service_1.EventTypeService])
], EventTypeController);
//# sourceMappingURL=event_type.controller.js.map