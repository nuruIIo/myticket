export declare class CreateAdminDto {
    name: string;
    login: string;
    hashed_password: string;
    is_active?: boolean;
    is_creator?: boolean;
    hashed_refresh_token?: string;
}
