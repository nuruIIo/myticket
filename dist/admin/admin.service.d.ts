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
        token: any;
    }>;
    generateToken(admin: Admin): Promise<{
        token: any;
    }>;
    login(loginDto: LoginDto): Promise<{
        token: any;
    }>;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateAdminDto: UpdateAdminDto): Promise<any>;
    remove(id: number): any;
    getAdminByLogin(login: string): any;
}
