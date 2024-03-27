"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVenueDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_venue_dto_1 = require("./create-venue.dto");
class UpdateVenueDto extends (0, mapped_types_1.PartialType)(create_venue_dto_1.CreateVenueDto) {
}
exports.UpdateVenueDto = UpdateVenueDto;
//# sourceMappingURL=update-venue.dto.js.map