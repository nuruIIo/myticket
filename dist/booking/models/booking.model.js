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
exports.Booking = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
let Booking = class Booking extends sequelize_typescript_1.Model {
};
exports.Booking = Booking;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Foydalanuvchi unkal ID raqami" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Booking.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Card unkal ID raqami" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Booking.prototype, "cartId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1999-12-12", description: "Yaratilgan sanasi" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", String)
], Booking.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1999-12-12", description: "Tugash sanasi" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
    }),
    __metadata("design:type", String)
], Booking.prototype, "fineshed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "PaymentMethod unkal ID raqami" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Booking.prototype, "paymentMethodId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "DeliveryMethod unkal ID raqami" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Booking.prototype, "deliveryMethodId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "DeliveryMethod unkal ID raqami" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Booking.prototype, "discountCouponId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Status unkal ID raqami" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Booking.prototype, "statusId", void 0);
exports.Booking = Booking = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "booking", createdAt: false, updatedAt: false })
], Booking);
//# sourceMappingURL=booking.model.js.map