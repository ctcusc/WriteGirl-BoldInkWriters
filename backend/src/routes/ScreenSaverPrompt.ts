import { Router } from "express";
import * as promptController from "../controllers/ScreenSaverPrompt"

const router = Router()

router.get("/:title", promptController.getScreenSaverPrompt)
router.post("/", promptController.postScreenSaverPrompt)

export default router