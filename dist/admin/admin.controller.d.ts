import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { LoginDto } from './models/login.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto): Promise<{
        token: any;
    }>;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<any>;
    remove(id: string): any;
    signIn(loginDto: LoginDto): Promise<{
        token: any;
    }>;
}
