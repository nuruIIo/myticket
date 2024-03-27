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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venue_Venue_type = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const venue_entity_1 = require("../../venue/entities/venue.entity");
const venue_type_entity_1 = require("./venue_type.entity");
let Venue_Venue_type = class Venue_Venue_type extends sequelize_typescript_1.Model {
};
exports.Venue_Venue_type = Venue_Venue_type;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => venue_entity_1.Venue),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Venue_Venue_type.prototype, "venueId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => venue_type_entity_1.VenueType),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Venue_Venue_type.prototype, "venue_typeId", void 0);
exports.Venue_Venue_type = Venue_Venue_type = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "venue_VenueType", createdAt: false, updatedAt: false })
], Venue_Venue_type);
//# sourceMappingURL=venue_venue-type.entity.js.map