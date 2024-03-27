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
exports.Admin = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
let Admin = class Admin extends sequelize_typescript_1.Model {
};
exports.Admin = Admin;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Foydalanuvchi unkal ID raqami" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Admin.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "John Doe", description: "Admin's name" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Admin.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "admin@example.com", description: "Admin's login" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Admin.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "password123", description: "Admin's password" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Admin.prototype, "hashed_password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: "Admin's active status" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: true,
    }),
    __metadata("design:type", Boolean)
], Admin.prototype, "is_active", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: "Admin's creator status" }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], Admin.prototype, "is_creator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "refresh_token",
        description: "Admin's hashed refresh token",
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        defaultValue: null,
    }),
    __metadata("design:type", String)
], Admin.prototype, "hashed_refresh_token", void 0);
exports.Admin = Admin = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "admin" })
], Admin);
//# sourceMappingURL=admin.model.js.map