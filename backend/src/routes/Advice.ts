import { Router } from "express"
import * as AdviceController from "../controllers/Advice"

const router = Router()

router.get("/:type", AdviceController.getRandomAdvice)
router.get("/", AdviceController.getAdvice)

export default router