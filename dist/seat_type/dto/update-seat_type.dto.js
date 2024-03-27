"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSeatTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_seat_type_dto_1 = require("./create-seat_type.dto");
class UpdateSeatTypeDto extends (0, mapped_types_1.PartialType)(create_seat_type_dto_1.CreateSeatTypeDto) {
}
exports.UpdateSeatTypeDto = UpdateSeatTypeDto;
//# sourceMappingURL=update-seat_type.dto.js.map