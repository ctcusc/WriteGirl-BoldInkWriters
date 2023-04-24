import { Router } from "express"
import { isAuthenticated } from "../middleware/auth"
import * as userController from "../controllers/user"

const router = Router()

router.post("/login", userController.postLogin)
router.get("/logout", userController.logout)
router.post("/signup", userController.postSignup)
router.get("/account", isAuthenticated, userController.getAccount)
router.put("/account", isAuthenticated, userController.updateAccount)

export default router
