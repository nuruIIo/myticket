import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  login: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  hashed_password: string;
  @IsBoolean()
  is_active?: boolean;
  @IsBoolean()
  is_creator?: boolean;
  hashed_refresh_token?: string;
}
