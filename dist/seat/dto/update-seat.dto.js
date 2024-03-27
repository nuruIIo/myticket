"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSeatDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_seat_dto_1 = require("./create-seat.dto");
class UpdateSeatDto extends (0, mapped_types_1.PartialType)(create_seat_dto_1.CreateSeatDto) {
}
exports.UpdateSeatDto = UpdateSeatDto;
//# sourceMappingURL=update-seat.dto.js.map