import { AdminService } from "../admin/admin.service";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
export declare class AuthService {
    private readonly adminService;
    private readonly jwtService;
    constructor(adminService: AdminService, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<any>;
}
