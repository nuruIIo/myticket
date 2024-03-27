"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCardService = void 0;
const common_1 = require("@nestjs/common");
let CustomerCardService = class CustomerCardService {
    create(createCustomerCardDto) {
        return 'This action adds a new customerCard';
    }
    findAll() {
        return `This action returns all customerCard`;
    }
    findOne(id) {
        return `This action returns a #${id} customerCard`;
    }
    update(id, updateCustomerCardDto) {
        return `This action updates a #${id} customerCard`;
    }
    remove(id) {
        return `This action removes a #${id} customerCard`;
    }
};
exports.CustomerCardService = CustomerCardService;
exports.CustomerCardService = CustomerCardService = __decorate([
    (0, common_1.Injectable)()
], CustomerCardService);
//# sourceMappingURL=customer_card.service.js.map