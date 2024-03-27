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
exports.HumanCategoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const human_category_entity_1 = require("./entities/human_category.entity");
let HumanCategoryService = class HumanCategoryService {
    constructor(humanCategoryRepo) {
        this.humanCategoryRepo = humanCategoryRepo;
    }
    create(createHumanCategoryDto) {
        return this.humanCategoryRepo.create(createHumanCategoryDto);
    }
    findAll() {
        return this.humanCategoryRepo.findAll();
    }
    findOne(id) {
        return this.humanCategoryRepo.findByPk(id);
    }
    async update(id, updateHumanCategoryDto) {
        const updated = await this.humanCategoryRepo.update(updateHumanCategoryDto, {
            where: { id },
            returning: true,
        });
        return updated[1][0];
    }
    remove(id) {
        return this.humanCategoryRepo.destroy({ where: { id } });
    }
};
exports.HumanCategoryService = HumanCategoryService;
exports.HumanCategoryService = HumanCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(human_category_entity_1.HumanCategory)),
    __metadata("design:paramtypes", [Object])
], HumanCategoryService);
//# sourceMappingURL=human_category.service.js.map