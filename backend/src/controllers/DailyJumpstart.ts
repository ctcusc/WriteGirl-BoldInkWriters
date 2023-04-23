import { DoorActivity } from "../models/DoorActivity"
import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"
import base from "../airtable"

  /**
   * Create a new reminder.
   * @route POST /add-reminder-info
   */


  export const getDoorActivity = async (req: Request, res: Response) => {
    base('Door Activity Prompts').select({
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

  export const getJumpstartByDay = async (req: Request, res: Response) => {
    base('Daily Jumpstart').select({
      filterByFormula: `date = "${req.params.date}"`
    }).firstPage((err, records) => {
      if (err) {
          console.error(err);
          return;
      }
      // records contains an array of records that match the filter
      return res.json(records[0].fields)
    });
  }

  export const getTodayJumpstart = async (req: Request, res: Response) => {
    base('Daily Jumpstart').select({
      sort: [
        { field: 'date', direction: 'desc' },
      ],
      maxRecords: 1,
    })
    .firstPage((err, records) => {
      records.forEach(function(record) {
        console.log('Retrieved', record.fields);
    });
      if(err) { console.log("error in MonthlyExercisePrompt.ts: ", err); return; }
      return res.json(records[0].fields);
    })
  }