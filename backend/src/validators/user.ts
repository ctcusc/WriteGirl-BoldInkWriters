import { body, check } from "express-validator"
import { Middleware } from "express-validator/src/base"
import { processValidatorResult } from "../middleware/validate"

export const validateLogin: Middleware[] = [
  check("email", "Email is not valid").isEmail(),
  check("password", "Password cannot be blank").isLength({ min: 1 }),
  body("email").normalizeEmail({ gmail_remove_dots: false }),
  processValidatorResult,
]

export const validateSignup: Middleware[] = [
  check("email", "Email is not valid").isEmail(),
  check("password", "Password must be at least 4 characters long").isLength({
    min: 4,
  }),
  check("confirmPassword", "Passwords do not match").custom(
    (value, { req }) => value === req.body.password
  ),
  processValidatorResult,
]

export const validateUpdateAccount: Middleware[] = [
  check("email", "Please enter a valid email address.").isEmail(),
  body("email").normalizeEmail({ gmail_remove_dots: false }),
  processValidatorResult,
]
