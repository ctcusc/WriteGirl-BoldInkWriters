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

export const postSignup = async (req: Request, res: Response) => {
  const existingUser = await User.findOne({
    where: { email: req.body.email },
  })
  if (existingUser) {
    return res
      .status(StatusCodes.CONFLICT)
      .json({ message: `${req.body.email} is already taken` })
  }

  const user = new User({
    email: req.body.email,
    password: req.body.password,
  })
  await user.save()
  req.logIn(user, (err) => {
    if (err) {
      throw err
    }
  })
  return res.status(StatusCodes.CREATED).json(user.toJSON()).send()
}

export const getAccount = (req: Request, res: Response) => {
  return res.json(req.user)
}

export const updateAccount = async (req: Request, res: Response) => {
  const user = req.user as User

  await user.update({
    email: req.body.email,
  })

  return res.json(user)
}
