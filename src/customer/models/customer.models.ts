import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

interface ICustomerCreationAttr {
  first_name: string;
  last_name: string;
  phone: string;
  hashed_password: string;
  email: string;
  birth_date: string;
  gender: string;
  lang_id: string;
  hashed_refresh_token: string;
}

@Table({ tableName: "customer" })
export class Customer extends Model<Customer, ICustomerCreationAttr> {
  @ApiProperty({ example: "John", description: "First name of the customer" })
  @IsString()
  @IsNotEmpty()
  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @ApiProperty({ example: "Doe", description: "Last name of the customer" })
  @IsString()
  @IsNotEmpty()
  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @ApiProperty({
    example: "+1234567890",
    description: "Phone number of the customer",
  })
  @IsString()
  @IsNotEmpty()
  @Column({
    type: DataType.STRING,
  })
  phone: string;

  @ApiProperty({
    example: "hashedPassword123",
    description: "Hashed password of the customer",
  })
  @IsString()
  @IsNotEmpty()
  @Column({
    type: DataType.STRING,
  })
  hashed_password: string;

  @ApiProperty({
    example: "example@gmail.com",
    description: "Email of the customer",
  })
  @IsEmail()
  @IsNotEmpty()
  @Column({
    type: DataType.STRING,
  })
  email: string;

  @ApiProperty({
    example: "1990-01-01",
    description: "Birth date of the customer",
  })
  @IsString()
  @IsNotEmpty()
  @Column({
    type: DataType.STRING,
  })
  birth_date: string;

  @ApiProperty({ example: "male", description: "Gender of the customer" })
  @IsString()
  @IsNotEmpty()
  @Column({
    type: DataType.STRING,
  })
  gender: string;

  @ApiProperty({ example: "en", description: "Language ID of the customer" })
  @IsString()
  @IsNotEmpty()
  @Column({
    type: DataType.STRING,
  })
  lang_id: string;

  @ApiProperty({
    example: "hashedRefreshToken123",
    description: "Hashed refresh token of the customer",
  })
  @IsString()
  @IsNotEmpty()
  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;
}
