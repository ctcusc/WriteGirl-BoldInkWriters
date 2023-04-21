import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated()) {
    return next()
  }
  return res.sendStatus(StatusCodes.UNAUTHORIZED)
}
