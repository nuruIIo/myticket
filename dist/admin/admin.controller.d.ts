import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { LoginDto } from './models/login.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto): Promise<{
        token: string;
    }>;
    findAll(): Promise<import("src/admin/models/admin.model").Admin[]>;
    findOne(id: string): Promise<import("src/admin/models/admin.model").Admin>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<import("src/admin/models/admin.model").Admin>;
    remove(id: string): Promise<number>;
    signIn(loginDto: LoginDto): Promise<{
        token: string;
    }>;
}
