import prisma from "../database"
import * as protocol from "../protocols/index.protocol"

////////////////////////////////////// CRUD: reminders //////////////////////////////////////
export async function createReminder(params: protocol.ReminderParams) {
    const {
        title,
        description,
        date,
        time,
        city,
        color
    } = params;

    let reminder = await prisma.reminders.create({
        data: {
            title,
            description,
            date,
            time,
            city,
            color
        }
    })

    return reminder
};

export async function readReminders() {
    let reminders = await prisma.reminders.findMany();

    return reminders
};

export async function updateReminder(id: number, params: protocol.ReminderParams) {
    const {
        title,
        description,
        date,
        time,
        city,
        color
    } = params;

    let reminder = await prisma.reminders.update({
        where: {
            id
        },
        data: {
            title,
            description,
            date,
            time,
            city,
            color
        }
    })

    return reminder
};

export async function deleteReminder(id: number) {

    let deleted = await prisma.reminders.delete({
        where: {
            id
        }
    })

    return deleted
};

export async function checkId(id: number) {

    let reminder = await prisma.reminders.findUnique({
        where: {
            id
        }
    })

    return reminder
};