import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { Cart } from "./models/cart.model";
export declare class CartService {
    private cartRepo;
    constructor(cartRepo: typeof Cart);
    create(createCartDto: CreateCartDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateCartDto: UpdateCartDto): Promise<any>;
    remove(id: number): any;
}
