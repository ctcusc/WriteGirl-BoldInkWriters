import { Router } from "express"
import * as doorController from "../controllers/DoorActivity"

const router = Router()

router.post("/", doorController.postDoorActivity)
router.get("/:title", doorController.getDoorActivity)

export default router