declare const UpdateAdminDto_base: any;
export declare class UpdateAdminDto extends UpdateAdminDto_base {
    name?: string;
    login?: string;
    hashed_password?: string;
    is_active?: boolean;
    is_creator?: boolean;
    hashed_refresh_token?: string;
}
export {};
