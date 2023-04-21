import { MonthlyExercisePrompt } from "../models/MonthlyExercisePrompt";
import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"
import base from "../airtable"

// upload new monthly exercise prompt
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

// get top 3 most recent prompts for monthly exercises
export const getRecentPrompts = async (req: Request, res: Response) => {
    let prompts: any = [];
    base('Monthly Exercises').select({
      sort: [
        { field: 'month', direction: 'desc' },
        { field: 'Created', direction: 'desc'}
      ],
      maxRecords: 3,
    })
    .firstPage((err, records) => {
      records.forEach(function(record) {
        console.log('Retrieved', record.fields);
        prompts.push(record.fields);
    });
      if(err) { console.log("error in MonthlyExercisePrompt.ts: ", err); return; }
      return res.json(prompts);
    })
}

export const getPromptById = async (req: Request, res: Response) => {
    base('Monthly Exercises').select({
      filterByFormula: `id = "${req.params.id}"`
    }).firstPage((err, records) => {
      if (err) {
          console.error(err);
          return;
      }
      // records contains an array of records that match the filter
      return res.json(records[0].fields)
    });
}