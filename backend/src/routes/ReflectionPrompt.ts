import { Router } from "express"
import * as promptController from "../controllers/ReflectionPrompt"

const router = Router()

router.get("/:id", promptController.getReflectionPrompt)
router.post("/", promptController.postReflectionPrompt)
router.get("", promptController.getRandomPrompt)

export default router