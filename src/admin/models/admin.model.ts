import { Column, DataType, Default, Model, Table } from "sequelize-typescript";
import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

interface IAdminCreationAttr {
  name: string;
  login: string;
  hashed_password: string;
  is_active: boolean;
  is_creator: boolean;
  hashed_refresh_token: string;
}

@Table({ tableName: "admin" })
export class Admin extends Model<Admin, IAdminCreationAttr> {
  @ApiProperty({ example: 1, description: "Foydalanuvchi unkal ID raqami" })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: "John Doe", description: "Admin's name" })
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @ApiProperty({ example: "admin@example.com", description: "Admin's login" })
  @Column({
    type: DataType.STRING,
  })
  login: string;

  @ApiProperty({ example: "password123", description: "Admin's password" })
  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @ApiProperty({ example: true, description: "Admin's active status" })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  is_active: boolean;

  @ApiProperty({ example: true, description: "Admin's creator status" })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_creator: boolean;

  @ApiProperty({
    example: "refresh_token",
    description: "Admin's hashed refresh token",
  })
  @Column({
    type: DataType.STRING,
    defaultValue: null,
  })
  hashed_refresh_token: string;
}
