import { Router } from "express"
import userRouter from "./user"
import randomRouter from "./random"

const router = Router()

router.use("/", userRouter)
router.use("/random/", randomRouter)

export default router
