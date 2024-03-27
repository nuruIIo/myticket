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
exports.VenuePhoto = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const venue_entity_1 = require("../../venue/entities/venue.entity");
let VenuePhoto = class VenuePhoto extends sequelize_typescript_1.Model {
};
exports.VenuePhoto = VenuePhoto;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], VenuePhoto.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => venue_entity_1.Venue),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], VenuePhoto.prototype, "venueid", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], VenuePhoto.prototype, "url", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => venue_entity_1.Venue),
    __metadata("design:type", venue_entity_1.Venue)
], VenuePhoto.prototype, "venues", void 0);
exports.VenuePhoto = VenuePhoto = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "Venue_Photo" })
], VenuePhoto);
//# sourceMappingURL=venue_photo.entity.js.map