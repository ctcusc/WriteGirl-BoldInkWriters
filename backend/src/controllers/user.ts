import passport from "passport"
import { User } from "../models/User"
import { Request, Response, NextFunction } from "express"
import { IVerifyOptions } from "passport-local"
import { StatusCodes } from "http-status-codes"
import "../passport"

export const postLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate(
    "local",
    (err: Error, user: User, info: IVerifyOptions) => {
      if (err) {
        return next(err)
      }
      if (!user) {
        return res.sendStatus(StatusCodes.UNAUTHORIZED)
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err)
        }
        return res.json(user.toJSON())
      })
    }
  )(req, res, next)
}

export const logout = (req: Request, res: Response): void => {
  req.logout()
}

export const postSignup = async (req: Request, res: Response, next: NextFunction) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthday: req.body.birthday,
    email: req.body.email,
    password: req.body.password,
    country: req.body.country,
    state: req.body.state,
    city: req.body.city
  })
  await user.save()

  return res.status(StatusCodes.CREATED).json(user.toJSON()).send()
}

export const getAccount = async (req: Request, res: Response) => {
  console.log("user.ts", req.user)
  const result = await User.findOne({
      where: {email: req.user.email}
  })
  return res.json(result)
}

export const updateAccount = async (req: Request, res: Response) => {
  const user = req.user as User

  await user.update({
    email: req.body.email,
  })

  return res.json(user)
}
