"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventTypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_event_type_dto_1 = require("./create-event_type.dto");
class UpdateEventTypeDto extends (0, mapped_types_1.PartialType)(create_event_type_dto_1.CreateEventTypeDto) {
}
exports.UpdateEventTypeDto = UpdateEventTypeDto;
//# sourceMappingURL=update-event_type.dto.js.map