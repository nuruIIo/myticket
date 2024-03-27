"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VenueTypeModule = void 0;
const common_1 = require("@nestjs/common");
const venue_type_service_1 = require("./venue_type.service");
const venue_type_controller_1 = require("./venue_type.controller");
const sequelize_1 = require("@nestjs/sequelize");
const venue_type_entity_1 = require("./entities/venue_type.entity");
let VenueTypeModule = class VenueTypeModule {
};
exports.VenueTypeModule = VenueTypeModule;
exports.VenueTypeModule = VenueTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([venue_type_entity_1.VenueType])],
        controllers: [venue_type_controller_1.VenueTypeController],
        providers: [venue_type_service_1.VenueTypeService],
        exports: [venue_type_service_1.VenueTypeService],
    })
], VenueTypeModule);
//# sourceMappingURL=venue_type.module.js.map