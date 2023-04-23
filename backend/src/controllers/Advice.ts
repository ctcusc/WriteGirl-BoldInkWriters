import { DoorActivity } from "../models/DoorActivity"
import { Request, Response, NextFunction } from "express"
import { StatusCodes } from "http-status-codes"
import base from "../airtable"

  /**
   * Create a new reminder.
   * @route POST /add-reminder-info
   */


  export const getRandomAdvice = async (req: Request, res: Response) => {
    // const result = await RandomizerWheelPrompt.findOne({
    //     order: sequelize.random(),
    //     where: {category: req.params.category },
    // })
    // return res.json(result)
    let adviceType = "";
    if(req.params.type === "0") { adviceType = "Writer Tip" } else { adviceType = "Self-Care Advice" }
    base('Advice').select({
      filterByFormula: `category = "${adviceType}"`
    }).firstPage((err, records) => {
      if (err) {
          console.error(err);
          return;
      }
      if(records.length < 1) { console.log("No propmts for this category available"); return res.json(-1); }
      // records contains an array of all records in the table
      const randomIndex = Math.floor(Math.random() * records.length);
      const randomRecord = records[randomIndex];
      return res.json(randomRecord.fields)
    });
  }

  export const getAdvice = async (req: Request, res: Response) => {

    base('Advice').select().firstPage((err, records) => {
      if (err) {
          console.error(err);
          return;
      }
      if(records.length < 1) { console.log("No propmts for this category available"); return res.json(-1); }
      // records contains an array of all records in the table
      const randomIndex = Math.floor(Math.random() * records.length);
      const randomRecord = records[randomIndex];
      return res.json(randomRecord.fields)
    });
  }