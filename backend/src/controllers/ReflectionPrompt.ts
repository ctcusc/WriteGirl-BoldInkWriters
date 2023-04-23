import { ReflectionPrompt } from "../models/ReflectionPrompt"
import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"
import base from "../airtable"

  /**
   * Create a new reminder.
   * @route POST /add-reminder-info
   */

  export const postReflectionPrompt = async (req: Request, res: Response) => {
    const reflectionPrompt = new ReflectionPrompt({
        prompt: req.body.prompt,
    })
    await reflectionPrompt.save()
    return res.status(StatusCodes.CREATED).json(reflectionPrompt.toJSON()).send()
  }


  
  export const getReflectionPrompt = async (req: Request, res: Response) => {
    base('Reflection Prompt').select({
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
    base('Reflection Prompt').select({
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