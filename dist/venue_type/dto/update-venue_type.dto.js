"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVenueTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_venue_type_dto_1 = require("./create-venue_type.dto");
class UpdateVenueTypeDto extends (0, mapped_types_1.PartialType)(create_venue_type_dto_1.CreateVenueTypeDto) {
}
exports.UpdateVenueTypeDto = UpdateVenueTypeDto;
//# sourceMappingURL=update-venue_type.dto.js.map