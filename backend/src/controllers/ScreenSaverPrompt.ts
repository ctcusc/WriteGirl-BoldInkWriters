import { ScreenSaverPrompt } from "../models/ScreenSaverPrompt";
import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"

export const postScreenSaverPrompt = async (req: Request, res: Response) => {
    const prompt = new ScreenSaverPrompt({
        title: req.query.title,
        prompt: req.query.prompt,
        videoURL: req.query.videoURL
    })
    await prompt.save()
    return res.status(StatusCodes.CREATED).json(prompt.toJSON()).send()
}

export const getScreenSaverPrompt = async (req: Request, res: Response) => {
    const result = await ScreenSaverPrompt.findOne({
        where: {title: req.params.title}
    })
    return res.json(result)
}