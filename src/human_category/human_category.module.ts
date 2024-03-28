import { Module } from "@nestjs/common";
import { HumanCategoryService } from "./human_category.service";
import { HumanCategoryController } from "./human_category.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { HumanCategory } from "./entities/human_category.entity";

@Module({
  imports: [SequelizeModule.forFeature([HumanCategory])],
  controllers: [HumanCategoryController],
  providers: [HumanCategoryService],
})
export class HumanCategoryModule {}
