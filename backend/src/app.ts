import express from "express"
import compression from "compression" // compresses requests
import session from "express-session"
import bodyParser from "body-parser"
import lusca from "lusca"
import passport from "passport"
import { SESSION_SECRET } from "./util/secrets"
import { sequelize } from "./sequelize"
import router from "./routes"

// Create Express server
const app = express()

// Express configuration
app.set("port", process.env.PORT || 3000)
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    store: new (require("connect-pg-simple")(session))({
      createTableIfMissing: true,
      conObject: {
        user: sequelize.config.username,
        password: sequelize.config.password,
        port: sequelize.config.port,
        host: sequelize.config.host,
        database: sequelize.config.database,
      },
    }),
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(lusca.xframe("SAMEORIGIN"))
app.use(lusca.xssProtection(true))
app.use((req, res, next) => {
  res.locals.user = req.user
  next()
})

/**
 * Primary app routes.
 */

app.use("/api/", router)

export default app
