"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCardModule = void 0;
const common_1 = require("@nestjs/common");
const customer_card_service_1 = require("./customer_card.service");
const customer_card_controller_1 = require("./customer_card.controller");
let CustomerCardModule = class CustomerCardModule {
};
exports.CustomerCardModule = CustomerCardModule;
exports.CustomerCardModule = CustomerCardModule = __decorate([
    (0, common_1.Module)({
        controllers: [customer_card_controller_1.CustomerCardController],
        providers: [customer_card_service_1.CustomerCardService],
    })
], CustomerCardModule);
//# sourceMappingURL=customer_card.module.js.map