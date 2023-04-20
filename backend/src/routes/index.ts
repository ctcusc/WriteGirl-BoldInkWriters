import { Router } from "express"
import userRouter from "./user"
import randomRouter from "./random"
import ScreenSaverPromptRouter from "./ScreenSaverPrompt"
import MonthlyExerciseRouter from "./MonthlyExercisePrompt"

const router = Router()

router.use("/", userRouter)
router.use("/random/", randomRouter)
router.use("/screen-saver-prompt/", ScreenSaverPromptRouter)
router.use("/monthly-exercise-prompt/", MonthlyExerciseRouter)


export default router
