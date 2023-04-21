import { RandomizerWheelPrompt } from "../models/RandomizerWheelPrompt"
import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"
import { sequelize } from "../sequelize"
  /**
   * Create a new prompt.
   * @route POST /add-randomizer-wheel-prompt
   */

  export const postRandomizerWheelPrompt = async (req: Request, res: Response) => {
    const randomizerWheelPrompt = new RandomizerWheelPrompt({
        prompt: req.query.prompt,
        category: req.query.category
    })
    await randomizerWheelPrompt.save()
    return res.status(StatusCodes.CREATED).json(randomizerWheelPrompt.toJSON()).send()
  }


  
  export const getRandomizerWheelPrompt = async (req: Request, res: Response) => {
    const result = await RandomizerWheelPrompt.findOne({
        order: sequelize.random(),
        where: {category: req.params.category },
    })
    return res.json(result)
  }