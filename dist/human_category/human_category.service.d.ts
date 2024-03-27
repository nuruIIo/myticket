import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { HumanCategory } from "./entities/human_category.entity";
export declare class HumanCategoryService {
    private humanCategoryRepo;
    constructor(humanCategoryRepo: typeof HumanCategory);
    create(createHumanCategoryDto: CreateHumanCategoryDto): Promise<HumanCategory>;
    findAll(): Promise<HumanCategory[]>;
    findOne(id: number): Promise<HumanCategory>;
    update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto): Promise<HumanCategory>;
    remove(id: number): Promise<number>;
}
