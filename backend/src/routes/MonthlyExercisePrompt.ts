import { Router } from "express";
import * as promptController from "../controllers/MonthlyExercisePrompt"

const router = Router()

router.post("/", promptController.postMonthlyExercisePrompt)
router.get("", promptController.getRecentPrompts)
router.get("/:id", promptController.getPromptById)

export default router