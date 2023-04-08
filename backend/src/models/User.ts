import bcrypt from "bcrypt"
import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  BeforeUpdate,
  Unique,
  BeforeCreate,
} from "sequelize-typescript"

@Table
export class User extends Model {
  @Column
  firstName!: string

  @Column
  lastName!: string

  @Column
  birthday!: Date
  
  @Unique
  @Column
  email!: string

  @Column
  password!: string

  @Column
  country!: string

  @Column
  state!: string

  @Column
  city!: string

  @CreatedAt
  @Column
  createdAt!: Date

  @UpdatedAt
  @Column
  updatedAt!: Date

  @BeforeCreate
  @BeforeUpdate
  static async hashPassword(instance: User) {
    if (!instance.changed("password")) {
      return
    }
    instance.password = await bcrypt.hash(instance.password, 10)
  }

  async comparePassword(plaintextPassword: string) {
    return await bcrypt.compare(plaintextPassword, this.password)
  }
}
