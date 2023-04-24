import { Router } from "express"
import * as jumpstartController from "../controllers/DailyJumpstart"

const router = Router()

router.get("/:date", jumpstartController.getJumpstartByDay)
router.get("/", jumpstartController.getTodayJumpstart)

export default router