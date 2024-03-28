import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Admin } from "./models/admin.model";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./models/login.dto";

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private adminRepo: typeof Admin,
    private readonly jwtService: JwtService
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    const candidate = await this.getAdminByLogin(
      createAdminDto.login
    );
    if (candidate) {
      throw new BadRequestException("Bunday foydalanuchi mavjud");
    }

    const hashedPassword = await bcrypt.hash(createAdminDto.hashed_password, 7);
    createAdminDto.hashed_password = hashedPassword;
    const newUser = await this.adminRepo.create(createAdminDto);

    const token = await this.generateToken(newUser);
    console.log(token.token);

    const hashedRefreshToken = await bcrypt.hash(token.token, 7);

    console.log(hashedRefreshToken, "hesh");

    newUser.hashed_refresh_token = hashedRefreshToken;

    await newUser.save();

    return this.generateToken(newUser);
  }

  async generateToken(admin: Admin) {
    const payload = {
      sub: admin.id,
      email: admin.login,
      is_creator: admin.is_creator,
    };

    return { token: this.jwtService.sign(payload) };
  }

  async login(loginDto: LoginDto) {
    const admin = await this.getAdminByLogin(loginDto.login);
    if (!admin) {
      throw new UnauthorizedException("Email yoki Password notogri");
    }

    const validPassword = await bcrypt.compare(
      loginDto.hashed_password,
      admin.hashed_password
    );

    if (!validPassword) {
      throw new UnauthorizedException("Email yoki Password notogri");
    }
    return this.generateToken(admin);
  }

  findAll() {
    return this.adminRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.adminRepo.findByPk(id);
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const update = await this.adminRepo.update(updateAdminDto, {
      where: { id },
      returning: true,
    });
    return update[1][0];
  }

  remove(id: number) {
    return this.adminRepo.destroy({ where: { id } });
  }

  getAdminByLogin(login: string) {
    return this.adminRepo.findOne({ where: { login } });
  }
}
