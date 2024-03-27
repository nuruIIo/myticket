import { HumanCategoryService } from './human_category.service';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
export declare class HumanCategoryController {
    private readonly humanCategoryService;
    constructor(humanCategoryService: HumanCategoryService);
    create(createHumanCategoryDto: CreateHumanCategoryDto): Promise<import("src/human_category/entities/human_category.entity").HumanCategory>;
    findAll(): Promise<import("src/human_category/entities/human_category.entity").HumanCategory[]>;
    findOne(id: string): Promise<import("src/human_category/entities/human_category.entity").HumanCategory>;
    update(id: string, updateHumanCategoryDto: UpdateHumanCategoryDto): Promise<import("src/human_category/entities/human_category.entity").HumanCategory>;
    remove(id: string): Promise<number>;
}
