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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const admin_model_1 = require("./models/admin.model");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AdminService = class AdminService {
    constructor(adminRepo, jwtService) {
        this.adminRepo = adminRepo;
        this.jwtService = jwtService;
    }
    async create(createAdminDto) {
        const candidate = await this.getAdminByLogin(createAdminDto.login);
        if (candidate) {
            throw new common_1.BadRequestException("Bunday foydalanuchi mavjud");
        }
        const hashedPassword = await bcrypt.hash(createAdminDto.hashed_password, 7);
        createAdminDto.hashed_password = hashedPassword;
        const newUser = await this.adminRepo.create(createAdminDto);
        const token = await this.generateToken(newUser);
        console.log(token.token);
        const hashedRefreshToken = await bcrypt.hash(token.token, 7);
        console.log(hashedRefreshToken, "hesh");
        newUser.hashed_refresh_token = hashedRefreshToken;
        await newUser.save();
        return this.generateToken(newUser);
    }
    async generateToken(admin) {
        const payload = {
            sub: admin.id,
            email: admin.login,
            is_creator: admin.is_creator,
        };
        return { token: this.jwtService.sign(payload) };
    }
    async login(loginDto) {
        const admin = await this.getAdminByLogin(loginDto.login);
        if (!admin) {
            throw new common_1.UnauthorizedException("Email yoki Password notogri");
        }
        const validPassword = await bcrypt.compare(loginDto.hashed_password, admin.hashed_password);
        if (!validPassword) {
            throw new common_1.UnauthorizedException("Email yoki Password notogri");
        }
        return this.generateToken(admin);
    }
    findAll() {
        return this.adminRepo.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.adminRepo.findByPk(id);
    }
    async update(id, updateAdminDto) {
        const update = await this.adminRepo.update(updateAdminDto, {
            where: { id },
            returning: true,
        });
        return update[1][0];
    }
    remove(id) {
        return this.adminRepo.destroy({ where: { id } });
    }
    getAdminByLogin(login) {
        return this.adminRepo.findOne({ where: { login } });
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(admin_model_1.Admin)),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AdminService);
//# sourceMappingURL=admin.service.js.map