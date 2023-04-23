import { Router } from "express"
import * as AdviceController from "../controllers/Advice"

const router = Router()

router.get("/", AdviceController.getRandomAdvice)

export default router