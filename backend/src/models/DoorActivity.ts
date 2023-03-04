import bcrypt from "bcrypt"
import {
  Model,
  Column,
  Table,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  Unique,
} from "sequelize-typescript"

@Table
export class DoorActivity extends Model {
  @Column
  title!: string

  @Column
  instruction!: string

  @Column
  has_link!: boolean

  @Column
  link!: string

  @Column
  has_media!: boolean

  @Column
  type_of_media!: string

  @Column
  media_url!: string

  @CreatedAt
  @Column
  createdAt!: Date

  @UpdatedAt
  @Column
  updatedAt!: Date
}