import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IHumanCategoryINter {
  name: string;
  startAge: number;
  finishAge: number;
  gender: string;
}

@Table({ tableName: "Human_Category" })
export class HumanCategory extends Model<HumanCategory, IHumanCategoryINter> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
  })
  finishAge: number;

  @Column({
    type: DataType.INTEGER,
  })
  startAge: number;

  @Column({
    type: DataType.STRING,
  })
  gender: string;
}
