import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin } from "./models/admin.model";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./models/login.dto";
export declare class AdminService {
    private adminRepo;
    private readonly jwtService;
    constructor(adminRepo: typeof Admin, jwtService: JwtService);
    create(createAdminDto: CreateAdminDto): Promise<{
        token: string;
    }>;
    generateToken(admin: Admin): Promise<{
        token: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        token: string;
    }>;
    findAll(): Promise<Admin[]>;
    findOne(id: number): Promise<Admin>;
    update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin>;
    remove(id: number): Promise<number>;
    getAdminByLogin(login: string): Promise<Admin>;
}
