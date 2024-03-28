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
exports.Event = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
let Event = class Event extends sequelize_typescript_1.Model {
};
exports.Event = Event;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Event ID raqami" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Event.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Event nomi", description: "Event nomi" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2024-03-23", description: "Boshlanish sanasi" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "12:00", description: "Boshlanish vaqti" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "start_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2024-03-24", description: "Tugash sanasi" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "finish_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "18:00", description: "Tugash vaqti" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "finish_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Ma'lumotlar", description: "Tafsilotlar" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Event turi ID raqami" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Event.prototype, "event_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Insonlar kategoriyasi ID raqami" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Event.prototype, "human_category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Maqom ID raqami" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Event.prototype, "venue_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Til ID raqami" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Event.prototype, "lang_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "2024-03-22", description: "E'lon qilingan sana" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Event.prototype, "release_date", void 0);
exports.Event = Event = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "event" })
], Event);
//# sourceMappingURL=event.model.js.map