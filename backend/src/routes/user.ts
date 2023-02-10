import {
  validateLogin,
  validateSignup,
  validateUpdateAccount,
} from "../validators/user"
import { Router } from "express"
import { isAuthenticated } from "../middleware/auth"
import * as userController from "../controllers/user"

const router = Router()

router.post("/login", validateLogin, userController.postLogin)
router.get("/logout", userController.logout)
router.post("/signup", validateSignup, userController.postSignup)
router.get("/account", isAuthenticated, userController.getAccount)
router.put(
  "/account",
  isAuthenticated,
  validateUpdateAccount,
  userController.updateAccount
)

export default router
