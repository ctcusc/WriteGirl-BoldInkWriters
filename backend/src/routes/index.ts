import { Router } from "express"
import userRouter from "./user"
import randomRouter from "./random"
import randomizerWheelPromptRouter from "./randomizerWheelPromptRouter"

const router = Router()

router.use("/", userRouter)
router.use("/random/", randomRouter)
router.use("/randomizer-wheel-prompt/", randomizerWheelPromptRouter)

export default router
