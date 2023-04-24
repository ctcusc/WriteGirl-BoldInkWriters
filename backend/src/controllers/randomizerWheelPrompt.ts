import { RandomizerWheelPrompt } from "../models/RandomizerWheelPrompt"
import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"
import { sequelize } from "../sequelize"
import base from "../airtable"
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
    // const result = await RandomizerWheelPrompt.findOne({
    //     order: sequelize.random(),
    //     where: {category: req.params.category },
    // })
    // return res.json(result)

    base('Randomizer Wheel Prompts').select({
      filterByFormula: `category = "${req.params.category}"`
    }).firstPage((err, records) => {
      if (err) {
          console.error(err);
          return;
      }
      // records contains an array of all records in the table
      const randomIndex = Math.floor(Math.random() * records.length);
      const randomRecord = records[randomIndex];
      return res.json(randomRecord.fields)
    });
  }