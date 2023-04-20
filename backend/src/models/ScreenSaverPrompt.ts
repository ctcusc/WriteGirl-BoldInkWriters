import bcrypt from "bcrypt"
import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript"

@Table
export class ScreenSaverPrompt extends Model {
  @Column
  title!: string

  @Column
  prompt!: string

  @Column
  videoURL!: string

  @CreatedAt
  @Column
  createdAt!: Date

  @UpdatedAt
  @Column
  updatedAt!: Date
}