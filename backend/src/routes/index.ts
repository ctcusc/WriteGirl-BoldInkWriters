import { Router } from "express"
import userRouter from "./user"
import randomRouter from "./random"
import ScreenSaverPromptRouter from "./ScreenSaverPrompt"

const router = Router()

router.use("/", userRouter)
router.use("/random/", randomRouter)
router.use("/screen-saver-prompt/", ScreenSaverPromptRouter)


export default router
