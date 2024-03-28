import { Injectable } from "@nestjs/common";
import { CreateCartDto } from "./dto/create-cart.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Cart } from "./models/cart.model";
import { ApiTags, ApiOperation, ApiParam } from "@nestjs/swagger";

@Injectable()
@ApiTags('Cart') // Tagging the controller with 'Cart' for Swagger
export class CartService {
  constructor(@InjectModel(Cart) private cartRepo: typeof Cart) {}

  @ApiOperation({ summary: 'Create a new cart record' }) // Swagger operation description
  create(createCartDto: CreateCartDto) {
    return this.cartRepo.create(createCartDto);
  }

  @ApiOperation({ summary: 'Retrieve all cart records' }) // Swagger operation description
  findAll() {
    return this.cartRepo.findAll();
  }

  @ApiOperation({ summary: 'Retrieve a single cart record by ID' }) // Swagger operation description
  @ApiParam({ name: 'id', description: 'Cart ID' }) // Swagger parameter description
  findOne(id: number) {
    return this.cartRepo.findByPk(id);
  }

  @ApiOperation({ summary: 'Update a cart record by ID' }) // Swagger operation description
  @ApiParam({ name: 'id', description: 'Cart ID' }) // Swagger parameter description
  async update(id: number, updateCartDto: UpdateCartDto) {
    const update = await this.cartRepo.update(updateCartDto, {
      where: { id },
      returning: true,
    });
    return update[1][0]; // Return the updated cart record
  }

  @ApiOperation({ summary: 'Remove a cart record by ID' }) // Swagger operation description
  @ApiParam({ name: 'id', description: 'Cart ID' }) // Swagger parameter description
  remove(id: number) {
    return this.cartRepo.destroy({ where: { id } });
  }
}
