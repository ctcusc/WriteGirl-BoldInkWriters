import bcrypt from "bcrypt"
import {
  Model,
  Column,
  Table,
} from "sequelize-typescript"

@Table
export class RandomizerWheelPrompt extends Model {
  @Column
  prompt!: string

  @Column
  category!: string
}