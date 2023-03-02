import { Router } from "express";
import * as promptController from "../controllers/ScreenSaverPrompt"

const router = Router()

router.get("/:id", promptController.getScreenSaverPrompt)
router.post("/", promptController.postScreenSaverPrompt)
router.get("", promptController.getAllPrompts)

export default router