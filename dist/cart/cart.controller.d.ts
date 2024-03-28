import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(createCartDto: CreateCartDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateCartDto: UpdateCartDto): Promise<any>;
    remove(id: string): any;
}
