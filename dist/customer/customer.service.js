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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const customer_models_1 = require("./models/customer.models");
let CustomerService = class CustomerService {
    constructor(customerRepo) {
        this.customerRepo = customerRepo;
    }
    create(createCustomerDto) {
        return this.customerRepo.create(createCustomerDto);
    }
    findAll() {
        return this.customerRepo.findAll();
    }
    findOne(id) {
        return this.customerRepo.findByPk(id);
    }
    async update(id, updateCustomerDto) {
        const update = await this.customerRepo.update(updateCustomerDto, {
            where: { id },
            returning: true,
        });
        return update[1][0];
    }
    remove(id) {
        return this.customerRepo.destroy({ where: { id } });
    }
};
exports.CustomerService = CustomerService;
exports.CustomerService = CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(customer_models_1.Customer)),
    __metadata("design:paramtypes", [Object])
], CustomerService);
//# sourceMappingURL=customer.service.js.map