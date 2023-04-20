import bcrypt from "bcrypt"
import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
} from "sequelize-typescript"

@Table
export class MonthlyExercisePrompt extends Model {
    @Column
    title!: string

    @Column
    description!: string

    @Column
    mediaType!: string //type of media it is: ex. gif, image, video

    @Column
    media!: string //media link 

    @Column
    date!: Date //should be YYYY-MM-DD

    @CreatedAt
    @Column
    createdAt!: Date

    @UpdatedAt
    @Column
    updatedAt!: Date
}