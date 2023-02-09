import passport from "passport"
import passportLocal from "passport-local"

import { User } from "./models/User"

const LocalStrategy = passportLocal.Strategy

passport.serializeUser<any, any>((req, user: User, done) => {
  done(null, { id: user.id })
})

passport.deserializeUser(async (key: { id: number }, done) => {
  try {
    const user = await User.findByPk(key.id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      const user = await User.findOne({ where: { email: email.toLowerCase() } })
      if (!user) {
        return done(null, false, {
          message: `Email ${email} not found.`,
        })
      }
      const hasMatchingPassword = await user.comparePassword(password)
      if (!hasMatchingPassword) {
        return done(null, false, {
          message: "Invalid email or password.",
        })
      }

      return done(null, user)
    }
  )
)
