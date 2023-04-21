import { MonthlyExercisePrompt } from "../models/MonthlyExercisePrompt";
import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"

export const postMonthlyExercisePrompt = async (req: Request, res: Response) => {
    const prompt = new MonthlyExercisePrompt({
        title: req.query.title,
        description: req.query.description,
        mediaType: req.query.mediaType,
        media: req.query.media,
        date: req.query.date
    })
    await prompt.save()
    return res.status(StatusCodes.CREATED).json(prompt.toJSON()).send()
}

export const getRecentPrompts = async (req: Request, res: Response) => {
    const result = await MonthlyExercisePrompt.findAll({
        order: [['date', 'DESC']],
        limit: 3
        })
    
    return res.json(result)
}

export const getPromptById = async (req: Request, res: Response) => {
    const result = await MonthlyExercisePrompt.findOne({
        where: {id: req.params.id}
    })
    return res.json(result);
}