import { DoorActivity } from "../models/DoorActivity"
import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"

  /**
   * Create a new reminder.
   * @route POST /add-reminder-info
   */

  export const postDoorActivity = async (req: Request, res: Response) => {
    const dooractivity = new DoorActivity({
        title: req.body.title,
        instruction: req.body.instruction,
        has_link: req.body.has_link,
        link: req.body.link,
        has_media: req.body.has_media,
        type_of_media: req.body.type_of_media,
        media_url: req.body.media_url,

    })
    await dooractivity.save()
    return res.status(StatusCodes.CREATED).json(dooractivity.toJSON()).send()
  }


  
  export const getDoorActivity = async (req: Request, res: Response) => {
    const result = await DoorActivity.findOne({
        where: {id: req.params.id },
    })
    return res.json(result)
  }