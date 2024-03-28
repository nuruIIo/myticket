import { Module } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Admin } from "./models/admin.model";
import { JwtModule, JwtService } from "@nestjs/jwt";

@Module({
  imports: [
    SequelizeModule.forFeature([Admin]),
    JwtModule.register({
      // global: true,
      secret: "MySecretKey",
      signOptions: { expiresIn: "1h" },
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
