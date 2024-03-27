"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHumanCategoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_human_category_dto_1 = require("./create-human_category.dto");
class UpdateHumanCategoryDto extends (0, mapped_types_1.PartialType)(create_human_category_dto_1.CreateHumanCategoryDto) {
}
exports.UpdateHumanCategoryDto = UpdateHumanCategoryDto;
//# sourceMappingURL=update-human_category.dto.js.map