import { validationResult } from "express-validator"
import { Middleware } from "express-validator/src/base"

export const processValidatorResult: Middleware = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  next()
}
