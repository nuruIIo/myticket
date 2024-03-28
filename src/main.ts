import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

// Retrieve the port from environment variables or fallback to a default value
const PORT = process.env.PORT;

async function bootstrap() {
  // Create a NestJS application instance
  const app = await NestFactory.create(AppModule);

  // Apply a global validation pipe to handle input validation across the application
  app.useGlobalPipes(new ValidationPipe());

  // Configure Swagger documentation
  const config = new DocumentBuilder()
    .setTitle("Nest-One Project") // Set the title of the API documentation
    .setDescription("Nest-One Rest API") // Set the description of the API
    .setVersion("1.0") // Set the version of the API
    .addTag("NESTJS, swagger, Validation, Sequelize") // Add tags to categorize endpoints
    .build();
  
  // Generate Swagger documentation based on the provided configuration and application instance
  const document = SwaggerModule.createDocument(app, config);
  
  // Setup Swagger UI to serve the generated documentation at the specified endpoint
  SwaggerModule.setup("api/docs", app, document);

  // Start the NestJS application and listen for incoming requests on the specified port
  await app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

// Bootstrap the application by calling the bootstrap function
bootstrap();
