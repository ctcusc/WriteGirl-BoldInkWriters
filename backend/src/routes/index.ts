import { Router } from "express"
import userRouter from "./user"
import randomRouter from "./random"
import doorRouter from "./DoorActivity"

const router = Router()

router.use("/", userRouter)
router.use("/random/", randomRouter)
router.use("/dooractivity/", doorRouter)

export default router
