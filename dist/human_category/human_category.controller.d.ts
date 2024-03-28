import { HumanCategoryService } from './human_category.service';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
export declare class HumanCategoryController {
    private readonly humanCategoryService;
    constructor(humanCategoryService: HumanCategoryService);
    create(createHumanCategoryDto: CreateHumanCategoryDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateHumanCategoryDto: UpdateHumanCategoryDto): Promise<any>;
    remove(id: string): any;
}
