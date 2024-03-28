import { Injectable } from "@nestjs/common";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { InjectModel } from "@nestjs/sequelize";
import { HumanCategory } from "./entities/human_category.entity";

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory) private humanCategoryRepo: typeof HumanCategory
  ) {}
  create(createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryRepo.create(createHumanCategoryDto);
  }

  findAll() {
    return this.humanCategoryRepo.findAll();
  }

  findOne(id: number) {
    return this.humanCategoryRepo.findByPk(id);
  }

  async update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    const updated = await this.humanCategoryRepo.update(
      updateHumanCategoryDto,
      {
        where: { id },
        returning: true,
      }
    );
    return updated[1][0];
  }

  remove(id: number) {
    return this.humanCategoryRepo.destroy({ where: { id } });
  }
}
