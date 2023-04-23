import { Router } from "express"
import userRouter from "./user"
import randomRouter from "./random"
import randomizerWheelPromptRouter from "./randomizerWheelPromptRouter"
import ScreenSaverPromptRouter from "./ScreenSaverPrompt"
import MonthlyExerciseRouter from "./MonthlyExercisePrompt"
import DoorActivityRouter from "./DoorActivity"
import DailyJumpstartRouter from "./DailyJumpstart"
import AdviceRouter from "./Advice"

const router = Router()

router.use("/", userRouter)
router.use("/random/", randomRouter)
router.use("/randomizer-wheel-prompt/", randomizerWheelPromptRouter)
router.use("/screen-saver-prompt/", ScreenSaverPromptRouter)
router.use("/monthly-exercise-prompt/", MonthlyExerciseRouter)
router.use("/dooractivity/", DoorActivityRouter)
router.use("/jumpstart/", DailyJumpstartRouter)
router.use("/advice/", AdviceRouter)


export default router
