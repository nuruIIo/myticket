"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVenuePhotoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_venue_photo_dto_1 = require("./create-venue_photo.dto");
class UpdateVenuePhotoDto extends (0, mapped_types_1.PartialType)(create_venue_photo_dto_1.CreateVenuePhotoDto) {
}
exports.UpdateVenuePhotoDto = UpdateVenuePhotoDto;
//# sourceMappingURL=update-venue_photo.dto.js.map