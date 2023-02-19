import path from "path"
import { Sequelize } from "sequelize-typescript"
import { User } from "./models/User"
import { ScreenSaverPrompt } from "./models/ScreenSaverPrompt"

export const sequelize = new Sequelize({
  dialect: "postgres",
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD
})

sequelize.addModels([User, ScreenSaverPrompt])
