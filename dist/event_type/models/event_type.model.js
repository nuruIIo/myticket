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
exports.EventType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const sequelize_typescript_1 = require("sequelize-typescript");
let EventType = class EventType extends sequelize_typescript_1.Model {
};
exports.EventType = EventType;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Foydalanuvchi unkal ID raqami" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], EventType.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "event1", description: "Event nomi" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], EventType.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Parent-event type id" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], EventType.prototype, "parent_event_type_id", void 0);
exports.EventType = EventType = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "event_type" })
], EventType);
//# sourceMappingURL=event_type.model.js.map