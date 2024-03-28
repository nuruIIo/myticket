import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { HumanCategory } from "./entities/human_category.entity";
export declare class HumanCategoryService {
    private humanCategoryRepo;
    constructor(humanCategoryRepo: typeof HumanCategory);
    create(createHumanCategoryDto: CreateHumanCategoryDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto): Promise<any>;
    remove(id: number): any;
}
