"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerAddressDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_customer_address_dto_1 = require("./create-customer_address.dto");
class UpdateCustomerAddressDto extends (0, swagger_1.PartialType)(create_customer_address_dto_1.CreateCustomerAddressDto) {
}
exports.UpdateCustomerAddressDto = UpdateCustomerAddressDto;
//# sourceMappingURL=update-customer_address.dto.js.map