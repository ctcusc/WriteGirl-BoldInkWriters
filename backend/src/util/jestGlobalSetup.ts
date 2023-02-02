import { sequelize } from "../sequelize"

const setup = async () => {
  await sequelize.sync()
}

export default setup
