"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerCardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_customer_card_dto_1 = require("./create-customer_card.dto");
class UpdateCustomerCardDto extends (0, swagger_1.PartialType)(create_customer_card_dto_1.CreateCustomerCardDto) {
}
exports.UpdateCustomerCardDto = UpdateCustomerCardDto;
//# sourceMappingURL=update-customer_card.dto.js.map