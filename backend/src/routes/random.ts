import { Router } from "express"

const router = Router()

router.get("/", (req, res) => {
  // Send a random integer between 1 and 10
  return res.json({ data: Math.floor(Math.random() * 10) }).send()
})

export default router
