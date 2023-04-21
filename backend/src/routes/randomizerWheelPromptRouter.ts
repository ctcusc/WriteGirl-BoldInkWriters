import { Router } from "express"
import * as randomizerWheelPromptController from "../controllers/randomizerWheelPrompt"

const router = Router()

router.post("/", randomizerWheelPromptController.postRandomizerWheelPrompt)
router.get("/:category", randomizerWheelPromptController.getRandomizerWheelPrompt)

export default router