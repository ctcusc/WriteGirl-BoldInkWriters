import { ScreenSaverPrompt } from "../models/ScreenSaverPrompt";
import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"
import base from "../airtable";

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
		base('Screen Saver Activity').select({
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

export const getAllPrompts = async (req: Request, res: Response) => {
    // const result = await ScreenSaverPrompt.findAll()
    // return res.json(result)
    let prompts: any = [];
    base('Screen Saver Activity').select({
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function(record) {
            // console.log('Retrieved', record);
            prompts.push(record.fields)
        });
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
        console.log(prompts)
        return res.json(prompts)
    });
}