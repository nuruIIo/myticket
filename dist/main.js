"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const PORT = process.env.PORT;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Nest-One Project")
        .setDescription("Nest-One Rest API")
        .setVersion("1.0")
        .addTag("NESTJS, swagger, Validation, Sequelize")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api/docs", app, document);
    await app.listen(PORT, () => {
        console.log(`server listening on port ${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map