import { AuthService } from "./auth.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { LoginDto } from "../admin/models/login.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    singUp(createAdminDto: CreateAdminDto): Promise<any>;
    signIn(loginDto: LoginDto): Promise<any>;
}
