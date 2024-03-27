"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HumanCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const human_category_service_1 = require("./human_category.service");
const human_category_controller_1 = require("./human_category.controller");
const sequelize_1 = require("@nestjs/sequelize");
const human_category_entity_1 = require("./entities/human_category.entity");
let HumanCategoryModule = class HumanCategoryModule {
};
exports.HumanCategoryModule = HumanCategoryModule;
exports.HumanCategoryModule = HumanCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([human_category_entity_1.HumanCategory])],
        controllers: [human_category_controller_1.HumanCategoryController],
        providers: [human_category_service_1.HumanCategoryService],
    })
], HumanCategoryModule);
//# sourceMappingURL=human_category.module.js.map