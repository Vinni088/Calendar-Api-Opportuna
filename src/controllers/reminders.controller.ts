import * as remindersRepository from "../repository/reminders.repository";
import { Request, Response } from "express";
import httpStatus from "http-status";

const log = console.log;

export async function postReminder(req: Request, res: Response) {
    const {  } = req.body;


    return res.status(httpStatus.OK).send("Ok");
}
