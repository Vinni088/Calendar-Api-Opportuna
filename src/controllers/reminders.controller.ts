import * as remindersRepository from "../repository/reminders.repository";
import * as utils from "../utils/index";
import * as protocol from "../protocols/index.protocol";
import { Request, Response } from "express";
import httpStatus from "http-status";

const log = console.log;

export async function postReminder(req: Request, res: Response) {
    const params: protocol.ReminderParams = req.body;

    let reminder = await remindersRepository.createReminder(params);

    return res.status(httpStatus.CREATED).send(reminder);
}

export async function getReminders(req: Request, res: Response) {
    let reminders = await remindersRepository.readReminders();

    return res.status(httpStatus.OK).send(reminders);
}

export async function putReminder(req: Request, res: Response) {
    const params: protocol.ReminderParams = req.body;

    const { id } = req.params

    let numberId = await utils.CheckNumber(id);

    let reminder = await remindersRepository.checkId(numberId);

    if(reminder === null) {
        throw ({ type: 'unprocessable_entity', message: 'O id enviado não pertence à um reminder' })
    }

    let updtadedReminder = await remindersRepository.updateReminder(numberId, params);

    return res.status(httpStatus.OK).send(updtadedReminder);
}

export async function deleteReminder(req: Request, res: Response) {
    const { id } = req.params

    let numberId = await utils.CheckNumber(id);

    let reminder = await remindersRepository.checkId(numberId);

    if(reminder === null) {
        throw ({ type: 'unprocessable_entity', message: 'O id enviado não pertence à um reminder' })
    }

    let deletedReminder = await remindersRepository.deleteReminder(numberId);

    return res.status(httpStatus.OK).send(deletedReminder);
}