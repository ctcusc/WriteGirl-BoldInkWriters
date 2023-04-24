import bcrypt from "bcrypt"
import {
  Model,
  Column,
  Table,
} from "sequelize-typescript"

@Table
export class ReflectionPrompt extends Model {
    @Column
    prompt!: string
}