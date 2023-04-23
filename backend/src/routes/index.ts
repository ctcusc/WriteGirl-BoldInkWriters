import { Router } from "express"
import userRouter from "./user"
import randomRouter from "./random"
import randomizerWheelPromptRouter from "./randomizerWheelPromptRouter"
import ScreenSaverPromptRouter from "./ScreenSaverPrompt"
import MonthlyExerciseRouter from "./MonthlyExercisePrompt"
import DoorActivityRouter from "./DoorActivity"
import ReflectionPromptRouter from "./ReflectionPrompt"

const router = Router()

router.use("/", userRouter)
router.use("/random/", randomRouter)
router.use("/randomizer-wheel-prompt/", randomizerWheelPromptRouter)
router.use("/screen-saver-prompt/", ScreenSaverPromptRouter)
router.use("/monthly-exercise-prompt/", MonthlyExerciseRouter)
router.use("/dooractivity/", DoorActivityRouter)
router.use("/reflectionprompt/", ReflectionPromptRouter)


export default router
